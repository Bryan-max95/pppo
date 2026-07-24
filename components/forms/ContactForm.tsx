'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Ingresa tu nombre'),
  company: z.string().min(2, 'Ingresa tu empresa'),
  phone: z.string().min(8, 'Ingresa un teléfono o WhatsApp'),
  email: z.string().email('Correo electrónico inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      if (res.ok && resData.success) {
        setSuccess(true);
        reset();
      } else {
        setErrorMsg(resData.message || 'Error al enviar el mensaje.');
      }
    } catch (err) {
      setErrorMsg('No se pudo enviar el mensaje. Revisa tu conexión.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl text-center space-y-3">
        <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
        <h4 className="font-bold text-base">¡Mensaje Enviado con Éxito!</h4>
        <p className="text-xs text-emerald-800">
          Gracias por contactar a BWP Software & Cybersecurity. Nos comunicaremos contigo a la brevedad.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-xs font-bold text-emerald-700 underline mt-2"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {errorMsg && (
        <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Nombre *</label>
          <input
            type="text"
            {...register('fullName')}
            placeholder="Tu nombre completo"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
          {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Empresa *</label>
          <input
            type="text"
            {...register('company')}
            placeholder="Nombre de la empresa"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
          {errors.company && <p className="text-[11px] text-rose-600 mt-1">{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Teléfono / WhatsApp *</label>
          <input
            type="text"
            {...register('phone')}
            placeholder="(+504) 8828-5822"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
          {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Correo Electrónico *</label>
          <input
            type="email"
            {...register('email')}
            placeholder="info@empresa.com"
            className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
          />
          {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Mensaje *</label>
        <textarea
          rows={3}
          {...register('message')}
          placeholder="Escribe tu mensaje o consulta general aquí..."
          className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#7F1D3F]"
        />
        {errors.message && <p className="text-[11px] text-rose-600 mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 rounded-xl font-bold text-white bg-[#7F1D3F] hover:bg-[#651530] transition-all flex items-center justify-center space-x-2 text-xs"
      >
        {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        <span>Enviar Mensaje</span>
      </button>
    </form>
  );
}
