'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Calculator, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  MessageSquare,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  Cpu,
  Printer,
  Barcode,
  Vault
} from 'lucide-react';

const quoteSchema = z.object({
  company: z.string().min(2, 'Ingresa el nombre de la empresa').max(120),
  rtn: z.string().optional(),
  contactName: z.string().min(2, 'Ingresa el nombre del contacto'),
  role: z.string().min(2, 'Ingresa tu cargo o rol'),
  phone: z.string().min(8, 'Ingresa un teléfono o WhatsApp válido'),
  email: z.string().email('Correo electrónico inválido'),
  industry: z.string().min(1, 'Selecciona el rubro'),
  cityCountry: z.string().min(2, 'Ingresa ciudad y país'),
  branchesCount: z.number().min(1),
  posCount: z.number().min(1),
  adminUsersCount: z.number().min(1),
  approxProducts: z.string().min(1, 'Selecciona la cantidad estimada de productos'),
  needsMigration: z.string(),
  needsPrinter: z.string(),
  needsScanner: z.string(),
  needsDrawer: z.string(),
  deploymentMode: z.string(),
  comments: z.string().max(1000).optional(),
  privacyConsent: z.boolean().refine(v => v === true, 'Debes aceptar las condiciones de privacidad'),
});

type QuoteFormData = z.infer<typeOfQuoteSchema>;
type typeOfQuoteSchema = typeof quoteSchema;

