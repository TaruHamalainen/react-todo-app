import { useState } from "react";

export default function Filter({ todos, onClearList, onRemoveCompleted }) {
  const [sortBy, setSortBy] = useState("oldest");

  return (
    <div className="bg-light_gray dark:bg-very_dark_gray  p-3 rounded-lg flex gap-3 flex-wrap items-center justify-between  ">
      <button
        onClick={onRemoveCompleted}
        disabled={todos.length === 0}
        className="bg-red disabled:bg-dark_gray disabled:text-medium_gray p-2 rounded-lg text-white font-semibold"
      >
        Remove Completed
      </button>

      <button
        disabled={todos.length === 0}
        onClick={onClearList}
        className="bg-red disabled:bg-dark_gray disabled:text-medium_gray p-2 rounded-lg text-white font-semibold"
      >
        Clear List
      </button>
    </div>
  );
}
