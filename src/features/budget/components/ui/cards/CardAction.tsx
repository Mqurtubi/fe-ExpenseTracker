import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ItemBudget } from "../../../types/type";
type CardActionProps = {
  item: ItemBudget;
  handleUpdate: (v: ItemBudget) => void;
  handleDelete: (v: number) => void;
};
export default function CardAction({
  item,
  handleUpdate,
  handleDelete,
}: CardActionProps) {
  return (
    <div className="text-lg">
      <button
        type="button"
        className="hover:cursor-pointer hover:bg-slate-400/20 p-2 rounded-xl"
        onClick={() => handleUpdate(item)}
      >
        <BiEdit />
      </button>
      <button
        type="button"
        className="text-red-800 hover:cursor-pointer hover:bg-slate-400/20 p-2 rounded-xl"
        onClick={() => handleDelete(Number(item.id))}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
}
