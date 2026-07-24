'use client';

import React from 'react';
import Image from 'next/image';
import { IMPLEMENTATION_CASES } from '@/content/implementations';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Store,
  Layers,
  HelpCircle
} from 'lucide-react';
import Link from 'next/link';

export default function ImplementacionesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#7F1D3F] text-white text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Evidencia de Despliegue Real</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Casos de Implementación BWP Retail POS
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Documentación técnica de despliegues operativos en empresas comerciales en Roatán, Islas de la Bahía.
          </p>
        </div>
      </section>

      {/* Verification Policy Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl text-amber-900 text-xs sm:text-sm space-y-2">
          <strong className="font-bold flex items-center space-x-2 text-amber-900 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Compromiso de Veracidad Técnica BWP</span>
          </strong>
          <p className="leading-relaxed">
            Unicamente publicamos casos de éxito y datos verificados con autorización explícita del cliente. Cada proyecto documenta los periféricos instalados, módulos desplegados y resultados reales alcanzados en punto de venta.
          </p>
        </div>
      </section>

      {/* Cases List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        {IMPLEMENTATION_CASES.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8"
          >
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-slate-100 gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 min-w-0">
                {item.logo && (
                  <div className={`relative w-full sm:w-52 h-36 sm:h-32 shrink-0 overflow-hidden rounded-2xl border border-slate-200 shadow-sm ${
                    item.logoFit === 'contain' ? 'bg-white p-3' : 'bg-[#243e70]'
                  }`}>
                    <Image
                      src={item.logo}
                      alt={`Logo de ${item.companyName}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 208px"
                      className={item.logoFit === 'contain' ? 'object-contain p-3' : 'object-cover'}
                    />
                  </div>
                )}

                <div className="space-y-2 min-w-0">
                  <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                    {item.projectTitle}
                  </h2>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">
                    Rubro: {item.industry}
                  </p>
                </div>
              </div>

              <span className="px-4 py-2 rounded-xl bg-[#7F1D3F] text-white font-bold text-xs self-start lg:self-center shrink-0 shadow-sm">
                {item.badge}
              </span>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
                <strong className="text-slate-900 uppercase font-bold text-xs block">
                  Reto Operativo Inicial:
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  {item.operationalChallenge}
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
                <strong className="text-slate-900 uppercase font-bold text-xs block">
                  Solución Aplicada por BWP:
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  {item.implementedSolution}
                </p>
              </div>
            </div>

            {/* Key Outcome Highlight */}
            <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl text-emerald-900">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                Resultado Operativo Logrado:
              </span>
              <p className="font-bold text-sm sm:text-base">
                &quot;{item.keyOutcome}&quot;
              </p>
            </div>

            {/* Capabilities and Hardware lists */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
              <div>
                <h4 className="font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Capacidades Entregadas:
                </h4>
                <ul className="space-y-2">
                  {item.deliveredCapabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Periféricos & Hardware Desplegado:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.peripheralsAndHardware.map((hw, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 font-semibold"
                    >
                      {hw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* CTA Bottom */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-4 shadow-xl">
          <h2 className="text-2xl font-bold">¿Deseas una implementación similar para tu negocio?</h2>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            Agendamos una evaluación técnica presencial en Roatán o remota para revisar la viabilidad y tiempos de instalación.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/demo"
              className="px-6 py-3 rounded-xl bg-[#7F1D3F] hover:bg-[#651530] font-bold text-xs text-white"
            >
              Solicitar Demostración
            </Link>
            <Link
              href="/cotizacion"
              className="px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
