import Link from 'next/link';

export default function EditTodoForm() {
  return (
    <form className="grid gap-6">
      <div>
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-1.5 outline-none w-full"
          placeholder="Enter todo title"
        />
      </div>
      <div className="flex gap-4">
        <div>
          <input type="radio" id="pending" value="Pending" className="mr-1" />
          <label htmlFor="pending">Pending</label>
        </div>
        <div>
          <input
            type="radio"
            id="completed"
            value="Completed"
            className="mr-1"
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
