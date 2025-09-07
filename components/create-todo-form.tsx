'use client';

import Link from 'next/link';

export default function CreateTodoForm() {
  return (
    <form className="grid gap-6">
      <div>
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-3 py-1.5 outline-none w-full"
          placeholder="Enter todo title"
        />
        {/* Insert error message if there're title field error */}
        {/* <p className="text-red-500"></p> */}
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
        {/* Cancel button (redirect to todo page if click) */}
        <Link href="/todo" className="bg-gray-200 rounded-md px-3 py-1.5">
          Cancle
        </Link>
        {/* Create button  */}
        <button className="bg-gray-200 rounded-md px-3 py-1.5">
          {/* change this text to Loader icon with animate spin why creating... */}
          Create
        </button>
      </div>
    </form>
  );
}
