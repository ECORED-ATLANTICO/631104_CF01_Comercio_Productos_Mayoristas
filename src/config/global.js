export default {
  global: {
    componenteFormativo: 'Gestión de inventarios',
    descripcionCurso:
      'La gestión de inventarios ayuda a las empresas a identificar qué existencias hay, qué pedir y en qué momento hacer los pedidos. Realiza un seguimiento del inventario desde la compra, como el etiquetado, la codificación, la conservación, hasta la venta de la mercancía; la revisión de los inventarios garantiza que las empresas tengan suficientes existencias y avisar adecuadamente de una escasez.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Características del producto',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Maestro de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Etiquetado de productos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Codificación de productos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Conservación de mercancía',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Aplicaciones, usos y reportes',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',

        numero: '3',
        titulo: 'Categorización de inventarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',

        numero: '4',
        titulo: 'Administración y control de inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Recibo y despacho de mercancía',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Inspección de elementos',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA1_631104_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Maestro de productos',
      referencia:
        'S/4 HANA MM - Maestro de Materiales - Visión General. (2020, 28  de mayo)',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=D-fiNrHIikQ',
    },
    {
      tema: 'Codificación Productos',
      referencia:
        'Guía para la codificación de bienes y servicios de acuerdo con el código estándar de productos y servicios de Naciones Unidas, V.14.080',
      tipo: 'Guía',
      descarga: '/downloads/manualclasificador.pdf',
    },
    {
      tema: 'Inspecciones planeadas',
      referencia:
        'Inspecciones planeadas	ICONTEC (1997) Norma Técnica Colombiana- NTC 4114. Seguridad Industrial: Realización de Inspecciones planeadas',
      tipo: 'Norma Técnica Colombiana',
      descarga: '/downloads/NTC_4114_ICONTEC.pdf',
    },
    {
      tema: 'Inventarios',
      referencia:
        '<em>What is Inventory?</em> (¿Qué es un Inventario?), Oracle netsuite. (2021). Oracle / NetSuite.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qF4H7f9EvhY&t=21s',
    },
  ],
  glosario: [
    {
      termino: 'Carga',
      significado:
        'Conjunto de mercancías que son objeto de una operación de transporte desde un puerto, aeropuerto, terminal terrestre o lugar de entrega, con destino a otro puerto, aeropuerto, terminal o lugar de destino, amparadas en un documento de transporte.',
    },
    {
      termino: 'Código de barras',
      significado:
        'Código basado en la representación de un conjunto de líneas paralelas de distinto grosor y espaciado que en su conjunto contienen una determinada información.',
    },
    {
      termino: 'Equipo de almacenamiento',
      significado:
        'Medios disponibles para guardar o almacenar productos y mercancías; como estanterías, armarios o cestas.',
    },
    {
      termino: 'Equipo de manipulación',
      significado:
        'Vehículos y equipos capaces de transportar artículos, bultos, paletas y cajas dentro del almacén; son necesarios para trasladar cargas y que el operario no realice sobreesfuerzo físico.',
    },
    {
      termino: '<em>Packing</em>',
      significado:
        'La actividad que realiza un equipo de operarios al momento de preparar los pedidos, consiste en la recogida y consolidación de cargas no unitarias que componen el pedido de un cliente.',
    },
    {
      termino: '<em>Picking</em>',
      significado: 'Acondicionamiento y empaque de pedidos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Campo Varela, A. (2013). <em>Operaciones de almacenaje</em>. España: McGraw-Hill',
      link:
        'https://kupdf.net/download/operaciones-de-almacenaje_5c96f9e6e2b6f55d2e9fe98a_pdf',
    },
    {
      referencia:
        'Flamarique, S. (2017). <em>Gestion de operaciones de almacenaje</em>. Barcelonaón de operaciones de almacenaje. Barcelona: Marge Books. Disponible en:',
      link:
        'https://www.marcialpons.es/libros/gestion-de-operaciones-de-almacenaje/9788416171873/',
    },
    {
      referencia:
        'Fernández Valero,  G. (2016)  <em>Manual de operaciones auxiliares de almacenaje</em>. Madrid: operaciones auxiliares de almacenaje. Madrid: Editorial CEP, S.L. ',
      link:
        'https://www.buscalibre.com.co/libro-manual-operaciones-auxiliares-de-almacenaje-mf1325-1-certificados-gonzalo-fernandez-valero-cep/9788468151939/p/46445151',
    },
    {
      referencia:
        'Gómez Aparicio,  J. M.(2013). <em>Gestión logística y comercial</em>. Aravaca, Madrid: McGraw-Hill España.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Experta temática',
          centro:
            'Centro de la Industria, la empresa y los Servicios Regional - Huila',
        },
        {
          nombre: 'Diego E. Acevedo Guevara',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - CIES - Norte de Santander',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesora metodológica',
          centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesus Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Diaz Pinto',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios Regional - Tolima',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Camilo Villamizar',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Ludwyng Corzo',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Erika Viviana Sandoval Rojas',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Marinella Vargas Altahona',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
