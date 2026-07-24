import React from 'react';
import Link from 'next/link';
import { Laptop, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7F1D3F]/30 via-transparent to-[#7F1D3F]/20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#7F1D3F] text-white text-xs font-bold uppercase tracking-wide shadow-md">
          <ShieldCheck className="w-4 h-4" />
          <span>Moderniza tu Punto de Venta</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Conoce cómo BWP Retail POS puede adaptarse a tu operación
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Agenda una demostración para revisar el flujo de caja, inventario, reportes, equipos requeridos y opciones de implementación para tu empresa.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/demo"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-[#7F1D3F] hover:bg-[#651530] shadow-xl shadow-[#7F1D3F]/30 transition-all flex items-center justify-center space-x-2 text-base group"
          >
            <Laptop className="w-5 h-5" />
            <span>Solicitar demostración</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="https://wa.me/50488285822?text=Hola%2C%20me%20gustar%C3%ADa%20coordinar%20una%20demostraci%C3%B3n%20de%20BWP%20Retail%20POS"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-100 bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-900/30 transition-all flex items-center justify-center space-x-2 text-base"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>

        <div className="pt-6 text-xs text-slate-400">
          <span>Respuesta rápida garantizada por nuestro equipo comercial en Roatán, Honduras.</span>
        </div>

      </div>
    </section>
  );
}
