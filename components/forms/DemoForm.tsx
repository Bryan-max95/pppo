'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  MessageSquare, 
  ShieldCheck,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  Clock
} from 'lucide-react';

const demoSchema = z.object({
  fullName: z.string().min(2, 'Ingresa tu nombre completo (mínimo 2 caracteres)').max(80),
  company: z.string().min(2, 'Ingresa el nombre de tu empresa (mínimo 2 caracteres)').max(120),
  businessType: z.string().min(1, 'Selecciona el tipo de negocio'),
  phone: z.string().min(8, 'Ingresa un número de teléfono o WhatsApp válido'),
  email: z.string().email('Ingresa un correo electrónico válido'),
  cityCountry: z.string().min(2, 'Ingresa tu ciudad y país'),
  branchesCount: z.number({ message: 'Ingresa un número válido' }).min(1, 'Mínimo 1 sucursal'),
  posCount: z.number({ message: 'Ingresa un número válido' }).min(1, 'Mínimo 1 caja'),
  currentSystem: z.string().optional(),
  primaryNeeds: z.array(z.string()).min(1, 'Selecciona al menos una necesidad principal'),
  preferredTime: z.string().optional(),
  message: z.string().max(1000, 'Máximo 1000 caracteres').optional(),
  privacyConsent: z.boolean().refine(val => val === true, 'Debes aceptar la política de privacidad'),
});

type DemoFormData = z.infer<typeof demoSchema>;

