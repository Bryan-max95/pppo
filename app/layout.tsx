import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'BWP Retail POS | Punto de Venta, Caja e Inventario Empresarial',
  description: 'Plataforma empresarial de punto de venta, facturación, caja, inventario y administración comercial por BWP Software & Cybersecurity en Roatán, Honduras.',
  keywords: ['BWP Retail POS', 'Punto de venta Honduras', 'Software de caja Roatán', 'Inventario y facturación POS', 'BWP Software & Cybersecurity', 'Bryan Cárcamo'],
  authors: [{ name: 'Ing. Bryan Josué Cárcamo Matute', url: 'https://bwpretailpos.com' }],
  openGraph: {
    title: 'BWP Retail POS | Punto de Venta Empresarial',
    description: 'Vende con rapidez. Controla tu negocio de principio a fin con BWP Retail POS.',
    url: 'https://bwpretailpos.com',
    siteName: 'BWP Retail POS',
    locale: 'es_HN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

