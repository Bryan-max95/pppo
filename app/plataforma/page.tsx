import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  Boxes,
  Check,
  ClipboardCheck,
  FileCheck2,
  Landmark,
  PackageCheck,
  ReceiptText,
  ScanBarcode,
  ShieldCheck,
  ShoppingCart,
  UsersRound,
  Warehouse,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Plataforma empresarial | BWP Retail POS',
  description: 'Conoce cómo BWP Retail POS conecta ventas, inventario, compras, finanzas, usuarios, auditoría y análisis en una sola operación.',
};

const journey = [
  { number: '01', icon: ClipboardCheck, title: 'Planifica la compra', text: 'Crea órdenes de compra, selecciona proveedores y deja documentadas cantidades, costos y condiciones antes de recibir mercancía.', result: 'Compras autorizadas y previsibles' },
  { number: '02', icon: Warehouse, title: 'Recibe y controla', text: 'Registra la entrada, actualiza existencias y costos, identifica productos y conserva trazabilidad del movimiento.', result: 'Inventario actualizado desde el origen' },
  { number: '03', icon: ScanBarcode, title: 'Identifica el producto', text: 'Genera etiquetas y códigos de barras para agilizar búsquedas, conteos físicos y ventas en caja.', result: 'Menos errores de digitación' },
  { number: '04', icon: ShoppingCart, title: 'Vende y factura', text: 'El cajero procesa productos, impuestos, clientes y pagos mediante una terminal enfocada en velocidad y precisión.', result: 'Atención rápida y consistente' },
  { number: '05', icon: Boxes, title: 'Actualiza automáticamente', text: 'La venta descuenta existencias, registra el ingreso, afecta la caja y alimenta reportes sin recapturar información.', result: 'Una sola fuente de datos' },
  { number: '06', icon: BarChart3, title: 'Analiza y decide', text: 'La gerencia consulta ventas, rotación, gastos, cuentas por cobrar, alertas y rentabilidad desde el entorno administrativo.', result: 'Decisiones basadas en evidencia' },
];

const comparison = [
  ['Inventario', 'Hojas separadas y existencias desactualizadas', 'Movimientos centralizados, Kardex, conteos y alertas'],
  ['Caja', 'Diferencias difíciles de investigar', 'Turnos, arqueos y movimientos vinculados a responsables'],
  ['Compras', 'Pedidos informales sin seguimiento', 'Órdenes, proveedores, recepción y costos documentados'],
  ['Rentabilidad', 'Se conoce la venta, pero no la ganancia real', 'Costos, gastos y margen analizados por producto'],
  ['Usuarios', 'Todos pueden acceder a funciones sensibles', 'Permisos por rol, autorizaciones y bitácora'],
  ['Dirección', 'Reportes tardíos o preparados manualmente', 'Indicadores, análisis y exportaciones disponibles'],
];

const capabilities = [
  { icon: BadgeDollarSign, title: 'Rentabilidad y desempeño', text: 'Cruza ventas, costos y gastos para conocer qué productos, categorías y periodos generan valor.', items: ['Margen por producto', 'Análisis de ventas', 'Registro de gastos', 'Indicadores gerenciales'] },
  { icon: ShieldCheck, title: 'Seguridad y auditoría', text: 'Controla quién puede consultar, autorizar o modificar información sensible dentro del sistema.', items: ['Permisos granulares', 'Bitácora de acciones', 'Autorización de supervisor', 'Configuración de auditoría'] },
  { icon: PackageCheck, title: 'Inventario avanzado', text: 'Supervisa el ciclo completo de la mercancía, desde su compra hasta su venta o devolución.', items: ['Kardex y existencias', 'Conteo físico', 'Alertas de vencimiento', 'Etiquetas y códigos'] },
  { icon: ReceiptText, title: 'Ventas y documentos', text: 'Integra la atención de caja con clientes, cotizaciones, devoluciones y control documental.', items: ['Facturación rápida', 'Cotizaciones', 'Reimpresiones', 'Devoluciones controladas'] },
  { icon: Landmark, title: 'Control financiero', text: 'Organiza compromisos de clientes, movimientos de caja y egresos relacionados con la operación.', items: ['Cuentas por cobrar', 'Cierres de caja', 'Canales de pago', 'Exportación de datos'] },
  { icon: UsersRound, title: 'Gestión multiusuario', text: 'Estructura el trabajo de administradores, cajeros, supervisores, contadores y personal autorizado.', items: ['Perfiles diferenciados', 'Sesiones identificadas', 'Responsabilidad por acción', 'Acceso según función'] },
];

