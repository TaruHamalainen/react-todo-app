import Todo from "./Todo";

export default function TodoList() {
  return (
    <ul className="flex  flex-col gap-4  ">
      <Todo />
      <Todo />
      <Todo />
    </ul>
  );
}
