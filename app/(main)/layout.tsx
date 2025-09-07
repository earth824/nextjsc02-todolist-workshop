import Header from '@/components/header';

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <main className="px-10 pt-8 pb-14">{children}</main>
    </div>
  );
}
