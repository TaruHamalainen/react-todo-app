import Todo from "./Todo";

export default function TodoList({
  todos,
  onDeleteTodo,
  onOpenEditTodo,
  onEditTodo,
  onCompleteTodo,
  isChecked,
}) {
  return (
    <ul className="flex  flex-col gap-4  ">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onOpenEditTodo={onOpenEditTodo}
          onEditTodo={onEditTodo}
          onCompleteTodo={onCompleteTodo}
        />
      ))}
    </ul>
  );
}
