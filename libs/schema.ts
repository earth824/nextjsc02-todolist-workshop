import { z } from 'zod';

export const todoInputSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  status: z.enum(
    ['completed', 'pending'],
    'Status must be completed or pending'
  )
});
