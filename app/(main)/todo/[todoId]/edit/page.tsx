import EditTodoForm from '@/components/edit-todo-form';
import { fecthTodoById } from '@/libs/data';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// export const metadata: Metadata = {
//   title: 'Edit'
// };
type EditTodoPageProps = {
  params: Promise<{ todoId: string }>;
};

export async function generateMetadata({
  params
}: EditTodoPageProps): Promise<Metadata> {
  const { todoId } = await params;
  const todo = await fecthTodoById(todoId);
  return {
    title: `Edit: ${todo?.title}`
  };
}

export default async function EditTodoPage({ params }: EditTodoPageProps) {
  const { todoId } = await params;
  const todo = await fecthTodoById(todoId);

  if (!todo) notFound();

  return (
    <div className="bg-white rounded-2xl px-10 py-8 flex flex-col gap-8">
      <h6>Edit Todo</h6>
      <EditTodoForm {...todo} />
    </div>
  );
}
