export interface FeatureModule {
  id: string;
  title: string;
  subtitle: string;
  category: 'caja' | 'administrativo' | 'ambos';
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  operationalProblem: string;
  moduleRole: string;
  concreteCapabilities: string[];
  businessBenefits: string[];
  limitationsOrConditions?: string;
  badge?: string;
}

export const FEATURE_MODULES: FeatureModule[] = [
  {
    id: 'pos-cobro',
    title: 'Punto de Venta y Cobro',
    subtitle: 'Agilidad en caja para atender más clientes en menos tiempo',
    category: 'caja',
    iconName: 'ShoppingCart',
    shortDesc: 'Ventas veloces con búsqueda rápida por código de barras, SKU o nombre, cálculo de totales e impresión instantánea de comprobantes.',
    fullDesc: 'El entorno de Caja de BWP Retail POS está diseñado para que el cajero procese transacciones comerciales de forma intuitiva, minimizando errores y evitando filas en el establecimiento.',
    operationalProblem: 'Lentitud en el proceso de cobro, errores manuales al digitar precios, filas de clientes molestos y falta de registro inmediato de productos vendidos.',
    moduleRole: 'Procesar el carrito de compra, aplicar impuestos configurados, calcular montos en efectivo o tarjeta y emitir el comprobante fiscal en segundos.',
    concreteCapabilities: [
      'Búsqueda de productos por nombre, SKU o código de barras mediante lector.',
      'Gestión dinámica del carrito de ventas con control de cantidades.',
      'Cálculo automático de subtotal, impuestos (ISV 15%/18%) y total a pagar.',
      'Eliminación de líneas o descuentos sujeto a permisos o autorización de supervisor.',
      'Procesamiento de pagos en efectivo (cálculo de cambio) y tarjetas o transferencias.',
      'Emisión e impresión de comprobante tipo ticket en impresoras térmicas.',
      'Asociación inmediata de cada venta al cajero, terminal, caja y turno activo.'
    ],
    businessBenefits: [
      'Aumenta el flujo de atención en horas pico.',
      'Elimina el cobro erróneo de precios al estar enlazado a la base central.',
      'Registra con precisión matemática cada centavo que ingresa a la caja.'
    ],
    badge: 'Módulo de Caja'
  },
  {
    id: 'caja-turnos',
    title: 'Caja y Turnos',
    subtitle: 'Trazabilidad absoluta de fondos, aperturas y cierres de turno',
    category: 'caja',
    iconName: 'Vault',
    shortDesc: 'Control de fondo inicial, egresos/ingresos autorizados, conciliación por método de pago y reporte de diferencias al cierre.',
    fullDesc: 'Administra la responsabilidad de efectivo de cada colaborador. BWP Retail POS exige apertura formal de turno con fondo inicial y garantiza cuadres transparentes al finalizar la jornada.',
    operationalProblem: 'Faltantes o sobrantes imprevistos de efectivo, retiros no declarados y falta de claridad sobre quién operó la caja en determinado horario.',
    moduleRole: 'Vincular cajero, terminal y fondo en un turno cerrado, garantizando auditoría de cada movimiento de efectivo.',
    concreteCapabilities: [
      'Apertura de turno obligatoria declarando el fondo de caja inicial.',
      'Asociación unívoca entre usuario cajero, terminal física y turno operativo.',
      'Registro de sangrías, retiros de efectivo o egresos operativos autorizados.',
      'Desglose del cierre por efectivo esperado, tarjeta, transferencia y crédito.',
      'Arqueo a ciegas o guiado para detección inmediata de diferencias.',
      'Impresión de reporte Z/X de turno para la administración.',
      'Historial de cierres anteriores consultable por fecha y supervisor.'
    ],
    businessBenefits: [
      'Reduce drásticamente las diferencias de efectivo no justificadas.',
      'Responsabiliza a cada colaborador sobre sus cobros y dinero recibido.',
      'Proporciona a la gerencia un resumen diario claro para depósitos bancarios.'
    ],
    badge: 'Módulo de Caja'
  },
  {
    id: 'facturacion-documentos',
    title: 'Facturación y Control Documental',
    subtitle: 'Comprobantes claros con soporte para requisitos fiscales',
    category: 'ambos',
    iconName: 'Receipt',
    shortDesc: 'Generación de tickets fiscales y comerciales, control de rangos de facturación, correlativos y reimpresiones trazables.',
    fullDesc: 'Garantiza que la emisión de documentos comerciales cumpla con la numeración, fechas y normativas locales aplicables según la configuración de la empresa.',
    operationalProblem: 'Emisión de comprobantes sin correlativo, duplicidad de facturas, anulaciones sospechosas sin registro y desorden en documentos fiscales.',
    moduleRole: 'Emitir y almacenar cada comprobante de venta respetando la plantilla legal configurada, rangos autorizados y límites de fecha.',
    concreteCapabilities: [
      'Diseño y formateo de comprobantes tipo ticket para impresoras térmicas de 80mm/58mm.',
      'Inclusión de datos de empresa, RTN, datos del cliente, desglose de impuestos y leyendas legales.',
      'Configuración de CAI, rangos autorizados y fecha de vencimiento cuando aplique.',
      'Control estricto contra facturación fuera de rango o fecha expirada.',
      'Historial completo de documentos emitidos con motor de búsqueda rápida.',
      'Reimpresión de tickets con marca de agua "Copia" registrada en bitácora.',
      'Proceso de anulación o devolución con solicitud de credencial de supervisor.'
    ],
    businessBenefits: [
      'Evita sanciones fiscales por irregularidades en numeración o CAI.',
      'Garantiza que cada anulación requiera justificación y permiso administrativo.',
      'Brinda imagen profesional a los clientes al entregar comprobantes detallados.'
    ],
    limitationsOrConditions: 'La configuración de CAI y datos fiscales de Honduras se activa según la propuesta y alcance contratado por la empresa.',
    badge: 'Fiscal y Operativo'
  },
  {
    id: 'productos-inventario',
    title: 'Productos, Precios e Inventario',
    subtitle: 'Catálogo organizado con actualización automática de existencias',
    category: 'administrativo',
    iconName: 'Package',
    shortDesc: 'Administración de catálogo con SKU, código de barras, categorías, costos, precios, entradas, salidas y alertas de existencias.',
    fullDesc: 'Mantén el control total de tus existencias. Cada venta en caja rebaja automáticamente el inventario disponible y cada compra o ajuste queda registrado en la bitácora de movimientos.',
    operationalProblem: 'Faltantes de mercancía no detectados a tiempo, desconocimiento del valor real de inventario, productos sin precio o con cobros desactualizados.',
    moduleRole: 'Centralizar la maestra de artículos del negocio, definiendo costos, márgenes de ganancia, precios de venta y existencias en tiempo real.',
    concreteCapabilities: [
      'Registro de artículos con SKU interno, código de barras, nombre, descripción y categoría.',
      'Gestión de costo de compra, impuesto aplicable y precio de venta al público.',
      'Descuento automático de existencias al momento de confirmar la venta en caja.',
      'Módulo de ajustes manuales de inventario (entradas, salidas, mermas) con motivo obligatorio.',
      'Kardex e historial detallado de movimientos por producto (quién, cuándo y por qué).',
      'Alertas configurables de stock mínimo para reposición oportuna.',
      'Filtrado y reporte de valorización de inventario por categoría.'
    ],
    businessBenefits: [
      'Previene la fuga de inventario y pérdidas no explicadas.',
      'Permite conocer exactamente qué productos generan mayor rentabilidad.',
      'Facilita auditorías físicas rápidas mediante lecturas de código de barras.'
    ],
    badge: 'Módulo Administrativo'
  },
  {
    id: 'compras-proveedores',
    title: 'Compras y Proveedores',
    subtitle: 'Control de abastecimiento e ingreso documentado de mercadería',
    category: 'administrativo',
    iconName: 'Truck',
    shortDesc: 'Registro de facturas de compra, ingreso formal de inventario, catálogo de proveedores y actualización de costos.',
    fullDesc: 'Registra el ingreso de mercadería a tu negocio con respaldo documental. Actualiza el stock disponible y mantén actualizado el costo promedio o último costo de adquisición.',
    operationalProblem: 'Ingreso informal de productos sin factura del proveedor, desconocimiento de variación de costos e inconsistencia entre compras y stock.',
    moduleRole: 'Registrar la entrada oficial de mercancía abastecida por proveedores, vinculando cantidades, costos e incremento de inventario.',
    concreteCapabilities: [
      'Directorio de proveedores con RTN, contactos, teléfonos y dirección.',
      'Registro de comprobantes o facturas de compra recibidas.',
      'Carga detallada de items comprados, cantidad recibida y costo unitario.',
      'Actualización automática de existencias en el inventario al aprobar la compra.',
      'Actualización opcional del costo de referencia del producto.',
      'Historial de compras por periodo, proveedor o producto específico.',
      'Cuentas por pagar a proveedores según las condiciones pactadas.'
    ],
    businessBenefits: [
      'Asegura que el inventario solo aumente por compras documentadas o ajustes autorizados.',
      'Permite analizar la variación histórica de costos de cada insumo o producto.',
      'Mejora la relación comercial y control de saldos con proveedores.'
    ],
    badge: 'Módulo Administrativo'
  },
  {
    id: 'clientes-credito',
    title: 'Clientes y Cuentas por Cobrar',
    subtitle: 'Gestión de directorio de clientes, límites de crédito y abonos',
    category: 'administrativo',
    iconName: 'Users',
    shortDesc: 'Registro de clientes comerciales, historial de compras, créditos autorizados, saldo pendiente y recepción de abonos.',
    fullDesc: 'Para negocios que ofrecen líneas de crédito a clientes de confianza o empresas. BWP Retail POS permite controlar saldos, abonos e historial de transacciones.',
    operationalProblem: 'Anotaciones en cuadernos sobre deudas de clientes, olvido de cobros, ventas a crédito sin autorización y falta de estados de cuenta.',
    moduleRole: 'Llevar la contabilidad auxiliar de clientes a crédito, restringiendo ventas a clientes morosos y emitiendo recibos de abono.',
    concreteCapabilities: [
      'Directorio de clientes con RTN/Identidad, teléfono, correo y dirección comercial.',
      'Asignación de límite máximo de crédito e historial de comportamiento.',
      'Habilitación del método de pago "Crédito" en caja sujeto a disponibilidad y permisos.',
      'Estado de cuenta en tiempo real con saldo pendiente, facturas vencidas y por vencer.',
      'Módulo de recepción de abonos con emisión de comprobante de pago.',
      'Bloqueo automático de créditos al superar el límite o presentar morosidad.',
      'Reporte gerencial de cartera de clientes y antigüedad de saldos.'
    ],
    businessBenefits: [
      'Elimina las perdidas financieras por créditos no documentados.',
      'Agiliza la recuperación de cartera con estados de cuenta transparentes.',
      'Permite ofrecer valor agregado a clientes corporativos habituales.'
    ],
    limitationsOrConditions: 'El módulo de crédito se habilita e integra en la propuesta cuando el modelo de negocio del cliente lo requiere.',
    badge: 'Comercial'
  },
  {
    id: 'cotizaciones',
    title: 'Cotizaciones y Presupuestos',
    subtitle: 'Elaboración ágil de presupuestos ejecutivos para clientes',
    category: 'administrativo',
    iconName: 'FileText',
    shortDesc: 'Generación de propuestas comerciales con vigencia, desglose de precios, conversión directa a venta e impresión profesional.',
    fullDesc: 'Crea cotizaciones formales para clientes institucionales o compras de volumen. Cuando el cliente aprueba la cotización, esta puede convertirse a venta en un solo clic.',
    operationalProblem: 'Demora en cotizar a clientes institucionales, elaboración manual de presupuestos en hojas sueltas y doble trabajo al cobrar.',
    moduleRole: 'Generar propuestas comerciales formales, congelar precios temporalmente y agilizar la venta sin volver a digitar los artículos.',
    concreteCapabilities: [
      'Creación de cotizaciones seleccionando productos, cantidades y precios acordados.',
      'Configuración de días de vigencia de la oferta y condiciones comerciales.',
      'Estados del documento: Borrador, Enviada, Aprobada, Vencida o Convertida.',
      'Conversión directa de cotización aprobada a factura de venta en la caja.',
      'Impresión o exportación en formato PDF listo para enviar por correo o WhatsApp.',
      'Consulta de cotizaciones históricas por cliente o estatus.'
    ],
    businessBenefits: [
      'Aumenta la tasa de cierre con clientes corporativos o al por mayor.',
      'Elimina errores de digitación entre el presupuesto y la facturación final.',
      'Proporciona una presentación profesional con la marca de tu empresa.'
    ],
    badge: 'Módulo Administrativo'
  },
  {
    id: 'reportes-analitica',
    title: 'Reportes y Analítica Comercial',
    subtitle: 'Información gerencial en tiempo real para decisiones acertadas',
    category: 'administrativo',
    iconName: 'BarChart3',
    shortDesc: 'Reportes consolidados de ventas por fecha, cajero, caja, utilidad estimada, productos más vendidos y cierres de turno.',
    fullDesc: 'Transforma las transacciones diarias en inteligencia de negocios. Consulta cuáles son tus artículos estrella, las horas de mayor tráfico y el rendimiento comercial exacto de tu negocio.',
    operationalProblem: 'Toma de decisiones a ciegas, falta de claridad en las ganancias reales e incapacidad para detectar fugas de dinero o baja rotación.',
    moduleRole: 'Consolidar todos los datos operativos y presentar tableros visuales, tablas de resumen y reportes exportables para la gerencia.',
    concreteCapabilities: [
      'Reporte de ventas totales por rango de fechas, sucursal o terminal.',
      'Desglose de ingresos por método de pago (Efectivo, Tarjeta, Transferencia, Crédito).',
      'Desempeño de ventas por cajero, comparativa de turnos y promedios de ticket.',
      'Ranking de productos más vendidos (Top Sellers) y margen de rentabilidad.',
      'Reporte de cierres de caja con historial de faltantes o sobrantes.',
      'Estado de inventario, valorización total y productos con stock crítico.',
      'Exportación de reportes a PDF o formatos compatibles con contabilidad.'
    ],
    businessBenefits: [
      'Identifica exactamente qué productos comprar y cuáles descontinuar.',
      'Verifica la salud financiera diaria sin esperar al cierre de mes.',
      'Aporta evidencia confiable para auditorías y decisiones de expansión.'
    ],
    badge: 'Gerencial'
  },
  {
    id: 'usuarios-auditoria',
    title: 'Usuarios, Permisos y Bitácora de Auditoría',
    subtitle: 'Seguridad basada en roles y trazabilidad completa de acciones',
    category: 'administrativo',
    iconName: 'ShieldCheck',
    shortDesc: 'Control de accesos por roles (Cajero, Supervisor, Administrador, IT), autorización de excepciones y bitácora inviolable.',
    fullDesc: 'Protege tu negocio definiendo lo que cada colaborador puede ver y hacer. Registra cada anulación, descuento, ajuste de inventario o cambio de precio con fecha, hora y usuario responsable.',
    operationalProblem: 'Cajeros aplicando descuentos no autorizados, modificaciones maliciosas en precios, borrado de registros e inseguridad operativa.',
    moduleRole: 'Establecer los límites de acceso al sistema y mantener un registro cronológico inalterable de cada evento relevante.',
    concreteCapabilities: [
      'Creación de usuarios con credenciales únicas y asignación de rol.',
      'Roles preconfigurados: Cajero, Supervisor de Caja, Administrador General e IT.',
      'Matriz de permisos granulados (acceso a inventarios, reportes, caja, etc.).',
      'Exigencia de clave o pin de supervisor para acciones críticas (anulaciones, descuentos).',
      'Bitácora de auditoría detallada: Usuario, Fecha/Hora, Acción, Módulo y Valores cambiados.',
      'Monitoreo de inicios de sesión y cierres de turno.',
      'Inactivación rápida de colaboradores al finalizar la relación laboral.'
    ],
    businessBenefits: [
      'Desalienta malas prácticas e intentos de fraude interno.',
      'Permite saber exactamente quién realizó cualquier cambio en el sistema.',
      'Garantiza que la información estratégica solo esté visible para la gerencia.'
    ],
    badge: 'Seguridad'
  },
  {
    id: 'perifericos-equipos',
    title: 'Compatibilidad con Periféricos y Equipos',
    subtitle: 'Integración física con impresoras, lectores y gavetas',
    category: 'caja',
    iconName: 'Printer',
    shortDesc: 'Soporte validado durante la implementación para impresoras térmicas de tickets, lectores de código de barras y gavetas de dinero.',
    fullDesc: 'BWP Retail POS se conecta con el hardware comercial estándar. Durante el proceso de implementación, el equipo técnico valida y configura los dispositivos físicamente instalados en el negocio.',
    operationalProblem: 'Impresoras que no cortan el papel, gavetas que no abren automáticamente al cobrar o lectores de barra incompatibles.',
    moduleRole: 'Comunicar la aplicación de POS con los dispositivos de hardware periférico en el punto de venta.',
    concreteCapabilities: [
      'Impresoras térmicas de tickets (58mm y 80mm) con conexión USB, Serial o Red.',
      'Comando de apertura automática de gaveta monedero mediante puerto de impresora (RJ11).',
      'Lectores de códigos de barras USB/Inalámbricos operando en modo simulación de teclado o puerto COM.',
      'Compatibilidad con pantallas secundarias de cliente cuando aplique.',
      'Instalación y calibración de controladores realizada por el personal técnico de BWP.'
    ],
    businessBenefits: [
      'Agiliza la interacción física en el mostrador de cobro.',
      'Asegura la apertura de la gaveta únicamente cuando se registra un cobro válido.',
      'Aprovecha equipos y periféricos previamente existentes en el negocio cuando sean compatibles.'
    ],
    limitationsOrConditions: 'Cada modelo de periférico debe ser evaluado y validado técnicamente por BWP Software & Cybersecurity durante el levantamiento previo a la implementación.',
    badge: 'Hardware'
  }
];
