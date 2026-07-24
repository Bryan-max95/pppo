import React from 'react';
import {
  ShieldCheck,
  UserCheck,
  MapPin,
  Building,
  Award,
  ArrowUpRight,
  ServerCog,
  Workflow,
  Headphones,
  Code2,
  MonitorSmartphone,
  Database,
  Cable,
} from 'lucide-react';

export default function NosotrosPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#7F1D3F] text-white text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>Empresa y Equipo Responsable</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Tecnología empresarial desarrollada por BWP
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Creamos, implementamos y acompañamos soluciones de software para que las empresas operen con información confiable, procesos claros y una infraestructura preparada para crecer.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        {/* Company Identity Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
            <div>
              <span className="text-xs font-bold text-[#7F1D3F] uppercase tracking-wider block mb-1">
                Firma Desarrolladora & Titular del Producto
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                BWP Software & Cybersecurity
              </h2>
            </div>

            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold">
              <MapPin className="w-4 h-4 text-[#7F1D3F]" />
              <span>Roatán, Islas de la Bahía, Honduras</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Misión Comercial y Técnica
              </h3>
              <p>
                Proveer a las empresas comerciales y de retail plataformas de software estables, seguras y adaptadas a la legislación e impuestos locales. BWP Retail POS nace para eliminar la vulnerabilidad, lentitud y falta de control en los puntos de venta.
              </p>
              <p>
                Combinamos ingeniería de software robusta con arquitectura de datos orientada a prevenir pérdidas, cuadrar efectivo y agilizar la atención de clientes.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Liderazgo Profesional
              </h3>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#7F1D3F] text-white flex items-center justify-center font-bold text-sm">
                    BC
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">
                      Ing. Bryan Josué Cárcamo Matute
                    </h4>
                    <p className="text-[11px] text-slate-500 font-semibold">
                      Representante Legal y Director Técnico
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 pt-2 border-t border-slate-200">
                  Profesional en ingeniería de sistemas y ciberseguridad, responsable del diseño, arquitectura de seguridad y soporte comercial de BWP Retail POS.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Core Commitments */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <h3 className="text-xl font-bold text-white text-center">
            Nuestros Compromisos de Servicio y Garantía
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h4 className="font-bold text-white text-sm">Seguridad e Integridad</h4>
              <p>Protección contra desfasajes de inventario y manipulaciones en registros de caja.</p>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-2">
              <UserCheck className="w-6 h-6 text-emerald-400" />
              <h4 className="font-bold text-white text-sm">Acompañamiento Local</h4>
              <p>Soporte directo por personal técnico con presencia en Roatán y atención remota nacional.</p>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-2">
              <Award className="w-6 h-6 text-emerald-400" />
              <h4 className="font-bold text-white text-sm">Sin Falsas Promesas</h4>
              <p>Promovemos únicamente módulos construidos y verificados operativamente.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            [Workflow, 'Entendemos la operación', 'Antes de instalar, revisamos cajas, usuarios, inventario, documentos, red y responsabilidades internas.'],
            [ServerCog, 'Implementamos en contexto', 'Configuramos BWP Retail POS sobre la infraestructura acordada, validando servidor, estaciones, periféricos y respaldos.'],
            [Headphones, 'Acompañamos después', 'El soporte se define según el tamaño de la empresa, criticidad de la operación y nivel de atención requerido.'],
          ].map(([Icon, title, copy]) => {
            const CardIcon = Icon as typeof Workflow;
            return (
              <div key={String(title)} className="rounded-3xl border border-slate-200 bg-white p-7">
                <CardIcon className="h-8 w-8 text-[#a70817]" />
                <h3 className="mt-5 text-lg font-black text-slate-950">{String(title)}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{String(copy)}</p>
              </div>
            );
          })}
        </div>

        {/* BWP Software */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[1.15fr_.85fr]">
            <div className="p-8 sm:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#7F1D3F]/10 px-3 py-1.5 text-xs font-black uppercase tracking-[.16em] text-[#7F1D3F]">
                <Code2 className="h-4 w-4" />
                Desarrollo de software
              </span>

              <h3 className="mt-5 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
                BWP Software desarrolla soluciones digitales para empresas
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                BWP Retail POS es uno de los productos desarrollados por BWP Software. La empresa también diseña,
                desarrolla e integra software a la medida para pequeñas, medianas y grandes organizaciones que
                necesitan digitalizar procesos, conectar información y operar con mayor control.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                El servicio puede abarcar desde el análisis de la necesidad y la arquitectura técnica hasta el
                desarrollo, implementación, capacitación, mantenimiento y evolución de la solución.
              </p>

              <a
                href="https://www.bwpsoftware.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#7F1D3F] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#651530]"
              >
                Visitar bwpsoftware.com
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>

            <div className="bg-slate-950 p-8 text-white sm:p-10">
              <p className="text-xs font-black uppercase tracking-[.18em] text-emerald-400">
                Capacidades de desarrollo
              </p>

              <div className="mt-6 space-y-5">
                {[
                  [MonitorSmartphone, 'Plataformas web y aplicaciones', 'Sistemas empresariales accesibles desde web, escritorio y dispositivos móviles.'],
                  [Database, 'Sistemas administrativos', 'Soluciones para inventario, facturación, operaciones, reportes y gestión de información.'],
                  [Cable, 'Integraciones empresariales', 'Conexión entre plataformas, bases de datos y servicios para evitar procesos duplicados.'],
                  [ServerCog, 'Software a la medida', 'Herramientas diseñadas alrededor de los procesos, usuarios y objetivos de cada empresa.'],
                ].map(([Icon, title, copy]) => {
                  const ServiceIcon = Icon as typeof Code2;
                  return (
                    <div key={String(title)} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <ServiceIcon className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{String(title)}</h4>
                        <p className="mt-1 text-sm leading-6 text-slate-400">{String(copy)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <span className="text-xs font-black uppercase tracking-[.18em] text-[#a70817]">Unidad especializada</span>
              <h3 className="mt-3 text-2xl font-black text-slate-950">Servicios profesionales de ciberseguridad</h3>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">Las evaluaciones de seguridad, pruebas de penetración y servicios especializados se presentan desde el sitio oficial de BWP Pentesting.</p>
            </div>
            <a href="https://bwpentesting.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-bold text-white hover:bg-[#a70817]">
              Visitar bwpentesting.com <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}
