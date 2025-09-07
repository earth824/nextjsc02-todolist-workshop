import TodoItem from './todo-item';

type TodoListProps = {
  excludeAction?: boolean;
};

export default function TodoList({ excludeAction = false }: TodoListProps) {
  return (
    <div>
      <TodoItem
        id="a"
        title="test"
        status="completed"
        excludeAction={excludeAction}
      />
      <TodoItem
        id="aa"
        title="test1"
        status="completed"
        excludeAction={excludeAction}
      />
      <TodoItem
        id="aaa"
        title="test2"
        status="pending"
        excludeAction={excludeAction}
      />
    </div>
  );
}
