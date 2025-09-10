import prisma from '@/libs/prisma';
import { Todo } from '@/prisma/generated/prisma';

export const todos = [
  {
    title: 'Learn Next.js',
    status: 'pending',
    createdAt: new Date('2025-04-01')
  },
  {
    title: 'Plan project',
    status: 'completed',
    createdAt: new Date('2025-04-03')
  },
  { title: 'Meeting', status: 'completed', createdAt: new Date('2025-04-04') },
  { title: 'Fitness', status: 'pending', createdAt: new Date('2025-04-06') },
  {
    title: 'Design Database',
    status: 'pending',
    createdAt: new Date('2025-04-07')
  },
  { title: 'Mock Data', status: 'pending', createdAt: new Date('2025-04-08') },
  {
    title: 'Explore new project',
    status: 'completed',
    createdAt: new Date('2025-04-10')
  },
  { title: 'Relax', status: 'pending', createdAt: new Date('2025-04-12') }
] satisfies Omit<Todo, 'id'>[];

async function seed() {
  await prisma.todo.deleteMany();
  await prisma.todo.createMany({ data: todos });
}

seed();
