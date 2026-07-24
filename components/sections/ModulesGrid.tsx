'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FEATURE_MODULES, FeatureModule } from '@/content/features';
import { 
  ShoppingCart, 
  Vault, 
  Receipt, 
  Package, 
  Truck, 
  Users, 
  FileText, 
  BarChart3, 
  ShieldCheck, 
  Printer, 
  ArrowRight,
  Sparkles,
  Info,
  CheckCircle2,
  X
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  Vault,
  Receipt,
  Package,
  Truck,
  Users,
  FileText,
  BarChart3,
  ShieldCheck,
  Printer
};

export default function ModulesGrid() {
  const [selectedModule, setSelectedModule] = useState<FeatureModule | null>(null);

  // Take first 9 modules for homepage
  const homepageModules = FEATURE_MODULES.slice(0, 9);

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#7F1D3F]" />
              <span>Módulos Comerciales</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Módulos preparados para la operación real
            </h2>

            <p className="text-slate-600 text-base">
              Cada componente de BWP Retail POS resuelve una necesidad específica de caja, inventario, facturación o control gerencial.
            </p>
          </div>

          <div>
            <Link
              href="/funciones"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm"
            >
              <span>Ver especificación de funciones</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bento Grid Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homepageModules.map((module, idx) => {
            const IconComponent = iconMap[module.iconName] || ShoppingCart;

            // Bento variant assignment for visual rhythm
            const isFeaturedDark = idx === 1;
            const isFeaturedOlive = idx === 3;
            const isFeaturedSpan = idx === 0;

            if (isFeaturedDark) {
              return (
                <div
                  key={module.id}
                  className="bg-[#0F172A] text-white rounded-2xl p-6 border border-slate-800 shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center border border-white/10">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {module.badge || 'PRO'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {module.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {module.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedModule(module)}
                      className="text-xs font-semibold text-slate-300 hover:text-white flex items-center space-x-1"
                    >
                      <Info className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Vista rápida</span>
                    </button>

                    <Link
                      href={`/funciones#${module.id}`}
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center space-x-1"
                    >
                      <span>Conocer módulo</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            }

            if (isFeaturedOlive) {
              return (
                <div
                  key={module.id}
                  className="bg-[#66743A] text-white rounded-2xl p-6 border border-[#66743A] shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/15 text-white flex items-center justify-center border border-white/20">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/20 text-white">
                        {module.badge || 'INVENTARIO'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {module.title}
                    </h3>

                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-6">
                      {module.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedModule(module)}
                      className="text-xs font-semibold text-white/80 hover:text-white flex items-center space-x-1"
                    >
                      <Info className="w-3.5 h-3.5 text-white" />
                      <span>Vista rápida</span>
                    </button>

                    <Link
                      href={`/funciones#${module.id}`}
                      className="text-xs font-bold text-white flex items-center space-x-1"
                    >
                      <span>Conocer módulo</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={module.id}
                className={`bg-[#F8FAFC] hover:bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#7F1D3F]/50 transition-all hover:shadow-md flex flex-col justify-between group ${
                  isFeaturedSpan ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] text-[#7F1D3F] flex items-center justify-center group-hover:bg-[#7F1D3F] group-hover:text-white transition-all shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {module.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white text-slate-700 border border-[#E2E8F0]">
                        {module.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#7F1D3F] transition-colors">
                    {module.title}
                  </h3>

                  <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
                    {module.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedModule(module)}
                    className="text-xs font-semibold text-slate-700 hover:text-[#7F1D3F] flex items-center space-x-1"
                  >
                    <Info className="w-3.5 h-3.5 text-[#7F1D3F]" />
                    <span>Vista rápida</span>
                  </button>

                  <Link
                    href={`/funciones#${module.id}`}
                    className="text-xs font-bold text-[#7F1D3F] hover:text-[#651530] flex items-center space-x-1"
                  >
                    <span>Conocer módulo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Quick View Modal */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200 relative">
            
            <button
              onClick={() => setSelectedModule(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#7F1D3F] text-white flex items-center justify-center font-bold text-xl">
                {React.createElement(iconMap[selectedModule.iconName] || ShoppingCart, { className: 'w-6 h-6' })}
              </div>
              <div>
                <span className="text-xs font-bold text-[#7F1D3F] uppercase tracking-wider">
                  {selectedModule.badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedModule.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {selectedModule.fullDesc}
            </p>

            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold uppercase text-slate-800 tracking-wider mb-2">
                  Problema que resuelve en la empresa:
                </h4>
                <p className="text-xs text-slate-700">
                  {selectedModule.operationalProblem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-slate-800 tracking-wider mb-3">
                  Capacidades Principales Incluidas:
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedModule.concreteCapabilities.map((cap, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedModule(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Cerrar vista
              </button>

              <Link
                href={`/funciones#${selectedModule.id}`}
                className="px-5 py-2 rounded-lg text-xs font-bold text-white bg-[#7F1D3F] hover:bg-[#651530]"
              >
                Ver módulo completo
              </Link>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
