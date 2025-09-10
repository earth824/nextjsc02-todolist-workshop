import { fetchLatestTodos } from '@/libs/data';
import TodoItem from './todo-item';

type TodoListProps = {
  excludeAction?: boolean;
  limit?: number;
};

export default async function TodoList({
  excludeAction = false,
  limit
}: TodoListProps) {
  const todos = await fetchLatestTodos({ limit });
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} excludeAction={excludeAction} />
      ))}
    </div>
  );
}
