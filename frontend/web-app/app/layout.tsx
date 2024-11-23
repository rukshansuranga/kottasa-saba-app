import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import ToastProvider from './providers/ToastProvider';
//import Navbar from './nav/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ToastProvider>
          {/* <Navbar /> */}
          <main className='container mx-auto px-5 pt-10'>
            {children}
          </main>
        </ToastProvider></body>
    </html>
  );
}