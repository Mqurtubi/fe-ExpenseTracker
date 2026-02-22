import { CategoryValue } from "../../types/type";
import CategoryItem from "./CategoryItem";

export default function CategoryGrid({
  categories,
  handleUpdate,
  handleDelete,
}: {
  categories: CategoryValue[];
  handleUpdate: (v: CategoryValue) => void;
  handleDelete: (v: number) => void;
}) {
  if (categories.length === 0) return;
  return (
    <div className="grid grid-cols-3 gap-3">
      {categories.map((item) => (
        <CategoryItem
          category={item}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
