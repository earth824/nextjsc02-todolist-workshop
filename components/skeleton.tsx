const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden bg-white rounded-2xl px-10 py-8`}
    >
      <div className="flex flex-col gap-4">
        <div className="h-6 w-16 rounded-md bg-gray-100" />
        <div className="h-10 w-20 rounded-md bg-gray-100 self-center" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function TodoSkeleton() {
  return (
    <div className="flex items-center justify-between first:border-t border-b border-gray-100 py-3.5 px-2">
      <div className="h-6 w-72 rounded-md bg-gray-100" />
      <div className="h-6 w-22 rounded-md bg-gray-100" />
    </div>
  );
}

export function LatestTodoSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <TodoSkeleton />
      <TodoSkeleton />
      <TodoSkeleton />
      <TodoSkeleton />
      <TodoSkeleton />
    </div>
  );
}
