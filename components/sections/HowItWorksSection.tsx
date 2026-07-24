import React from 'react';
import { 
  Settings, 
  PackagePlus, 
  KeyRound, 
  ShoppingCart, 
  Printer, 
  Vault, 
  BarChart, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Configuración Inicial',
      desc: 'Se configuran datos de la empresa, sucursales, cajas físicas, usuarios y matriz de permisos.',
      icon: Settings,
    },
    {
      num: '02',
      title: 'Carga de Catálogo',
      desc: 'Se cargan productos, categorías, códigos de barras, precios de venta, costos y existencias iniciales.',
      icon: PackagePlus,
    },
    {
      num: '03',
      title: 'Apertura de Turno',
      desc: 'El cajero inicia sesión en su terminal y declara el fondo inicial de caja para aperturar el turno.',
      icon: KeyRound,
    },
    {
      num: '04',
      title: 'Operación & Cobro',
      desc: 'Se escanean productos, se aplica el carrito de compras y se seleccionan los métodos de pago.',
      icon: ShoppingCart,
    },
    {
      num: '05',
      title: 'Emisión & Kardex',
      desc: 'El sistema emite el comprobante tipo ticket, descuenta el stock e inserta la transacción en bitácora.',
      icon: Printer,
    },
    {
      num: '06',
      title: 'Arqueo & Cierre',
      desc: 'El cajero realiza el cierre de turno conciliando efectivo recibido contra ventas registradas.',
      icon: Vault,
    },
    {
      num: '07',
      title: 'Supervisión Gerencial',
      desc: 'La administración consulta tableros de ventas, valorización de inventario y eventos de auditoría.',
      icon: BarChart,
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 text-emerald-400 text-xs font-semibold border border-slate-700">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Flujo Operativo de Trabajo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            De la configuración inicial al cierre diario
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Un ciclo claro y estructurado que conecta cada venta realizada en caja con el control de inventario y la contabilidad gerencial.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-[#7F1D3F] transition-all flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-[#9e2752]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 flex items-center justify-center group-hover:bg-[#7F1D3F] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center text-[11px] font-semibold text-slate-500 group-hover:text-slate-300">
                  <span>Paso {idx + 1} de 7</span>
                </div>
              </div>
            );
          })}

          {/* Final CTA card */}
          <div className="bg-gradient-to-br from-[#7F1D3F] to-[#4a0e23] p-6 rounded-2xl border border-[#7F1D3F] flex flex-col justify-between text-white">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-200">
                Puesta en Marcha
              </span>
              <h3 className="text-xl font-bold mt-2 mb-3">
                ¿Listo para estructurar tu caja?
              </h3>
              <p className="text-xs text-rose-100 leading-relaxed">
                Acompañamos a tu equipo en cada etapa de la implementación física y digital.
              </p>
            </div>

            <Link
              href="/demo"
              className="mt-6 w-full py-2.5 rounded-xl bg-white text-[#7F1D3F] hover:bg-slate-100 font-bold text-xs text-center block transition-all shadow-md"
            >
              Solicitar Demostración
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
