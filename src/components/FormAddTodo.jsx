import { useState } from "react";

export default function FormAddTodo({ onAddTodo }) {
  const [todo, setTodo] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo({ id: crypto.randomUUID(), editing: false, task: todo });
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit} className=" container p-4  flex gap-2  ">
      <input
        className="p-2 w-full  rounded-lg border-none focus:outline-none bg-light_gray dark:bg-very_dark_gray placeholder:text-medium_gray dark:placeholder:text-white text-medium_gray dark:text-white"
        type="text"
        id="todo"
        placeholder="What needs to be done?"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button className="bg-purple uppercase font-bold px-4 py-1 rounded-lg text-white">
        Add
      </button>
    </form>
  );
}
