<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Instalaciones y alojamiento pecuario
  
    p(data-aos="fade-left").mb-5 Las instalaciones en las producciones pecuarias, sobre todo en las producciones intensivas, son un elemento fundamental, junto con las especies animales utilizadas (características y prestaciones genéticas), el manejo animal junto con el bienestar animal constituye los pilares fundamentales para un sistema productivo.

    .row.justify-content-center 
      .col-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 El objetivo de las instalaciones y áreas de alojamiento es proveer a los animales y a los productores un #[i confort] tanto físico, medioambiental, y de carácter social, permitiendo a los animales alcanzar el nivel productivo deseado y a los manipuladores ofrecerles la protección y facilidad necesaria para realizar sus labores. 
            br
            br
            p.mb-0 Estas instalaciones para el productor son un gasto inicial bastante elevado, el cual aparte de tener la inversión inicial, requiere una inversión constante para realizar los diferentes mantenimientos requeridos.  


    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Tipos de alojamiento e instalaciones

    p(data-aos="fade-left") Dentro de las instalaciones y alojamientos existen diferentes tipos para cada unidad pecuaria a trabajar dependiendo de las capacidades económicas de cada producción y necesidades de cada animal es importante conocer e identificar las instalaciones que mejor se adapten al sistema pecuario.
    p(data-aos="fade-left").mb-5 Existen también instalaciones que son necesarias y de común denominador para cualquier sistema productivo o explotación pecuaria como son la bodega de almacenamiento, los silos de almacenamiento de alimento (en caso de necesitarlo), la bodega de almacenamiento de alimento y las áreas de oficinas, a continuación, se puede ver cada una de estas instalaciones:

    .tarjeta(style="background-color:#DBF9BD").p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-4.mb-4.mb-md-0
            h4 Tradicionales
            p Para este tipo de producción requieren unas instalaciones mucho más sencillas y prácticas, ya que los animales se alojan en los diferentes potreros, o áreas donde se alimentan y realizan su ciclo productivo durante gran parte de su vida, requiere una menor infraestructura a comparación de la sistematizada o cerrada, por ende, sus costos de producción son mucho menores.

          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/2.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center.my-lg-4

          .col-md-4.mb-4.mb-md-0
            p Los materiales que se usen en la construcción deben ser de fácil adquisición y bajo costo, para minimizar los gastos de producción, pero que al mismo tiempo ofrezcan larga durabilidad, resistencia y confort al animal, especialmente en las zonas donde hay una interacción directa entre ellos.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/3.png', alt='Texto que describa la imagen')

        .row
          .col-md-4.mb-4.mb-md-0
            h4 Sistematizadas
            p Para realizar este tipo de infraestructuras e instalaciones se debe tener en cuenta un factor bastante determinante que corresponde a lo económico, ya que la realización de este tipo de construcción es bastante costosa, pero también depende de otros factores como la localización, el tipo de producción, y el clima entre otros, ya que en climas cálidos las construcciones pueden ser de menor inversión, pues no requieren tanto del control medioambiental como si lo puede exigir un clima mucho más frío y lluvioso.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/4.png', alt='Texto que describa la imagen')

    p(data-aos="fade-left").mb-5 Existen instalaciones que son necesarias y de común denominador para cualquier sistema productivo o explotación pecuaria como la bodega de almacenamiento, los silos de almacenamiento de alimento (en caso de necesitarlo), la bodega de almacenamiento de alimento, áreas de oficinas

    AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
      .row(titulo="Bodega de almacenamiento de alimento")
        .col-auto.mb-4.mb-md-0
          p Debe contar con la capacidad suficiente para almacenar el alimento balanceado del sistema productivo, tener un tipo de orden específico y los bultos o materias primas no pueden estar en contacto con las superficies de las mismas, debe ser lo suficientemente alta para lograr apilar los bultos, generalmente son construidas de cemento y ladrillo.
      
      .row(titulo="Silos de almacenamiento de alimento")
        .col-auto.mb-4.mb-md-0
          p El alimento balanceado en algunos sistemas de explotación animal es almacenado de forma a granel en silos exteriores, esos silos son construidos con materiales de PVC o metálicos, estos a su vez alimentan de forma mecánica a los animales, son completamente herméticos para evitar el crecimiento bacteriano.

      .row(titulo="Oficinas")
        .col-auto.mb-4.mb-md-0
          p Áreas donde se realiza el análisis y control del sistema productivo, también se organiza y se archiva la información.
      
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Espacio mínimo vital y manejo

    .tarjeta.color-secundario.p-4.mb-5
      .row.align-items-center.justify-content.center
        .col-md-3(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/5.png' alt='')
        .col-md-9(data-aos="fade-right")
          p Es importante para la construcción de las diferentes áreas de producción, conocer y reconocer las necesidades de espacio mínimo vital para cada animal, teniendo en cuenta las diferentes fases productivas, ya que son factores determinantes del mismo.
          p Se conoce como espacio mínimo vital a aquel espacio necesario para vivir, ya sea un animal o un grupo de animales, se puede medir por unidades de animales por área, buscando no causar estrés en el animal y con un pilar importante para no alterarlo como lo son las Buenas Prácticas de Bienestar Animal, como se observa en la siguiente tabla:
    .row.align-items-center.justify-content-center.mb-5
      .col-12
        .titulo-sexto.color-acento-contenido
            h5 Tabla 5
            span #[em Espacio mínimo vital por especie]
      
        .tabla-b.mb-5 
          table
            thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
              tr.text-center
                th Especie 
                th Densidad
            tbody(style="background-color:#FFFFFF")
              tr
                td #[b Bovinos (Unidades Gran Ganado)]
                td 0.65 U.G.G. / hectárea (pastoreo) 
              tr
                td #[b Equinos]
                td 1 animal por cada 4x4 metros 
              tr 
                td #[b Porcinos]
                td 
                  | 20-30 kg/ 0.30 m&sup2;/animal
                  br
                  | 30-50 kg /0.40 m&sup2;/animal
                  br
                  | 50-85 kg /0.55 m&sup2;/animal
                  br
                  | 85-110 kg/0.65 m&sup2;/animal

              tr 
                td #[b Aves ponedoras]
                td 
                  | Clima frío 6-7 aves / m&sup2;
                  br
                  | Clima cálido 5 aves/ m&sup2;
              tr 
                td #[b Pollos de engorde]
                td 
                  | 1 - 3 días      =      50-60 aves/m&sup2;
                  br
                  | 4 – 6 días      =      40-50 aves/m&sup2;
                  br
                  | 7 – 9 días      =      30-40 aves/m&sup2;
                  br
                  | 10 – 12 días    =      20-30 aves/m&sup2;
                  br
                  | 13 – 15 días    =      10-20 aves/m&sup2;
                  br
                  | 16 – 19 días    =      10 aves/m&sup2;
                  br
                  | 20 días en adelante = 8 aves /m&sup2;
              tr 
                td #[b Pequeños rumiantes]
                td 
                  | Cría 3 animales /m&sup2;
                  br
                  | Adulta 1 animal/ 3-5 metros 
    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Programación de mantenimiento

    p(data-aos="fade-left") El mantenimiento de las instalaciones tiene como objetivo evitar las diferentes averías y fallos, asegurando el funcionamiento ideal y disponibilidad.
    p(data-aos="fade-left") En las producciones pecuarias, el estado de las instalaciones es fundamental, no solo para que se mantenga la producción en niveles óptimos, sino para obtener el mejor beneficio productivo de los animales.
    p(data-aos="fade-left").mb-5 Es importante conocer los tipos de mantenimiento que se deben realizar en las producciones según sus necesidades y condiciones productivas para ser aplicadas:

    .row.align-items-center 
      .col-12
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              //- .col-6
                figure
                  img(src='@/assets/curso/temas/tema2/6.svg', alt='Texto que describa la imagen')
              
            h2.text-center Mantenimiento preventivo
            p Este tipo de tareas tiene como objetivo principal reducir todos los riesgos, fallas y posibles daños en las instalaciones, es importante tener en cuenta las programaciones de mantenimiento de cada producción.
          .col-md.tarjeta.color-acento-botones.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema2/7.svg', alt='Texto que describa la imagen')
              
            h2.text-center Correctivo
            p El mantenimiento correctivo consiste en reparar la avería después de producirse, es importante realizarla lo más rápido posible después de que sucede, ya que si es una avería que afecte un área productiva importante puede causar retrasos considerables y por ende pérdidas económicas.

          .col-md.tarjeta.color-acento-contenido.text-white.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema2/8.svg', alt='Texto que describa la imagen')
              
            h2.text-center Predictivo
            p La importancia de este tipo de mantenimiento es la recopilación y análisis de datos que permiten realizar estrategias de mantenimiento, si se detectan datos o valores que para su análisis pueden ser raros o de cuidado se puede considerar un mantenimiento preventivo.

      .col-3
        img(src='@/assets/curso/temas/tema2/9.png')

    p(data-aos="fade-left").mb-5 La programación de mantenimiento de las diferentes instalaciones está condicionada al sistema productivo y al tipo de instalación, allí radica la programación y periodicidad de las diferentes tareas o actividades.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Instalaciones según fase de crecimiento y desarrollo

    p(data-aos="fade-left").mb-5 Las instalaciones en las explotaciones pecuarias son construidas y desarrolladas encaminadas en brindar las mejores condiciones a las especies pecuarias y las personas que las manejan, debido a esto se realiza en algunos sistemas productivos la separación estructural de cada etapa productiva teniendo en cuenta condiciones especiales requeridas para cada área.

    .text-decor-2.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 #[b Aves de corral]

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/10.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Las instalaciones requeridas para las producciones avícolas dependen del sistema productivo utilizado en el predio, ya que un sistema productivo intensivo requiere unas instalaciones mucho más sofisticadas, el alojamiento debe ser en un ambiente controlado y duradero ya sea de tipo tradicional o sistematizado. Para la producción de avicultura intensiva es necesario contar con laboratorios (en lo cual no se va a profundizar) y en galpones.

    h4(data-aos="fade-right").mb-5 Los galpones
    p(data-aos="fade-left").mb-5 Son las instalaciones de alojamiento más importantes en el sistema pecuario avícola ya que allí es donde se alojan las aves durante todo su ciclo productivo, para la elaboración y construcción de estos se deben tener en cuenta ciertas recomendaciones de localización, orientación y materiales de fabricación para lograr un mayor confort y aprovechamiento del lugar. A continuación, se pueden ver sus características:

    AcordionA(tipo="a" clase-tarjeta="tarjeta")(style="background-color:#DBF9BD").mb-5
      .row(titulo="Localización")
        .col-md-8.mb-4.mb-md-0
          p Se recomienda que según el tipo de explotación avícola los galpones deben construirse en un terreno con buen drenaje y corriente natural de aire que no sea tan fuerte, se recomienda aprovechar si hay árboles para así regular la temperatura y utilizarlos como barrera para romper el viento. Debe estar en un lugar de fácil supervisión, lejos del ruido y cualquier causal de estrés para el animal, lejos de las aguas estancadas o tierras con tendencia a inundarse.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema2/11.png', alt='Texto que describa la imagen')

      .row(titulo="Orientación").justify-content-center
        .col-md-8.mb-4.mb-md-0
          p La orientación del galpón es importante según la zona en la que se va a construir y las condiciones climáticas de la misma, ya sea para clima frío, templado o cálido.
          h4 Clima frío y templado
          p Este clima se considera desde los 15 y 20 grados centígrados, donde el eje más largo del galpón se direccione de norte a sur, esto, para lograr una mayor temperatura provocada por la luz solar que el este permanentemente se posiciona sobre el galpón.
          h4 Clima cálido
          p Las condiciones de clima cálido se presentan a temperaturas mayores de los 20 grados centígrados, donde el eje del galpón se debe ubicar de manera de oriente a occidente para así tener periodos de sombra y regular un poco la temperatura.

        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema2/12.png', alt='imagen decorativa')
        .col-8.mt-5
          figure
            img(src='@/assets/curso/temas/tema2/13.svg', alt='imagen decorativa')

      .row(titulo="Materiales de fabricación")
        .col-md-8.mb-4.mb-md-0
          p Los materiales empleados en la construcción de galpones generalmente son estructuras elaboradas con hierro, hormigón o ladrillos en algunas unidades pecuarias se emplean mallas de alambre para ayudar a la eliminación de gases y evaporación del calor.
          p Los galpones en la actualidad se pueden dividir en dos clases o tipos dependiendo su tecnología aplicada y características estos son: los galpones tradicionales y los galpones mucho más modernos con tecnología para el control y confort medioambiental que son galpones de ambiente controlado.
        .col-md-4.mb-5
          figure
            img(src='@/assets/curso/temas/tema2/14.png', alt='imagen decorativa')
        .col-md-8.mb-4.mb-md-0
          h4 Galpones tradicionales
          p Son los más comunes y antiguos donde se alojan los animales en ocasiones, solo se cuanta, con medios de aireación por ventiladores, el uso de cortinas para controlar las condiciones ambientales y generar un mejor ambiente para el animal.
        .col-md-4.mb-5
          figure
            img(src='@/assets/curso/temas/tema2/15.png', alt='imagen decorativa')
        .col-md-8.mb-4.mb-md-0
          h4 Galpones de ambiente controlado
          p Son galpones con un sistema tecnológico de regulación e información contando con un sistema controlado de ventilación, refrigeración por evaporación o aspersión de agua para generar un ambiente más fresco, o sistemas de calefacción automática para generar un ambiente más cálido mucho más utilizado en el manejo del pollito. Este también cuenta con sistema de iluminación para brindar al pollo una luz constante así eliminado los factores negativos del fotoperiodo. 
        .col-md-4.mb-5
          figure
            img(src='@/assets/curso/temas/tema2/16.png', alt='imagen decorativa')

    .text-decor-2.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 #[b Cerdos]

    p(data-aos="fade-left").mb-5 Las instalaciones de los diferentes sistemas productivos porcícolas cuentan con infraestructuras para las diferentes etapas productivas de los animales, estas edificaciones dependen del número y fase productiva que alojen siempre tendrán en cuenta, como mínimo, unos aspectos importantes para el manejo animal:

    .row.mb-5
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | La localización de cada nave en el contexto global de las edificaciones de la granja con objeto de minimizar y facilitar el trasiego de animales dentro y entre naves. 
          li
            i.lista-ul__vineta
            | El volumen y, especialmente, la superficie construida total y útil para los animales, que, junto al tipo de suelo, el tamaño de los grupos y a la distribución del utillaje, ha de constituir la base para el control físico y social de los animales.
          li
            i.lista-ul__vineta
            | Las características propias del edificio que han de permitir el control climático del espacio interior. Entre estas características son especialmente importantes: 
          li
            ul
              li 
                i.lista-ul__vineta
                | El grado de aislamiento térmico que proporcionan suelos, paredes, cubierta, puertas y ventanas. 
          li
            ul
              li 
                i.lista-ul__vineta
                | El sistema de ventilación elegida y sus mecanismos de control. 
          li
            ul
              li 
                i.lista-ul__vineta
                | Los posibles sistemas de refrigeración y/o calefacción que se puedan instalar.   

    p(data-aos="fade-left").mb-5 En los sistemas productivos porcícolas de ciclo cerrado las principales instalaciones las siguientes:

    AcordionA(tipo="a" clase-tarjeta="tarjeta")(style="background-color:#DBF9BD")(data-aos="fade-right").mb-5
      .row.justify-content-center(titulo="Área de gestación")
        .col-12.mb-5
          p Esta área cuenta con una jaula por cerda, donde se encontrará la cerda desde el momento de la inseminación, hasta su traslado a la sala de maternidad (110 días más o menos), esta jaula deberá se confortable para el animal que permita que este de pie, y acostada fácilmente, pero evitando que tenga mucho espacio para así no provocar lesiones ya que el peso que pueden alcanzar en esta etapa puede ser muy alto, de esta manera también se facilita el manejo frente a la detección de celo y preñez, la alimentación y demás prácticas que son de vital importancia.
        .col-8 
          h4 Corral de primerizas 
          p Estructura sin paredes, pero con muros, que faciliten el ingreso del macho para realizar la primera estimulación acelerando el estro en las hembras. 
          h4 Corral de verracos 
          p El corral de verracos debe estar lo más cerca de la sala de colecta y esta sala de colecta deberá estar cerca al laboratorio para evitar alteraciones en el semen y lesiones en los reproductores.
          p Estos corrales deberán ser individuales y contar con mínimo 6 metros cuadrados con divisiones de 150 cm para evitar fugas o intentos de fugas, ya que su temperamento es fuerte y al sentir la presencia de otro macho puede causar peleas.
          p Los pisos deben ser consistentes y sin protuberancias ya que estas irregularidades pueden causar lesiones o fracturas, las puertas generalmente son de metal reforzado y con tranca para evitar aperturas indeseadas.
        .col-4
          figure
            img(src='@/assets/curso/temas/tema2/17.png', alt='Texto que describa la imagen')
      .row.justify-content-center(titulo="Área de maternidad ")
        .col-8
          p En el área de maternidad es donde se cometen la gran mayoría de errores debido a que no tomamos en cuenta las diferencias de temperatura que existe entre la cerda lactante y la cría recién nacida, por esta razón la sala de maternidad debe construirse bajo condiciones que brinde confort tanto a las madres como a las crías.
          p Estas instalaciones deben construirse de manera que facilite la limpieza de los animales y de las instalaciones, debe tener una ventilación ideal para evitar alteraciones en la producción lechera de la madre y por consiguiente una mala nutrición del lechón.
          p Como medidas recomendadas para las jaulas tanto de la cerda como de las crías son de 1,80 metros de ancho por 2,40 metros de largo.
        .col-4
          figure  
            img(src='@/assets/curso/temas/tema2/18.png', alt='Texto que describa la imagen')

      .row.justify-content-center(titulo="Destete/transición")
        .col-8
          p En estas instalaciones ingresan los lechones cuando son separados de sus madres, estos corrales tienen formas rectangulares para alojar de 15 a 20 cerdos con medidas recomendadas de 2 metros de ancho por 4,20 metros de largo.
          p Dentro de esta área se utilizan los cajones de recría los cuales constan de un piso de paja o una cama utilizada brindando unas áreas de reposo de los animales con adecuado aislamiento térmico, libres de corrientes de aire, dando al lechón un lugar de escondite y confort ya que son áreas calientes. 
        .col-4 
          figure  
            img(src='@/assets/curso/temas/tema2/19.png')

      .row.justify-content-center(titulo="Crecimiento engorde")
        .col-8
          p Este corral es donde permanecen los animales el mayor periodo de tiempo, las áreas de engorde cuentan con condiciones y características especiales, como el corral, el cual debe ser más largo que ancho, tener buena ventilación, disponer de un techo, piso de concreto con una pendiente de lavado y desagüe, para facilitar el lavado de los corrales, es importante tener en cuenta las áreas de deyección para así asegurar que los corrales permanezcan limpios y libres de materia fecal.

        .col-4
          figure  
            img(src='@/assets/curso/temas/tema2/20.png')

      .row.justify-content-center(titulo="Área de cuarentena")
        .col-8
          p El área de cuarentena es aquel lugar en el predio destinado a aislar los animales, ya sea por sospecha o riesgo a ser transmisores o tener una enfermedad, para no afectar el sistema de bioseguridad establecido en la granja.

        .col-4
          figure  
            img(src='@/assets/curso/temas/tema2/21.png')

    .text-decor-2.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 #[b Bovinos]

    .tarjeta.color-secundario.p-4.mb-5
      .row.align-items-center.justify-content.center
        .col-md-6(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/22.png' alt='').p-4
        .col-md-6(data-aos="fade-right")
          p En la ganadería bovina la gran mayoría de producciones de ganadería de carne son de tipo extensivo, lo cual requiere unas instalaciones más de tipo tradicional y un poco rudimentarias, siendo más importante las instalaciones destinadas al cargue y descargue, como también todas aquellas para la práctica, ya sea para realizar actividades sanitarias como vacunaciones, fumigaciones, baños y todo tipo de tareas que estos requieran, mientras que para la producción de leche se requiere tener condiciones e infraestructura ideal para realizar el proceso de extracción de la leche y según el tipo de producción para el alojamiento de las vacas productivas. 

    p(data-aos="fade-left").mb-5 En los sistemas productivos bovinos las principales instalaciones son las siguientes:

    .row.align-items-center.justify-content.center.mb-5
      .col-md-6(data-aos="fade-right")
        h4 Instalaciones para la recepción
        p En las ganaderías bovinas el transporte de los animales se efectúa por medio de camiones o a pie, es importante tener en cuenta en la construcción, adecuar un lugar especial para la recepción o despacho de animales llamado embarcadero, el cual consta de una plataforma que debe tener un pendiente no superior al 8 % para evitar caídas de los animales, y contar con unas barras a los laterales creando un pasillo, también cuentan con unas puertas corredizas para evitar que el ganado se escape y facilitando las labores de arreo y embarque. 
        p En algunos predios ganaderos se crean corrales de recepción, los cuales deben contar con al menos 5 barras para animales pequeños y 7 barras para animales mucho más grandes, dispuestas horizontalmente donde la última barra superior alcance la altura de 1,30 m, se deben fijar barras de manera horizontal al suelo de manera segura y fija que sea resistente al manejo animal.
      .col-md-6(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/23.png' alt='').p-4

    .row.align-items-center.justify-content.center.mb-5
      .col-md-6(data-aos="fade-right")
        h4 Corrales de manejo
        p Este corral es un corral diseñado para todas las labores de manejo animal que requieran en el predio pecuario como: el descornado, herrado, vacunación, curación, entre otros. Puede ser construido de materiales como madera, hierro, madera plástica, entre otros elementos que por su resistencia se pueden usar el cual cuenta de barras de forma horizontal y vertical asegurando que los animales no se escapen.   
        p Este corral debe contar con diferentes áreas, las cuales son divididas de la siguiente forma:
      .col-md-6(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/24.png' alt='').p-4

    .tarjeta.color-secundario.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Corrales de retención
            p Son corrales diseñados para separar el ganado en números muchos más fáciles de manejar o en la categoría que deseen ya sea sexo, etapa productiva, lote, etc. Es recomendable que no sobrepase las medidas de 15 metros por 15 metros, este debe contar con puertas de salida que conduzcan al pasillo, y al callejón.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/25.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Pasillo, callejón
            p Lugar por donde se conduce el ganado para llegar al embudo.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/26.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Embudo
            p Mantiene a los animales enfilados y con muy poco ángulo de movilidad, facilitando así su conducción y en algunas situaciones se realizan labores en esta área principalmente labores de vacunación.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/27.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Brete o apretadero
            p Diseñado para diferentes prácticas de manejo animal, es una forja de tubos de hierro y acero resistente con acabados pulidos para evitar lastimar al animal, cuenta con una puerta delantera generalmente son corredizas o por medio de acción de palancas, cuyo objetivo es sostener al animal por el cuello asegurando la cabeza y manteniéndolo fijo, en la parte de atrás cuenta con una puerta corrediza, lateralmente algunas cuentan con fierros móviles para facilitar el trabajo.
            p Existen diseños de apretaderos acondicionados con básculas para pesaje animal.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/28.png', alt='Texto que describa la imagen')

    h4(data-aos="fade-left") Salas de ordeño
    p(data-aos="fade-left").mb-5 Dentro de las instalaciones para la producción de leche en el ganado bovino y pequeños rumiantes encontramos el corazón de la producción el cual es la sala de ordeño o lugar de ordeño en esta se realizan todas las labores relacionadas a la recolección de la leche, este lugar debe encontrarse en un sitio de la granja equidistante para evitar largos recorridos de los animales, debe contar con unas entradas y salidas claras, es importante para el sistema productivo identificar la sala de ordeño que más se adecue a las características de la producción dentro de estas encontramos:

      .tarjeta.color-secundario.p-4.mb-5
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Espina de pescado
              p Estas son las más comunes y tradicionales en los sistemas productivos, se ubican de manera contigua, mirándose unas a las otras como su nombre lo indica en espina de pescado, logrando que en el centro se realice la función del operario, de esta forma todas las vacas ingresan al ordeño al mismo tiempo y son ordeñadas igual, por ende, se debe crear grupos homogéneos de producción.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/29.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              h4 Rotativo
              p Los animales son ingresados a una plataforma circular la cual realiza el ordeño al mismo tiempo que va sacando los animales, mientras que a medida que va girando sale una y entra otra, ocupando el lugar de la anterior. Es una de las salas más costosas por la inversión que requiere.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/30.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              h4 Paralelo
              p En este sistema también vemos la entrada y salida de las vacas individualmente, la disposición es una al lado de la otra, su eficiencia radica en que se puede realizar el suministro de alimento mientras se realiza el ordeño.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/32.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              h4 Tándem
              p Este sistema consta de jaulas individuales para cada animal a ordeñar donde las vacas están, una detrás de la otra y cada una tiene entrada y salida independiente, permite el ordeño con cría para estimular mayor producción de leche.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/31.jpg', alt='Texto que describa la imagen')
                //- figcaption Nota. Adaptado de Perulactea (2018)

    .text-decor-2.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 #[b Equinos]

    .tarjeta.color-secundario.p-4.mb-5
      .row.align-items-center.justify-content.center
        .col-md-6(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/33.png' alt='').p-4
        .col-md-6(data-aos="fade-right")
          p Las instalaciones de alojamientos equinos son instalaciones que deben tener en cuenta las características climáticas para su construcción, se recomienda que en zonas de climas fríos su construcción se realice de norte a sur y en zonas de clima cálido de oriente a occidente. El alojamiento debe permitir un espacio adecuado para el animal, sin alterar su zona de confort, permitir un adecuado espacio entre pasillo para permitir el movimiento seguro de los animales y sus cuidadores.
          p Las instalaciones equinas o caballerizas deben ser construidas con materiales fáciles de lavar, resistentes y que no absorban la humedad, se recomienda para el piso de las instalaciones materiales fáciles de limpiar y antideslizante. Los pisos de materiales como asfalto, ladrillo y concreto con materiales que por su durabilidad y el no requerir un mantenimiento constante son de gran elección para la construcción de estas.

    p(data-aos="fade-left").mb-5 Un elemento fundamental de los alojamientos equinos son las camas, independiente del material que se elija debe cumplir con unas condiciones de grosor y limpieza para asegurar que los animales no sufran patologías, como se observa en la siguiente tabla:

    .row.align-items-center.justify-content-center.mb-5
      .col-12
        .titulo-sexto.color-acento-contenido
            h5 Tabla 6
            span #[em Ventajas y desventajas de los tipos de cama]
      
        .tabla-c.mb-5 
          table
            thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
              tr
                th Tipos de cama
                th Ventajas
                th Desventajas
            tbody(style="background-color:#FFFFFF")
              tr
                td #[b Paja]
                td 
                  | Fácil de consumir 
                  br
                  | Económica 
                  br
                  | Puede ser consumida por el animal
                td 
                  | Poco absorbente 
                  br
                  | Puede contener moho
                  br
                  | Problemas de amoniaco 
              tr
                td #[b Viruta]
                td 
                  | La más caliente 
                  br
                  | Muy absorbente 
                td 
                  | No pueden consumirla 
                  | Elevado costo 
                  | Polvorienta
              tr 
                td #[b Aserrín]
                td 
                  | Muy económico 
                td 
                  | Polvorienta
                  br
                  | Absorbe menos que viruta 
              tr 
                td #[b Papel]
                td 
                  | Limpio 
                  br
                  | Nada de polvo
                  br
                  | Absorbe 
                td
                  | Elevado costo 
                  br
                  | No deben consumirlo 
                  br
                  | Difícil de adquirir 
              tr 
                td #[b Arena]
                td Inerte 
                td 
                  | Muy difícil de limpiar 
                  br
                  | Muy cara
                  br
                  | Fría 
              tr 
                td #[b Salvado de arroz]
                td Gran capacidad de absorción 
                td 
                  | La más cara 
                  br
                  | No deben consumirla 


  </template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
