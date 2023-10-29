import { useState } from "react";
import Header from "./components/Header";
import TodoApp from "./components/TodoApp";

export default function App() {
  return (
    <div className="w-full  min-h-screen bg-light_gray dark:bg-very_dark_gray sm:p-6 p-3">
      <TodoApp />
    </div>
  );
}
