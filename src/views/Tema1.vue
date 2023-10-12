<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Especie Animal
      
    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-5
        img(src='@/assets/curso/temas/tema1/1.png')
      .col-7
        p Es fundamental reconocer y comprender las notables diferencias que existen entre las diversas especies animales, ya que estas disparidades abarcan una amplia gama de aspectos, como sus características físicas, habilidades motoras, sistemas digestivos y comportamientos, entre otros. Estas diferencias tienen un impacto significativo en las condiciones de manejo requeridas para cada especie en particular.
        p Es importante destacar que incluso dentro de una misma especie, el manejo puede variar sustancialmente según su estado productivo o su etapa en el ciclo de vida. Por ejemplo, las necesidades y el manejo de una vaca lechera en producción serán muy diferentes de los de una vaca en gestación o de un ternero en crecimiento.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Características y etapas de desarrollo

    p(data-aos="fade-left") Como se ha indicado, en las especies pecuarias se evidencian diferencias notorias en las características tanto físicas, fisiológicas, reproductivas, nutricionales y comportamentales, las cuales dan unos lineamientos de alimentación, cuidado, alojamiento, y aplicación de técnicas especiales, que buscan el bienestar animal para que este sano, cómodo, libre de estrés, bien alimentado, y buscando una prevención de las enfermedades. Además de buscar que los animales sean eficientes productivamente.
    p(data-aos="fade-left").mb-5 A continuación, se puede ver las características y etapas de desarrollo de estas especies:

    AcordionA(tipo="a" clase-tarjeta="tarjeta")(style="background-color:#DBF9BD")(data-aos="fade-right").mb-5
      .row.justify-content-center(titulo="Bovinos, caprinos y ovinos")
        .col-11
          p Son animales mamíferos por lo tanto requieren del consumo de leche al momento de nacer, son ungulados (patas con pesuña), su alimentación consta de plantas forrajeras y pastos en ocasiones es necesario la suplementación de minerales los cuales son importantes para su desarrollo productivo.
          p Los bovinos poseen tres líneas de producción establecidas, las cuales son la leche, la carne, y la mezcla de ambas que sería el doble propósito o producción de carne y leche, estas líneas de producción llevan al ganado bovino a una serie de cambios físicos los cuales por medio de la evolución genética y fenotípica busca dar unas características físicas ideales para la línea productiva deseada generando así razas especializadas para cada una de estas.
          p Las rumiantes productoras de leche, tienen la característica de que todos los nutrientes aportados por la alimentación son destinados para la producción de la misma, debido a que poseen un gran potencial genético ofertando mucha más leche de la que requiere la cría, siendo este factor determinante para el sistema productivo, por otro lado el ganado de carne todos sus nutrientes obtenidos por la alimentación son utilizados para el crecimiento de masa muscular, acumulación de grasa y formación de carne.
          .row.justify-content-center
            .col-10
              .titulo-sexto.color-acento-contenido
                h5 Tabla 1
                span #[em Características físicas bovinos según líneas de producción]

          
              .tabla-b.mb-5 
                table
                  thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
                    tr.text-center
                      th Línea productiva
                      th Razas
                  tbody(style="background-color:#FFFFFF")
                    tr
                      td  #[b Producción de carne]
                        ul.lista-ul
                          li 
                            i.lista-ul__vineta
                            | Cuerpo compacto y corto con forma de cuadrado.  
                          li 
                            i.lista-ul__vineta
                            | Presencia de una mayor masa muscular.
                          li 
                            i.lista-ul__vineta
                            | Caras cortas con cabezas profundas y frentes anchas. 
                          li 
                            i.lista-ul__vineta
                            | Alcanzan pesos muy superiores a los demás. 
                          li 
                            i.lista-ul__vineta
                            | Sus ubres no son tan desarrolladas. 
                          li 
                            i.lista-ul__vineta
                            | Caderas amplias y muslos grandes.
                      td
                        ul.lista-ul
                          li 
                            i.lista-ul__vineta
                            | #[i Simmental]
                          li 
                            i.lista-ul__vineta
                            | #[i Brangus]
                          li 
                            i.lista-ul__vineta
                            | #[i Angus]
                          li 
                            i.lista-ul__vineta
                            | #[i Brahaman]
                          li 
                            i.lista-ul__vineta
                            | #[i Simbrah]
                          li 
                            i.lista-ul__vineta
                            | #[i Cebú]
                    tr
                      td  #[b Producción de leche]
                        ul.lista-ul
                          li 
                            i.lista-ul__vineta
                            | Cuerpo un poco más alargado con forma de triangulo 
                          li 
                            i.lista-ul__vineta
                            | Su ubre es mucho más desarrollada y grande se evidencia un tamaño de pezones ideal
                          li 
                            i.lista-ul__vineta
                            | Su ganancia de peso es normal
                          li 
                            i.lista-ul__vineta
                            | Se busca que sus caderas sean anchas de flexibles para dar mayor facilidad en los partos
                      td
                        ul.lista-ul
                          li 
                            i.lista-ul__vineta
                            | #[i Holstein]
                          li 
                            i.lista-ul__vineta
                            | #[i Jersey]
                          li 
                            i.lista-ul__vineta
                            | Normando
                          li 
                            i.lista-ul__vineta
                            | #[i Gyr]
                          li 
                            i.lista-ul__vineta
                            | Pardo suizo
                    tr
                      td  #[b Producción doble propósito] <br> <br>Se busca una mezcla de ambas características físicas buscando sacar lo mejor de cada línea genética para así desarrollar un animal encaminado en ambos sistemas productivos <br> <br>
                        ul.lista-ul
                          li 
                            i.lista-ul__vineta
                            | Ubres grandes
                          li 
                            i.lista-ul__vineta
                            | Cuerpos musculosos y de muy buena ganancia de peso
                          li 
                            i.lista-ul__vineta
                            | Cuerpo compacto
                      td
                        ul.lista-ul
                          li 
                            i.lista-ul__vineta
                            | #[i Gyr]
                          li 
                            i.lista-ul__vineta
                            | #[i Guzerath]
                          li 
                            i.lista-ul__vineta
                            | Harton del valle
                          li 
                            i.lista-ul__vineta
                            | Simental
                
        
      .row.justify-content-center(titulo="Cerdos")
        .col-11
          p Animales mamíferos, poligástricos, su alimentación es un poco variada ya que va desde el consumo de plantas hasta el consumo de carne o animales por lo tanto se considera omnívoro, dentro de las líneas de producción de cerdos encontramos líneas principalmente para fines productivos de carne que son llamadas líneas padre las cuales su característica principal es el crecimiento rápido y ganancia de peso a menor tiempo y también encontramos las líneas madres que son todas aquellas que brindan las características de maternidad generalmente utilizadas para procesos reproductivos.
          .row.justify-content-center
            .col-10
              .titulo-sexto.color-acento-contenido
                h5 Tabla 2
                span #[em Características físicas cerdos]
          
              .tabla-b.mb-5 
                table
                  thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
                    tr.text-center
                      th Línea productiva
                      th Razas
                  tbody(style="background-color:#FFFFFF")
                    tr
                      td  #[b Línea paterna] <br><br>Se caracteriza por tener una gran conformación en el lomo, en los jamones y una excepcional calidad de canal. Son netamente utilizados para producción de carne. 
                      td
                        ul.lista-ul
                          li 
                            i.lista-ul__vineta
                            | Landrace Belga
                          li 
                            i.lista-ul__vineta
                            | Hampshire Alemán
                          li 
                            i.lista-ul__vineta
                            | Duroc Aleman
                    tr
                      td  #[b Línea materna]<br><br>Animales que, gracias a sus características como cuidado materno, carácter, producción de leche, número de lechones por parto, conformación corporal, fertilidad y proliferación son seleccionados para cumplir las funciones de reproductoras de las explotaciones porcícolas.
                      td
                        ul.lista-ul
                          li 
                            i.lista-ul__vineta
                            | Landrace
                          li 
                            i.lista-ul__vineta
                            | Chester White
                          li 
                            i.lista-ul__vineta
                            | Yorkshire
      .row.justify-content-center(titulo="Equinos")
        .col-11
          p Animales Mamíferos que cuentan con un solo dedo llamado casco, son animales propiamente herbívoros se alimentan de heno, pasto, granos de cebada, algunas hortalizas, avena, soja, maíz, entre otras. 
          p Su sistema digestivo es un poco delicado por ende requiere muchos cuidados alimenticios y en la forma de alimentar ya que es recomendable repartir la ración en pequeñas cantidades, pero muchas veces al contrario de alimentar solo con una gran ración, sus usos productivos son principalmente la cría. 
          //-p Las características de las aves de corral son animales ovíparos ya que su desarrollo embrionario se da en un huevo producido por la hembra que previamente fue fecundado por el macho, son animales omnívoros que se alimentan casi de cualquier clase de alimento, donde por medio de sus picos y patas dotadas con largas uñas buscan su comida, en las condiciones de producción son alimentadas con piensos debidamente elaborados para cumplir con sus necesidades nutricionales, son principalmente criadas por sus huevos y la carne donde se usan razas especializadas para la producción.

          img(src='@/assets/curso/temas/tema1/2.png')

      .row.justify-content-center(titulo="Aves de corral")
        .col-11
          p Las características de las aves de corral son animales ovíparos ya que su desarrollo embrionario se da en un huevo producido por la hembra que previamente fue fecundado por el macho, son animales omnívoros que se alimentan casi de cualquier clase de alimento, donde por medio de sus picos y patas dotadas oon largas uñas buscan su comida, en las condiciones de producción son alimentadas con piensos debidamente elaborados para cumplir con sus necesidades nutricionales, son principalmente criadas por sus huevos y la carne donde se usan razas especializadas para la producción.
          .row.justify-content-center
            .col-10
              .titulo-sexto.color-acento-contenido
                h5 Tabla 3
                span #[em Características físicas aves de corral]
          
              .tabla-b.mb-5 
                table
                  thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
                    tr.text-center
                      th Producción
                      th Línea productiva
                  tbody(style="background-color:#FFFFFF")
                    tr
                      td  #[b Carne (pollo de engorde)] <br><br>Crecimiento veloz, conformación corporal alto, consumos de alimento elevados, para mayor crecimiento y una conversión alimenticia eficiente.
                      td
                        ul.lista-ul
                          li 
                            i.lista-ul__vineta
                            | ROOS
                          li 
                            i.lista-ul__vineta
                            | COBB
                    tr
                      td  #[b Huevo (gallina ponedora)]<br><br>Se busca que las gallinas ponedoras tengan alto rendimiento en postura, una conformación de cascara de huevo fuerte y resistente, que su instinto de maternidad sea marcado.
                      td 
                        | Línea roja (huevo marrón)<br><br>
                        ul.lista-ul
                          li 
                            i.lista-ul__vineta
                            | Hi lyne
                          li 
                            i.lista-ul__vineta
                            | Brown
                          li 
                            i.lista-ul__vineta
                            | Isa Brown
                          li 
                            i.lista-ul__vineta
                            | Lohmann Brown
                        | Línea blanca (huevo blanco)<br><br>
                        ul.lista-ul
                          li 
                            i.lista-ul__vineta
                            | Hi lyne w36
                          li 
                            i.lista-ul__vineta
                            | Hi lyne w80
                          li 
                            i.lista-ul__vineta
                            | Lohmann

    p(data-aos="fade-left").mb-5 En los sistemas productivos animales las etapas de desarrollo son consideradas para evaluar e identificar el crecimiento y desarrollo de estos, el cual va relacionado con todos los factores de manejo animal, alimentación, reproducción, madures sexual, medio ambiente entre otros, y es muy importante definir intervalos de tiempo, generando así las bases para determinar la eficiencia tanto animal como del sistema productivo. 

    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Una alta velocidad de crecimiento está asociada no solamente al logro de un peso de faena a una edad temprana, sino también a la aptitud para la reproducción precoz, lo que determina un incremento de la eficiencia productiva 
            i.fas.fa-quote-right
          span #[b - Bavera, (2005).]

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/3.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 El crecimiento o desarrollo de los diferentes órganos o tejidos no es en todos igual, ya que unos crecen con más celeridad, esto es llamado crecimiento diferencial, por otra parte, encontramos otro concepto llamado #[b alometría] que responde al principio es el crecimiento relativo, como son los huesos del cráneo, que no crecen sin que haya un desarrollo cerebral, a medida que el cerebro se desarrolla estos huesos también crecen y con ellos crece la cabeza del animal. Otro ejemplo de crecimiento y desarrollo son las gónadas y el tejido gonadal, en donde su desarrollo tiene un pico acercándose a la pubertad, acelerado por los procesos hormonales presentando un cambio muy rápido.

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-8
        p Estas etapas de desarrollo marcan las fases de producción animal debido a que, dependiendo del desarrollo y crecimiento del animal, se ubican los animales distribuidos en diferentes etapas del ciclo productivo. 
        p En las producciones pecuarias existen diferentes fases por la que los animales pasan dependiendo de su crecimiento, desarrollo y conformación física, estas fases o periodos van desde que el animal nace, hasta que está listo para la comercialización o el mercadeo de sus subproductos como es el caso de la leche. 
        p Para cada especie animal y producción animal, cambian los un poco, sin embargo, la base fundamental de todos rige en los mismos lineamientos: iniciación, levante y producción. Durante cada ciclo de producción es importante tener en cuenta que los criterios de manejo y alimentación se tienen ciertas variaciones necesarias para esta empresa. 
      .col-4
        img(src='@/assets/curso/temas/tema1/4.png')

    p(data-aos="fade-left").mb-5 A continuación, veamos diferentes ciclos productivos:

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 #[b Ciclo productivo ganadería de leche]
    
    .row 
      .col-3
        img(src='@/assets/curso/temas/tema1/5.svg')
      .col-9
        TabsA.color-acento-botones.mb-5
          .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Fase de inicio")
            p.mb-5 Esta fase no tiene gran diferencia a la ganadería de leche ya que el ternero posee las mismas características físicas y requiere el mismo cuidado.

          .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Fase de levante")
            p.mb-5 Esta fase va generalmente hasta los 24 meses en hembras y 20 meses en machos, es una fase de producción en donde se debe aprovechar el pico de crecimiento de los animales. Estos animales en la fase de levante requieren para una ganancia de 600 gramos al día se debe suministrar de proteína 601 gramos y altos niveles de calcio para su desarrollo osteomuscular, y un porcentaje más o menos del 2 % de su peso vivo en materia seca.

          .tarjeta(style="background-color:#DBF9BD; max-width:100%").p-4(titulo="Fase de ceba o engorde")
            p.mb-5 El objetivo de la ceba es alcanzar en un período de tiempo ideal de 30 meses un peso promedio de 480 kilogramos de peso vivo del animal, esta etapa se suministra grandes cantidades de alimento y se completa el desarrollo del animal frente a su estructura corporal.

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 #[b Ciclo productivo ganadería de carne]
    
    p(data-aos="fade-left").mb-5 La ganadería especializada en la ganancia de carne es un sistema en el cual se utilizan razas con alto potencial genético para la ganancia de peso mucho más rápido y, una conformación muscular mucho más desarrollada con el objetivo de alcanzar pesos de venta en un corto tiempo.

    TabsA.color-acento-botones.mb-5
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Fase de inicio")
        p.mb-5 Esta fase va desde el nacimiento hasta más o menos los 6 meses, durante las primeras 24 a 48 horas debe ser alimentado con calostro producido por la leche de su madre, en esta fase el desarrollo del componente digestivo es fundamental pues hay desarrollo del rumen, ya que las terneras recién nacidas funcionan como monogástricas; su estómago funcional es el abomaso, a medida que el animal va creciendo e inicia el consumo de sólidos, va desarrollando el rumen, un retículo donde el rumen cuanta con 25 %, el retículo 5 %, el omaso 10 % y el abomaso 60 %, que a diferencia de su periodo final de desarrollo y conformación, este termina en un 80 % de rumen, un 5 % del retículo, un 8 %del omaso y 7 % del abomaso, así la ternera ya puede realizar los procesos de fermentación ruminal. Este proceso tarda de 2 a 3 semanas.

      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Fase de levante")
        p.mb-5 Este periodo inicia después de realizarse el destete de los animales estos animales oscilan entre más o menos los 150 a 200 kg de peso vivo y una edad promedio entre los 8 meses y el año de edad. En esta fase los animales alcanzan la madurez sexual y en las vacas lecheras se toma hasta más o menos los 26ay 29 meses de edad.
            
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Fase de producción")
        p.mb-5 Esta fase inicia cuando la novilla o las vacas productivas alcanzan su primer parto o se encuentran preñadas, iniciando su fase de producción lechera con un completo desarrollo de la glándula mamaria y una novilla lista para gestar una cría.

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 #[b Ciclo productivo de la gallina ponedora]
    
    p(data-aos="fade-left").mb-5 La vida de la gallina ponedora se puede dividir en tres etapas:

    .row 
      .col-2
        img(src='@/assets/curso/temas/tema1/6.svg')
      .col-10
        TabsA.color-acento-botones.mb-5
          .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Etapa de cría")
            p.mb-5 Comienza en la semana cero de vida del ave hasta la semana número cinco, esta etapa es la más crítica y delicada, se debe tener en cuenta algunos aspectos para evitar que las aves contraigan enfermedades virales y bacteriológicas, se debe tener precaución como alimentación correcta (en las primeras dos horas de vida se debe suministrar solo agua a voluntad), cuidados por cambio del ambiente, aseo correcto, entre otros. Cuando la pollita sale del cascaron se vacuna inmediatamente contra la enfermedad de #[em NewCastle] y Viruela Aviar

          .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Etapa de levante")
            p.mb-5 Esta etapa comienza el día uno, de la semana nueve de vida las pollitas y finaliza en la semana número 18, en este momento se debe enfocar en el desarrollo óseo y muscular sin grasa acumulada en el ave, esto se logra mediante una adecuada alimentación. Se debe tener agua fresca a voluntad, para regulación de temperatura natural. En esta etapa las pollas se vacunan en dos ocasiones más contra la enfermedad de #[em NewCastle], dos vacunas contra Coriza Aviar y dos contra Cólera Aviar.
                
          .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Etapa de producción")
            p.mb-5 Tiene una duración aproximada de 14 a 18 meses de vida del ave, en esta etapa se esperan resultados óptimos basados en los cuidados anteriores y la genética elegida, con una postura de excelente calidad y constancia, las aves deben llegar a este momento con una actitud despierta y con buena condición corporal. Se espera la primera postura de cada polla entre los 5 a 6 meses de edad alcanzado la mayor producción alrededor de la semana 54 de vida con un 85 % de producción a partir de este momento las aves comienzan una reducción lenta en la postura.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Hoy en día, numerosos laboratorios dedicados a la investigación genética en aves destinadas a la producción comercial de huevos han tenido éxito en la mejora de sus linajes. Esto se ha convertido en un incremento del potencial genético de las gallinas, con el objetivo de lograr una mayor productividad y una calidad superior en los huevos obtenidos. Estos estudios han conseguido acelerar el proceso de madurez sexual en las aves, permitiendo adelantar en una generación de pollas la fase de puesta en uno o dos días, lo que a su vez implica un adelanto en la producción de huevos de igual duración.
            i.fas.fa-quote-right
          span #[b - #[em Poultry line], 2019]

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 #[b Ciclo productivo del pollo de engorde]
    
    p(data-aos="fade-left").mb-5 El ciclo productivo del pollo de engorde es mucho más corto que las aves destinadas a postura, el ciclo de los pollos tiene una duración aproximada de 42 a 50 días aproximadamente y se divide en cuatro etapas:

    TabsA.color-acento-botones.mb-5
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Preinicio")
        p Se habla de pre-inicio en la parte más crítica y delicada de la vida del pollito, va desde la salida de cascaron del pollito hasta el día 9 aproximadamente; es donde se debe prestar más atención para que en las siguientes etapas se pueda obtener un animal vigoroso con excelente salud. Antes de la llegada del pollito se deben de prender criadoras con unas 8 horas de anticipación aproximadamente con el fin de recibir el pollito a una temperatura de 32 º C, se debe recibir con agua fresca y alimento a disposición además se debe tener 23 horas de iluminación; tanto temperatura como iluminación irán disminuyendo día a día paulatinamente. 
        p.mb-5 En esta fase el pollito tiene desarrollado el sistema óseo, vascular e inmune.

      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Inicio")
        p En esta etapa el pollito cambia el tipo de alimento, pasa de un alimento en su mayoría pulverizado a un alimento más denso y tiene una duración aproximada de 11 a 12 días, ese presenta desarrollo esquelético para un buen soporte de masa muscular en los siguientes días. 
        p.mb-5 Se debe ir aumentando el espacio lentamente en medida que el pollo va creciendo y aumentando el sistema de ventilación.
        
            
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Engorde")
        p En esta etapa se da una transición del alimento de iniciación al de engorde, tiene una duración de 12 días aproximadamente, existe un cambio en la textura y en la densidad nutricional; en este momento se puede observar un crecimiento acelerado del ave.
        p.mb-5 Además, se debe estimular el pollo para una buena ingesta de alimento y con esto lograr un desempeño biológico óptimo de la línea genética seleccionada y es de suma importancia el suministro de una densidad nutricional optima con un consumo de agua adecuada que nos puede servir de indicador de consumo de alimento por ave, en esta instancia se requiere que el pollo tenga un buen acceso a los aminoácidos y energía que requiere su rápido crecimiento.

      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Finalización")
        p Esta es la última etapa de vida del pollito antes de ser enviado a la planta de beneficio, en esta etapa se busca optimizar el rendimiento del ave en la que se pueda tener un índice de conversión alimenticia alto, logrando el peso que se quiere obtener al momento del sacrificio.
        p.mb-5 El pollo presenta mayor consumo de alimento en esta etapa debido a que requiere mayor cantidad. Se debe tener cuidados básicos cuando el ave ya se encuentra en esta etapa para evitar infartos por falta de ventilación o mala manipulación, observar el estado de la cama a diario para evitar quemadura de pechuga y Pododermatitis.

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 #[b Ciclo productivo de la producción porcina]
    
    p(data-aos="fade-left") Según las diferentes etapas de desarrollo del cerdo, las granjas porcinas comerciales dividen su sistema productivo en etapas dependiendo el crecimiento del animal y sus características de desarrollo, en las cuales también se evidencian las fases de inicio levante y ceba donde el objetivo general es producir carne de cerdo bajo estándares de calidad. 
    p(data-aos="fade-left").mb-5 Para entender el ciclo productivo de la producción porcina se debe conocer las características básicas tanto de la hembra como del macho:

    .tarjeta.color-secundario.p-4
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Hembras
            p La reproducción de las hembras y el alcance de la madurez sexual están muy condicionado a la presencia de los machos en los sistemas de explotación ya que estimulan la hembra de manera natural logrando así acelerar los procesos de madurez. Las características sexuales están también muy determinadas al medio ambiente y condiciones físicas del animal.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/7.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center.my-lg-4

          .col-md-8.mb-4.mb-md-0
            h4 Reproducción porcinos hembras
            .titulo-sexto.color-acento-contenido
                h5 Tabla 4
                span #[em Características reproducción porcinos hembras]
          
            .tabla-b.mb-5 
              table
                thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
                  tr.text-center
                    th Características
                    th Rango
                tbody(style="background-color:#FFFFFF")
                  tr
                    td #[b Madurez sexual] 
                    td 5- 5 1 /2 meses
                  tr
                    td #[b Madurez reproductiva]
                    td 7 – 8 meses de edad
                  tr 
                    td #[b Duración del calor o celo]
                    td 24- 48 horas
                  tr 
                    td #[b Longitud del ciclo estral]
                    td 18-21 días
                  tr 
                    td #[b Aparición del calor después del destete]
                    td 3-8 días
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/8.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Machos
            p La madurez sexual de los cerdos reproductores es un proceso que se da de manera gradual donde se evidencian caso desde los 5 meses un cerdo puede servir la hembra pero no es muy recomendable ya que muchas veces su desarrollo no es completo y no ha logrado su maduración, es aconsejable que se empiece a realizar a partir de los 7 a 8 meses de edad con un peso promedio de 110 a 120 kg.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/9.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Reproducción porcinos machos
            p Sus tres fases son:
            h4 Iniciación
            p El proceso de iniciación va desde el destete del animal, donde se empieza a desarrollar todo el componente digestivo ya que el animal por primera vez empieza a recibir alimentación por medio de alimentos balanceados o pellets, esta etapa va hasta los 20 kilogramos.
            h4 Levante
            p El levante de los cerdos se da desde los 20 kilogramos hasta los 45 kilos, haciendo un proceso de transición entre la iniciación y la ceba.
            h4 Ceba o engorde
            p La ceba o el engorde se da desde los 45 kilos hasta los 90 – 110 kg que es el peso final comercial, se realiza bajo conceptos de alimentación y cuidado animal.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/10.png', alt='Texto que describa la imagen')
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Técnicas de manejo animal

    p(data-aos="fade-left").mb-5 La definición de las diferentes técnicas de manejo es un concepto que se utiliza para definir todas las acciones realizadas por los manipuladores de los animales en pro de un buen comportamiento animal y mejor un aspecto productivo, para brindar al animal condiciones óptimas para lograr mejor desempeño del mismo, estas técnicas están fundamentadas en:

    .row.justify-content-center 
      .col-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/11.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 #[b Conocer al animal y sus instintos], reconociendo su habitad y especio de #[i confort] con el fin de reducir el estrés, la excitación, el agotamiento entre otros

        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/12.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 #[b Aplicar las diferentes medidas de bioseguridad], con la finalidad de conocer y reducir todas las diferentes situaciones de peligro que se puedan presentar tanto para la protección del hombre como del animal.
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/13.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 #[b Aplicación de los diferentes conocimientos relacionados a las instalaciones y equipos utilizados], con el fin de mantener relajados y tranquilos a los animales, identificar y retirar las distracciones, para mejorar las labores realizadas donde se ejecute menos trabajo con mayor rendimiento y obteniendo eficacia en producción.

        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/14.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 #[b Aplicación de los diferentes métodos de adiestramiento animal], que no ponga en peligro el personal y a las especies animales, desde el momento de su nacimiento hasta la el final de la vida útil productiva facilitando su manejo, conducción y traslado.
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/15.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 #[b Aplicación de tratamientos de forma adecuada], que no ponga en riesgo la salud animal ni la humana.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
