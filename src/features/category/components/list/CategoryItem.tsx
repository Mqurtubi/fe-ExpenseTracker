import { CategoryValue } from "../../types/type";
import Badge from "../ui/Badge";
import CardAction from "../ui/CardAction";
import CardCategory from "../ui/CardCategory";

export default function CategoryItem({
  category,
  handleUpdate,
  handleDelete,
}: {
  category: CategoryValue;
  handleUpdate: (v: CategoryValue) => void;
  handleDelete: (v: number) => void;
}) {
  return (
    <CardCategory>
      <div className="space-y-8">
        <div className="flex justify-between">
          <div className="space-y-1">
            <p className="font-semibold">{category.name}</p>
            <div className="flex gap-3">
              <Badge
                label={category.type}
                value={category.type}
                is_default={category.is_default}
              />
            </div>
          </div>
          {!category.is_default && (
            <CardAction
              category={category}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          )}
        </div>
        <p className="text-xs text-slate-500">
          {category.is_default && "Kategori bawaan tidak dapat dihapus"}
        </p>
      </div>
    </CardCategory>
  );
}
