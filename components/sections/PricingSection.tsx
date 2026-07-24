'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, Building2, Check, Minus, MonitorUp, Plus, ServerCog, ShieldCheck, UserCog } from 'lucide-react';

const LICENSE_PRICE = 26000;
const EXTRA_PRICE = 3500;

const supportLevels = [
  {
    id: 'small',
    name: 'Infraestructura pequeña',
    detail: '1 servidor, 1 sede y hasta 2 cajas',
    scope: 'Instalación, configuración inicial, respaldo básico, validación de red y capacitación de arranque.',
  },
  {
    id: 'medium',
    name: 'Infraestructura mediana',
    detail: 'Varias cajas, usuarios o servicios internos',
    scope: 'Levantamiento técnico, despliegue en servidor empresarial, políticas de respaldo, pruebas y capacitación por roles.',
  },
  {
    id: 'large',
    name: 'Infraestructura avanzada',
    detail: 'Múltiples sedes, servidores o integraciones',
    scope: 'Diseño de arquitectura, despliegue coordinado, seguridad, recuperación, monitoreo y plan de soporte especializado.',
  },
];

function Counter({ value, onChange, min = 0, label }: { value: number; onChange: (value: number) => void; min?: number; label: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4">
      <span className="text-sm font-bold text-slate-800">{label}</span>
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 hover:bg-slate-50" aria-label={`Reducir ${label}`}><Minus className="h-4 w-4" /></button>
        <span className="w-8 text-center text-lg font-black">{value}</span>
        <button type="button" onClick={() => onChange(value + 1)} className="grid h-9 w-9 place-items-center rounded-lg bg-slate-900 text-white hover:bg-[#a70817]" aria-label={`Aumentar ${label}`}><Plus className="h-4 w-4" /></button>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [licenses, setLicenses] = useState(1);
  const [extraRegisters, setExtraRegisters] = useState(0);
  const [specialUsers, setSpecialUsers] = useState(0);
  const [support, setSupport] = useState('small');

  const softwareTotal = useMemo(
    () => licenses * LICENSE_PRICE + extraRegisters * EXTRA_PRICE + specialUsers * EXTRA_PRICE,
    [licenses, extraRegisters, specialUsers],
  );
  const selectedSupport = supportLevels.find((level) => level.id === support) ?? supportLevels[0];
  const quoteHref = `/cotizacion?licencias=${licenses}&cajas_adicionales=${extraRegisters}&usuarios_especiales=${specialUsers}&soporte=${support}`;

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-black uppercase tracking-[.2em] text-[#a70817]">Configura tu inversión</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">Calcula las licencias que necesita tu empresa</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Cada licencia corresponde a una operación empresarial e incluye 1 administrador y 2 cajas.</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[1.12fr_.88fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Building2 className="h-7 w-7 text-[#a70817]" />
                <div><h3 className="text-xl font-black">Licencias y ampliaciones</h3><p className="text-sm text-slate-500">El cálculo se actualiza automáticamente.</p></div>
              </div>
              <div className="mt-6 space-y-3">
                <Counter value={licenses} onChange={setLicenses} min={1} label="Licencias empresariales" />
                <Counter value={extraRegisters} onChange={setExtraRegisters} label="Cajas adicionales" />
                <Counter value={specialUsers} onChange={setSpecialUsers} label="Contadores o supervisores adicionales" />
              </div>
              <div className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-xl bg-white p-4"><strong className="block text-slate-950">{licenses}</strong><span className="text-slate-500">administradores incluidos</span></div>
                <div className="rounded-xl bg-white p-4"><strong className="block text-slate-950">{licenses * 2 + extraRegisters}</strong><span className="text-slate-500">cajas totales</span></div>
                <div className="rounded-xl bg-white p-4"><strong className="block text-slate-950">{specialUsers}</strong><span className="text-slate-500">usuarios especiales extra</span></div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center gap-3"><ServerCog className="h-7 w-7 text-[#a70817]" /><div><h3 className="text-xl font-black">Instalación y soporte</h3><p className="text-sm text-slate-500">Selecciona el tamaño aproximado de tu infraestructura.</p></div></div>
              <div className="mt-6 grid gap-3">
                {supportLevels.map((level) => (
                  <button
                    type="button"
                    key={level.id}
                    onClick={() => setSupport(level.id)}
                    className={`rounded-2xl border p-5 text-left transition ${support === level.id ? 'border-[#a70817] bg-red-50 ring-2 ring-red-100' : 'border-slate-200 hover:border-slate-300'}`}
                  >
                    <span className="flex items-center justify-between gap-3"><strong>{level.name}</strong>{support === level.id && <Check className="h-5 w-5 text-[#a70817]" />}</span>
                    <span className="mt-1 block text-sm text-slate-500">{level.detail}</span>
                  </button>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-sm leading-6 text-slate-200">
                <strong className="text-white">Alcance previsto: </strong>{selectedSupport.scope}
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">La instalación y el soporte se cotizan después del levantamiento técnico porque dependen de servidores, red, sedes, respaldos, migración y nivel de atención requerido.</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-black text-slate-950">Alcance generado para tu empresa</h3>
              <p className="mt-2 text-sm text-slate-500">Este resumen cambia según la configuración seleccionada.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  `${licenses} operación${licenses > 1 ? 'es' : ''} empresarial${licenses > 1 ? 'es' : ''} licenciada${licenses > 1 ? 's' : ''}`,
                  `${licenses} panel${licenses > 1 ? 'es' : ''} administrativo${licenses > 1 ? 's' : ''}`,
                  `${licenses * 2 + extraRegisters} terminal${licenses * 2 + extraRegisters > 1 ? 'es' : ''} de caja habilitada${licenses * 2 + extraRegisters > 1 ? 's' : ''}`,
                  `${specialUsers} perfil${specialUsers !== 1 ? 'es' : ''} especial${specialUsers !== 1 ? 'es' : ''} adicional${specialUsers !== 1 ? 'es' : ''}`,
                  `Implementación para ${selectedSupport.name.toLowerCase()}`,
                  'Configuración de usuarios, permisos y auditoría',
                  'Validación de servidor, red y respaldos',
                  'Capacitación y pruebas antes del arranque',
                ].map((item) => (
                  <p key={item} className="flex gap-3 rounded-xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" /> {item}
                  </p>
                ))}
              </div>
              <Link href="/implementacion" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#a70817] hover:underline">
                Conocer la metodología de implementación <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="h-fit rounded-3xl bg-[#07111f] p-7 text-white shadow-2xl lg:sticky lg:top-28 sm:p-9">
            <p className="text-sm font-black uppercase tracking-[.16em] text-red-300">Resumen de configuración</p>
            <div className="mt-7 space-y-4 border-b border-white/10 pb-6 text-sm">
              <div className="flex justify-between gap-4"><span className="text-slate-300">{licenses} licencia{licenses > 1 ? 's' : ''}</span><strong>L {(licenses * LICENSE_PRICE).toLocaleString('en-US')}</strong></div>
              <div className="flex justify-between gap-4"><span className="text-slate-300">{extraRegisters} caja{extraRegisters !== 1 ? 's' : ''} adicional{extraRegisters !== 1 ? 'es' : ''}</span><strong>L {(extraRegisters * EXTRA_PRICE).toLocaleString('en-US')}</strong></div>
              <div className="flex justify-between gap-4"><span className="text-slate-300">{specialUsers} usuario{specialUsers !== 1 ? 's' : ''} especial{specialUsers !== 1 ? 'es' : ''}</span><strong>L {(specialUsers * EXTRA_PRICE).toLocaleString('en-US')}</strong></div>
            </div>
            <div className="py-7">
              <p className="text-sm text-slate-400">Total de software</p>
              <p className="mt-1 text-4xl font-black">L {softwareTotal.toLocaleString('en-US')}</p>
              <p className="mt-2 text-xs text-slate-400">Instalación y soporte se agregan a la propuesta técnica.</p>
            </div>
            <div className="space-y-3 rounded-2xl bg-white/5 p-5 text-sm text-slate-200">
              <p className="flex gap-2"><MonitorUp className="h-5 w-5 shrink-0 text-emerald-400" /> Instalación en la infraestructura de tu empresa.</p>
              <p className="flex gap-2"><ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" /> Configuración de seguridad y respaldos.</p>
              <p className="flex gap-2"><UserCog className="h-5 w-5 shrink-0 text-emerald-400" /> Capacitación según perfiles y responsabilidades.</p>
            </div>
            <Link href={quoteHref} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#b60a1b] px-6 py-4 font-black hover:bg-red-700">
              Solicitar propuesta completa <ArrowRight className="h-5 w-5" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
