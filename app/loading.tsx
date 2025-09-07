import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-full min-h-screen">
      <Loader className="animate-spin" />
      <p className="text-2xl">Loading...</p>
    </div>
  );
}
