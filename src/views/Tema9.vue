<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Lactación

    .row.mb-5
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema9/1.png', alt='Texto que describa la imagen')
      .col-md-8.mb-4.mb-md-0
        p Los mamíferos son animales vertebrados cuya característica más marcada es la provisión de leche hacia sus crías, por medio de esta se genera una protección para las crías ayudando en su supervivencia. En la lactancia se pasan nutrientes e inmunidad de la madre a la cría; inicia inmediatamente ocurre el nacimiento hasta que las crías sean capaces de conseguir su alimento por cuenta propia.
        p En cuanto la cría va creciendo, los componentes requeridos en la leche van cambiando de acuerdo con las necesidades; la cantidad de lactosa presente en la leche va disminuyendo gradualmente y van aumentando ácidos grasos y proteínas. La duración de la lactancia es propia de cada especie.
        p La anatomía de la glándula mamaria es diferente entre especies. El número de glándulas y los pezones no son iguales en la vaca, la yegua y la cerda. Sin embargo, la anatomía microscópica es muy similar en todas las especies. La glándula mamaria de todas ellas, se da desde la etapa fetal:

    AcordionA(tipo="b" clase-tarjeta="tarjeta")(style="background-color:#DBF9BD").mb-5
      .row(titulo="Glándula mamaria rumiantes")
        .col-auto.mb-4.mb-md-0
          p Está compuesta por 4 cuartos completamente independientes, dos delanteros y dos traseros. Los cuartos traseros tienen mayor capacidad de producción hasta aproximadamente el 60 % y un 40 % los cuartos delanteros; estos cuartos están separados por tejido conectivo no definido y los cuartos derechos e izquierdos están separados por un ligamento suspensorio medio. No existe la posibilidad de compartir leche de un cuarto a otro, existe la probabilidad de intercambio sanguíneo. Posición inguinal.
          p Cada cuarto finaliza en un pezón que tiene una longitud aproximada de 7 a 8cm, estos pezones están constituidos por 4 capas: Epidermis, dermis, músculo y endotelio. 
          .row.justify-content-center 
            .col-10.mt-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 3
                span #[em Glándula mamaria rumiantes]

              figure
                img(src='@/assets/curso/temas/tema9/2.png', alt='Figura 3 Glándula mamaria rumiantes En la figura se representa hueso pélvico, tejido conectivo (conecta la ubre a la pared del abdomen), ligamento suspensión lateral, igualmente se observa las membranas conectivas finas izquierda, anterior, posterior y derecha, finalmente el ligamento suspensorio medio.').p-4
                figcaption Nota: Tomado de Boeris, M.A. Genero, G.A. - Meglia, G.E. Figura 1. Sistemas de soporte de la ubre de la vaca. Adaptado de Wattiaux (Guías Técnicas lecheras, Instituto Babcock).

      
      .row(titulo="Glándula mamaria de la yegua")
        .col-auto.mb-4.mb-md-0
          p La yegua posee dos glándulas mamarias que al igual que en la vaca están separadas y no hay intercambio de leche solo de flujo sanguíneo; las glándulas son completamente independientes, el pezón de la yegua es en forma de cilindro y suele ser más pigmentada. Posee dos ligamentos suspensorios que son lateral (mayor soporte de la glándula) y medial; la ubre tiene una capa delgada de piel con escaso pelo. Posición inguinal.

          .row.justify-content-center 
            .col-10.mt-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 4
                span #[em Glándula mamaria de la yegua]

              figure
                img(src='@/assets/curso/temas/tema9/3.png', alt='Figura 4 Glándula mamaria de la yegua En la figura se representa el cuerpo de la mama con el surco intermamario, anillo venoso de Fústenberg y pezón, también se observa el seno lactífero con la parte glandular, parte capilar, conducto papilar y orificio papilar.').p-4
                figcaption Nota: Tomado de Chierichetti, S. (2019). Crianza de un potrillo huérfano a partir de una yegua sustituta, Foto N°1 Chezzi et al., 2011. <br> <a v-bind:href="'https://ridaa.unicen.edu.ar:8443/server/api/core/bitstreams/f15fd8c2-3808-45c7-95a8-dfb9d7e476cd/content'"target='_blank'>https://ridaa.unicen.edu.ar:8443/server/api/core/bitstreams/f15fd8c2-3808-45c7-95a8-dfb9d7e476cd/content</a>

      .row(titulo="Glándula mamaria en cerdas")
        .col-auto.mb-4.mb-md-0
          p Se encuentran formando dos líneas paralelas sobre la pared ventral del cuerpo es decir de posición toracolumbar. Se unen al cuerpo por medio de tejido adiposo y conectivo por medio de la fascia. Son 2 pares de glándulas torácicas, cuatro ventrales y un par inguinal para un total de 12 a 14 glándulas. Cada pezón está compuesto por una glándula y cada pezón tiene dos salidas al exterior.

          .row.justify-content-center 
            .col-10.mt-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 5
                span #[em Glándula mamaria en cerdas]

              figure
                img(src='@/assets/curso/temas/tema9/4.png', alt='Figura 5 Glándula mamaria en cerdas En la figura se representa el acini o alveolo mamario, túbulos galactóforos, lóbulo, tejido conectivo, pezón y seno galactóforo.').p-4
                figcaption Nota: Tomado de Asociación Mexicana de Veterinarios Especialistas en Cerdos A.C. (s.f). Estructura de la glándula mamaria. <br> <a v-bind:href="'https://www.amvec.com/web/content/19411#:~:text=La%20leche%20producida%2C%20pasa%20a,est%C3%ADmulo%20de%20mamas%20y%20pezones '"target='_blank'>https://www.amvec.com/web/content/19411#:~:text=La%20leche%20producida%2C%20pasa%20a,est%C3%ADmulo%20de%20mamas%20y%20pezones </a>

      .row(titulo="Duración de la lactancia")
        .col-auto.mb-4.mb-md-0
          p Es el tiempo aproximado que se espera que un animal tenga de producción de leche, se debe tener en cuenta la raza y condiciones ambientales.

          .row.justify-content-center 
            .col-10.mt-5
              .titulo-sexto.color-acento-contenido
                h5 Tabla 9
                span #[em Duración de la lactancia]
      
              .tabla-b.mb-5 
                table
                  thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up").text-center 
                    tr
                      th Animal
                      th Duración
                  tbody(style="background-color:#FFFFFF").text-center
                    tr
                      td #[b Vaca]
                      td 305 días
                    tr
                      td #[b Yegua]
                      td 11-12 meses 
                    tr 
                      td #[b Oveja]
                      td 6-7 meses 
                    tr 
                      td #[b Cabra]
                      td 7-8 meses (sistema intensivo) 
                    tr 
                      td #[b Cerda]
                      td 21 a 28 días  

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 #[b Anomalías de las glándulas mamarias]

    p(data-aos="fade-left").mb-5 Se pueden agrupar en secciones por el tipo de anomalía y origen, como se ve a continuación:

    SlyderC.mb-5(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema9',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Malformaciones',
        texto:
          'Las malformaciones se pueden producir en diferentes partes de la glándula mamaria, pezón, conductos, esfínteres, entre otros. <br><br> <b>Pezones supernumerarios: </b> común en cerdas. <br><br> <b>Polimastia:</b> mayor número de glándulas mamarias. <br><br> <b>Atelia:</b> ausencia de pezón.',
        imagen: require('@/assets/curso/temas/tema9/5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Alteraciones (tamaño y estructura)',
        texto:
          '<b>Hiperplasia mamaria: </b> crecimiento descontrolado de células dentro de la glándula mamaria. <br><br> <b>Quistes:</b> sáculos que se llenan de líquido debido a una salida secretora obstruida. <br><br> <b>Inflamación:</b> la inflamación de la glándula mamaria es la afección más común en animales, existen de diferentes tipos por el origen que tenga, entre los más comunes están:',
        imagen: require('@/assets/curso/temas/tema9/6.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Mastitis aguda',
        texto:
          'Más frecuente después del parto y se puede presentar en cualquier momento, puede deberse a un comienzo de algo crónico, se pueden evidenciar cambios físicos en la leche. Causando a la hembra fiebre y anorexia.<br><br><b><h3>Mastitis crónica</h3></b>En ocasiones es debido a mastitis agudas no tratadas correctamente, se puede observar edema y endurecimiento, junto con cambios físicos en la leche.<br><br><b><h3>Mastitis granulomatosa</h3></b>Se evidencia como tejido conectivo fibroso y puede ser a causa de diferentes bacterias como <i>Staphilococcus aureus, Actinobacillus lignierensii</i> y <i>amitis</i> micóticas <i>Aspergillus fumigatus.</i><br><br><b><h3>Tumores</h3></b>De origen conectivo y origen epitelial como adenomas y carcinomas.',
        imagen: require('@/assets/curso/temas/tema9/7.png'),
      },
      {
        titulo: 'Trastornos circulatorios',
        texto:
          '<b>Edema:</b> empieza siendo fisiológico y puede volverse patológico, causando un endurecimiento irreversible de la ubre, obstruyendo ductos principales para la segregación de la leche.<br><br><b>Hemorragia:</b> pueden ser superficiales o profundas, las superficiales son hematomas generados por golpes pequeños o petequias que se suelen desvanecer con el paso de los días, las hemorragias profundas se dan por traumatismos severos y son difíciles de controlar.',
        imagen: require('@/assets/curso/temas/tema9/8.png'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
