import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';

export default function PrivacidadPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#9e2752]" />
            <span>Documento Legal Oficial</span>
          </div>
          <h1 className="text-3xl font-extrabold">Política de Privacidad</h1>
          <p className="text-xs text-slate-400">Última actualización: Enero 2026 | BWP Software & Cybersecurity</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Entidad Responsable</h2>
            <p>
              La presente Política de Privacidad regula el tratamiento de los datos personales captados a través del sitio web oficial de <strong>BWP Retail POS</strong> (bwpretailpos.com), operado por <strong>BWP Software & Cybersecurity</strong>, representada por el Ing. Bryan Josué Cárcamo Matute, con sede comercial en Roatán, Islas de la Bahía, Honduras.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Datos Recopilados y Su Finalidad</h2>
            <p>
              Los datos recopilados mediante los formularios de solicitud de demostración, cotización, contacto y soporte técnico (incluyendo nombre, correo electrónico, teléfono/WhatsApp, nombre de empresa, rubro comercial y número de sucursales) son utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Coordinar las sesiones de demostración del sistema BWP Retail POS.</li>
              <li>Elaborar propuestas de cotización comercial y evaluación técnica de hardware.</li>
              <li>Atender incidencias y tickets de soporte de clientes activos.</li>
              <li>Comunicación comercial directa autorizada por el usuario.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Confidencialidad Comercial de Datos</h2>
            <p>
              BWP Software & Cybersecurity no comercializa, alquila ni cede bajo ninguna circunstancia la información de contacto o datos de clientes a terceros. La información proporcionada durante el proceso de cotización o demostración mantiene estricto carácter confidencial.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Seguridad en el Manejo de la Información</h2>
            <p>
              Implementamos controles de ciberseguridad y cifrado conforme a nuestros estándares institucionales para garantizar que la información suministrada no sea interceptada ni vulnerada.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Derechos del Usuario</h2>
            <p>
              El usuario puede solicitar en cualquier momento la actualización, rectificación o eliminación de sus datos comerciales enviando una comunicación escrita a <strong>info@bwpentesting.com</strong> o mediante el teléfono (+504) 8828-5822.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
