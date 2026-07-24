export interface ImplementationCase {
  id: string;
  companyName: string;
  location: string;
  industry: string;
  projectTitle: string;
  logo?: string;
  logoFit?: 'cover' | 'contain';
  keyOutcome: string;
  narrativeDescription: string;
  operationalChallenge: string;
  implementedSolution: string;
  technologies: string[];
  peripheralsAndHardware: string[];
  deliveredCapabilities: string[];
  isAuthorized: boolean;
  isFeatured: boolean;
  badge: string;
}

export const IMPLEMENTATION_CASES: ImplementationCase[] = [
  {
    id: 'new-souvenirs-roatan',
    companyName: 'New Souvenirs Roatan',
    location: 'Roatán, Islas de la Bahía, Honduras',
    industry: 'Retail de Souvenirs & Productos Turísticos',
    projectTitle: 'Implementación de BWP Retail POS en New Souvenirs Roatan',
    logo: '/media/new-souvenirs-roatan-logo.jpg',
    keyOutcome: 'Operación comercial centralizada con mayor trazabilidad sobre ventas, cobros, caja y existencias.',
    narrativeDescription: 'New Souvenirs Roatan opera en una zona de alto movimiento turístico en Roatán. Se implementó la plataforma BWP Retail POS integrando el módulo de caja para atención ágil, control de arqueos de dinero, inventario de variedad de recuerdos y supervisión administrativa.',
    operationalChallenge: 'Centralizar una operación minorista con alta variedad de prendas, artesanías y accesorios turísticos, donde se requiere velocidad de cobro ante la llegada de visitantes y un estricto control sobre el flujo de efectivo e inventario disponible.',
    implementedSolution: 'Despliegue e instalación de BWP Retail POS configurado con terminal de punto de venta, módulo ampliado de cobro, catálogo estructurado de productos, gestión de usuarios por rol, arqueos de caja por turno y panel de consulta gerencial.',
    technologies: [
      'BWP Retail POS Application',
      'Base de datos estructurada',
      'Módulo BWP POS Caja',
      'Módulo BWP POS Administrativo'
    ],
    peripheralsAndHardware: [
      'Terminal POS de mostrador',
      'Lector de código de barras',
      'Impresora térmica de comprobantes 80mm',
      'Gaveta de efectivo automática'
    ],
    deliveredCapabilities: [
      'Búsqueda inmediata de artículos por código de barras e ítem.',
      'Control de fondo inicial, movimientos y cierre Z por turno.',
      'Emisión de comprobantes tipo ticket detallados.',
      'Administración de catálogo con precios y existencias.',
      'Bitácora de usuarios para control operativo de colaboradores.'
    ],
    isAuthorized: true,
    isFeatured: true,
    badge: 'Caso Destacado en Roatán'
  },
  {
    id: 'zarivas',
    companyName: 'Zarivas',
    location: 'Honduras',
    industry: 'Tienda, Impresión & Servicios',
    projectTitle: 'Implementación de BWP Retail POS en Zarivas',
    logo: '/media/zarivas-logo.png',
    logoFit: 'contain',
    keyOutcome: 'BWP Retail POS se encuentra implementado y en uso como apoyo para la operación comercial de Zarivas.',
    narrativeDescription: 'Zarivas es otro de los clientes que utiliza BWP Retail POS para apoyar la gestión diaria de su tienda y sus servicios.',
    operationalChallenge: 'Organizar en un solo punto la atención comercial de una operación que combina productos de tienda con servicios de impresión y otras solicitudes de clientes.',
    implementedSolution: 'Implementación de BWP Retail POS adaptada al flujo comercial de Zarivas, con herramientas para registrar ventas, consultar productos y mantener mayor orden sobre la operación diaria.',
    technologies: [
      'BWP Retail POS',
      'Módulo de punto de venta',
      'Gestión administrativa'
    ],
    peripheralsAndHardware: [
      'Terminal de punto de venta',
      'Configuración adaptada a la operación del cliente'
    ],
    deliveredCapabilities: [
      'Registro centralizado de ventas.',
      'Consulta y organización de productos y servicios.',
      'Control operativo desde el punto de venta.',
      'Acceso a información comercial para seguimiento administrativo.'
    ],
    isAuthorized: true,
    isFeatured: true,
    badge: 'Cliente Activo BWP Retail POS'
  },
  {
    id: 'comercio-retail-multicaja',
    companyName: 'Comercio Minorista de Variedades',
    location: 'Honduras',
    industry: 'Minimarket & Tienda de Conveniencia',
    projectTitle: 'Estandarización de Punto de Venta y Control de Inventarios',
    keyOutcome: 'Reducción de filas en caja y auditorías de inventario en tiempo real.',
    narrativeDescription: 'Estandarización del proceso de cobro en punto de venta con lectura intensiva de códigos de barras, cuadres automáticos al cierre de turno y catálogo centralizado de existencias.',
    operationalChallenge: 'Cuadres manuales de caja al final del día con inconsistencias periódicas y falta de control sobre las entradas y salidas de mercancía.',
    implementedSolution: 'Configuración de BWP Retail POS con perfil de cajero restringido, validación obligatoria de supervisor para anulaciones e historial completo de cierres de caja.',
    technologies: [
      'BWP Retail POS Caja',
      'BWP Retail POS Administrativo'
    ],
    peripheralsAndHardware: [
      'Lector omnidireccional',
      'Impresora térmica USB/Red',
      'Gaveta metálica'
    ],
    deliveredCapabilities: [
      'Lectura veloz de códigos de barras.',
      'Control de cierres con reporte por método de pago.',
      'Alertas de inventario mínimo.'
    ],
    isAuthorized: true,
    isFeatured: false,
    badge: 'Caso Retail'
  }
];
