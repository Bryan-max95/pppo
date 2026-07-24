'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Headphones, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Paperclip,
  Building,
  User,
  Phone,
  Mail,
  ShieldCheck
} from 'lucide-react';

const supportSchema = z.object({
  company: z.string().min(2, 'Ingresa el nombre de la empresa'),
  userName: z.string().min(2, 'Ingresa tu nombre completo'),
  phone: z.string().min(8, 'Ingresa un teléfono o WhatsApp'),
  email: z.string().email('Correo electrónico inválido'),
  licenseId: z.string().optional(),
  affectedModule: z.string().min(1, 'Selecciona el módulo afectado'),
  priority: z.string().min(1, 'Selecciona la prioridad perceived'),
  description: z.string().min(10, 'Describe la incidencia con al menos 10 caracteres').max(1500),
  privacyConsent: z.boolean().refine(v => v === true, 'Debes aceptar las condiciones de servicio'),
});

type SupportFormData = z.infer<typeof supportSchema>;

export default function SupportForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    ticketId?: string;
    message?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SupportFormData>({
    resolver: zodResolver(supportSchema),
    defaultValues: {
      priority: 'media',
      affectedModule: 'Punto de Venta / Caja',
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: SupportFormData) => {
    setSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (res.ok && responseData.success) {
        setSubmitResult({
          success: true,
          ticketId: responseData.ticketId,
          message: responseData.message,
        });
      } else {
        setSubmitResult({
          success: false,
          message: responseData.message || 'Error al enviar el ticket de soporte.',
        });
      }
    } catch (err) {
      setSubmitResult({
        success: false,
        message: 'No se pudo contactar con el servidor de soporte.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitResult?.success) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-6 shadow-xl max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Ticket de Soporte Creado
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900">
            ¡Incidencia Registrada!
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Tu reporte fue registrado con el código Ticket{' '}
            <strong className="text-slate-900 font-mono font-bold text-base">{submitResult.ticketId}</strong>.
            Nuestro equipo técnico revisará el caso según los acuerdos de servicio vigentes para tu empresa.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-center gap-3">
          <button
            onClick={() => setSubmitResult(null)}
            className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800"
          >
            Registrar otra consulta
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
          <span>{submitResult.message}</span>
        </div>
      )}

      {/* Grid 1: Empresa & Usuario */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Empresa / Cliente *
          </label>
          <input
            type="text"
            {...register('company')}
            placeholder="Ej. New Souvenirs Roatan"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
          {errors.company && <p className="text-[11px] text-rose-600 mt-1">{errors.company.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Nombre del Usuario *
          </label>
          <input
            type="text"
            {...register('userName')}
            placeholder="Ej. Carlos M."
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
          {errors.userName && <p className="text-[11px] text-rose-600 mt-1">{errors.userName.message}</p>}
        </div>
      </div>

      {/* Grid 2: Teléfono & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Teléfono de Contacto *
          </label>
          <input
            type="text"
            {...register('phone')}
            placeholder="(+504) 8828-5822"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
          {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Correo Electrónico *
          </label>
          <input
            type="email"
            {...register('email')}
            placeholder="usuario@empresa.com"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
          {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      {/* Grid 3: Licencia & Módulo & Prioridad */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            ID Licencia / Cliente (Opcional)
          </label>
          <input
            type="text"
            {...register('licenseId')}
            placeholder="Ej. BWP-LIC-882"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Módulo Afectado *
          </label>
          <select
            {...register('affectedModule')}
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          >
            <option value="Punto de Venta / Caja">Punto de Venta / Caja</option>
            <option value="Cierres de Turno">Cierres de Turno</option>
            <option value="Inventario y Productos">Inventario y Productos</option>
            <option value="Impresora / Periféricos">Impresora / Periféricos</option>
            <option value="Reportes y Facturación">Reportes y Facturación</option>
            <option value="Usuarios y Permisos">Usuarios y Permisos</option>
            <option value="Otro">Otro Componente</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Prioridad Percibida *
          </label>
          <select
            {...register('priority')}
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          >
            <option value="baja">Baja — Consulta o mejora</option>
            <option value="media">Media — Inconveniente parcial</option>
            <option value="alta">Alta — Impacta operación de caja</option>
            <option value="critica">Crítica — Caja detenida</option>
          </select>
        </div>
      </div>

      {/* Descripción */}
      <div>
        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
          Descripción Detallada de la Consulta o Incidencia *
        </label>
        <textarea
          rows={4}
          {...register('description')}
          placeholder="Explica paso a paso qué ocurrió, mensaje de pantalla si existe y qué terminal o usuario se encuentra involucrado..."
          className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
        />
        {errors.description && <p className="text-[11px] text-rose-600 mt-1">{errors.description.message}</p>}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start space-x-3 text-xs text-slate-600 cursor-pointer">
          <input
            type="checkbox"
            {...register('privacyConsent')}
            className="mt-0.5 rounded border-slate-300 text-[#7F1D3F]"
          />
          <span>
            Confirmo ser usuario o representante autorizado de la empresa para solicitar soporte técnico.
          </span>
        </label>
        {errors.privacyConsent && <p className="text-[11px] text-rose-600 mt-1">{errors.privacyConsent.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 text-sm disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Registrando ticket...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Enviar Reporte de Soporte</span>
          </>
        )}
      </button>

    </form>
  );
}
