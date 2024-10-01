export default {
  global: {
    componenteFormativo: 'Elaboración de modelos masculinos',
    descripcionCurso:
      'Este componente formativo se centra en el levantamiento de patrones básicos y el desarrollo de moldería para moda masculina. Además, se abordarán los desafíos asociados con el análisis, la interpretación, la precisión, la adaptación y la transformación de prendas, tomando en cuenta factores como el tipo de tejido, el propósito de uso y otros elementos como insumos y avíos. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.png'),
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
        numero: '1',
        titulo: 'La forma y lo masculino',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Biotipos masculinos y morfología',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'La relación entre las prendas y el hombre',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sociología y cultura en la moda masculina',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Acompañamiento en el estilo masculino',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Prepatronaje y bases masculinos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Patrones básicos superiores masculinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'La camisa y sus variaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Comportamiento de las cabezas de mangas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Cuellos, mangas y sus variaciones',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Variantes de básicos superiores masculinos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Patrones básicos inferiores masculinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Pantalón base',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Trazo del pantalón clásico masculino',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Trazo del pantalón tipo <i>jean slim fit</i>',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'sintesis',
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        desarrolloContenidos: true,
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
      //{
      //nombreRuta: 'complementario',
      //icono: 'far fa-folder-open',
      // titulo: 'Material complementario',
      //},
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF5_842200_DU.zip',
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
        'Coser es un placer. (2021). Perilla manga en una manga de camisa con puño.',
      link: 'https://coseresunplacer.com/perilla-en-manga-camisa/',
    },
    {
      referencia:
        'Gutiérrez, R. L., Moncayo, V., A., Tanaka, K., Kimura, F., y Moreno, D. (2011). Manual de patronaje básico e interpretación de diseños. SENA, Japan Inernational Cooperation Agency - JICA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000025496',
    },
    {
      referencia:
        'SENA. (2020). Manual de patronaje básico e interpretación de diseños.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000025496',
    },
    {
      referencia: 'SENA. (2021). Estilo masculino. SENA.',
      link:
        'https://ecoredsena-santander.github.io/842200_ELABORACION_PRENDAS_MEDIDA_CF5/downloads/Anexo3_Estilo_Masculino.pdf',
    },
    {
      referencia: 'SENA. (2021). Siglo XX Moda Masculina. SENA.',
      link:
        'https://ecoredsena-santander.github.io/842200_ELABORACION_PRENDAS_MEDIDA_CF5/downloads/Anexo2_%20Sociolog%C3%ADa_Cultura_Moda_Masculina.pdf',
    },
    {
      referencia:
        'SENA. (2021). Sociología y cultura en la moda masculina. SENA.',
      link:
        'https://ecoredsena-santander.github.io/842200_ELABORACION_PRENDAS_MEDIDA_CF5/downloads/Anexo1_Siglo_XX_Moda_Masculina.pdf',
    },
    {
      referencia:
        'SENA. (9 de febrero de 2021). Base inferior de pantalón masculino. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=kUN0Zv0mpUA',
    },
    {
      referencia:
        'SENA. (9 de febrero de 2021). Base superior masculina slim fit. [Video]. YouTube.',
      link: 'https://youtu.be/lLLtWBVK-zA',
    },
    {
      referencia:
        'SENA. (10 de febrero de 2021). Trazo camisa clásica. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=UwIdbbg5-fA',
    },
    {
      referencia:
        'SENA. (10 de febrero de 2021). Trazo de cuellos, generalidades y comportamientos. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=cfkxQlf6Vfw',
    },
    {
      referencia:
        'SENA. (10 de febrero de 2021). Trazo prendas superiores, camisa. [Video]. YouTube.',
      link: 'https://youtu.be/YgPcDIMHU8U',
    },
    {
      referencia:
        'SENA. (10 de febrero de 2021). Trazos de manga, puño y cuello, camisa clásica y slim fit. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=VMJYcQqIKBQ',
    },
    {
      referencia: 'SENA. (s.f.). Fashion Snoops.',
      link: 'https://www-fashionsnoops-com.bdigital.sena.edu.co/Default.aspx',
    },
  ],
  glosario: [
    {
      termino: 'Banda de cuello',
      significado:
        'también conocido como soporte de cuello, la banda del cuello se usa con un cuello de camisa. Es una pieza separada, relativamente recta, ajustada a la camisa con el cuello en la parte superior de la banda.',
    },
    {
      termino: 'Bolsa de bolsillo',
      significado:
        'bolsa de tela que forma la parte funcional del bolsillo; generalmente encerrado dentro de la prenda, como en un bolsillo de ojal o en la costura (no se usa para referirse a un parche o bolsillo exterior).',
    },
    {
      termino: 'Bolsillo de parche',
      significado:
        'bolsillo aplicado al exterior de una prenda y pespunteado en su lugar. El bolsillo puede ser un simple cuadrado o cualquier forma deseada. Está cosido en todos los lados excepto uno, para permitir el acceso al bolsillo.',
    },
    {
      termino: 'Carcasa',
      significado:
        'tela doblada y cosida para formar una especie de “tubo” en el que se inserta el elástico o cordón.',
    },
    {
      termino: 'Construcción',
      significado:
        'proceso de confeccionar una prenda ya sea cosiendo o fusionando piezas. La construcción también puede referirse al método utilizado para crear un tejido específico (es decir, el tejido de sarga y el tejido liso son construcciones de tejido).',
    },
    {
      termino: 'Contraste',
      significado:
        'color o tejido diferente al tejido del cuerpo. El color contrastante en la tela, el adorno o el hilo se utiliza como acento.',
    },
    {
      termino: 'Cremallera expuesta',
      significado:
        'conjunto de cremallera con los dientes de la cremallera descubiertos y visibles. Una cremallera oculta, que es la norma, se fija con los dientes cubiertos por la tela.',
    },
    {
      termino: 'Fruncidos',
      significado:
        'pliegues blandos de tela, cercanos a las costuras y orientados hacia el interior del cuerpo.',
    },
    {
      termino: 'Mitre',
      significado:
        'uniendo 2 piezas cortadas en ángulo, creando una costura en ángulo. Normalmente se usa en un cuello en V.',
    },
    {
      termino: 'Muescas',
      significado:
        'marcas a lo largo del margen de costura de un patrón que ayudan a alinear las piezas al coser.',
    },
    {
      termino: 'Snap',
      significado:
        'cierre de metal o plástico que consta de un lado de bola (macho) y un lado de encaje (hembra).',
    },
    {
      termino: 'Tapeta',
      significado:
        'abertura terminada en la parte delantera, las mangas o el escote, una tapeta generalmente apoya botones y ojales.',
    },
    {
      termino: '<i>Slim fit</i>',
      significado: 'pantalón ajustado.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leidy Johana Velásquez Hernández',
          cargo: 'Experta temática',
          centro: 'Diseño, Confección y Moda - Regional Antioquía',
        },
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Diseño, Confección y Moda - Regional Antioquía',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz ',
          cargo: 'Diseñadora instruccional ',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: 'Revisora metodológica y pedagógica.',
          centro: 'centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'José Gabriel Ortiz Abella Carolina Coca Salazar',
          cargo: 'Corrector de estilo ',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Sandra Paola Morales Paez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julián Fernando Vanegas Vera',
          cargo: 'Diseñador web',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full-stack</i> Junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
  //complementario: [{

  //}],
}
