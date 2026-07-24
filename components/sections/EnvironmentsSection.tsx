import React from 'react';
import { 
  ShoppingCart, 
  Building2, 
  Check, 
  ArrowRight,
  ShieldAlert,
  Zap,
  Sliders,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function EnvironmentsSection() {
  const cajaFeatures = [
    'Búsqueda por nombre, código interno o lectura de código de barras.',
    'Carrito dinámico y cálculo automático de subtotales e impuestos.',
    'Impuestos configurables según alcance (ISV 15% / 18%).',
    'Múltiples métodos de pago habilitados (Efectivo, Tarjeta, Transferencia, Crédito).',
    'Registro automático de efectivo recibido y cálculo de cambio exacto.',
    'Impresión instantánea de comprobante tipo ticket en impresora térmica.',
    'Vincularación obligatoria a cajero, terminal, caja y turno activo.'
  ];

  const adminFeatures = [
    'Gestión de catálogo de productos, categorías, precios y márgenes de costo.',
    'Inventario centralizado y Kardex de movimientos (entradas, salidas, mermas).',
    'Registro de compras e ingreso de facturas de proveedores.',
    'Directorio de clientes y cuentas por cobrar con historial de abonos.',
    'Gestión de usuarios, roles (Cajero, Supervisor, Admin) y permisos granulados.',
    'Generación de reportes de ventas, cierres X/Z, productos top y auditoría.',
    'Configuración fiscal, CAI, rangos y parámetros documentales.'
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-[#E2E8F0] text-slate-800 text-xs font-bold shadow-xs">
            <Sliders className="w-3.5 h-3.5 text-[#7F1D3F]" />
            <span>Arquitectura Integrada del Sistema</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Dos entornos, una sola operación
          </h2>

          <p className="text-[#475569] text-base sm:text-lg">
            Caja rápida para atender y vender en mostrador. Administración completa para supervisar y tomar decisiones.
          </p>
        </div>

        {/* Environments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: BWP Retail POS Caja */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] hover:border-[#7F1D3F]/40 transition-all shadow-xs flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7F1D3F]/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#7F1D3F] text-white flex items-center justify-center shadow-md shadow-[#7F1D3F]/20">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    BWP Retail POS Caja
                  </h3>
                  <span className="text-xs font-semibold text-[#7F1D3F] uppercase tracking-wider">
                    Entorno Operativo del Cajero
                  </span>
                </div>
              </div>

              <p className="text-[#475569] text-sm leading-relaxed mb-6">
                El entorno de Caja está pensado para que el colaborador facture, cobre y atienda con la menor cantidad de pasos posible, garantizando rapidez y cero distracciones.
              </p>

              <ul className="space-y-3 mb-8">
                {cajaFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-[#0F172A]">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs font-medium text-[#475569]">
                Optimizado para pantalla táctil o teclado
              </span>
              <Link 
                href="/funciones#pos-cobro"
                className="text-xs font-bold text-[#7F1D3F] hover:text-[#651530] flex items-center space-x-1"
              >
                <span>Conocer módulo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: BWP Retail POS Administrativo */}
          <div className="bg-[#0F172A] text-white rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 flex items-center justify-center shadow-md">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    BWP Retail POS Administrativo
                  </h3>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Entorno Gerencial & Control
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                El entorno Administrativo concentra la configuración, inventario, abastecimiento, permisos y auditoría para la toma de decisiones gerenciales con información verificada.
              </p>

              <ul className="space-y-3 mb-8">
                {adminFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">
                Acceso restringido por credenciales gerenciales
              </span>
              <Link 
                href="/funciones#reportes-analitica"
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center space-x-1"
              >
                <span>Conocer administración</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
