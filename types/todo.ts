import { todoInputSchema } from '@/libs/schema';
import z from 'zod';

export type TodoInput = z.infer<typeof todoInputSchema>;
