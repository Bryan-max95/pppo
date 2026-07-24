import React from 'react';
import QuoteForm from '@/components/forms/QuoteForm';
import { Calculator, ShieldCheck, CheckCircle2, FileText, PhoneCall } from 'lucide-react';

export default function CotizacionPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#7F1D3F] text-white text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Formulario Comercial Oficial</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Solicitar Cotización de BWP Retail POS
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Obtén una propuesta formal detallada según el número de cajas, sucursales, usuarios y periféricos requeridos por tu negocio.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900">
                ¿Qué incluye la propuesta comercial?
              </h2>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Licenciamiento de Software:</strong>
                    <span>Desglose por caja de cobro (POS) y consolas administrativas requeridas.</span>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Instalación y Configuración:</strong>
                    <span>Servicios de despliegue en punto de venta, parametrización de impuestos e impresión.</span>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Capacitación Operativa:</strong>
                    <span>Entrenamiento presencial o remoto para cajeros y personal administrativo.</span>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Evaluación de Hardware:</strong>
                    <span>Validación de impresoras, lectores y gavetas de efectivo existentes o cotización de nuevos.</span>
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-100 bg-slate-50 p-4 rounded-xl space-y-2 text-xs text-slate-600">
                <strong className="font-bold text-slate-900 block flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#7F1D3F]" />
                  <span>Empresa Emisora Oficial:</span>
                </strong>
                <p>BWP Software & Cybersecurity</p>
                <p>Representante: Ing. Bryan Josué Cárcamo Matute</p>
                <p>Roatán, Islas de la Bahía, Honduras</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3">
              <h3 className="font-bold text-sm text-white">¿Tienes urgencia en cotizar?</h3>
              <p className="text-xs text-slate-300">
                Llama o envía un mensaje directamente al teléfono comercial en Honduras:
              </p>
              <a
                href="tel:+50488285822"
                className="inline-flex items-center space-x-2 text-emerald-400 font-mono font-bold text-sm hover:underline"
              >
                <PhoneCall className="w-4 h-4" />
                <span>(+504) 8828-5822</span>
              </a>
            </div>

          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

        </div>
      </section>

    </div>
  );
}
