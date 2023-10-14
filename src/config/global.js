export default {
  global: {
    componenteFormativo: 'Manejo de las especies pecuarias',
    descripcionCurso:
      'La producción pecuaria está enfocada en la implementación de buenas prácticas de bienestar animal, que es fundamental para asegurar la calidad y sostenibilidad de la industria. Este enfoque abarca diversos aspectos, desde la alimentación de los animales hasta el manejo de las densidades y cargas, así como la correcta ejecución de procesos técnicos como el descolmillado y el descornado, entre otros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Especie Animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características y etapas de desarrollo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas de manejo animal',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Instalaciones y alojamiento pecuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de alojamiento e instalaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Espacio mínimo vital y manejo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Programación de mantenimiento',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Instalaciones según fase de crecimiento y desarrollo',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Equipos e implementos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Principios de funcionamiento y manual de funcionamiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas de manejo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Bienestar animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Principios del bienestar animal',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Comportamiento animal',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Prácticas',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Recepción de animales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Procedimientos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Documentos sanitarios oficiales',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Prácticas de manejo animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Protocolos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Programación',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Procedimientos técnicos para atención de gestación y parto, pesaje, ordeño, despique, despezuñado',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Manejo de crías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Técnicas de manejo del destete',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Practicas de manejo animal',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Sistema de identificación animal',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Gestación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Lactación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_015_722200.zip',
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
      tema: '1. Especie Animal',
      referencia:
        'Gonzalo, J. (2016). Mejores Razas Bovinas Productoras de Leche en Colombia. TvAgro [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=O776f8snC00',
    },
    {
      tema: '2. Instalaciones y alojamiento pecuario',
      referencia:
        'Facultad de medicina veterinaria y zootécnica –UNAM (2016) Instalaciones y estructuras ganaderas – Parte 1 [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aRCAt4se8PA',
    },
    {
      tema: '3. Equipos e implementos',
      referencia:
        'Agrocola Yauyo´s (2020) Como equipar tu galpón de pollos-gallinas para el máximo rendimiento. [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=R4L1WISl0TA',
    },
    {
      tema: '4.	Bienestar animal',
      referencia:
        'OIE. (2021). Código sanitario para animales terrestres, Bienestar animal.',
      tipo: 'Páginas web',
      link:
        'https://www.woah.org/es/que-hacemos/normas/codigos-y-manuales/acceso-en-linea-al-codigo-terrestre/?id=169&L=1&htmfile=titre_1.7.htm',
    },
    {
      tema: '5.	Recepción de animales ',
      referencia:
        'Central ganadera. (2020). Proceso de Recepción de Porcinos y Garantía de Bienestar Animal Central Ganadera S.A. [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4jPbNllYtLg',
    },
    {
      tema: '6. Prácticas de manejo animal',
      referencia:
        'Instituto nacional de carnes. (2020) protocolo Buenas Prácticas de manejo animal. ver 6',
      tipo: 'Página web',
      link:
        'https://www.inac.uy/innovaportal/file/11637/1/protocolo-inac-ba-bovino---predio-1.pdf',
    },
    {
      tema: '7. Manejo de crías',
      referencia:
        'Facultad veterinaria universidad de Zaragoza España. (2018). Parto y manejo del lechón recién nacido. [Video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6yXTlLWj_Fg',
    },
  ],
  glosario: [
    {
      termino: 'Cartílago',
      significado:
        'Tejido firme y flexible carente vasos sanguíneos que brinda apoyo en muchas partes del cuerpo, está en tráquea, bronquios, oído externo entre otros.  ',
    },
    {
      termino: 'Cauterización',
      significado:
        'Destrucción de tejido con instrumento caliente, corriente eléctrica o sustancia cáustica.',
    },
    {
      termino: 'Fecundación',
      significado:
        'Es la unión de espermatozoide con óvulo para el futuro inicio de una cría. La célula formada de esta unión dará el desarrollo a una embriogénesis. Este proceso se realiza en el interior del cuerpo de la hembra.',
    },
    {
      termino: 'Fosas nasales',
      significado:
        'Las fosas nasales son dos cavidades óseas separadas por un delgado tabique nasal sagital, comunicadas con el exterior por los orificios nasales o narinas, y situadas por encima de la cavidad bucal.',
    },
    {
      termino: 'Glándula mamaria',
      significado:
        'Órgano glandular formado de tejido conjuntivo, grasa y tejido mamario que produce leche.',
    },
    {
      termino: 'Inflamación',
      significado:
        'Proceso por el cual se genera enrojecimiento, hinchazón (aumento de tamaño), dolor o sensación de calor en un área del cuerpo. Es una reacción de este para protegerse de las lesiones, las enfermedades o la irritación de los tejidos.',
    },
    {
      termino: 'Inmunoglobulinas ',
      significado:
        'Proteínas de vital importancia para vida que circulan en el torrente sanguíneo y realizan una amplia variedad de funciones entre las principales está la contribución al sistema inmune.',
    },
    {
      termino: 'Malformación',
      significado:
        'Alteraciones anatómicas congénitas que ocurre en la etapa intrauterina que pueden ser sistémicas, orgánicas o extremidades',
    },
    {
      termino: 'Parto',
      significado:
        'Expulsión del feto con membranas fetales después de cumplir el tiempo de gestación que garantiza el desarrollo completo del feto.',
    },
    {
      termino: 'Precoz',
      significado:
        'Que ocurre o sucede antes de tiempo que se considera habitual o necesario.',
    },
    {
      termino: 'Rudimento',
      significado:
        'Desarrollo imperfecto o primitivo de algo y hace referencia a los primeros trabajos de una disciplina.',
    },
    {
      termino: 'Unidades Gran Ganado (U.G.G.)',
      significado:
        'Es equivalente de medición para manejar las cargas animales en los potreros bovinos una unidad gran ganado equivale a 450 kg, y se recomienda que por hectárea la carga sea de 0.65 U.G.G.',
    },
    {
      termino: 'Zona vulvar',
      significado:
        'Zona externa del órgano reproductivo de la hembra se compone de labios menores y mayores. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Bavera G, Bocco O, Beguet H y Petryna A. (2005) CRECIMIENTO, DESARROLLO Y PRECOCIDAD. Cursos de Producción Bovina de Carne, FAV UNRC. ',
      link:
        'https://www.produccion-animal.com.ar/informacion_tecnica/exterior/05-crecimiento_desarrollo_y_precocidad.pdf',
    },
    {
      referencia:
        'Fortín. A, Perdomo. J. (2009). Determinación de la calidad del calostro bovino a partir de la densidad y de la concentración de IgG y del número de partos de la vaca y su efecto en el desarrollo de los terneros hasta los 30 días de edad.',
      link: 'https://bdigital.zamorano.edu/bitstream/11036/430/1/T2884.pdf',
    },
    {
      referencia:
        'Goicochea. J. (2016), Descorné zootécnico y quirúrgico en bovinos. ',
      link:
        'https://www.produccion-animal.com.ar/informacion_tecnica/cria/206-Descorne.pdf',
    },
    {
      referencia:
        'Instituto colombiano agropecuario (2021). Resolución No 090464, definiciones. ',
      link:
        'https://www.ica.gov.co/getattachment/74c359e3-9201-4db9-849f-98ab5a9e2d0b/2021R90464.aspx',
    },
    {
      referencia:
        'Organización Mundial de la Salud (2021). Código de los animales terrestres, Cap 7.1.',
      link:
        'https://www.oie.int/es/que-hacemos/sanidad-y-bienestar-animal/bienestar-animal/',
    },
    {
      referencia: 'Poultrylife (2019). Gallinas Ponedoras.',
      link:
        'https://poultrylife.com/gallinas-ponedoras/ciclo-de-vida-de-las-gallinas-ponedoras/',
    },
    {
      referencia:
        'SENASA (2015). Manual de bienestar animal, un enfoque práctico para el buen manejo de especies domesticas durante su tenencia, producción, concentración, transporte y faena. ',
      link:
        'http://www.senasa.gob.ar/sites/default/files/ARBOL_SENASA/ANIMAL/BOVINOS_BUBALINOS/INDUSTRIA/ESTABL_IND/BIENESTAR/manual_de_bienestar_animal_especies_domesticas_-_senasa_-_version_1-2015.pdf',
    },
    {
      referencia: 'UAB (s.f.) Manejo y producción de porcino. ',
      link:
        'http://llotjadevic.org/redaccio/arxius/imatgesbutlleti/manual%20porcino%20final.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Juan Manuel Loaiza Trujillo  ',
          cargo: 'Docente',
          centro:
            'Regional Valle - Centro Latinoamericano de Especies Menores (CLEM)',
        },
        {
          nombre: 'Zvi Daniel Grosman ',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Carolina Coca Salazar ',
          cargo: 'Metodóloga',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez ',
          cargo: 'Diseñador y Evaluador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
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
