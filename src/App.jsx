import { useState } from "react";
import Header from "./components/Header";
import TodoApp from "./components/TodoApp";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
      <Header />
      <TodoApp />
    </div>
  );
}
