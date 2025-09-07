import EditTodoForm from '@/components/edit-todo-form';

export default async function EditTodoPage() {
  return (
    <div className="bg-white rounded-2xl px-10 py-8 flex flex-col gap-8">
      <h6>Edit Todo</h6>
      <EditTodoForm />
    </div>
  );
}
