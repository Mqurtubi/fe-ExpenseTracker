import { useState } from "react";
import ContainerContent from "../../../components/ui/ContainerContent";
import PageHeader from "../../../components/ui/PageHeader";
import CategoryTypeTabs from "../components/filter/CategoryTypeTabs";
import CategoryGrid from "../components/list/CategoryGrid";
import AddModalCategory from "../components/modals/AddModalCategory";
import useCategory from "../hooks/useCategory";
import { CategoryValue } from "../types/type";
import { useToast } from "../../transaction/context/useToast";
import ConfirmDialog from "../../../components/ui/dialog/ConfirmDialog";

export default function CategoryPage() {
  const {
    type,
    setType,
    counts,
    filteredCategories,
    fetchCategory,
    handleDelete,
  } = useCategory();
  const { toast } = useToast();
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryValue>();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const onSuccess = async () => {
    await fetchCategory();
  };
  const handleUpdate = (category: CategoryValue) => {
    setSelectedCategory(category);
    setOpenEditModal(true);
  };
  const askDelete = (id: number) => {
    setSelectedId(id);
    setOpenConfirm(true);
  };
  const confirmDelete = async () => {
    if (!selectedId) return;
    await handleDelete(selectedId);
    toast.success("Kategori berhasil dihapus");
    setOpenConfirm(false);
    setSelectedId(null);
    fetchCategory();
  };
  return (
    <ContainerContent>
      <PageHeader subtitle="Kelola kategori transaksi" title="Kategori">
        <button
          className="bg-indigo-600 px-6 py-2 rounded-lg text-white hover:cursor-pointer hover:bg-indigo-600/70 transition-all duration-300 focus:outline-none"
          type="button"
          onClick={() => setOpenModal(true)}
        >
          + Tambah Kategori
        </button>
      </PageHeader>
      <div className="grid grid-cols-5">
        <CategoryTypeTabs type={type} setType={setType} count={counts} />
      </div>
      <CategoryGrid
        categories={filteredCategories}
        handleUpdate={handleUpdate}
        handleDelete={askDelete}
      />
      <AddModalCategory
        open={openModal}
        onClose={() => setOpenModal(false)}
        mode="create"
        onSuccess={onSuccess}
      />
      <AddModalCategory
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        mode="edit"
        onSuccess={onSuccess}
        initial={selectedCategory}
      />
      <ConfirmDialog
        onClose={() => setOpenConfirm(false)}
        onConfirm={confirmDelete}
        openConfirm={openConfirm}
        subTitle="tindakan tidak dapat dibatalkan"
        title="Hapus kategori ini"
      />
    </ContainerContent>
  );
}
