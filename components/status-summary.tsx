import { countTodosByStatus } from '@/libs/data';
import SummararyCard from './summary-card';

export default async function StatusSummary() {
  const { completed, pending } = await countTodosByStatus();
  return (
    <>
      <SummararyCard title="Total" amount={completed + pending} />
      <SummararyCard title="Completed" amount={completed} />
      <SummararyCard title="Pending" amount={pending} />
    </>
  );
}
