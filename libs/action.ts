'use server';

import { ApiResponse } from '@/types/api-response';
import { fecthTodoById } from './data';
import prisma from './prisma';
import { revalidatePath } from 'next/cache';
import { TodoInput } from '@/types/todo';
import { todoInputSchema } from './schema';
import z from 'zod';
import { redirect } from 'next/navigation';

export async function deleteTodo(id: string): Promise<ApiResponse> {
  try {
    const todo = await fecthTodoById(id);
    if (!todo)
      return {
        success: false,
        message: `Todo with this id: ${id} was not found`
        // status: StatusCode.NOT_FOUND
        // errorCode: ErrorCode.ITEM_NOT_FOUND
      };
    await prisma.todo.delete({ where: { id } });
    revalidatePath('/todo');
    return { success: true, message: 'Deleted todo successfully' };
  } catch (error) {
    return { success: false, message: 'Unexpected error occured' };
  }
}

export async function createTodo(input: TodoInput): Promise<ApiResponse> {
  try {
    const { success, data, error } = todoInputSchema.safeParse(input);
    if (!success) {
      return {
        success: false,
        message: 'Validation error',
        details: z.flattenError(error)
      };
    }

    await prisma.todo.create({ data });
    redirect('/todo');
    // return { success: true, message: 'Created new todo successfully' };
  } catch (error) {
    return { success: false, message: 'Unexpected error occured' };
  }
}
