import React from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function ProblemSolutionSection() {
  const comparisons = [
    {
      problem: 'Ventas sin trazabilidad ni responsable asignado en la caja.',
      solution: 'Registro exacto por usuario cajero, terminal física, caja y turno.',
    },
    {
      problem: 'Inventario desactualizado y faltantes no justificados.',
      solution: 'Existencias rebajadas automáticamente con cada venta y Kardex detallado.',
    },
    {
      problem: 'Cierres de caja manuales propensos a diferencias de efectivo.',
      solution: 'Resumen automático por método de pago (Efectivo, Tarjeta) y arqueo en pantalla.',
    },
    {
      problem: 'Permisos generales donde cualquier usuario puede modificar precios o deshabilitar reglas.',
      solution: 'Roles estructurados (Cajero, Supervisor, Admin) con clave para excepciones.',
    },
    {
      problem: 'Falta de reportes oportunos para conocer las ganancias y stock real.',
      solution: 'Información operativa centralizada y tableros gerenciales al instante.',
    },
    {
      problem: 'Procesos de cobro lentos que provocan filas y clientes insatisfechos.',
      solution: 'Flujo de caja optimizado para escaneo acelerado y tickets térmicos.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#7F1D3F]/10 text-[#7F1D3F] text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Transformación Operativa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Menos diferencias. Más control sobre cada venta.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Compara el impacto directo de pasar de una gestión manual o informal a un control comercial respaldado por BWP Retail POS.
          </p>
        </div>

        {/* Comparison Table / Matrix */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          
          {/* Matrix Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-900 text-white font-bold text-sm tracking-wide">
            <div className="p-4 sm:p-5 bg-rose-950/40 border-b md:border-b-0 md:border-r border-slate-800 flex items-center space-x-2">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
              <span>Operación Desorganizada (Tradicional)</span>
            </div>
            <div className="p-4 sm:p-5 bg-emerald-950/40 flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Con BWP Retail POS</span>
            </div>
          </div>

          {/* Matrix Rows */}
          <div className="divide-y divide-slate-100 font-medium text-xs sm:text-sm">
            {comparisons.map((item, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 hover:bg-slate-50/80 transition-colors"
              >
                <div className="p-4 sm:p-5 text-slate-600 bg-rose-50/20 md:border-r border-slate-200 flex items-start space-x-3">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span>{item.problem}</span>
                </div>

                <div className="p-4 sm:p-5 text-slate-800 bg-emerald-50/20 font-semibold flex items-start space-x-3">
                  <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                  <span>{item.solution}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <Link
            href="/demo"
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#7F1D3F] hover:text-[#651530] bg-white px-6 py-3 rounded-xl border border-slate-300 shadow-sm hover:shadow transition-all"
          >
            <span>Evalúa BWP Retail POS para los procesos de tu empresa</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
