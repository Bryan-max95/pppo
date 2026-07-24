import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, CircleDollarSign, ShieldCheck, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(167,8,23,.24),transparent_33%),radial-gradient(circle_at_10%_90%,rgba(30,64,175,.13),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[.83fr_1.17fr] lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-red-200">
            <Sparkles className="h-4 w-4" /> Plataforma empresarial para operaciones de retail
          </div>
          <h1 className="max-w-xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Convierte cada operación en <span className="text-red-500">control, trazabilidad y crecimiento.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Centraliza ventas, inventario, compras, finanzas, seguridad y análisis en una plataforma preparada para una caja, múltiples usuarios o una operación empresarial completa.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/plataforma" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#a70817] px-6 py-4 font-bold shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-700">
              Explorar la plataforma <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/precios" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-bold transition hover:bg-white/10">
              <CircleDollarSign className="h-5 w-5" /> Ver precios
            </Link>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
            {['Operación centralizada', 'Control por roles', 'Auditoría completa', 'Información en tiempo real'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500/15 text-emerald-400"><Check className="h-3.5 w-3.5" /></span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-red-600/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-2 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 text-[11px] font-medium text-slate-400">Panel administrativo · BWP Retail POS</span>
            </div>
            <Image
              src="/media/dashboard-admin.png"
              alt="Dashboard administrativo real de BWP Retail POS"
              width={1919}
              height={979}
              priority
              className="h-auto w-full rounded-xl"
            />
          </div>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-white/15 bg-[#111d2e]/95 px-4 py-3 shadow-xl backdrop-blur sm:left-8">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-500/15 text-emerald-400"><ShieldCheck /></span>
            <div><p className="text-xs text-slate-400">Operación protegida</p><p className="text-sm font-bold">Usuarios, roles y auditoría</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
