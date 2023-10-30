import TodoList from "./TodoList";
import Filter from "./Filter";
import ThemeButton from "./ThemeButton";
import FormAddTodo from "./FormAddTodo";
import { useEffect, useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    setTodos(todos.concat(newTodo));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleOpenEditTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, editing: !todo.editing } : { ...todo }
      )
    );
  };

  const handleEditTodo = (id, value) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: value, editing: false } : { ...todo }
      )
    );
  };

  const handleCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
      )
    );
  };
  return (
    <div className="max-w-3xl container  mx-auto flex   flex-col gap-6  p-2 rounded-lg bg-white dark:bg-dark_gray shadow-lg ">
      <ThemeButton />
      <h1 className="text-center text-2xl uppercase font-extrabold tracking-widest text-black dark:text-white">
        <span className="text-purple">Stay</span> organized,{" "}
        <span className="text-purple">get</span> things done!
      </h1>
      <FormAddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onOpenEditTodo={handleOpenEditTodo}
        onEditTodo={handleEditTodo}
        onCompleteTodo={handleCompleteTodo}
      />
      <Filter />
    </div>
  );
}
