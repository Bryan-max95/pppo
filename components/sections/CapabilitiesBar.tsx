import React from 'react';
import { 
  Zap, 
  Vault, 
  PackageCheck, 
  UserCheck, 
  BarChart, 
  Headphones
} from 'lucide-react';

export default function CapabilitiesBar() {
  const capabilities = [
    {
      title: 'Facturación Ágil',
      desc: 'Búsqueda instantánea y emisión de comprobantes tipo ticket.',
      icon: Zap,
    },
    {
      title: 'Control de Caja & Turnos',
      desc: 'Fondo inicial, cortes X/Z y conciliación por método de pago.',
      icon: Vault,
    },
    {
      title: 'Inventario Centralizado',
      desc: 'Actualización automática de existencias con cada venta.',
      icon: PackageCheck,
    },
    {
      title: 'Usuarios & Permisos',
      desc: 'Roles estructurados y autorizaciones por clave de supervisor.',
      icon: UserCheck,
    },
    {
      title: 'Reportes Administrativos',
      desc: 'Consolidado de ventas, productos más vendidos y cierres.',
      icon: BarChart,
    },
    {
      title: 'Soporte de Implementación',
      desc: 'Configuración, carga inicial, calibración y capacitación.',
      icon: Headphones,
    },
  ];

  return (
    <section className="py-10 bg-[#0F172A] border-y border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7F1D3F] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7F1D3F]/20 text-[#9e2752] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 text-rose-300" />
                </div>
                <h3 className="text-xs font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-400 leading-tight">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
