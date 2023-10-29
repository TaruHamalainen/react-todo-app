import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

export default function Todo() {
  return (
    <li className=" border-2 border-lines_dark dark:border:lines_light flex justify-between   bg-light_gray dark:bg-very_dark_gray sm:px-7 sm:py-3 p-2 rounded-lg text-black dark:text-white ">
      <h2 className="sm:text-lg font-semibold sm:max-w-[80%] max-w-[60%] break-words">
        This is my todo task
      </h2>
      <div className="flex gap-6 justify-end">
        <input type="checkbox" />
        <button className="">
          <BiEdit className="text-xl text-purple font-bold" />
        </button>
        <button>
          <RiDeleteBin5Line className="text-xl text-red font-bold" />
        </button>
      </div>
    </li>
  );
}
