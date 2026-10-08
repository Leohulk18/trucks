import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZOINK — Built to Move El Salvador',
  description: 'U.S. experience. Built for El Salvador. A premium trucking and construction-hauling concept for ZOINK.',
  keywords: ['ZOINK', 'dump truck', 'construction hauling', 'El Salvador', 'trucking']
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
