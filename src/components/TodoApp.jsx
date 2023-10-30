import TodoList from "./TodoList";
import Filter from "./Filter";
import ThemeButton from "./ThemeButton";
import FormAddTodo from "./FormAddTodo";
import { useEffect, useState } from "react";

export default function TodoApp() {
  /**
   * if localstorage have todos saved, get saved todos, else return empty array
   * @param {Array} todos
   * @return {Array} todos
   */
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  /**
   * When todos is changes, save to localstorage
   * @param {Array} todos
   * @return {Array} todos
   */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /**
   * Add new todo to todos list
   * @param {object} newTodo
   * @return {Array} todos
   */
  const handleAddTodo = (newTodo) => {
    setTodos(todos.concat(newTodo));
  };

  /**
   * Delete todo from todo list
   * @param {string} id
   * @return {Array} todos
   */
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /**
   * Opens edit form for selected todo
   * @param {string} id
   * @param {boolean} editing
   * @return {Array} todos
   */
  const handleOpenEditTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, editing: !todo.editing } : { ...todo }
      )
    );
  };

  /**
   * Opens edit form for selected todo
   * @param {string} id
   * @param {string} value
   * @return {Array} todos
   */
  const handleEditTodo = (id, value) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: value, editing: false } : { ...todo }
      )
    );
  };

  /**
   * sets todos editing boolean to true / false. this boolean handles
   * style for todo
   * @param {string} id
   * @return {Array} todos
   */
  const handleCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
      )
    );
  };

  /**
   * remove all todos from todo list
   * @return {Array} todos
   */
  const handleClearList = () => {
    setTodos([]);
  };

  /**
   * remove all todos with completed boolean true from todo list
   * @return {Array} todos
   */
  const handleRemoveCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="max-w-3xl container  mx-auto flex   flex-col gap-6  p-2 rounded-lg bg-white dark:bg-dark_gray shadow-lg ">
      <ThemeButton />
      <h1 className="text-center text-2xl uppercase font-extrabold tracking-widest text-black dark:text-white">
        <span className="text-purple">Stay</span> organized,
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
      <Filter
        onClearList={handleClearList}
        todos={todos}
        onRemoveCompleted={handleRemoveCompleted}
      />
    </div>
  );
}
