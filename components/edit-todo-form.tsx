'use client';

import { updateTodo } from '@/libs/action';
import { todoInputSchema } from '@/libs/schema';
import { Status } from '@/prisma/generated/prisma';
import { TodoInput } from '@/types/todo';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import Link from 'next/link';
import { useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type EditTodoFormProps = {
  id: string;
  title: string;
  status: Status;
};

export default function EditTodoForm({ title, status, id }: EditTodoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TodoInput>({
    resolver: zodResolver(todoInputSchema),
    defaultValues: { title, status }
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit: SubmitHandler<TodoInput> = data => {
    startTransition(async () => {
      const result = await updateTodo(id, data);
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
        <Link href="/todo" className="bg-gray-200 rounded-md px-3 py-1.5">
          Cancle
        </Link>
        <button
          className="bg-gray-200 rounded-md px-3 py-1.5"
          disabled={isPending}
        >
          {isPending ? <LoaderCircle className="animate-spin" /> : 'Save'}
        </button>
      </div>
    </form>
  );
}
