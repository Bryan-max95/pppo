import React from 'react';
import { FileText, ShieldCheck } from 'lucide-react';

export default function TerminosPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-[#9e2752]" />
            <span>Condiciones de Uso y Contratación</span>
          </div>
          <h1 className="text-3xl font-extrabold">Términos y Condiciones</h1>
          <p className="text-xs text-slate-400">Última actualización: Enero 2026 | BWP Software & Cybersecurity</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Alcance de la Página Web</h2>
            <p>
              El sitio web <strong>bwpretailpos.com</strong> es una plataforma de información comercial y captación de clientes administrada por <strong>BWP Software & Cybersecurity</strong>. La página web presenta las capacidades, módulos y evidencia operativa del software BWP Retail POS.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Propuestas Comerciales y Cotizaciones</h2>
            <p>
              Los montos y estimaciones generados en solicitudes de cotización corresponden a levantamientos preliminares. Las propuestas comerciales formales emitidas por BWP Software & Cybersecurity mantendrán una vigencia estipulada en el documento formal remitido al cliente.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Propiedad Intelectual</h2>
            <p>
              El software BWP Retail POS, su código fuente, logotipos, elementos gráficos, diseño de interfaz y material promocional son propiedad exclusiva de BWP Software & Cybersecurity y de su representante Ing. Bryan Josué Cárcamo Matute. Queda prohibida la reproducción total o parcial sin autorización expresa por escrito.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Garantías y Regla de Veracidad</h2>
            <p>
              BWP Software & Cybersecurity garantiza que las capacidades descritas en esta página corresponden a módulos probados e implementados en entornos comerciales reales. Todas las especificaciones técnicas son auditables durante las sesiones de demostración.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Contacto Legal</h2>
            <p>
              Para cualquier consulta legal sobre estos términos, comunicarse al correo <strong>info@bwpentesting.com</strong> o al teléfono (+504) 8828-5822 en Roatán, Islas de la Bahía, Honduras.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
