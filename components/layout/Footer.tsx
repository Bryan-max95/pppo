import React from 'react';
import Link from 'next/link';
import { 
  Store, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink,
  MessageCircle
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#7F1D3F] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#7F1D3F]/30">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">BWP </span>
                <span className="text-xl font-extrabold text-[#9e2752] tracking-tight">RETAIL POS</span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Plataforma empresarial de punto de venta, facturación, caja, inventario y administración comercial para negocios que buscan agilidad operativa e información confiable.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Respaldo de ciberseguridad por <a href="https://bwpentesting.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-emerald-300">BWP Pentesting</a></span>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://wa.me/50488285822?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20BWP%20Retail%20POS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: (+504) 8828-5822</span>
              </a>
            </div>
          </div>

          {/* Col 3: Producto */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Nuestros Módulos
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/funciones#pos-cobro" className="hover:text-white transition-colors">
                  Punto de Venta & Cobro
                </Link>
              </li>
              <li>
                <Link href="/plataforma" className="hover:text-white transition-colors">
                  Recorrido de la Plataforma
                </Link>
              </li>
              <li>
                <Link href="/funciones#caja-turnos" className="hover:text-white transition-colors">
                  Caja & Cierres de Turno
                </Link>
              </li>
              <li>
                <Link href="/funciones#facturacion-documentos" className="hover:text-white transition-colors">
                  Facturación & Comprobantes
                </Link>
              </li>
              <li>
                <Link href="/funciones#productos-inventario" className="hover:text-white transition-colors">
                  Inventario & Kardex
                </Link>
              </li>
              <li>
                <Link href="/funciones#compras-proveedores" className="hover:text-white transition-colors">
                  Compras & Proveedores
                </Link>
              </li>
              <li>
                <Link href="/funciones#reportes-analitica" className="hover:text-white transition-colors">
                  Reportes & Analítica
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Soluciones & Empresa */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Soluciones & Casos
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/soluciones#souvenirs-regalos" className="hover:text-white transition-colors">
                  Tiendas de Souvenirs
                </Link>
              </li>
              <li>
                <Link href="/soluciones#ropa-calzado" className="hover:text-white transition-colors">
                  Ropa & Boutique
                </Link>
              </li>
              <li>
                <Link href="/soluciones#minimarkets-conveniencia" className="hover:text-white transition-colors">
                  Minimarkets & Conveniencia
                </Link>
              </li>
              <li>
                <Link href="/soluciones#ferreterias-materiales" className="hover:text-white transition-colors">
                  Ferreterías & Materiales
                </Link>
              </li>
              <li>
                <Link href="/implementaciones" className="hover:text-white transition-colors">
                  Caso New Souvenirs Roatan
                </Link>
              </li>
              <li>
                <Link href="/implementacion" className="hover:text-white transition-colors">
                  Metodología de Implementación
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-white transition-colors">
                  Sobre la empresa BWP
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contacto Directo */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Contacto Comercial
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#9e2752] mt-1 shrink-0" />
                <span>Roatán, Islas de la Bahía, Honduras</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#9e2752] shrink-0" />
                <span>(+504) 8828-5822</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#9e2752] shrink-0" />
                <a href="mailto:info@bwpentesting.com" className="hover:text-white transition-colors">
                  info@bwpentesting.com
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <Link
                href="/demo"
                className="w-full px-4 py-2.5 rounded-lg bg-[#7F1D3F] hover:bg-[#651530] text-white font-semibold text-xs text-center block transition-all shadow-sm"
              >
                Solicitar Demostración
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Credits Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="space-y-1 text-center md:text-left">
            <p>
              © {currentYear} <strong>BWP Retail POS</strong>. Todos los derechos reservados.
            </p>
            <p className="text-slate-400">
              Un producto desarrollado por BWP. Servicios de seguridad en <a href="https://bwpentesting.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-white">bwpentesting.com</a>.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/privacidad" className="hover:text-slate-300 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-slate-300 transition-colors">
              Términos del Sitio
            </Link>
            <Link href="/soporte" className="hover:text-slate-300 transition-colors">
              Portal de Soporte
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
