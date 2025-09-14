'use client';

import { deleteTodo } from '@/libs/action';
import { LoaderCircle, Trash2 } from 'lucide-react';
import { useTransition } from 'react';

type DeleteTodoProps = {
  id: string;
};

export default function DeleteTodo({ id }: DeleteTodoProps) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      const { success, message } = await deleteTodo(id);
      if (!success) {
        // show error message to user eg.toast
      } else {
        // show success message to user eg.toast
        // redirect to another route
      }
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="px-3 py-2 rounded-md border border-gray-200 text-red-500"
    >
      {isPending ? <LoaderCircle className="animate-spin" /> : <Trash2 />}
    </button>
  );
}
