type SummaryCardProps = {
  title: string;
  amount: number;
};

export default function SummararyCard({ title, amount }: SummaryCardProps) {
  return (
    <div className="bg-white rounded-2xl px-10 py-8">
      <div className="flex flex-col gap-4">
        <h6>{title}</h6>
        <h4 className="text-4xl font-semibold text-center">{amount}</h4>
      </div>
    </div>
  );
}
