'use client';

import { createTodo } from '@/libs/action';
import { todoInputSchema } from '@/libs/schema';
import { ApiResponse } from '@/types/api-response';
import { TodoInput } from '@/types/todo';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import Link from 'next/link';
import { useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type EditTodoForm = {
  title: string;
  status: 'completed' | 'pending';
  id: string;
  action: (id: string, input: TodoForm) => Promise<ApiResponse>;
};
type CreateTodoForm = { action: (input: TodoForm) => Promise<ApiResponse> };
type TodoForm = EditTodoForm | CreateTodoForm;

export default function CreateTodoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TodoInput>({
    resolver: zodResolver(todoInputSchema),
    defaultValues: { title: '', status: 'pending' }
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit: SubmitHandler<TodoInput> = data => {
    startTransition(async () => {
      const result = await createTodo(data);
      if (!result.success) {
        // const { message, details } = result;
        // console.log(details);
        // show error notification to user
      }
    });
  };

  return (
    <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-1.5 outline-none w-full"
          placeholder="Enter todo title"
          {...register('title')}
        />
        {/* Insert error message if there're title field error */}
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>
      <div className="flex gap-4">
        <div>
          <input
            type="radio"
            id="pending"
            value="pending"
            className="mr-1"
            {...register('status')}
          />
          <label htmlFor="pending">Pending</label>
        </div>
        <div>
          <input
            type="radio"
            id="completed"
            value="completed"
            className="mr-1"
            {...register('status')}
          />
          <label htmlFor="completed">Completed</label>
        </div>
      </div>
      <div className="flex gap-4">
        {/* Cancel button (redirect to todo page if click) */}
        <Link href="/todo" className="bg-gray-200 rounded-md px-3 py-1.5">
          Cancle
        </Link>
        {/* Create button  */}
        <button
          disabled={isPending}
          className="bg-gray-200 rounded-md px-3 py-1.5"
        >
          {/* change this text to Loader icon with animate spin why creating... */}
          {isPending ? <LoaderCircle className="animate-spin" /> : 'Create'}
        </button>
      </div>
    </form>
  );
}
