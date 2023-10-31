import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import FormEditTodo from "./FormEditTodo";

export default function Todo({
  todo,
  onDeleteTodo,
  onOpenEditTodo,
  onEditTodo,
  onCompleteTodo,
}) {
  return (
    <>
      {!todo.editing ? (
        <li className=" container border-2 border-lines_dark dark:border:lines_light flex justify-between   bg-light_gray dark:bg-very_dark_gray sm:px-7 sm:py-3 p-2 rounded-lg text-black dark:text-white ">
          <h2
            className={`sm:text-lg font-semibold  break-words max-w-[60%] ${
              todo.completed ? "line-through text-medium_gray" : ""
            }`}
          >
            {todo.task}
          </h2>
          <div className="flex gap-6 justify-end">
            <input
              type="checkbox"
              value={todo.completed}
              checked={todo.completed}
              onChange={() => onCompleteTodo(todo.id)}
            />
            <button onClick={() => onOpenEditTodo(todo.id)}>
              <BiEdit className="text-xl text-purple font-bold" />
            </button>
            <button onClick={() => onDeleteTodo(todo.id)}>
              <RiDeleteBin5Line className="text-xl text-red font-bold" />
            </button>
          </div>
        </li>
      ) : (
        <FormEditTodo
          todo={todo}
          onOpenEditTodo={onOpenEditTodo}
          onEditTodo={onEditTodo}
        />
      )}
    </>
  );
}
