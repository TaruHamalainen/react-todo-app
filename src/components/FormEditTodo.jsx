export default function FormEditTodo({ todo, onEditTodo }) {
  return (
    <div className=" container border-2 border-lines_dark dark:border:lines_light flex  justify-between   bg-light_gray dark:bg-very_dark_gray sm:px-7 sm:py-3 p-2 rounded-lg text-black dark:text-white ">
      <form className="flex">
        <input
          className="p-2 w-full  rounded-lg border-none focus:outline-none bg-light_gray dark:bg-very_dark_gray placeholder:text-medium_gray dark:placeholder:text-white text-medium_gray dark:text-white"
          type="text"
          id="todo"
          placeholder={todo.task}
        />

        <button className="bg-purple uppercase font-bold px-4 py-1 rounded-lg text-white">
          Save
        </button>
      </form>
      <button
        onClick={() => onEditTodo(todo.id)}
        className="bg-red uppercase font-bold px-4 py-1 rounded-lg text-white"
      >
        X
      </button>
    </div>
  );
}
