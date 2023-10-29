import Form from "./Form";
import TodoList from "./TodoList";
import Filter from "./Filter";
import Header from "./Header";

export default function TodoApp() {
  return (
    <main className="max-w-5xl mx-auto flex flex-col items-center  shadow-xl rounded-lg ">
      <h1>Todo App</h1>
      <Form />
      <TodoList />
      <Filter />
    </main>
  );
}
