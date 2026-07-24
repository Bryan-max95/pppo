import React from 'react';
import Link from 'next/link';
import { IMPLEMENTATION_CASES } from '@/content/implementations';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers,
  Store
} from 'lucide-react';

export default function FeaturedCaseSection() {
  const featured = IMPLEMENTATION_CASES.find(c => c.isFeatured) || IMPLEMENTATION_CASES[0];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Decorative Corner Badge */}
          <div className="absolute top-0 right-0 bg-[#7F1D3F] text-white text-xs font-bold uppercase tracking-wider px-6 py-2 rounded-bl-2xl shadow-md">
            {featured.badge}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs text-emerald-400 font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>{featured.location}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {featured.projectTitle}
                </h2>

                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Rubro: {featured.industry}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Resultado Operativo Clave:
                </span>
                <p className="text-sm font-semibold text-slate-100 leading-snug">
                  &quot;{featured.keyOutcome}&quot;
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div>
                  <strong className="text-white block mb-1">Reto Operativo:</strong>
                  <p className="text-slate-400 leading-relaxed">
                    {featured.operationalChallenge}
                  </p>
                </div>

                <div>
                  <strong className="text-white block mb-1">Solución Implementada:</strong>
                  <p className="text-slate-400 leading-relaxed">
                    {featured.implementedSolution}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/implementaciones"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#7F1D3F] hover:bg-[#651530] text-white text-xs font-bold transition-all shadow-md"
                >
                  <span>Ver ficha completa de proyectos</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right Card Capabilities (5 Cols) */}
            <div className="lg:col-span-5 bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-5">
              
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-[#7F1D3F] text-white flex items-center justify-center font-bold">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">
                    {featured.companyName}
                  </h3>
                  <span className="text-[11px] text-slate-400">
                    Soporte e Implementación BWP
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                  Capacidades Entregadas:
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {featured.deliveredCapabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2">
                {featured.peripheralsAndHardware.map((hw, idx) => (
                  <span 
                    key={idx}
                    className="text-[10px] font-semibold px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {hw}
                  </span>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