export default function DemoForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    requestId?: string;
    message?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      branchesCount: 1,
      posCount: 1,
      primaryNeeds: ['Punto de Venta / Caja'],
      privacyConsent: false,
    },
  });

  const selectedNeeds = watch('primaryNeeds') || [];

  const handleNeedToggle = (need: string) => {
    if (selectedNeeds.includes(need)) {
      setValue(
        'primaryNeeds',
        selectedNeeds.filter(n => n !== need)
      );
    } else {
      setValue('primaryNeeds', [...selectedNeeds, need]);
    }
  };

  const onSubmit = async (data: DemoFormData) => {
    setSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await fetch('/api/leads/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (res.ok && responseData.success) {
        setSubmitResult({
          success: true,
          requestId: responseData.requestId,
          message: responseData.message,
        });
      } else {
        setSubmitResult({
          success: false,
          message: responseData.message || 'Ocurrió un error al procesar tu solicitud. Inténtalo de nuevo.',
        });
      }
    } catch (err) {
      setSubmitResult({
        success: false,
        message: 'No se pudo conectar con el servidor. Verifica tu conexión a Internet.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitResult?.success) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-6 shadow-xl animate-in fade-in max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Solicitud Registrada Exitosamente
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900">
            ¡Gracias por solicitar tu demostración!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            Hemos asignado el número de solicitud{' '}
            <strong className="text-slate-900 font-mono text-base">{submitResult.requestId}</strong>.
            Nuestro equipo comercial preparará una sesión enfocada en las necesidades de tu empresa.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/50488285822?text=Hola%2C%20acabo%20de%20enviar%20la%20solicitud%20de%20demo%20${submitResult.requestId}%20para%20BWP%20Retail%20POS`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Acelerar atención vía WhatsApp</span>
          </a>

          <button
            onClick={() => setSubmitResult(null)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200"
          >
            Enviar otra solicitud
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xl space-y-6">
      
      {submitResult && !submitResult.success && (
        <div className="bg-rose-50 border border-rose-200 text-rose-800 p-4 rounded-xl text-xs flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold">Error en el envío</strong>
            <span>{submitResult.message}</span>
          </div>
        </div>
      )}

      {/* Grid 1: Identificación personal y empresa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Nombre Completo *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              {...register('fullName')}
              placeholder="Ej. Ing. Carlos Mendoza"
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F] transition-all"
            />
          </div>
          {errors.fullName && (
            <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Nombre de la Empresa *
          </label>
          <div className="relative">
            <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              {...register('company')}
              placeholder="Ej. Souvenirs Roatan Ltd"
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F] transition-all"
            />
          </div>
          {errors.company && (
            <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.company.message}</p>
          )}
        </div>

      </div>

      {/* Grid 2: Tipo de negocio & Ubicación */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Tipo de Negocio / Rubro *
          </label>
          <select
            {...register('businessType')}
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F] transition-all"
          >
            <option value="">Selecciona una opción...</option>
            <option value="Souvenirs y Artesanías">Souvenirs y Artesanías</option>
            <option value="Ropa y Calzado">Ropa, Calzado y Boutiques</option>
            <option value="Minimarket y Conveniencia">Minimarket / Tienda de Conveniencia</option>
            <option value="Ferretería y Construcción">Ferretería y Materiales</option>
            <option value="Supermercado o Pulpería">Supermercado o Abarrotería</option>
            <option value="Distribuidora y Mayorista">Distribuidora y Comercio Mayorista</option>
            <option value="Otro Comercio">Otro Rubro Comercial</option>
          </select>
          {errors.businessType && (
            <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.businessType.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Ciudad y País *
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              {...register('cityCountry')}
              placeholder="Ej. Roatán, Honduras"
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F] transition-all"
            />
          </div>
          {errors.cityCountry && (
            <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.cityCountry.message}</p>
          )}
        </div>

      </div>

      {/* Grid 3: Teléfono/WhatsApp & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Teléfono / WhatsApp *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              {...register('phone')}
              placeholder="(+504) 9999-8888"
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F] transition-all"
            />
          </div>
          {errors.phone && (
            <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Correo Electrónico *
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="email"
              {...register('email')}
              placeholder="gerencia@empresa.com"
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F] transition-all"
            />
          </div>
          {errors.email && (
            <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.email.message}</p>
          )}
        </div>

      </div>

      {/* Grid 4: Estructura operativa */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Nº de Sucursales *
          </label>
          <input
            type="number"
            {...register('branchesCount', { valueAsNumber: true })}
            min={1}
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
          {errors.branchesCount && (
            <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.branchesCount.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Nº Aprox. de Cajas *
          </label>
          <input
            type="number"
            {...register('posCount', { valueAsNumber: true })}
            min={1}
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
          {errors.posCount && (
            <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.posCount.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Sistema Actual (Opcional)
          </label>
          <input
            type="text"
            {...register('currentSystem')}
            placeholder="Ej. Excel, Cuaderno, Ninguno"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
        </div>
      </div>

      {/* Multiselect: Necesidades Principales */}
      <div>
        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
          ¿Qué aspectos deseas revisar prioritariamente en la demo? *
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            'Punto de Venta / Caja',
            'Control de Inventario',
            'Cierres de Turno',
            'Reportes Gerenciales',
            'Periféricos (Lector/Impresora)',
            'Usuarios y Permisos',
          ].map((item) => {
            const isChecked = selectedNeeds.includes(item);
            return (
              <button
                type="button"
                key={item}
                onClick={() => handleNeedToggle(item)}
                className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all border ${
                  isChecked
                    ? 'bg-[#7F1D3F] text-white border-[#7F1D3F] shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {isChecked ? '✓ ' : '+ '}
                {item}
              </button>
            );
          })}
        </div>
        {errors.primaryNeeds && (
          <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.primaryNeeds.message}</p>
        )}
      </div>

      {/* Preferencia de horario y mensaje */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Horario Preferido para Demo
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              {...register('preferredTime')}
              placeholder="Ej. Mañana 10:00 AM o Tarde"
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Comentarios Adicionales
          </label>
          <input
            type="text"
            {...register('message')}
            placeholder="Detalles adicionales sobre tu negocio..."
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
        </div>
      </div>

      {/* Privacy Consent */}
      <div className="pt-2">
        <label className="flex items-start space-x-3 text-xs text-slate-600 cursor-pointer">
          <input
            type="checkbox"
            {...register('privacyConsent')}
            className="mt-0.5 rounded border-slate-300 text-[#7F1D3F] focus:ring-[#7F1D3F]"
          />
          <span>
            Acepto el tratamiento de mis datos para la gestión comercial de la demostración según la{' '}
            <a href="/privacidad" target="_blank" className="text-[#7F1D3F] underline font-bold">
              Política de Privacidad
            </a>.
          </span>
        </label>
        {errors.privacyConsent && (
          <p className="text-[11px] text-rose-600 mt-1 font-semibold">{errors.privacyConsent.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 rounded-xl font-bold text-white bg-[#7F1D3F] hover:bg-[#651530] shadow-lg shadow-[#7F1D3F]/25 transition-all flex items-center justify-center space-x-2 text-sm disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Procesando solicitud...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Enviar Solicitud de Demostración</span>
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-slate-400">
        Respuesta garantizada por el equipo comercial de BWP Software & Cybersecurity.
      </p>

    </form>
  );
}
