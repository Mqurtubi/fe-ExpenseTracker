import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CardAction() {
  return (
    <div className="text-lg">
      <button
        type="button"
        className="hover:cursor-pointer hover:bg-slate-400/20 p-2 rounded-xl"
      >
        <BiEdit />
      </button>
      <button
        type="button"
        className="text-red-800 hover:cursor-pointer hover:bg-slate-400/20 p-2 rounded-xl"
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
}
