'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const links = [
  { name: 'Inicio', href: '/' },
  { name: 'Plataforma', href: '/plataforma' },
  { name: 'Funciones', href: '/funciones' },
  { name: 'Soluciones', href: '/soluciones' },
  { name: 'Precios', href: '/precios' },
  { name: 'Implementación', href: '/implementacion' },
  { name: 'Nosotros', href: '/nosotros' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="BWP Retail POS - Inicio" className="shrink-0">
          <Image
            src="/media/bwp-retail-pos-logo.png"
            alt="BWP Retail POS"
            width={206}
            height={100}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                pathname === link.href
                  ? 'bg-red-50 text-[#a70817]'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link href="/demo" className="text-sm font-bold text-slate-700 hover:text-[#a70817]">
            Solicitar demo
          </Link>
          <Link
            href="/cotizacion"
            className="inline-flex items-center gap-2 rounded-xl bg-[#a70817] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/15 transition hover:-translate-y-0.5 hover:bg-[#850611]"
          >
            Cotizar ahora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-slate-200 p-2 text-slate-800 xl:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-6 pt-3 xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <Link onClick={() => setOpen(false)} key={link.href} href={link.href} className="rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-slate-50">
                {link.name}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link onClick={() => setOpen(false)} href="/demo" className="rounded-xl border border-slate-300 px-4 py-3 text-center text-sm font-bold">
                Ver demo
              </Link>
              <Link onClick={() => setOpen(false)} href="/cotizacion" className="rounded-xl bg-[#a70817] px-4 py-3 text-center text-sm font-bold text-white">
                Cotizar
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
