import Image from 'next/image';
import { BarChart3, CheckCircle2, ScanBarcode, ShieldCheck } from 'lucide-react';

const views = [
  {
    eyebrow: 'Terminal de facturación',
    title: 'Una caja rápida, clara y lista para vender',
    copy: 'Encuentra productos, controla la cesta, asigna clientes y registra el pago desde una pantalla diseñada para reducir errores y filas.',
    image: '/media/terminal-pos.png',
    alt: 'Pantalla real de facturación y caja de BWP Retail POS',
    bullets: ['Búsqueda y lectura por código', 'Cálculo automático de ISV', 'Efectivo y otros canales de pago'],
    icon: ScanBarcode,
  },
  {
    eyebrow: 'Administración central',
    title: 'Todo el negocio visible desde un solo panel',
    copy: 'Consulta ventas, existencias, alertas, lotes y actividad crítica. La información importante aparece donde el administrador la necesita.',
    image: '/media/dashboard-admin.png',
    alt: 'Dashboard administrativo real de BWP Retail POS',
    bullets: ['Ventas e inventario en tiempo real', 'Alertas de stock y vencimientos', 'Bitácora para auditoría'],
    icon: BarChart3,
  },
];

export default function ScreenshotsShowcase() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-black uppercase tracking-[.2em] text-[#a70817]">Conoce el sistema real</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">Dos entornos. Una operación conectada.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">El cajero se concentra en vender. El administrador mantiene el control de toda la empresa.</p>
        </div>

        <div className="mt-16 space-y-24">
          {views.map((view, index) => {
            const Icon = view.icon;
            return (
              <article key={view.title} className="grid items-center gap-10 lg:grid-cols-12">
                <div className={`lg:col-span-4 ${index % 2 ? 'lg:order-2' : ''}`}>
                  <span className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-[#a70817]"><Icon className="h-5 w-5" /> {view.eyebrow}</span>
                  <h3 className="mt-4 text-3xl font-black leading-tight text-slate-950">{view.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{view.copy}</p>
                  <ul className="mt-6 space-y-3">
                    {view.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 font-semibold text-slate-700">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" /> {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`lg:col-span-8 ${index % 2 ? 'lg:order-1' : ''}`}>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10">
                    <Image src={view.image} alt={view.alt} width={1919} height={980} className="h-auto w-full rounded-xl" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-20 flex items-center justify-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-center text-sm font-bold text-emerald-900">
          <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-600" />
          Las imágenes corresponden a las interfaces reales de BWP Retail POS.
        </div>
      </div>
    </section>
  );
}
