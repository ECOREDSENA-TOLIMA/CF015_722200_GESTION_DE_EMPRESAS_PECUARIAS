<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Equipos e implementos

    p(data-aos="fade-left").mb-5 Dentro de las instalaciones se encuentran diferentes tipos de implementos y equipos que ayudan a conformar y estructurar la unidad productiva, donde en ocasiones el animal tiene que hacer un previo acostumbramiento a los mismos. Dentro de las clases de equipos e implementos se ven las siguientes:

    .row.justify-content-center.mb-5
      .col-5
        .row
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/1.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta(style="background-color:#DBF9BD")
                .p-4
                  h2.text-center Alimentación 
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Comederos 
                    li 
                      i.lista-ul__vineta
                      | Bebederos 
                    li 
                      i.lista-ul__vineta
                      | Distribución del alimento 

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema3/2.svg' alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta(style="background-color:#DBF9BD")
                .p-4
                  h2.text-center Producción 
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Criadoras  
                    li 
                      i.lista-ul__vineta
                      | Nidales 
                    li 
                      i.lista-ul__vineta
                      | Ordeñadoras mecánicas
                    li 
                      i.lista-ul__vineta
                      | Ventiladores  


    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Principios de funcionamiento y manual de funcionamiento

    p(data-aos="fade-left").mb-5 Siendo estos equipos utilizados por los operarios para brindar al animal el mejor confort y condiciones para su crecimiento y producción según sea el caso. Los equipos deben ser empleados de manera adecuada según la etapa productiva del animal y su condición física.

    .text-decor-2.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 #[b Alimentación]

    figure
      img(src="@/assets/curso/temas/tema3/3.png")
    .tarjeta.color-primario.p-5.mb-5
      p Los equipos usados para la alimentación animal de los diferentes sistemas productivos. 

    .text-decor-2.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 #[b Comederos]

    p(data-aos="fade-left").mb-5 La administración del alimento es fundamental en las producciones pecuarias ya que este suministra los nutrientes necesarios para el crecimiento, desarrollo y producción del animal para asegurar el consumo de dicho alimento. Existen varios tipos de comederos que van desde el más tecnificado calculando la ración por animal, hasta el más simple que requiere que el operario suministre de forma manual el alimento, los cuales se verán a continuación:

    .tarjeta.color-secundario.p-4.mb-5
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Comederos manuales
              p Los comederos manuales como su nombre lo indica, es requerido el suministro del alimento por parte del operario en las diferentes bandejas, canoas o canales de alimentación.
              p Estos comederos pueden ser individuales o colectivos según sea el sistema productivo.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/4.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              h4 1- Bandeja o plato
              p Se utiliza para alimentar animales pequeños en fase de aprendizaje, se recomienda no usar en grupos grandes ya que puede causar peleas.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/5.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              h4 2- En canoa
              p Es muy utilizado para la alimentación y suplementación de rumiantes y equinos, ya que se le puede adicionar componentes líquidos junto con el alimento, generalmente se usa uno por animal o pequeños grupos.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/6.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              h4 3- Longitudinales o lineales
              p Se utilizan para la alimentación de grandes grupos de animales donde se brinda el alimento de manera uniformes para que todos los animales consuman por igual. Dentro de este tipo de comedero puede haber divisiones entre animales para evitar riñas y así asegurar el consumo de los animales más tímidos.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/7.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              h4 4- Con tolva
              p Se utiliza para grandes grupos de animales y generalmente en producciones intensivas ya que su función es la de disponer alimento en la tolva y que por gravedad y consumo de los animales este vaya llenando la bandeja inferior, teniendo así disponibilidad de alimento de forma constante y permanente.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/8.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              h4 Comederos automáticos
              p Este tipo de comedero es mucho más tecnificado ya que no requiere de la mano de obra del cuidador u operario, ejecutando mejor el tiempo de este en otras labores necesarias y otorgando al animal mejores criterios de alimentación mucho más uniforme y evitando riñas por el consumo, de esta manera también beneficia al sistema productivo ya que evita desperdicios este tipo de alimentadores es utilizado principalmente en alimentos balanceados en forma de pellet, extruder o harinas.
              p #[b Se pueden utilizar de dos maneras dependiendo el sistema productivo y etapa del animal:]

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/9.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              h4 1- Automáticos regulables
              p Son comederos automáticos que liberan el alimento a determinada hora, o situación programada todo es controlado por una computadora.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/10.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              h4 2- Automáticos de libre alimentación 
              p Comederos en los cuales el animal aprende a liberar el alimento, comiendo cada que el animal tenga hambre o deseos de alimentarse, aplicando así un sistema de alimentación a voluntad del animal.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/11.png', alt='Texto que describa la imagen')

    .text-decor-2.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 #[b Bebederos]

    p(data-aos="fade-left").mb-5 Los bebederos son fundamentales para la hidratación de los animales, debe estar siempre disponible para cuando el animal lo requiera, ya que la falta de agua provoca problemas de deshidratación, golpe de calor, baja en el consumo de alimento, etc., teniendo en cuenta lo anterior, es un recurso determinante en el sistema productivo por esta razón no puede faltar. Estos bebederos tienen que estar en condiciones opimas de limpieza ubicación y altura para que los animales dependiendo de la fase de desarrollo, puedan acceder con facilidad, a continuación, se ven sus variedades:

    .row.justify-content-center.mb-5
      .col-10
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Bebedero de cubeta")
            .col-md-6.mb-4.mb-md-0
              p Recipientes de plástico, requieren una limpieza continua y recambio de agua de forma manual, puede ser utilizado para hidratar varios animales al tiempo.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/12.png', alt='Texto que describa la imagen')

          .row(numero="2" titulo="Distribuidores de agua autocontenida")
            .col-md-6.mb-4.mb-md-0
              p Bebederos de plástico que requieren un llenado manual, son muy utilizados en aves, su instalación puede ser colgante, requieren de acostumbramiento por parte del animal. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/13.png', alt='Texto que describa la imagen')

          .row(numero="3" titulo="Bebederos de campana")
            .col-md-6.mb-4.mb-md-0
              p Son utilizados en los galpones de aves generalmente porque proporcionan agua de bebida a un grupo numeroso de aves, son fáciles de limpiar y de trasladar, se instalan directamente al suministro de agua.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/14.png', alt='Texto que describa la imagen')

          .row(numero="4" titulo="Bebederos automáticos (tipo mordida) (niple)")
            .col-md-6.mb-4.mb-md-0
              p Son bebederos que son automáticos requieren de un acostumbramiento del animal para aprender a beber, se requiere de una calibración especial en presión de agua, flujo y altura es recomendable que la presión se aumente a medida que el animal se desarrolla.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/15.png', alt='Texto que describa la imagen')

          .row(numero="5" titulo="Bebederos de canal")
            .col-md-6.mb-4.mb-md-0
              p Son bebederos muy utilizados en ganadería bovina de pequeños rumiantes y para hidratar equinos, consta de un canal lleno de agua que puede ser conectado directamente al suministro, o llenado por los cuidadores.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/16.png', alt='Texto que describa la imagen')

    .text-decor-2.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 #[b Producción]

    p(data-aos="fade-left").mb-5 Son todos los equipos utilizados para mejorar los factores productivos asegurando las mejores condiciones al animal brindándole el mayor bienestar y confort para que exprese todo su potencial productor. Dentro de estos equipos se tienen las criadoras o calentadores, los nidales, las ordeñadoras mecánicas, los ventiladores, como se ve a continuación:

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Criadoras
          p Estas criadoras son resistencias que se calientan contando con una campana para focalizar y direccionar el calor y una lámpara infrarroja (de luz blanca), generan una fuente de calor, esta debe ser debidamente vigilada para evitar sobrecalentamiento y posibles quemaduras o problemas de fotosensibilización, son utilizadas en animales recién nacidos.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/17.png', alt='Texto que describa la imagen')

      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema3/18.png', alt='Texto que describa la imagen')
        .col-md-6
          h3 Nidales
          p Son utilizados en aves de postura y es allí donde se depositan los huevos, deben ser cómodos y atractivos para los animales, se consideran que sean oscuros para que la gallina lo vea como un lugar seguro y realice la ovoposición, estos nidos pueden ser comunales.

      .row
        .col-md-6.mb-4.mb-md-0
          h3 Ordeñadoras mecánicas  
          p Este equipo permite realizar el ordeño de los animales, son muy utilizados en grandes y pequeños rumiantes, estas máquinas aplican vacío parcial al pezón para lograr extraer la leche, ejerce fuerzas que provoca un masaje en el pezón para aumentar la circulación del mismo, evitando congestiones y posibles problemas de mastitis, estos equipos cuentan con un copa de ordeño, pezoneras, bomba de vacío, regulador de vacío, recibidor y bomba para la leche, mangueras de conducción, colector de ordeño, motor, entre otras. 
          p Es importante realizar una previa limpieza u desinfección de las diferentes partes para evitar enfermedades o alteraciones en el producto.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/19.png', alt='Texto que describa la imagen')

      .row
        .col-md-6 
          figure
            img(src='@/assets/curso/temas/tema3/20.png', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          h3 Ventiladores  
          p En el interior de los galpones, las cocheras y otros, se necesita que la temperatura sea la ideal para que los animales estén en las mejores condiciones de manejo, la ventilación ayuda a regular la temperatura y la humedad en casos de calor extremo, también ayuda a la eliminación de los diferentes gases (amoniaco, dióxido de carbono, etc.) que se producen en los sistemas productivos y quedan contenidos en las naves de producción, para mantener una ventilación ideal se requiere tener en cuenta los siguientes factores:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | #[b Velocidad del aire para la etapa productiva]
            li 
              i.lista-ul__vineta
              | #[b La renovación de aire]
            li 
              i.lista-ul__vineta
              | #[b Circulación del aire]
      
       
    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Técnicas de manejo

    p(data-aos="fade-left").mb-5 Las diferentes técnicas de manejo son establecidas por el tipo de equipo usado, es importante determinar para cuantos animales está fabricado el equipo, en el caso de los comederos hay especificaciones al respecto, de esta manera se tendrá que realizar la cuenta de cuantos comederos se necesitan para la producción. Es importante en las técnicas de manejo tener en cuenta las condiciones de limpieza y desinfección de los componentes ya que están en contacto directo con los animales y pueden ser causantes de la proliferación de agentes infecciosos.

</template>

<script>
export default {
  name: 'Tema3',
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
