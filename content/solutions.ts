export interface BusinessSolution {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  shortDesc: string;
  industryOverview: string;
  keyChallenges: string[];
  recommendedModules: string[];
  keyBenefits: string[];
  idealEquipment: string[];
  sampleCaseRef?: string;
  badge: string;
}

export const BUSINESS_SOLUTIONS: BusinessSolution[] = [
  {
    id: 'souvenirs-regalos',
    title: 'Souvenirs, Artesanías y Regalos',
    subtitle: 'Cobro veloz y control preciso para tiendas turísticas y comercios de alto flujo',
    iconName: 'Gift',
    shortDesc: 'Diseñado para comercios con amplia diversidad de artículos turísticos, alta rotación de inventarios y necesidad de atender cruceristas o visitantes con rapidez.',
    industryOverview: 'Las tiendas de souvenirs en zonas turísticas como Roatán enfrentan picos de tráfico intenso cuando llegan cruceros o tours. La velocidad de lectura y cobro es vital para no perder ventas, mientras que la variedad de prendas, artesanías y accesorios requiere categorías muy claras.',
    keyChallenges: [
      'Largas filas cuando desembarcan grupos de turistas o cruceros.',
      'Dificultad para etiquetar y buscar artesanías o recuerdos sin código de barras tradicional.',
      'Control de existencias en tiendas con miles de ítems pequeños o variados.',
      'Múltiples formas de pago (efectivo dólares/lempiras, tarjetas internacionales).'
    ],
    recommendedModules: [
      'Punto de Venta y Cobro rápido con soporte para lector.',
      'Categorización detallada de productos e inventarios.',
      'Control de caja y turnos por cajero.',
      'Reportes de artículos con mayor rotación diaria.'
    ],
    keyBenefits: [
      'Atención ágil que evita la cancelación de compras por tiempo de espera.',
      'Trazabilidad exacta de prendas, recuerdos y artesanías vendidas por turno.',
      'Arqueos de caja confiables al cerrar la jornada de cruceros.',
      'Generación de tickets detallados para satisfacción del turista.'
    ],
    idealEquipment: [
      'Terminal POS con pantalla táctil o computadora de escritorio.',
      'Lector de código de barras unidireccional o omnidireccional.',
      'Impresora térmica de tickets de 80mm.',
      'Gaveta de dinero metálica reforzada.'
    ],
    sampleCaseRef: 'New Souvenirs Roatan',
    badge: 'Turismo & Retail'
  },
  {
    id: 'ropa-calzado',
    title: 'Ropa, Calzado y Accesorios',
    subtitle: 'Organización de inventario, promociones y atención en mostrador',
    iconName: 'ShoppingBag',
    shortDesc: 'Ideal para boutiques, tiendas de ropa y calzado que necesitan catálogo estructurado por prendas, precios y promociones autorizadas.',
    industryOverview: 'El sector textil y de accesorios requiere agilidad al facturar y rigor al administrar precios. Las tiendas necesitan aplicar promociones o descuentos especiales sin descuidar el margen de ganancia ni el control administrativo.',
    keyChallenges: [
      'Manejo de códigos por lote o referencias de proveedores.',
      'Supervisión de descuentos otorgados por el personal de ventas.',
      'Inventario desactualizado que genera pérdida de prendas no contabilizadas.',
      'Falta de historial de ventas por vendedor o por temporada.'
    ],
    recommendedModules: [
      'Productos e Inventario con categorías de moda.',
      'Usuarios y Permisos con autorización para descuentos.',
      'Cotizaciones para pedidos ejecutivos o uniformes.',
      'Reportes de productos más vendidos por temporada.'
    ],
    keyBenefits: [
      'Garantiza que todo descuento requiera la clave de supervisor en pantalla.',
      'Proporciona visibilidad del stock disponible para evitar sobrecompras.',
      'Facilita auditorías de inventario sorpresa con lecturas de etiquetas.'
    ],
    idealEquipment: [
      'Lector de código de barras láser rápido.',
      'Impresora de tickets térmica.',
      'Gaveta conectada a la impresora.'
    ],
    badge: 'Moda & Retail'
  },
  {
    id: 'minimarkets-conveniencia',
    title: 'Minimarkets y Tiendas de Conveniencia',
    subtitle: 'Atención continua con alto volumen de escaneo y turnos rotativos',
    iconName: 'Store',
    shortDesc: 'Especialmente preparado para pulperías grandes, minimarkets y conveniencia donde la lectura de barras y el arqueo por turno son indispensables.',
    industryOverview: 'Los minimarkets procesan cientos de transacciones diarias con múltiples ítems por carrito. Exigen escaneo continuo en fracción de segundo, control de fondo de caja por cajero y actualización instantánea de existencias.',
    keyChallenges: [
      'Filas de clientes en horas pico de consumo local.',
      'Manejo de múltiples turnos de cajeros durante el día.',
      'Diferencias de caja por entregas de efectivo no registradas.',
      'Control de productos perecederos o de alta rotación.'
    ],
    recommendedModules: [
      'Punto de Venta con alta velocidad de escaneo.',
      'Caja y Turnos con cierres por cajero.',
      'Compras e ingreso de productos por facturas de proveedores.',
      'Control documental e impuestos (ISV 15%).'
    ],
    keyBenefits: [
      'Procesamiento ultra rápido que agiliza el flujo en caja.',
      'Cuadres de caja impecables por cada cambio de turno.',
      'Identificación inmediata de necesidad de reabastecimiento en perchas.'
    ],
    idealEquipment: [
      'Lector de código de barras de mesa u omnidireccional.',
      'Impresora térmica de alta velocidad.',
      'Gaveta de dinero automática.',
      'UPS para respaldo de energía.'
    ],
    badge: 'Consumo Masivo'
  },
  {
    id: 'ferreterias-materiales',
    title: 'Ferreterías y Venta de Materiales',
    subtitle: 'Cotizaciones, catálogo amplio, compras y clientes a crédito',
    iconName: 'Wrench',
    shortDesc: 'Solución integral para ferreterías con miles de repuestos, herramientas, cotizaciones para contratistas y ventas a crédito.',
    industryOverview: 'Las ferreterías manejan catálogos extensos con miles de referencias técnicas, códigos de fabricante, venta de materiales por unidades e interacciones frecuentes con maestros de obra y contratistas que solicitan crédito o presupuestos previa compra.',
    keyChallenges: [
      'Búsqueda difícil entre miles de códigos y repuestos similares.',
      'Elaboración constante de presupuestos y cotizaciones para clientes.',
      'Control de cuentas por cobrar e historial de saldos por cliente.',
      'Actualización frecuente de costos de compra por parte de proveedores.'
    ],
    recommendedModules: [
      'Cotizaciones con conversión directa a venta.',
      'Clientes y Cuentas por Cobrar con abonos.',
      'Compras y Proveedores para actualización de costos.',
      'Productos e Inventario con búsquedas por código interno/proveedor.'
    ],
    keyBenefits: [
      'Transforma presupuestos a facturas en un solo clic sin reescribir.',
      'Lleva el saldo de crédito exacto de cada contratista o cliente habitual.',
      'Permite actualizar costos de compra y mantener los márgenes requeridos.'
    ],
    idealEquipment: [
      'Computadora con pantalla amplia para cotizaciones.',
      'Impresora térmica o de escritorio para comprobantes.',
      'Lector de barra resistente para mostrador pesado.'
    ],
    badge: 'Industrial & Comercial'
  },
  {
    id: 'multi-caja-sucursales',
    title: 'Empresas con Varias Cajas o Estaciones',
    subtitle: 'Operación centralizada, control de perfiles y reportes consolidados',
    iconName: 'Layers',
    shortDesc: 'Para comercios que operan con dos o más cajas en simultáneo o proyectan expandirse a múltiples estaciones con base de datos central.',
    industryOverview: 'Negocios en crecimiento que necesitan conectar múltiples puntos de cobro al mismo inventario central. Exigen roles de usuario estrictos (Cajeros no pueden alterar costos ni ver reportes gerenciales) y conciliación diaria consolidada.',
    keyChallenges: [
      'Desincronización de inventario si se vende en varios mostradores a la vez.',
      'Ausencia de trazabilidad sobre qué terminal emitió cada documento.',
      'Cajeros con acceso excesivo a funciones administrativas sensibles.',
      'Dificultad para consolidad las ventas del día en una sola vista.'
    ],
    recommendedModules: [
      'Base de datos central con arquitectura según la implementación.',
      'Usuarios, Roles y Permisos granulados (Cajero, Supervisor, Admin).',
      'Reportes y Analítica con filtros por caja y terminal.',
      'Bitácora de Auditoría para trazabilidad de cada estación.'
    ],
    keyBenefits: [
      'Inventario único actualizado en tiempo real conforme cada caja vende.',
      'Seguridad total sobre quién cobra, quién autoriza y quién consulta cifras.',
      'Reporte gerencial consolidado para conocer el ingreso global del negocio.'
    ],
    idealEquipment: [
      'Servidor local o instancia central según la arquitectura acordada.',
      'Múltiples terminales POS de caja interconectadas.',
      'Periféricos individuales por cada estación de cobro.'
    ],
    badge: 'Multi-Estación'
  }
];
