import React from 'react';
import Link from 'next/link';
import { BUSINESS_SOLUTIONS } from '@/content/solutions';
import { 
  Gift, 
  ShoppingBag, 
  Store, 
  Wrench, 
  Layers, 
  ArrowRight,
  Building
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Gift,
  ShoppingBag,
  Store,
  Wrench,
  Layers,
  Building
};

export default function SolutionsGrid() {
  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-[#E2E8F0] text-slate-800 text-xs font-bold shadow-xs">
            <Building className="w-3.5 h-3.5 text-[#7F1D3F]" />
            <span>Casos de Uso por Rubro</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Adaptado al flujo real de tu sector comercial
          </h2>

          <p className="text-[#475569] text-base sm:text-lg">
            Descubre cómo BWP Retail POS resuelve las particularidades operativas de cada tipo de negocio.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_SOLUTIONS.map((sol, idx) => {
            const Icon = iconMap[sol.iconName] || Store;
            const isDarkCard = idx === 2; // Minimarket card highlighted in dark

            if (isDarkCard) {
              return (
                <div 
                  key={sol.id}
                  className="bg-[#0F172A] text-white rounded-2xl p-6 border border-slate-800 shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center border border-white/10">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {sol.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {sol.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {sol.shortDesc}
                    </p>

                    <div className="space-y-1.5 mb-6">
                      {sol.keyChallenges.slice(0, 2).map((ch, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-[11px] text-slate-400">
                          <span className="text-emerald-400 font-bold">•</span>
                          <span>{ch}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400">
                      Celeridad en caja
                    </span>
                    <Link
                      href={`/soluciones#${sol.id}`}
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center space-x-1"
                    >
                      <span>Ver solución</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <div 
                key={sol.id}
                className="bg-white hover:bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#7F1D3F]/50 transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#7F1D3F] flex items-center justify-center group-hover:bg-[#7F1D3F] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F8FAFC] text-[#7F1D3F] border border-[#E2E8F0]">
                      {sol.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#7F1D3F] transition-colors">
                    {sol.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {sol.shortDesc}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {sol.keyChallenges.slice(0, 2).map((ch, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-[11px] text-slate-500">
                        <span className="text-[#7F1D3F] font-bold">•</span>
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">
                    Solución configurada
                  </span>
                  <Link
                    href={`/soluciones#${sol.id}`}
                    className="text-xs font-bold text-[#7F1D3F] hover:text-[#651530] flex items-center space-x-1"
                  >
                    <span>Ver solución</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
