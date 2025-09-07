import StatusSummary from '@/components/status-summary';
import TodoList from '@/components/todo-list';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-3 gap-8">
        <StatusSummary />
      </div>
      <div className="bg-white rounded-2xl px-10 py-8 flex flex-col gap-8">
        <h6>Latest Todo</h6>
        <TodoList excludeAction />
      </div>
    </div>
  );
}