export default function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    requestId?: string;
    message?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      branchesCount: 1,
      posCount: 2,
      adminUsersCount: 1,
      approxProducts: '100 - 500 productos',
      needsMigration: 'no_sabe',
      needsPrinter: 'ya_posee',
      needsScanner: 'ya_posee',
      needsDrawer: 'ya_posee',
      deploymentMode: 'hibrida_o_servidor_local',
      privacyConsent: false,
    },
  });

  const posCount = watch('posCount') || 1;
  const adminUsers = watch('adminUsersCount') || 1;
  const deploymentMode = watch('deploymentMode');
  const estimatedLicenseTotal = 26000 + Math.max(0, posCount - 2) * 3500 + Math.max(0, adminUsers - 1) * 3500;

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await fetch('/api/leads/quote', {
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
          message: responseData.message || 'Error al procesar la cotización.',
        });
      }
    } catch (err) {
      setSubmitResult({
        success: false,
        message: 'Error de comunicación con el servidor. Revisa tu conexión.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitResult?.success) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-6 shadow-xl max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Cotización Comercial Registrada
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900">
            ¡Hemos recibido tus requerimientos!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            Número de referencia de propuesta:{' '}
            <strong className="text-slate-900 font-mono text-base">{submitResult.requestId}</strong>.
            Un asesor comercial de BWP evaluará tus parámetros operacionales para emitir la propuesta correspondiente.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/50488285822?text=Hola%2C%20acabo%20de%20enviar%20el%20formulario%20de%20cotizaci%C3%B3n%20${submitResult.requestId}%20para%20BWP%20Retail%20POS`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Confirmar datos por WhatsApp</span>
          </a>

          <button
            onClick={() => setSubmitResult(null)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200"
          >
            Nueva cotización
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

      {/* Requirement Summary Box */}
      <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 text-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <Calculator className="w-4 h-4 text-[#9e2752]" />
          <span className="font-bold text-slate-100">Resumen de Alcance Estimado:</span>
        </div>
        <div className="flex items-center space-x-4 font-mono text-[11px]">
          <span>Cajas: <strong className="text-emerald-400">{posCount}</strong></span>
          <span>Admin: <strong className="text-emerald-400">{adminUsers}</strong></span>
          <span>Total base: <strong className="text-emerald-400">L {estimatedLicenseTotal.toLocaleString('en-US')}</strong></span>
          <span className="text-slate-400 hidden sm:inline">Modo: {deploymentMode}</span>
        </div>
      </div>

      {/* Grid 1: Datos de la Empresa y Contacto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Nombre de la Empresa / Razón Social *
          </label>
          <input
            type="text"
            {...register('company')}
            placeholder="Ej. Comercial Roatán S.A."
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
          {errors.company && <p className="text-[11px] text-rose-600 mt-1">{errors.company.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            RTN (Opcional en primera solicitud)
          </label>
          <input
            type="text"
            {...register('rtn')}
            placeholder="Ej. 0101900213821"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
        </div>
      </div>

      {/* Grid 2: Persona de Contacto & Cargo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Nombre de la Persona de Contacto *
          </label>
          <input
            type="text"
            {...register('contactName')}
            placeholder="Ej. Ing. Bryan Cárcamo"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
          {errors.contactName && <p className="text-[11px] text-rose-600 mt-1">{errors.contactName.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Cargo / Función en la Empresa *
          </label>
          <input
            type="text"
            {...register('role')}
            placeholder="Ej. Gerente General / Propietario / IT"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
          {errors.role && <p className="text-[11px] text-rose-600 mt-1">{errors.role.message}</p>}
        </div>
      </div>

      {/* Grid 3: Teléfono, Email, Ciudad, Rubro */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Teléfono / WhatsApp *
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
            placeholder="contacto@empresa.com"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
          {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Ciudad y País *
          </label>
          <input
            type="text"
            {...register('cityCountry')}
            placeholder="Roatán, Honduras"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
          {errors.cityCountry && <p className="text-[11px] text-rose-600 mt-1">{errors.cityCountry.message}</p>}
        </div>
      </div>

      {/* Rubro */}
      <div>
        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
          Rubro Comercial *
        </label>
        <select
          {...register('industry')}
          className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
        >
          <option value="">Selecciona el rubro de tu negocio...</option>
          <option value="Souvenirs y Artesanías">Souvenirs, Regalos y Turismo</option>
          <option value="Ropa y Calzado">Ropa, Calzado y Boutique</option>
          <option value="Minimarket y Conveniencia">Minimarket / Tienda de Conveniencia</option>
          <option value="Ferretería y Materiales">Ferretería y Construcción</option>
          <option value="Supermercado o Abarrotería">Supermercado o Abarrotería</option>
          <option value="Distribuidora y Mayorista">Distribuidora y Comercio Mayorista</option>
          <option value="Otro Comercio">Otro Rubro Comercial</option>
        </select>
        {errors.industry && <p className="text-[11px] text-rose-600 mt-1">{errors.industry.message}</p>}
      </div>

      {/* Parámetros Operativos */}
      <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 space-y-4">
        <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
          Parámetros Operativos del Levantamiento
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Sucursales</label>
            <input
              type="number"
              {...register('branchesCount', { valueAsNumber: true })}
              min={1}
              className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Cajas de Cobro (2 incluidas)</label>
            <input
              type="number"
              {...register('posCount', { valueAsNumber: true })}
              min={1}
              className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Admin / especiales (1 incluido)</label>
            <input
              type="number"
              {...register('adminUsersCount', { valueAsNumber: true })}
              min={1}
              className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Volumen Productos</label>
            <select
              {...register('approxProducts')}
              className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg"
            >
              <option value="Menos de 100 productos">Menos de 100 productos</option>
              <option value="100 - 500 productos">100 - 500 productos</option>
              <option value="500 - 2,000 productos">500 - 2,000 productos</option>
              <option value="Más de 2,000 productos">Más de 2,000 productos</option>
            </select>
          </div>
        </div>
      </div>

      {/* Periféricos & Requerimientos de Hardware */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div>
          <label className="block font-bold text-slate-800 uppercase tracking-wider mb-1">
            Impresora Térmica de Tickets
          </label>
          <select
            {...register('needsPrinter')}
            className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
          >
            <option value="ya_posee">Ya posee impresora compatible</option>
            <option value="requiere_cotizar">Requiere incluir impresora térmica 80mm</option>
            <option value="no_sabe">Requiere evaluación técnica</option>
          </select>
        </div>

        <div>
          <label className="block font-bold text-slate-800 uppercase tracking-wider mb-1">
            Lector de Código de Barras
          </label>
          <select
            {...register('needsScanner')}
            className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
          >
            <option value="ya_posee">Ya posee lector USB/Inalámbrico</option>
            <option value="requiere_cotizar">Requiere incluir lector de código</option>
            <option value="no_sabe">Requiere evaluación técnica</option>
          </select>
        </div>

        <div>
          <label className="block font-bold text-slate-800 uppercase tracking-wider mb-1">
            Gaveta de Efectivo
          </label>
          <select
            {...register('needsDrawer')}
            className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl"
          >
            <option value="ya_posee">Ya posee gaveta monedero</option>
            <option value="requiere_cotizar">Requiere incluir gaveta metálica</option>
            <option value="no_sabe">Requiere evaluación técnica</option>
          </select>
        </div>
      </div>

      {/* Modalidad de implementación y migración */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Carga Inicial / Migración de Productos
          </label>
          <select
            {...register('needsMigration')}
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl"
          >
            <option value="si_excel">Sí, poseo archivo Excel/Catálogo previo</option>
            <option value="si_manual">Sí, requerimos apoyo para digitación inicial</option>
            <option value="no">No, registraremos productos manualmente</option>
            <option value="no_sabe">No estoy seguro / Evaluar en llamada</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
            Modalidad Preferida de Despliegue
          </label>
          <select
            {...register('deploymentMode')}
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl"
          >
            <option value="hibrida_o_servidor_local">Servidor Local / Híbrida (Recomendada)</option>
            <option value="evaluacion_bwp">Evaluación propuesta por BWP</option>
          </select>
        </div>
      </div>

      {/* Comentarios */}
      <div>
        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
          Observaciones o Módulos Específicos de Interés
        </label>
        <textarea
          rows={3}
          {...register('comments')}
          placeholder="Escribe aquí cualquier requerimiento especial o detalle de la empresa..."
          className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
        />
      </div>

      {/* Privacy Consent */}
      <div>
        <label className="flex items-start space-x-3 text-xs text-slate-600 cursor-pointer">
          <input
            type="checkbox"
            {...register('privacyConsent')}
            className="mt-0.5 rounded border-slate-300 text-[#7F1D3F]"
          />
          <span>
            Acepto la revisión de mis datos para el levantamiento de la propuesta según la{' '}
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
            <span>Generando propuesta...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Solicitar Cotización Oficial BWP</span>
          </>
        )}
      </button>

    </form>
  );
}
