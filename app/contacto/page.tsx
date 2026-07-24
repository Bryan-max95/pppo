import React from 'react';
import ContactForm from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin, Globe, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export default function ContactoPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#7F1D3F] text-white text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Atención Comercial y Consultas</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contacto BWP Retail POS
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Ponte en contacto con nuestro equipo para solicitar información, agendar reuniones comerciales o realizar consultas generales.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900">
                Información de Contacto Oficial
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-[#7F1D3F] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Ubicación Comercial:</strong>
                    <span>Roatán, Islas de la Bahía, Honduras</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-[#7F1D3F] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Teléfono & WhatsApp:</strong>
                    <a href="tel:+50488285822" className="text-[#7F1D3F] hover:underline font-mono font-bold">
                      (+504) 8828-5822
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-[#7F1D3F] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Correo Electrónico:</strong>
                    <a href="mailto:info@bwpentesting.com" className="text-[#7F1D3F] hover:underline">
                      info@bwpentesting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-[#7F1D3F] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Sitio Web Oficial:</strong>
                    <span className="font-mono text-slate-600">bwpretailpos.com</span>
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <strong className="font-bold text-slate-900 block">Empresa Desarrolladora:</strong>
                <p>BWP Software & Cybersecurity</p>
                <p>Representante: Ing. Bryan Josué Cárcamo Matute</p>
              </div>

            </div>

            <a
              href="https://wa.me/50488285822?text=Hola%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20BWP%20Retail%20POS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Iniciar chat directo en WhatsApp</span>
            </a>

          </div>

          {/* Right Form Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Envíanos tu Mensaje
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Completa los datos a continuación y nos pondremos en contacto contigo a la brevedad posible.
            </p>
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
