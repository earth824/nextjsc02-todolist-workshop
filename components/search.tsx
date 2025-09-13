'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> =
    useDebouncedCallback(e => {
      const search = e.target.value;
      const params = new URLSearchParams(searchParams);
      if (search) {
        params.set('search', search);
      } else {
        params.delete('search');
      }
      router.push(`${pathname}?${params.toString()}`);
    }, 500);

  return (
    <input
      type="text"
      className="grow border border-gray-300 rounded-lg px-3 py-1.5 outline-none"
      placeholder="Search todo..."
      onChange={handleChange}
      defaultValue={searchParams.get('search') ?? ''}
    />
  );
}
