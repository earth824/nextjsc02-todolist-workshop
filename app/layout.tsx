import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/app/globals.css';

const roboto = Roboto({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Basic Todo',
    default: 'Basic Todo'
  },
  description: "Best todo list app. It's free."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-gray-50 ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
