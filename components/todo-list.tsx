import { fetchLatestTodos } from '@/libs/data';
import TodoItem from './todo-item';

type TodoListProps = {
  excludeAction?: boolean;
  limit?: number;
  search?: string;
};

export default async function TodoList({
  excludeAction = false,
  limit,
  search
}: TodoListProps) {
  const todos = await fetchLatestTodos({ limit, search });
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} excludeAction={excludeAction} />
      ))}
    </div>
  );
}
