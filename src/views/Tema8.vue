<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Gestación

    p(data-aos="fade-left") La gestación es un proceso fisiológico de los animales donde la hembra inicia un proceso de desarrollo, conformación y maduración embrionaria, la cual se produce por la fecundación del óvulo con el espermatozoide.
    p(data-aos="fade-left").mb-5 La gestación de los animales varía dependiendo de la especie, a continuación se explicarán los tiempos de gestación para cada especie animal (ver tabla 7).

    .row.align-items-center.justify-content-center.mb-5
      .col-12
        .titulo-sexto.color-acento-contenido
            h5 Tabla 7
            span #[em Gestación por especie]
      
        .tabla-b.mb-5 
          table
            thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up").text-center 
              tr
                th Especie
                th Tiempo de duración
            tbody(style="background-color:#FFFFFF").text-center
              tr
                td #[b Bovino]
                td 283 días
              tr
                td #[b Caprino]
                td 150 días
              tr 
                td #[b Porcino]
                td 3 meses, 3 semanas, 3 días
              tr 
                td #[b Equino ]
                td 11-12 meses
              tr 
                td #[b Ovino]
                td 152 días  
    
    p(data-aos="fade-left") Para la identificación y seguimiento de la preñez se debe tener claro, los tiempos y periodos de presentación del celo animal, ya que si se hay una repetición de celo quiere decir que el animal no se encuentra preñado o en gestación.
    p(data-aos="fade-left").mb-5 Presentación de celo en las especies pecuarias:

    .row.align-items-center.justify-content-center.mb-5
      .col-12
        .titulo-sexto.color-acento-contenido
            h5 Tabla 8
            span #[em Periodo de presentación de celo]
      
        .tabla-b.mb-5 
          table
            thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up").text-center 
              tr
                th Especie
                th Periodo de presentación
            tbody(style="background-color:#FFFFFF").text-center
              tr
                td #[b Bovinos]
                td Cada 21 días 
              tr
                td #[b Equinos]
                td 18 - 20 días 
              tr 
                td #[b Porcinos]
                td 2 a 7 días después del destete
              tr 
                td #[b Caprinos]
                td 18 a 22 días 
              tr 
                td #[b Ovinos]
                td 18 a 22 días  

    p(data-aos="fade-left").mb-5 Existen métodos para diagnosticar la preñez de los animales donde se puede separar en dos grandes grupos, el primer grupo puede ser la más práctica y utilizada que es por medio del sentir u observar, y el otro método se basa en marcadores químicos hormonales que tiene un animal gestante.

    .tarjeta(style="background-color:#DBF9BD").p-4.mb-5
      p Métodos para el diagnóstico y seguimiento de la gestación:
      .row 
        .col-5
          figure  
            img(src='@/assets/curso/temas/tema8/1.png')
        .col-7
          p #[b La ausencia de celo:] si el celo no se repite quiere decir que el animal esté preñado.

          p #[b Palpación:] se utiliza para detectar y realizar seguimiento de la preñez.

          p #[b Progesterona en leche:] estas pruebas son útiles para realizar seguimiento a animales con problemas de preñez, al momento de la monta o inseminación los niveles deben estar bajos y después de 18 a 21 días estas deben aumentar.

          p #[b Crecimiento fetal:] si bien es un método de diagnóstico muy tardío, se puede utilizar como signo de diagnóstico. Teniendo en cuanta que gran parte del crecimiento fetal se da en los últimos meses.

          p #[b Análisis de progesterona en sangre:] los análisis de sangre son métodos muy utilizados en granjas o predios muy tecnificados, en este se evidencia los niveles de progesterona en sangre, los cuales en caso de una preñez tienen que aumentar y permanecer elevados. 

    p(data-aos="fade-left").mb-5 Los cuidados que se les deben dar a las hembras en estado de gestación son de vital importancia para garantizar un parto ideal y el nacimiento de animales en perfectas condiciones el objetivo de la gran mayoría de explotaciones, es la cría de animales para su posterior engorde, se debe considerar realizar unos cuidados especiales a las madres donde los factores nutricionales, confort animal, manejo sanitario, y tiempos de descanso son determinantes para lograr el objetivo final. Estos cuidados son:

    .row.justify-content-center.mb-5
      .col-10
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Alimentación")
            .col-md-6.mb-4.mb-md-0
              p El alimento ofrecido al animal en estado de gestación tiene que cumplir con los requerimientos nutricionales exigidos tanto por la madre como por el feto en estado de desarrollo, este alimento tiene que ser de calidad y en cantidad suficiente para evitar la desnutrición del animal y futuros problemas en el parto, es importante también realizar una suplementación con minerales para así evitar problemas de hipocalcemia, deficiencias de fósforo, entre otros problemas por deficiencia de minerales.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema8/2.png', alt='Texto que describa la imagen')

          .row(numero="2" titulo="Sanidad")
            .col-md-6.mb-4.mb-md-0
              p Es importante que el animal este al día en todo su plan sanitario para así estar en plenas condiciones, es importante también tener en cuenta la desparasitación antes del parto para evitar enfermedades durante y después del parto.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema8/3.png', alt='Texto que describa la imagen')

          .row(numero="3" titulo="Espacio adecuado")
            .col-md-6.mb-4.mb-md-0
              p Es importante ofrecer el espacio adecuado a los animales para evitar situaciones de estrés por confinamiento, también elegir un lugar plano donde el aminal no tenga riesgos de caídas o deslices.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema8/4.png', alt='Texto que describa la imagen')

          .row(numero="4" titulo="Tiempo de descanso")
            .col-md-6.mb-4.mb-md-0
              p Procurar que el animal en su último tercio de gestación no realice actividades de producción, ni traslados, buscando que el animal permanezca tranquilo y sin condiciones de estrés.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema8/5.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema8',
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
