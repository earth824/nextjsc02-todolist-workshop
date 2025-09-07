import { cn, convertFirstLetterToUpperCase } from '@/libs/utils';
import { SquarePen, Trash2 } from 'lucide-react';
import Link from 'next/link';

type TodoItemProps = {
  id: string;
  title: string;
  status: 'completed' | 'pending';
  excludeAction?: boolean;
};

export default function TodoItem({
  id,
  title,
  status,
  excludeAction = false
}: TodoItemProps) {
  return (
    <div className="first:border-t border-b border-gray-200 flex justify-between items-center">
      <p className="p-2">{title}</p>
      <div className="flex items-center">
        <div className="px-2 py-3.5">
          {/* Below is status badge (bg-blue-500 for completed and bg-gray-500 for pending) */}
          <div
            className={cn('py-1 px-2 rounded-md text-white text-xs', {
              'bg-blue-500': status === 'completed',
              'bg-gray-500': status === 'pending'
            })}
          >
            {convertFirstLetterToUpperCase(status)}
          </div>
        </div>

        {!excludeAction && (
          <>
            <div className="p-2">
              <Link href={`/todo/${id}/edit`}>
                <div className="px-3 py-2 rounded-md border border-gray-200 text-blue-500">
                  <SquarePen />
                </div>
              </Link>
            </div>

            <div className="p-2">
              <button className="px-3 py-2 rounded-md border border-gray-200 text-red-500">
                <Trash2 />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
