export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'tecnico' | 'comercial';
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿BWP Retail POS es solamente una caja registradora?',
    answer: 'No. BWP Retail POS es un sistema empresarial integral que incluye dos entornos articulados: el entorno de Caja/POS para cobros y facturación rápida, y el entorno Administrativo para gestionar productos, existencias, compras, clientes, usuarios, cierres y reportes estratégicos.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: '¿Puede utilizarse en más de una caja o estación?',
    answer: 'Sí. BWP Retail POS permite operar desde una o múltiples estaciones de cobro conectadas a una base de datos centralizada. La cantidad de terminales y la arquitectura técnica se definen durante la evaluación e implementación con nuestro equipo.',
    category: 'general'
  },
  {
    id: 'faq-3',
    question: '¿Funciona sin conexión a Internet?',
    answer: 'La respuesta depende de la arquitectura instalada. Una implementación con servidor local o híbrida permite operar la caja y realizar ventas dentro de la red del negocio sin depender de Internet; las funciones externas o de sincronización remota utilizan conectividad. Durante la demostración se evalúa la modalidad propuesta para tu empresa.',
    category: 'tecnico'
  },
  {
    id: 'faq-4',
    question: '¿Imprime facturas o comprobantes tipo ticket?',
    answer: 'Sí. El sistema está optimizado para imprimir comprobantes tipo ticket mediante impresoras térmicas compatibles (formatos de 80mm o 58mm), incorporando la información de la empresa, cliente, desglose de impuestos y correlativos configurados.',
    category: 'tecnico'
  },
  {
    id: 'faq-5',
    question: '¿Puede abrir la gaveta de efectivo automáticamente?',
    answer: 'Sí. La apertura automática de la gaveta de dinero se activa al confirmar un cobro en efectivo en el sistema, siempre que la gaveta esté conectada mediante cable RJ11 a una impresora térmica compatible que soporte el pulso de apertura.',
    category: 'tecnico'
  },
  {
    id: 'faq-6',
    question: '¿Cómo controla el inventario?',
    answer: 'Cada venta procesada en el módulo de Caja rebaja automáticamente las existencias en el inventario. Además, el módulo Administrativo permite registrar compras de proveedores, entradas, salidas y ajustes manuales con motivo justificado, ofreciendo un historial (Kardex) detallado.',
    category: 'general'
  },
  {
    id: 'faq-7',
    question: '¿Maneja usuarios y permisos diferenciados?',
    answer: 'Sí. Puedes definir perfiles con permisos específicos como Cajero, Supervisor de Caja, Administrador e IT. Los cajeros no tienen acceso a modificar costos o ver reportes gerenciales, y las acciones sensibles (como anulaciones o descuentos) requieren autorización.',
    category: 'general'
  },
  {
    id: 'faq-8',
    question: '¿Se puede adaptar a las necesidades de mi negocio?',
    answer: 'Sí. Realizamos una evaluación previa del flujo operativo de tu comercio. Las adaptaciones estándar se configuran durante la carga inicial, y requerimientos especiales se evalúan en el alcance de la propuesta comercial.',
    category: 'comercial'
  },
  {
    id: 'faq-9',
    question: '¿Incluye instalación, carga de productos y capacitación?',
    answer: 'Sí, según la propuesta comercial aprobada. Nuestro servicio puede incluir la configuración inicial del sistema, acompañamiento en la carga del catálogo de productos, calibración de equipos periféricos y capacitación al personal de caja y administración.',
    category: 'comercial'
  },
  {
    id: 'faq-10',
    question: '¿Cuál es el precio de BWP Retail POS?',
    answer: 'La licencia base tiene un valor de USD 1,000 o L 26,000 e incluye un panel administrativo y dos cajas. Cada caja adicional cuesta L 3,500. Habilitar un usuario especial adicional, como contador o supervisor, también cuesta L 3,500.',
    category: 'comercial'
  }
];
