import { CardsSkeleton, LatestTodoSkeleton } from '@/components/skeleton';
import StatusSummary from '@/components/status-summary';
import TodoList from '@/components/todo-list';
import { Suspense } from 'react';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-3 gap-8">
        <Suspense fallback={<CardsSkeleton />}>
          <StatusSummary />
        </Suspense>
      </div>
      <div className="bg-white rounded-2xl px-10 py-8 flex flex-col gap-8">
        <h6>Latest Todo</h6>
        <Suspense fallback={<LatestTodoSkeleton />}>
          <TodoList excludeAction limit={5} />
        </Suspense>
      </div>
    </div>
  );
}
