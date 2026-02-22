import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CategoryValue } from "../../types/type";
type CardActionProps = {
  category: CategoryValue;
  handleUpdate: (v: CategoryValue) => void;
  handleDelete: (id: number) => void;
};
export default function CardAction({
  category,
  handleUpdate,
  handleDelete,
}: CardActionProps) {
  return (
    <div className="text-lg">
      <button
        type="button"
        className="hover:cursor-pointer hover:bg-slate-400/20 p-2 rounded-xl"
        onClick={() => handleUpdate(category)}
      >
        <BiEdit />
      </button>
      <button
        type="button"
        className="text-red-800 hover:cursor-pointer hover:bg-slate-400/20 p-2 rounded-xl"
        onClick={() => handleDelete(Number(category.id))}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
}
