export default function Filter({ todos, onClearList, onRemoveCompleted }) {
  return (
    <div className="bg-light_gray dark:bg-very_dark_gray  p-3 rounded-lg flex gap-3 flex-wrap items-center justify-between  ">
      <button
        onClick={onRemoveCompleted}
        disabled={todos.filter((todo) => todo.completed).length < 1}
        className="bg-red text-white disabled:dark:bg-dark_gray disabled:text-medium_gray disabled:bg-white p-2 rounded-lg  font-semibold hover:bg-red_hover"
      >
        Remove Completed
      </button>

      <button
        disabled={todos.length === 0}
        onClick={onClearList}
        className="bg-red disabled:bg-white disabled:dark:bg-dark_gray disabled:text-medium_gray p-2 rounded-lg text-white font-semibold hover:bg-red_hover"
      >
        Clear List
      </button>
    </div>
  );
}
