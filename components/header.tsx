import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-white shadow">
      <Link href="/">
        <div className="flex items-center gap-10">
          <Image src="/logo.png" alt="Basic todo logo" width={48} height={48} />
          <h1 className="font-medium text-2xl text-blue-500">Basic Todo</h1>
        </div>
      </Link>

      <nav className="flex gap-3">
        <Link
          href="/dashboard"
          className="hover:bg-gray-100 px-5 py-2.5 rounded-md"
        >
          Dashboard
        </Link>

        <Link href="/todo" className="hover:bg-gray-100 px-5 py-2.5 rounded-md">
          Todo
        </Link>
      </nav>
    </header>
  );
}
