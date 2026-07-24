'use client';

import React, { useState } from 'react';
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
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight,
  Sparkles,
  Sliders
} from 'lucide-react';
import Link from 'next/link';

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

export default function FuncionesPage() {
  const [filterCategory, setFilterCategory] = useState<'todos' | 'caja' | 'administrativo'>('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredModules = FEATURE_MODULES.filter((mod) => {
    const matchesCat = filterCategory === 'todos' || mod.category === filterCategory || mod.category === 'ambos';
    const matchesSearch = mod.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          mod.fullDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          mod.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Hero */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#7F1D3F] text-white text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Especificación Técnica de Módulos</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Funciones y Capacidades de BWP Retail POS
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Explicación detallada del alcance operativo de cada módulo. Diseñado para resolver los retos reales de caja, inventario, compras, facturación y auditoría.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Operación conectada', 'Cada venta actualiza caja, inventario, reportes y bitácora sin duplicar información entre módulos.'],
            ['Control por responsabilidades', 'Cajeros, supervisores, administradores y personal técnico acceden únicamente a las funciones autorizadas.'],
            ['Despliegue empresarial', 'El sistema se instala y configura sobre la infraestructura validada de la empresa, con red, servidor y respaldos definidos.'],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-extrabold text-slate-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <button
              onClick={() => setFilterCategory('todos')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterCategory === 'todos'
                  ? 'bg-[#7F1D3F] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Todos los Módulos ({FEATURE_MODULES.length})
            </button>

            <button
              onClick={() => setFilterCategory('caja')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterCategory === 'caja'
                  ? 'bg-[#7F1D3F] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Entorno de Caja / POS
            </button>

            <button
              onClick={() => setFilterCategory('administrativo')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterCategory === 'administrativo'
                  ? 'bg-[#7F1D3F] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Entorno Administrativo
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar función o módulo..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
            />
          </div>

        </div>
      </section>

      {/* Modules Detailed Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {filteredModules.map((mod) => {
          const IconComponent = iconMap[mod.iconName] || ShoppingCart;

          return (
            <div
              key={mod.id}
              id={mod.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all space-y-6 scroll-mt-24"
            >
              {/* Module Title Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#7F1D3F] text-white flex items-center justify-center font-bold shadow-md shadow-[#7F1D3F]/20">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                        {mod.badge}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase">
                        Categoría: {mod.category}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                      {mod.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Link
                    href="/demo"
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm"
                  >
                    Ver demostración
                  </Link>
                </div>
              </div>

              {/* Subtitle & Full Description */}
              <div>
                <p className="text-sm font-semibold text-[#7F1D3F] mb-1">
                  {mod.subtitle}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {mod.fullDesc}
                </p>
              </div>

              {/* Problem & Role Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-rose-50/60 border border-rose-100 p-4 rounded-xl space-y-1">
                  <strong className="text-rose-900 uppercase font-bold text-[11px] block">
                    Problema Operativo que Ataca:
                  </strong>
                  <p className="text-rose-800 leading-relaxed">
                    {mod.operationalProblem}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1">
                  <strong className="text-slate-900 uppercase font-bold text-[11px] block">
                    Función y Rol en el Sistema:
                  </strong>
                  <p className="text-slate-700 leading-relaxed">
                    {mod.moduleRole}
                  </p>
                </div>
              </div>

              {/* Concrete Capabilities */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Capacidades Concretas Incluidas:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {mod.concreteCapabilities.map((cap, i) => (
                    <div key={i} className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Benefits */}
              <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-xl">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
                  Beneficios Directos para el Negocio:
                </h3>
                <ul className="space-y-1.5 text-xs text-emerald-800">
                  {mod.businessBenefits.map((ben, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitations / Conditions note */}
              {mod.limitationsOrConditions && (
                <div className="bg-amber-50 border border-amber-200 text-amber-900 p-3.5 rounded-xl text-xs flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block">Condición de implementación:</strong>
                    <span>{mod.limitationsOrConditions}</span>
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">¿Deseas evaluar estos módulos en tu empresa?</h2>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            Configuramos la demostración con los módulos específicos de tu rubro comercial.
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
              Pedir Cotización
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
