import SummararyCard from './summary-card';

export default function StatusSummary() {
  return (
    <>
      <SummararyCard title="Total" amount={10} />
      <SummararyCard title="Completed" amount={6} />
      <SummararyCard title="Pending" amount={4} />
    </>
  );
}
