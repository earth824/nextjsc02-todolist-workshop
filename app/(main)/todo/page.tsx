import Search from '@/components/search';
import TodoList from '@/components/todo-list';
import Link from 'next/link';

export default async function TodoPage() {
  return (
    <div className="bg-white rounded-2xl px-10 py-8 flex flex-col gap-8">
      <h6>Todo List</h6>
      <div className="flex justify-between items-center gap-8">
        <Search />
        <Link
          href="/todo/create"
          className="bg-gray-200 px-3 py-1.5 rounded-md"
        >
          Create Todo
        </Link>
      </div>
      <TodoList />
    </div>
  );
}
