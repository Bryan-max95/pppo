'use client';

import React from 'react';
import { BUSINESS_SOLUTIONS } from '@/content/solutions';
import { 
  Building, 
  Gift, 
  ShoppingBag, 
  Store, 
  Wrench, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ElementType> = {
  Gift,
  ShoppingBag,
  Store,
  Wrench,
  Layers,
  Building
};

export default function SolucionesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#7F1D3F] text-white text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Soluciones Especializadas por Sector</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Adaptación Operativa para tu Tipo de Negocio
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Cada rubro tiene dinámicas únicas de cobro, rotación e inventario. BWP Retail POS se configura exactamente con las herramientas que requiere tu sector.
          </p>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {BUSINESS_SOLUTIONS.map((sol) => {
          const Icon = iconMap[sol.iconName] || Store;

          return (
            <div
              key={sol.id}
              id={sol.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm hover:shadow-md transition-all space-y-8 scroll-mt-24"
            >
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#7F1D3F] text-white flex items-center justify-center font-bold shadow-lg shadow-[#7F1D3F]/20">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#7F1D3F]/10 text-[#7F1D3F] inline-block mb-1">
                      {sol.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {sol.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Link
                    href={`/cotizacion?solucion=${sol.id}`}
                    className="px-5 py-2.5 rounded-xl bg-[#7F1D3F] hover:bg-[#651530] text-white text-xs font-bold transition-all shadow-sm"
                  >
                    Cotizar para este rubro
                  </Link>
                </div>
              </div>

              <div className="grid gap-6 rounded-2xl bg-slate-50 p-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#7F1D3F]">Cómo funciona este sector</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{sol.industryOverview}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#7F1D3F]">Configuración recomendada</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {sol.recommendedModules.map((module) => (
                      <li key={module} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a70817]" />{module}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Main Desc & Challenges Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Desafíos Habituales del Sector:
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {sol.keyChallenges.map((ch, idx) => (
                      <li key={idx} className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <span className="text-rose-600 font-bold">•</span>
                        <span>{ch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Beneficios y Solución BWP Retail POS:
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {sol.keyBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Recommended Hardware */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Equipos Recomendados para este Rubro:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sol.idealEquipment.map((hw, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {hw}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
        <div className="bg-white border border-slate-200 p-8 rounded-3xl space-y-4 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">¿Tu empresa opera en otro rubro comercial?</h2>
          <p className="text-xs text-slate-600 max-w-xl mx-auto">
            Realizamos la evaluación técnica de tu catálogo para confirmar la compatibilidad y flujo de trabajo.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800"
          >
            <span>Consultar con un especialista</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
