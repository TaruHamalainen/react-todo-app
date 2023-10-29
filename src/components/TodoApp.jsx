import Form from "./Form";
import TodoList from "./TodoList";
import Filter from "./Filter";
import ThemeButton from "./ThemeButton";

export default function TodoApp() {
  return (
    <div className="max-w-3xl mx-auto flex   flex-col gap-6  p-2 rounded-lg bg-white dark:bg-dark_gray shadow-lg ">
      <ThemeButton />
      <h1 className="text-center text-2xl uppercase font-extrabold tracking-widest text-black dark:text-white">
        <span className="text-purple">Stay</span> organized,{" "}
        <span className="text-purple">get</span> things done!
      </h1>
      <Form />
      <TodoList />
      <Filter />
    </div>
  );
}
