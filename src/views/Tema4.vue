<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Bienestar animal 
      
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Cuando se habla de bienestar animal se refiere a las buenas condiciones en las que un animal está en su entorno como su estado de salud, disponibilidad de alimento y agua en buen estado para el consumo, seguridad y lugar donde pueda expresar abiertamente su comportamiento natural evitando el dolor y el miedo, acceso a medicina preventiva y curativa, etc.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Principios del bienestar animal

    .cajon.color-primario.p-4.mb-5
      p Los animales deben ser tratados con respeto y de forma compasiva, el bienestar animal contempla la muerte digna en el momento que corresponda y sea estrictamente necesario terminar con su sufrimiento.

    .tarjeta.BGIMG01.p-5(style="border-radius:0px")
      .row.justify-content-around.align-items-center.p-5
        .col-6 
          p Entre los principios básicos de bienestar animal siempre se habla de la regla de las “cinco libertades”:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Libre de hambre, sed y malnutrición.
            li 
              i.lista-ul__vineta
              | Libre de temor y angustia.
            li 
              i.lista-ul__vineta
              | Libre de incomodidades como molestias físicas y térmicas.
            li 
              i.lista-ul__vineta
              | Libre de dolor y enfermedad. 
            li 
              i.lista-ul__vineta
              | Libre expresión en comportamiento animal natural.  
        .col-6
          img(src="@/assets/curso/temas/tema4/2.png").img65

    p(data-aos="fade-left").mb-5 Todo animal que cumpla una función deportiva, trabajo, producción, investigación, entre otros, debe tener garantía de buena salud y condición corporal además de comodidades básicas de vida y eso debe ser un deber ético de las personas que se hacen cargo del él. 

    .row.justify-content-around.align-items-center.mb-5
      .col-10
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular En cuanto al bienestar de los animales acuáticos, la OIE formula recomendaciones relativas a los peces de cultivo (excepto para las especies ornamentales) e insta a “recurrir a métodos de manipulación que sean apropiados a las características biológicas del animal, así como un entorno adaptado a sus necesidades”
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (OMS, 2021).  

    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Comportamiento animal
    
    p(data-aos="fade-left") El comportamiento animal está basado en la genética y las condiciones ambientales de cada uno de ellos.
    p(data-aos="fade-left") El comportamiento instintivo está pocamente relacionado con aprendizajes o vivencias del animal, este comportamiento se considera asociado a la genética y se relaciona con los comportamientos naturales de cada especie (parto, succión de pezón para obtención de leche, comportamiento reproductivo, entre otros); por otro lado, están los comportamientos basados en las vivencias y el entorno del animal, estos aprendizajes son esenciales en la primera etapa de vida ya que usualmente se aprende de los padres o de la manada.
    p(data-aos="fade-left").mb-5 A continuación, se puede ver un poco más al respecto:

    .tarjeta.color-secundario.p-4.mb-5
        SlyderA(tipo="b")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Animales domésticos
              h4 Primeras vivencias de nacimiento 
              p En animales domésticos se conoce como impronta a las primeras vivencias desde el nacimiento y días posteriores a este, los primeros días son determinantes para el futuro comportamiento de cada animal en su vida adulta.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/3.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Animales de presa
              h4 Visión y olfato para supervivencia 
              p Los animales de presa dependen de sentidos como audición, visión y olfato para su supervivencia, y desde el punto de vista de la explotación, estos sentidos son importantes para una adecuada relación entre cuidador y animal. En cuanto a la visión tiene gran importancia para el manejo, la invasión de esta zona determinará que el animal se mueva o se fugue en una dirección particular, de acuerdo con la posición desde donde se ingrese a la misma. (SENASA, 2015).

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/4.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Olfato y audición
              p En los animales el olfato y la audición sirven para detectar depredadores cuando están cerca y, en partes oscuras se agudiza la audición con movimientos selectivos en los que se puede posicionar para obtener un máximo rendimiento auditivo.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/5.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Tipo de comportamiento animal
              p Todos los animales tienen un tipo de comportamiento según el nivel de luminosidad ya sea natural o el que se proporcione en un ambiente controlado, la cantidad de horas luz determina el ciclo circadiano del animal, en países con estaciones climáticas los animales adquieren un tipo de comportamiento específico de cada especie para aumentar su confort y seguridad en cada una de las estaciones.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/6.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Condición o etapa de vida
              p Existen comportamientos de los animales ligados a su condición o etapa de vida en la que se encuentran: 
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Macho y hembra. 
                li 
                  i.lista-ul__vineta
                  | Edad. 
                li 
                  i.lista-ul__vineta
                  | Estado reproductivo (castrado o sin castrar). 
                li 
                  i.lista-ul__vineta
                  | Hembras gestantes. 
                li 
                  i.lista-ul__vineta
                  | Hembras con cría o sin cría.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/7.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Animales domésticos comportamientos
              h4 Viven en Rebaño o parvada
              p Los animales domésticos tienen comportamientos gregarios, viven en rebaño o parvada y tienen posiciones sociales dependiendo de fuerza, edad, sexo, entre otras. Comportamiento de apareamiento promiscuo en su etapa juvenil; se debe reconocer el comportamiento de cada especie para minimizar el estrés en el manejo y garantizar un bienestar animal. Esto, para que nos genere un doble propósito debido a que un animal en un buen estado genera mayor productividad y rentabilidad en cualquier explotación pecuaria.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/8.png', alt='Texto que describa la imagen')

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Actividades cotidianas no muy cambiantes
              p Se recomienda realizar actividades cotidianas no muy cambiantes a las cuales el animal está acostumbrado para evitar estrés y reacciones inesperadas, todo esto se logra mediante las respuestas al estímulo aprendidas a lo largo de la vida del animal.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/9.png', alt='Texto que describa la imagen')

    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Prácticas

    p(data-aos="fade-left") En la actualidad las personas que consumen alguna fuente de origen animal están demostrando una preferencia por alimentos producidos con un máximo respeto hacia los animales en donde se garantice que cada uno ha llevado una vida con calidad, motivo por el cual las granjas de explotación pecuarias se han visto obligadas a cambiar sus prácticas de manejo de animales, actualizando sus métodos de manera que sean éticos y respetuosos, para un beneficio de mayor productividad e inclusión en un mercado moderno que exige diferentes condiciones a los que se traían de años atrás.
    p(data-aos="fade-left").mb-5 Muchos de los animales domésticos que se utilizan para la explotación pecuaria son considerados animales de presa (bovinos, cerdos, équidos, aves, caprinos, ovinos y lagomorfos) por lo que su comportamiento puede ser de fuga y hay que tener en cuenta algunas recomendaciones generales:

    .tarjeta(style="background-color:#DBF9BD").p-5.mb-5
      .row.align-items-center.justify-content.center
        .col-md-5(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/10.png' alt='')
        .col-md-7(data-aos="fade-right")
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Evitar los acercamientos bruscos de personas conocidas y desconocidas por el animal.
            li 
              i.lista-ul__vineta
              | Evitar colocar objetos extraños cerca del animal sin antes hacer interacción previa objeto-animal para su acertado reconocimiento y evitar reacciones que puedan afectar al animal y las personas.
            li 
              i.lista-ul__vineta
              | Controlar los ruidos sorpresivos a los que los animales no se encuentren adaptados en su cotidianidad.
            li 
              i.lista-ul__vineta
              | Evitar en máxima medida golpes directos e indirectos hacia los animales, se debe tener una manipulación adecuada y eficiente que permita manejo tranquilo en cada explotación.
            li 
              i.lista-ul__vineta
              | Manejo adecuado de iluminación y corrientes de aire que puedan generar un cambio en el comportamiento animal, afección a salud y por tanto al bienestar (especial cuidado en explotación avícola y porcícola). 
        
    p(data-aos="fade-left") La zona de fuga hace referencia a punto de equilibrio o balance y el punto ciego, el conocimiento de esto facilita el entendimiento del desplazamiento de los animales. El punto de equilibrio hace referencia a una línea imaginaria a la altura de la cruz de los animales, permite analizar la dirección de movimiento del animal dependiendo del lado en el cual se invada la zona de fuga; si las personas se acercan por detrás del punto de equilibro el animal avanza, y si se hace el acercamiento desde el frente del punto de equilibrio el animal retrocede. El punto ciego se encuentra detrás de la cola del animal, se debe evitar que, en el momento de una posible manipulación los operarios se posicionen en este lugar para intentar mover el animal desde este punto porque no funciona y puede generar accidentes dentro de las granjas. 

    p(data-aos="fade-left").mb-5 #[b Cuando se requiera el desplazamiento de animales domésticos de presa, se deben tener en cuenta unas recomendaciones:]

    .row.justify-content-center
      .col-10
        .row.align-items-center
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/11.svg' alt='AvatarTop')
              .tarjeta.color-secundario
                .p-4
                  p Todo el camino debe estar despejado.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/16.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-secundario
                .p-4
                  p Muchos animales como los bovinos no avanzarán si ven un callejón sin salida aparte de esto se rehusarán a caminar si existe poca iluminación en el camino.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/12.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-secundario
                .p-4
                  p Evitar sombras que puedan asustar los animales.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/17.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-secundario
                .p-4
                  p Los animales no deben ser manipulados por personal agresivo.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/13.svg' alt='AvatarTop')
              .tarjeta.color-secundario
                .p-4
                  p Se debe dirigir a los animales con calma y en silencio, de requerir ruidos deben ser leves y con voz suave para no alterar y generar nerviosismo.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/18.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-secundario
                .p-4
                  p No agredir a los animales, no jalar la cola, extremidades o cabeza.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/14.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-secundario
                .p-4
                  p Los animales deben tener libertad y se debe respetar el tiempo de cada uno, permitir que avancen siguiendo a otros con calma y a un paso normal.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/19.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-secundario
                .p-4
                  p Evitar la presencia de otros animales como los perros que no estén entrenados debidamente y caballos.
                  
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/15.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-secundario
                .p-4
                  p No se debe presionar a los animales que vienen en la parte de atrás de la manada, según las características de comportamiento animal, en esta posición avanzan animales viejos, muy jóvenes y animales enfermos por lo que si se genera presión los animales no avanzaran por el contrario se presentara un retroceso.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema4/20.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-secundario
                .p-4
                  p El uso de tábano eléctrico está restringido en animales como bovinos y cerdos adultos (solo debe ser aplicado en los cuartos traseros del animal cuando sea estrictamente necesario) y no es apropiado el uso en animales como equinos, caprinos, ovinos y animales jóvenes. 

    figure
      img(src="@/assets/curso/temas/tema4/21.png")
    .tarjeta.color-primario(style="border-radius:0px").p-5.mb-5
      p La garantía de un buen trato hacia los animales desde el primer momento que pisen la granja de explotación pecuaria no solo es beneficioso para el animal y la producción si no para un manejo fácil y seguro a través de su vida y sus años productivos, ya que los animales recuerdan experiencias atemorizantes o que les ocasionan dolor y desarrollan comportamientos defensivos para evitarlo.
      p Se debe actualizar y sensibilizar al personal que esté directamente implicado en el manejo de los animales, de esta manera se garantiza un trato adecuado hacia ellos; además se debe mantener en buen estado las instalaciones de manera que sean apropiadas para una adecuada estadía de los animales y un correcto desarrollo del animal que pueda garantizar su bienestar óptimo dentro de la granja.
      
</template>

<script>
export default {
  name: 'Tema4',
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
