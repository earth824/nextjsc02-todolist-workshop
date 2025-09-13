import { Status } from '@/prisma/generated/prisma';
import Link from 'next/link';

type EditTodoFormProps = {
  id: string;
  title: string;
  status: Status;
};

export default function EditTodoForm({ title, status, id }: EditTodoFormProps) {
  return (
    <form className="grid gap-6">
      <div>
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-1.5 outline-none w-full"
          placeholder="Enter todo title"
          defaultValue={title}
        />
      </div>
      <div className="flex gap-4">
        <div>
          <input
            name="status"
            type="radio"
            id="pending"
            value="pending"
            className="mr-1"
            defaultChecked={status === 'pending'}
          />
          <label htmlFor="pending">Pending</label>
        </div>
        <div>
          <input
            name="status"
            type="radio"
            id="completed"
            value="completed"
            className="mr-1"
            defaultChecked={status === 'completed'}
          />
          <label htmlFor="completed">Completed</label>
        </div>
      </div>
      <div className="flex gap-4">
        <Link href="/todo" className="bg-gray-200 rounded-md px-3 py-1.5">
          Cancle
        </Link>
        <button className="bg-gray-200 rounded-md px-3 py-1.5">Save</button>
      </div>
    </form>
  );
}
