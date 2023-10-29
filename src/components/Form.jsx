export default function Form() {
  return (
    <form className="flex gap-6 max-w-lg self-center ">
      <input
        className="p-2 w-full rounded-lg border-none focus:outline-none bg-light_gray dark:bg-very_dark_gray placeholder:text-medium_gray dark:placeholder:text-white text-medium_gray dark:text-white"
        type="text"
        id="todo"
        placeholder="What needs to be done?"
      />
      <button className="bg-purple uppercase font-bold px-4 py-1 rounded-lg text-white">
        Add
      </button>
    </form>
  );
}
