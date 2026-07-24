import React from 'react';
import SupportForm from '@/components/forms/SupportForm';
import { Headphones, Phone, Mail, Clock, ShieldCheck, MessageSquare, AlertCircle } from 'lucide-react';

export default function SoportePage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#7F1D3F] text-white text-xs font-bold uppercase tracking-wider">
            <Headphones className="w-3.5 h-3.5" />
            <span>Portal de Atención a Clientes</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Centro de Soporte Técnico BWP Retail POS
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Asistencia técnica especializada para negocios activos con BWP Retail POS.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900">
                Canales Directos de Asistencia
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">
                    Teléfono & WhatsApp de Soporte
                  </span>
                  <a
                    href="https://wa.me/50488285822?text=Hola%2C%20requiero%20soporte%20t%C3%A9cnico%20para%20BWP%20Retail%20POS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-slate-900 hover:text-[#7F1D3F] flex items-center space-x-2"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>(+504) 8828-5822</span>
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">
                    Correo de Soporte Oficial
                  </span>
                  <a
                    href="mailto:info@bwpentesting.com"
                    className="text-sm font-bold text-slate-900 hover:text-[#7F1D3F] flex items-center space-x-2"
                  >
                    <Mail className="w-4 h-4 text-[#7F1D3F]" />
                    <span>info@bwpentesting.com</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Nivel de Prioridad de Soporte:
                </h3>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start space-x-2">
                    <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                    <span><strong className="text-slate-900">Crítica:</strong> Imposibilidad de cobrar en caja principal (Atención prioritaria inmediata).</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span><strong className="text-slate-900">Alta:</strong> Fallo en periférico secundario o consulta de cierre.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span><strong className="text-slate-900">Media/Baja:</strong> Ajustes de catálogo, reportes o dudas de usuario.</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-2">
              <strong className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Ubicación del Servicio Técnico
              </strong>
              <p className="text-xs text-slate-300 leading-relaxed">
                Atención presencial en Roatán, Islas de la Bahía, Honduras, y soporte asistido por acceso remoto seguro para todo el territorio nacional.
              </p>
            </div>

          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <SupportForm />
          </div>

        </div>
      </section>

    </div>
  );
}
