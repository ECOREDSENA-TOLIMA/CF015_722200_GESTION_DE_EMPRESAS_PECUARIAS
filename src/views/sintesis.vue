<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Dentro del componente formativo #[b Manejo de las especies pecuarias], se sintetizan los temas referentes a las características y etapas de desarrollo de la especie animal, aplicando las técnicas de manejo según la especie, con el aprovechamiento de las instalaciones y alojamiento, garantizando el espacio mínimo vital y para manejo, como también, los equipos e implementos para la unidad productiva, de la misma forma se trató el tema sobre la importancia del bienestar animal, la recepción de animales nuevos, aplicando en todos los procesos los estándares productivos, protocolos, programación y procedimientos técnicos, también se resalta el manejo de las crías, la gestación y lactancia.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
