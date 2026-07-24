import React from 'react';
import DemoForm from '@/components/forms/DemoForm';
import { Laptop, CheckCircle2, ShieldCheck, Clock, MessageSquare } from 'lucide-react';

export default function DemoPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#7F1D3F] text-white text-xs font-bold uppercase tracking-wider">
            <Laptop className="w-3.5 h-3.5" />
            <span>Demostración Guiada Personalizada</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Solicitar Demostración de BWP Retail POS
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Revisa el funcionamiento real de la caja, el flujo de ventas, cierres, inventario y consultas administrativas junto a un consultor técnico.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info Panel (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900">
                ¿Qué revisaremos en la sesión de demo?
              </h2>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#7F1D3F]/10 text-[#7F1D3F] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    1
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Flujo de Cobro en Caja:</strong>
                    <span>Búsqueda por código de barras, selección manual, cálculo de ISV, vuelto y emisión de ticket.</span>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#7F1D3F]/10 text-[#7F1D3F] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    2
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Apertura y Cierre Z de Caja:</strong>
                    <span>Arqueo físico de efectivo en billetes y monedas, conciliación con ventas y reporte de cuadre.</span>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#7F1D3F]/10 text-[#7F1D3F] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    3
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Módulo de Inventario y Kardex:</strong>
                    <span>Registro de existencias, precios de venta, costo promedio y alertas de stock mínimo.</span>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#7F1D3F]/10 text-[#7F1D3F] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    4
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Consulta Administrativa:</strong>
                    <span>Panel gerencial con métricas de ventas en tiempo real, margen bruto y reporte por cajero.</span>
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-800">
                  <Clock className="w-4 h-4 text-[#7F1D3F]" />
                  <span>Duración estimada: 25 - 35 minutos</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Sin compromiso comercial inicial</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3">
              <h3 className="font-bold text-sm text-white">¿Necesitas coordinar directamente por WhatsApp?</h3>
              <p className="text-xs text-slate-300">
                Si prefieres hablar de inmediato con un consultor comercial en Roatán:
              </p>
              <a
                href="https://wa.me/50488285822?text=Hola%2C%20deseo%20coordinar%20una%20demostraci%C3%B3n%20de%20BWP%20Retail%20POS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contactar por WhatsApp (+504) 8828-5822</span>
              </a>
            </div>

          </div>

          {/* Right Form Container (7 Cols) */}
          <div className="lg:col-span-7">
            <DemoForm />
          </div>

        </div>
      </section>

    </div>
  );
}
