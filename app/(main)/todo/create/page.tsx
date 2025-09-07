import CreateTodoForm from '@/components/create-todo-form';

export default function CreateTodoPage() {
  return (
    <div className="bg-white rounded-2xl px-10 py-8 flex flex-col gap-8">
      <h6>Create Todo</h6>
      <CreateTodoForm />
    </div>
  );
}
