<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-left") Las buenas prácticas de producción pecuaria representan un conjunto integral de procedimientos, actividades, condiciones y controles que se implementan en las unidades de producción animal. Su principal objetivo es reducir los riesgos asociados a agentes físicos, químicos y biológicos, además de minimizar los riesgos zoosanitarios relacionados con los productos de origen animal destinados al consumo humano.
    p(data-aos="fade-left").mb-5 En el siguiente vídeo se ofrece información general respecto a éste interesante tema:


    figure
    .video(data-aos="fade-right")
      iframe(width="560" height="315" src="https://www.youtube.com/embed/wJdHcnD_g0s?si=VixNAmPTA2_bRCHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
