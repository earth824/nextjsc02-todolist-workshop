import EditTodoForm from '@/components/edit-todo-form';
import { fecthTodoById } from '@/libs/data';
import { notFound } from 'next/navigation';

type EditTodoPageProps = {
  params: Promise<{ todoId: string }>;
};

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
