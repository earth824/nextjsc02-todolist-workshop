'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-full min-h-screen">
      <h1 className="text-6xl">500</h1>
      <p className="text-2xl">Something went wrong</p>
      <Link href="/" className="px-5 py-2.5 rounded-md bg-gray-200">
        Go to Home Page
      </Link>
    </div>
  );
}
