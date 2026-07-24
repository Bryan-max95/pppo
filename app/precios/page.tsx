import type { Metadata } from 'next';
import Link from 'next/link';
import PricingSection from '@/components/sections/PricingSection';
import { ArrowRight, Building2, CircleCheckBig, Headphones } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Precios y licencia | BWP Retail POS',
  description: 'Conoce el precio de la licencia BWP Retail POS: panel administrativo y dos cajas incluidas, con opciones para ampliar tu operación.',
};

export default function PreciosPage() {
  return (
    <>
      <section className="bg-[#07111f] px-4 py-16 text-center text-white sm:py-20">
        <p className="text-sm font-black uppercase tracking-[.2em] text-red-300">Licenciamiento sencillo</p>
        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Una licencia para operar. Opciones claras para crecer.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">Conoce exactamente qué recibes, cuánto cuesta y cómo ampliar cajas o usuarios especiales.</p>
      </section>

      <PricingSection />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              [Building2, 'Para una operación', 'La licencia corresponde a un negocio y conecta el entorno administrativo con sus cajas autorizadas.'],
              [CircleCheckBig, 'Lista para trabajar', 'Incluye la configuración y puesta en marcha definidas durante el levantamiento comercial.'],
              [Headphones, 'Acompañamiento', 'Te orientamos en la preparación de equipos, datos y personal para iniciar correctamente.'],
            ].map(([Icon, title, copy]) => {
              const CardIcon = Icon as typeof Building2;
              return (
                <div key={String(title)} className="rounded-2xl border border-slate-200 bg-white p-7">
                  <CardIcon className="h-8 w-8 text-[#a70817]" />
                  <h2 className="mt-5 text-xl font-black text-slate-950">{String(title)}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{String(copy)}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl bg-[#a70817] p-8 text-white sm:flex sm:items-center sm:justify-between sm:p-10">
            <div>
              <h2 className="text-2xl font-black sm:text-3xl">¿Listo para implementar BWP Retail POS?</h2>
              <p className="mt-2 text-red-100">Cuéntanos cuántas cajas y usuarios necesita tu negocio.</p>
            </div>
            <Link href="/cotizacion" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-black text-[#a70817] sm:mt-0">
              Recibir cotización <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