export default function PlataformaPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#07111f] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(167,8,23,.24),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[.2em] text-red-300">Una operación conectada</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">Desde la compra hasta la rentabilidad: toda la empresa dentro del mismo flujo.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">BWP Retail POS no funciona como módulos aislados. Cada acción alimenta inventario, caja, documentos, auditoría y análisis para mantener una visión consistente del negocio.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/demo" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#b60a1b] px-6 py-4 font-black hover:bg-red-700">Solicitar demostración <ArrowRight className="h-5 w-5" /></Link>
            <Link href="/funciones" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-black hover:bg-white/10">Ver todos los módulos</Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[.2em] text-[#a70817]">Recorrido operativo</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">Una acción conecta con la siguiente</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">El sistema conserva continuidad desde que se solicita mercancía hasta que la dirección analiza los resultados.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {journey.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between"><span className="text-sm font-black text-slate-300">{step.number}</span><span className="grid h-11 w-11 place-items-center rounded-xl bg-red-50 text-[#a70817]"><Icon className="h-5 w-5" /></span></div>
                  <h3 className="mt-6 text-xl font-black text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
                  <p className="mt-5 border-t border-slate-100 pt-4 text-sm font-bold text-emerald-700">{step.result}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[.2em] text-[#a70817]">Antes y después</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">Del control reactivo a una gestión empresarial</h2>
          </div>
          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="hidden grid-cols-[.55fr_1fr_1fr] bg-slate-950 px-6 py-4 text-sm font-black text-white md:grid">
              <span>Área</span><span>Operación fragmentada</span><span>Con BWP Retail POS</span>
            </div>
            {comparison.map(([area, before, after]) => (
              <div key={area} className="grid gap-4 border-t border-slate-100 p-6 first:border-t-0 md:grid-cols-[.55fr_1fr_1fr]">
                <strong className="text-slate-950">{area}</strong>
                <p className="text-sm leading-6 text-slate-500"><span className="mb-1 block text-[10px] font-black uppercase text-rose-600 md:hidden">Antes</span>{before}</p>
                <p className="flex gap-2 text-sm font-semibold leading-6 text-slate-800"><Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" /> <span><span className="mb-1 block text-[10px] font-black uppercase text-emerald-700 md:hidden">Con BWP</span>{after}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[.2em] text-[#a70817]">Capacidades diferenciadoras</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">Más que facturar: gobernar la operación</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Herramientas para empresas que necesitan trazabilidad, segregación de responsabilidades e información útil para dirigir.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="rounded-3xl border border-slate-200 p-7">
                  <Icon className="h-9 w-9 text-[#a70817]" />
                  <h3 className="mt-5 text-xl font-black text-slate-950">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{capability.text}</p>
                  <ul className="mt-6 grid grid-cols-2 gap-2 border-t border-slate-100 pt-5 text-xs font-bold text-slate-700">
                    {capability.items.map((item) => <li key={item} className="flex gap-2"><FileCheck2 className="h-4 w-4 shrink-0 text-emerald-600" />{item}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#a70817] py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div><h2 className="text-3xl font-black">Evalúa la plataforma con el flujo de tu empresa</h2><p className="mt-2 text-red-100">Preparamos una demostración enfocada en tus procesos, usuarios y controles.</p></div>
          <Link href="/demo" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-4 font-black text-[#a70817]">Agendar demostración <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </main>
  );
}
