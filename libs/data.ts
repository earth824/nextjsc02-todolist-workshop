import prisma from './prisma';
import { Status } from '@/prisma/generated/prisma';

export async function fetchLatestTodos(query?: { limit?: number }) {
  const todos = await prisma.todo.findMany({
    take: query?.limit,
    orderBy: { createdAt: 'desc' }
  });
  return todos;
}

export async function countTodosByStatus() {
  // SELECT COUNT(status), status FROM todo GROUP BY status
  const data = await prisma.todo.groupBy({
    by: 'status',
    _count: {
      status: true
    }
  });

  const result: Record<Status, number> = {
    completed: 0,
    pending: 0
  };

  data.forEach(el => {
    result[el.status] = el._count.status;
  });
  // { completed: 3, pending: 5 }
  return result;
}
