export default {
  global: {
    componenteFormativo: 'Posicionamiento del proyecto multimedia',
    descripcionCurso:
      'En este componente, se conceptualizan los fundamentos, técnicas y aplicaciones de las herramientas SEO Y SEM, en el desarrollo de estrategias para el <i>marketing</i> digital, así mismo herramientas de auditoría y seguimiento, como Google analitycs, herramientas de flujo de usuarios como <i>wireflow</i>, respuestas reacciones y <i>feedback.</i>',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de posicionamiento SEO',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ventajas del SEO',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de SEO',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fundamentos de posicionamiento SEM ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Componentes SEM',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características SEM',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Aplicaciones de técnicas de posicionamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Aplicación de técnicas SEO',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Aplicación de técnicas SEM',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Herramientas para pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Google analytics',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Diagrama de flujo',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: '<i>Software</i> de análisis pagos y gratuitos',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Sistemas de <i>feedback</i> para usuarios ',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Academia grandi (2020). Posicionamiento SEM: ventajas y desventajas que no podés desconocer.',
      link:
        'https://academia.crandi.com/publicidad-digital/posicionamiento-sem-ventajas-y-desventajas/',
    },
    {
      referencia:
        'Cámara Zamora (2020). Posicionamiento SEM: Marketing en Buscadores.',
      link:
        'https://www.camarazamora.com/posicionamiento-sem-marketing-en-buscadores',
    },
    {
      referencia: 'Antevenio (2015). Qué es y cómo funciona Google Analytics.',
      link:
        'https://www.antevenio.com/blog/2015/03/que-es-como-funciona-google-analytics/',
    },
    {
      referencia: 'Concepto (2018). Diagrama de flujo.',
      link: 'https://concepto.de/diagrama-de-flujo/',
    },
    {
      referencia:
        'Cyberclick (2020). ¿Qué es el posicionamiento SEM? Definición, ventajas y características.',
      link: 'https://www.cyberclick.es/sem/posicionamiento-sem',
    },
    {
      referencia:
        'Hablemos de empresas (2018). ¿Qué es el SEM? Explicamos el Search Engine Marketing y cómo puedes aplicarlo a tu negocio online.',
      link:
        'https://hablemosdeempresas.com/empresa/sem-search-engine-marketing/',
    },
    {
      referencia:
        'Hubspot (2021). 16 estrategias para conseguir feedback de tus clientes.',
      link: 'https://blog.hubspot.es/service/estrategias-feedback-clientes',
    },
    {
      referencia: 'Lucitchart (2021). Qué es un diagrama de flujo.',
      link:
        'https://www.lucidchart.com/pages/es/que-es-un-diagrama-de-flujo/#section_4',
    },
    {
      referencia:
        'Internet ya (2020). La importancia de un diseño web responsive.',
      link:
        'https://www.internetya.co/la-importancia-de-un-diseno-web-responsive/',
    },
    {
      referencia:
        'Marketing y web (2017). 25 Técnicas SEO que mejor funcionan [Ejemplos]. ',
      link: 'https://www.marketingandweb.es/marketing/tecnicas-seo/',
    },
    {
      referencia:
        'MKD (2021). Posicionamiento SEO para 2021: La guía definitiva. ',
      link:
        'https://marketingdigitalconsulting.com/la-guia-definitiva-de-posicionamiento-seo-para-2021/',
    },
    {
      referencia:
        'Mullbrand (2020). 10 Técnicas SEO para mejorar el posicionamiento web. ',
      link: 'https://mullbrand.com/10tecnicas-seo/',
    },
    {
      referencia: 'Pixel vivo (2021). ¿Qué son los wireflows?',
      link: 'https://pixelvivo.es/que-son-los-wireflows/',
    },
    {
      referencia:
        'Rockcontent (2019). SEM: conoce el marketing para buscadores y cómo usarlo para impulsar la presencia digital de tu marca.',
      link: 'https://rockcontent.com/es/blog/que-es-search-engine-marketing/',
    },
    {
      referencia:
        'Rock content (2018). ¿Qué son los backlinks? Guía práctica y muy útil para mejorar tu SEO.',
      link: 'https://rockcontent.com/es/blog/que-son-los-backlinks/',
    },
    {
      referencia:
        'The power mba (2021). Top 21 herramientas de analítica web que te ayudarán a tomar decisiones inteligentes basadas en datos reales.',
      link:
        'https://www.thepowermba.com/es/herramientas/mejores-herramientas-de-analitica-web/',
    },
  ],
  glosario: [
    {
      termino: 'SEM',
      significado:
        ' El SEM, las siglas de Search Engine Marketing, hace referencia al <i>marketing</i> y publicidad que se realiza en los distintos motores de búsqueda. Concretamente, se refiere a todas aquellas acciones de pago que se pueden realizar en los buscadores o en las páginas <i>web</i> y que tienen como objetivo captar tráfico e incrementar la visibilidad de los negocios rápidamente (Cámara Zamora, 2020).',
    },
    {
      termino: 'SEO',
      significado:
        ' SEO son las iniciales en inglés de <i>Search Engine Optimization</i> (optimización para motores de búsqueda). Se puede definir como “conjunto de acciones que se realizan para mejorar la visibilidad de un portal de internet en los resultados orgánicos de los distintos buscadores” (Francisco, 2021).',
    },
    {
      termino: '<i>Responsive</i>',
      significado:
        ' Diseño <i>web responsive</i> es una manera de diseñar y codificar un sitio <i>web</i> que hace que cada elemento de la navegación del sitio sea ajustable basado en el tamaño de pantalla. Texto, imágenes y videos, todos se mueven en su posición apropiada sobre la base de qué tan grande es el espacio de visualización disponible (internet ya, 2020).',
    },
    {
      termino: 'Google Analytis',
      significado:
        ' La herramienta te permite hacer un seguimiento de sitios <i>web, blogs</i> y redes sociales. Además, pone a tu disposición informes predeterminados y personalizables. (antevenio, 2015).',
    },
    {
      termino: '<i>Backlinks</i>',
      significado:
        ' Los backlinks son enlaces dispuestos en un texto que dirigen al lector a otro sitio que tenga contenido relacionado con lo que está leyendo (<i>rock content,</i> 2018).',
    },
    {
      termino: 'SEmRush',
      significado:
        ' La herramienta semrush, se utiliza principalmente para analizar datos relacionados con el ámbito del SEO, es decir, posicionamiento <i>web</i>, como también para elaborar estrategias para conseguir <i>backlinks</i> hacia una <i>web</i> o construir publicidad (Pastoriza, A., 2018).',
    },
    {
      termino: '<i>Landing page</i>',
      significado:
        ' Una <i>Landing Page</i> (página de aterrizaje) es una página dentro de un sitio <i>web</i>, desarrollada con el único objetivo de convertir los visitantes en Leads o prospectos de ventas por medio de una oferta determinada. Generalmente tiene un diseño más sencillo con pocos enlaces e informaciones básicas sobre la oferta, además de un formulario para realizar la conversión (RD Station, 2018).',
    },
    {
      termino: '<i>Wireflow</i>',
      significado:
        ' Los <em>wireflows</em> son elementos que comunican con mayor claridad gran parte de las necesidades de un producto, porque son capaces de mostrar una visión general y contextualizada. Esto ayuda a entender mejor los flujos de navegación, las interacciones entre pantallas y, en consecuencia, a desarrollar una mejor experiencia de usuario (Oliva, J., 2021).',
    },
    {
      termino: '<em>Feedback</em>',
      significado:
        ' La retroalimentación o <em>feedback</em> es la opinión que alguien tiene de un servicio o producto determinado del que ha hecho uso o que ha consumido. Al reunir y gestionar un gran número de opiniones podemos utilizar el feedback como una herramienta para crear una evaluación del servicio o producto en cuestión (hudspot, 2021).',
    },
  ],
  complementario: [
    {
      tema: 'Fundamentos de posicionamiento SEO',
      referencia:
        'Hernández, R. (2016) Que es SEO y Como Funciona Posicionamiento Google. [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AavsQP3gPj4',
    },
    {
      tema: 'Fundamentos de posicionamiento SEM',
      referencia:
        'Marketing4ecommerce (2017). Qué es el SEM: claves del Search Engine Marketing. [video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=voxDnfOre-U',
    },
    {
      tema: 'Google analytics',
      referencia:
        'Valdez, A. (2018) ¿Qué es Google Ads y cómo funciona? [video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iQdCSC5OH8o',
    },
    {
      tema: 'Google analytics',
      referencia:
        'Ciudadano 2.0 (2020) ¿Qué es Google Analytics y para qué sirve? - Tutorial 2021 [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=99AxRpEDzKs',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Eduardo José Velasco Acevedo',
        cargo: 'Experto temático',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Juan Manuel Reyes Ramírez',
        cargo: 'Experto temático',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto temático',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Olga Lucía Mogollón Carvajal',
        cargo: 'Experto temático',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
      },
      {
        nombre: 'Eduardo José Velasco Acevedo',
        cargo: 'Experto temático',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Ramirez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Gómez Delgado',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Revisión de guion',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Caceres Arenales',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
