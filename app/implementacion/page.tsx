import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ClipboardList,
  DatabaseBackup,
  HardDrive,
  Headphones,
  Network,
  Server,
  ShieldCheck,
  UsersRound,
  Wrench,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Implementación empresarial | BWP Retail POS',
  description: 'Metodología de levantamiento, instalación, migración, seguridad, capacitación y soporte para implementar BWP Retail POS.',
};

const phases = [
  { number: '01', icon: ClipboardList, title: 'Levantamiento operativo', text: 'Documentamos sucursales, cajas, usuarios, catálogo, impuestos, documentos, periféricos, red, servidor y necesidades de continuidad.', outputs: ['Mapa de operación', 'Inventario técnico', 'Alcance confirmado'] },
  { number: '02', icon: Network, title: 'Diseño de arquitectura', text: 'Definimos dónde se alojará la solución, cómo se conectarán las estaciones y qué controles de acceso, respaldo y recuperación requiere.', outputs: ['Arquitectura propuesta', 'Requisitos de red', 'Plan de respaldo'] },
  { number: '03', icon: Wrench, title: 'Preparación y configuración', text: 'Instalamos componentes, configuramos empresa, usuarios, permisos, cajas, parámetros fiscales, documentos y dispositivos compatibles.', outputs: ['Entorno configurado', 'Roles habilitados', 'Terminales verificadas'] },
  { number: '04', icon: DatabaseBackup, title: 'Carga y validación de datos', text: 'Organizamos la carga inicial o migración acordada de productos, clientes, proveedores, existencias y saldos relevantes.', outputs: ['Datos depurados', 'Importación controlada', 'Validación de totales'] },
  { number: '05', icon: BookOpenCheck, title: 'Pruebas y capacitación', text: 'Ejecutamos escenarios reales de venta, devolución, cierre, compra y reporte. El personal practica según sus responsabilidades.', outputs: ['Pruebas de aceptación', 'Capacitación por rol', 'Incidencias resueltas'] },
  { number: '06', icon: Headphones, title: 'Salida y acompañamiento', text: 'Coordinamos el inicio productivo y establecemos el canal, horario, prioridad y alcance del soporte contratado.', outputs: ['Arranque controlado', 'Plan de soporte', 'Seguimiento inicial'] },
];

const environments = [
  { icon: HardDrive, title: 'Operación pequeña', detail: 'Una sede, servidor o equipo principal y pocas estaciones.', focus: 'Instalación base, red local, respaldos programados y capacitación inicial.' },
  { icon: Server, title: 'Operación mediana', detail: 'Varias cajas, roles especializados y mayor volumen de datos.', focus: 'Servidor dedicado, políticas de respaldo, permisos detallados y pruebas ampliadas.' },
  { icon: Network, title: 'Operación avanzada', detail: 'Múltiples sedes, servidores, integraciones o alta criticidad.', focus: 'Arquitectura coordinada, continuidad, seguridad reforzada y soporte con prioridades.' },
];

const assurances = [
  ['Alcance antes de intervenir', 'La propuesta define qué se instalará, qué datos se cargarán, cuáles equipos están incluidos y qué responsabilidades corresponden a cada parte.'],
  ['Validación antes de producción', 'No se entrega únicamente una instalación: se prueban flujos clave, impresión, permisos, cierres y consistencia de información.'],
  ['Accesos controlados', 'Las credenciales, roles y permisos se configuran según las funciones reales del personal de la empresa.'],
  ['Respaldo definido', 'Se acuerda una estrategia compatible con la infraestructura, volumen de datos y objetivos de recuperación.'],
  ['Capacitación por responsabilidad', 'Cajeros, supervisores y administradores reciben orientación enfocada en las funciones que utilizarán.'],
  ['Soporte con alcance claro', 'Los canales, horarios, tiempos objetivo y tareas cubiertas se especifican en el plan seleccionado.'],
];

export default function ImplementacionPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#07111f] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(167,8,23,.25),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_.7fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[.2em] text-red-300">Implementación empresarial</p>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-6xl">El software correcto necesita una implementación responsable.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Instalamos BWP Retail POS considerando la infraestructura, los datos, los procesos y las personas que sostienen la operación de tu empresa.</p>
            <Link href="/cotizacion" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#b60a1b] px-6 py-4 font-black hover:bg-red-700">Solicitar evaluación técnica <ArrowRight className="h-5 w-5" /></Link>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
            <ShieldCheck className="h-10 w-10 text-emerald-400" />
            <h2 className="mt-5 text-2xl font-black">Implementar no es solamente instalar</h2>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              {['Arquitectura adecuada para la operación', 'Información inicial revisada', 'Permisos alineados al personal', 'Pruebas antes del arranque', 'Capacitación y acompañamiento'].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[.2em] text-[#a70817]">Metodología de trabajo</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">Seis fases para llegar a producción con control</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <article key={phase.number} className="rounded-3xl border border-slate-200 p-7">
                  <div className="flex items-center justify-between"><span className="text-sm font-black text-slate-300">{phase.number}</span><Icon className="h-7 w-7 text-[#a70817]" /></div>
                  <h3 className="mt-6 text-xl font-black text-slate-950">{phase.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{phase.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                    {phase.outputs.map((output) => <span key={output} className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700">{output}</span>)}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[.2em] text-[#a70817]">Escala de infraestructura</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-5xl">El soporte se adapta a la dimensión de la empresa</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">La complejidad no depende únicamente del número de cajas: también influyen sedes, servidores, red, volumen, respaldos y criticidad.</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {environments.map((environment) => {
              const Icon = environment.icon;
              return (
                <article key={environment.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-red-50 text-[#a70817]"><Icon /></span>
                  <h3 className="mt-6 text-xl font-black text-slate-950">{environment.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500">{environment.detail}</p>
                  <p className="mt-5 border-t border-slate-100 pt-5 text-sm leading-7 text-slate-700"><strong>Enfoque:</strong> {environment.focus}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.72fr_1.28fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[.2em] text-[#a70817]">Compromisos de implementación</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">Claridad antes, durante y después del arranque</h2>
            <p className="mt-5 leading-8 text-slate-600">Cada proyecto debe dejar claro qué recibe la empresa y cómo se validará el resultado.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {assurances.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="flex gap-3 font-black text-slate-950"><ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600" />{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div><h2 className="text-3xl font-black">Comienza con un levantamiento de tu infraestructura</h2><p className="mt-2 text-slate-300">Definimos licencias, estaciones, servidor, datos, capacitación y soporte.</p></div>
          <Link href="/precios" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#b60a1b] px-6 py-4 font-black">Configurar solución <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </main>
  );
}
