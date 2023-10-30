import { useState } from "react";

export default function FormEditTodo({ todo, onOpenEditTodo, onEditTodo }) {
  const [currentTodo, setCurrentTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditTodo(todo.id, currentTodo);
  };
  return (
    <div className=" container border-2 border-lines_dark dark:border:lines_light flex  justify-between   bg-light_gray dark:bg-very_dark_gray sm:px-7 sm:py-3 p-2 rounded-lg text-black dark:text-white ">
      <form onSubmit={handleSubmit} className="flex w-full">
        <input
          className="p-2 w-full  rounded-lg border-none focus:outline-none bg-light_gray dark:bg-very_dark_gray placeholder:text-medium_gray dark:placeholder:text-white text-medium_gray dark:text-white"
          type="text"
          id="todo"
          placeholder={todo.task}
          value={currentTodo}
          onChange={(event) => setCurrentTodo(event.target.value)}
        />

        <button className="bg-purple uppercase font-bold px-4 py-1 rounded-lg text-white justify-end">
          Save
        </button>
      </form>
      <button
        onClick={() => onOpenEditTodo(todo.id)}
        className="bg-red uppercase font-bold px-4 py-1 rounded-lg text-white ml-3 "
      >
        X
      </button>
    </div>
  );
}
