export default {
  global: {
    componenteFormativo: 'Elaboración de modelos masculinos',
    descripcionCurso:
      'Este componente formativo aborda las temáticas en levantamiento de patrones básicos de patronaje masculino y desarrollos de moldería. Se analizará la relación del cuerpo masculino con las prendas que usa y cómo converge su diálogo.<br><br> En concordancia, se vivenciarán desafíos del análisis, interpretación, precisión, adaptación y transformación según el material textil, la intencionalidad de uso y otros elementos como insumos y avíos con el objeto de efectuar la experimentación de la forma y la silueta.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'La forma y lo masculino',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Biotipos masculinos y morfología',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'La relación entre las prendas y el hombre',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sociología y cultura en la moda masculina',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Acompañamiento en el estilo masculino',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Prepatronaje y bases masculinos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Patrones básicos superiores masculinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'La camisa y sus variaciones',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Comportamiento de las cabezas de mangas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Cuellos, mangas y sus variaciones',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Variantes de básicos superiores masculinos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Patrones básicos inferiores masculinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Pantalón base',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Trazo del pantalón clásico masculino',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Trazo del pantalón tipo jean slim fit',
            hash: 't_3_3',
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leidy Johana Velásquez Hernández',
        cargo: 'Experta temática',
        centro: 'Diseño, Confección y Moda',
        regional: 'Regional Antioquía',
      },
      {
        nombre: 'Paola Angélica Castro Salazar',
        cargo: 'Experta temática',
        centro: 'Diseño, Confección y Moda',
        regional: 'Regional Antioquía ',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Oscar Julian Marquez Sanabria',
        cargo: 'Diseño web',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Laura Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
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
    },
    {
      referencia: 'SENA. (2021). Siglo XX Moda Masculina. SENA.',
    },
    {
      referencia:
        'SENA. (2021). Sociología y cultura en la moda masculina. SENA.',
    },
    {
      referencia:
        'SENA. (9 de febrero de 2021). Base inferior de pantalón masculino. [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?app=desktop&v=Py0Nfzckd-U&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      referencia:
        'SENA. (9 de febrero de 2021). Base superior masculina slim fit. [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?app=desktop&v=rximz1xBJM8&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      referencia:
        'SENA. (10 de febrero de 2021). Trazo camisa clásica. [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=PKd_D-0U968&t=76s&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      referencia:
        'SENA. (10 de febrero de 2021). Trazo de cuellos, generalidades y comportamientos. [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=agDscYys1CY&t=105s&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      referencia:
        'SENA. (10 de febrero de 2021). Trazo prendas superiores, camisa. [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=CxwJTRQh-aY&t=173s&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      referencia:
        'SENA. (10 de febrero de 2021). Trazos de manga, puño y cuello, camisa clásica y slim fit. [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=ktU9DxgPvH8&t=446s&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
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
        'marcas a lo largo del margen de costura de un patrón que ayudan a alinear las piezas al coser',
    },
    {
      termino: 'Snap',
      significado:
        'cierre de metal o plástico que consta de un lado de bola (macho) y un lado de encaje (hembra).',
    },
    {
      termino: 'Tapeta',
      significado:
        'abertura terminada en la parte delantera, las mangas o el escote, una tapeta generalmente apoya botones y ojales',
    },
    {
      termino: 'Slim fit',
      significado: 'pantalón ajustado.',
    },
  ],
  complementario: [
    {
      texto:
        'SENA. (2020). Manual de patronaje básico e interpretación de diseños. SENA.',
      tipo: 'Manual patronaje básico interpretación diseños SENA',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4725/Manual_patronaje_basico_interpretacion_disenos.PDF;jsessionid=CDC8FDE9468D98E37FFD127332113A29?sequence=1',
    },
    {
      texto: 'SENA. (2021). Siglo XX moda masculina. SENA.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo1_Siglo_XX_Moda_Masculina.pdf',
    },
    {
      texto: 'SENA. (2021). Sociología y cultura en la moda masculina. SENA',
      tipo: 'PDF',
      descarga: '/downloads/Anexo2_ Sociología_Cultura_Moda_Masculina.pdf',
    },
    {
      texto: 'SENA. (2021). Estilo masculino. SENA',
      tipo: 'PDF',
      descarga: '/downloads/Anexo3_Estilo_Masculino.pdf',
    },
  ],
}
