<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Recepción de animales
    
    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-6
        img(src='@/assets/curso/temas/tema5/1.png')
      .col-6
        p Los procesos de recepción de animales en las producciones pecuarias es el momento en el que llegan al predio nuevos ejemplares siendo requeridos, ya que existen producciones especialmente la ganadera donde se reciben animales juveniles para realizar el proceso de ceba simplemente, o cuando se realiza un cambio de reproductor en el predio, llegada de animales nuevos entre otros aspectos, que son de gran importancia para la continuidad del ciclo productivo.
        .cajon.color-primario.p-4
          p La introducción de animales nuevos debe hacerse bajo serias medidas de bioseguridad, ya que cerca del 90 % de la entrada de enfermedades es a causa del ingreso de animales nuevos al establecimiento. Por ende, se recomienda que el nivel de bioseguridad y cuidados de la granja de origen sea superior a la granja receptora y evitar la adquisición de animales nuevos en gran medida. 


    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Procedimientos

    p(data-aos="fade-left").mb-5 Al ingresar los animales nuevos, se debe tener claro los protocolos de bioseguridad de cada producción, para así, proceder al descargue de los animales, al área de cuarentena dispuesta por el predio, para allí realizar el aislamiento y vigilancia de los mismos, en busca de sintomatología. No menos importante, se debe respetar el periodo de aclimatación de los animales nuevos logrando que el nivel de estrés y alteración del sistema inmune se regule para evitar muertes repentinas o enfermedades. Estos son algunos de los procedimientos:



    .row.justify-content-center.mb-5
      .col-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Solicitud de documentos sanitarios vigentes
              p Revisión de la documentación.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/2.svg', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema5/3.svg', alt='Texto que describa la imagen')
            .col-md-6
              h3 Verificación del medio de transporte y condición animal
              p Se realiza una verificación visual de las condiciones en la que fueron transportados los animales evaluándolos conjuntamente para descartar muertes, laceraciones, heridas, entre otras afecciones causadas en el viaje.

          .row
            .col-md-6.mb-4.mb-md-0
              h3 Descargue de los animales
              p Este proceso debe realizarse de manera calmada y tranquila por parte de los operarios para evitar que los animales entren en pánico o estrés y puedan sufrir lesiones, se recomienda que se realice a través de plataformas especiales para el descargue y cargue de animales las cuales deben contar con superficies antideslizante con un inclinación menor a 20 grados, se debe asegurar que la entrada la salida del camión hacia la rampa quede bien alineada y a una distancia cercana para evitar fracturas de miembros por parte de los animales. 
              p Es importante realizar un conteo para asegurar que coincidan aquellos descargados, con los adquiridos o citados en la documentación.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema5/4.svg', alt='Texto que describa la imagen')

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Documentos sanitarios oficiales

    p(data-aos="fade-left").mb-5 Documentos sanitarios oficiales para realizar el transporte de animales vivos con destino ya sea al matadero u otros predios pecuarios, es importante conocerlos ya que al momento de la recepción se deben revisar y verificar su validez, estos son:

    .tarjeta(style="background-color:#DBF9BD").p-4
      PasosB.color-primario
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/5.svg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            h4 Registro de usuario ante el sistema de identificación
            p Son todas aquellas personas naturales o jurídicas a quienes van dirigidos los productos, bienes o servicios que se encuentren registrados ante el ICA.
        
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/6.svg', alt='Texto que describa la imagen')

          .col-md-8.mb-4.mb-md-0
            h4 Guía  Sanitaria  de  Movilización  Interna (GSMI)
            p Es  un  instrumento  de  control sanitario por medio del cual el ICA autoriza la movilización de animales, teniendo en cuenta condiciones sanitarias favorables en un momento específico, tanto en el lugar de  origen  como  en  el  de  destino  de  los  animales  o  de  los  productos  que  se  van  a movilizar. Estas condiciones dan la base para la autorización o no, de la movilización y  permiten  al  ICA intervenir  de  manera  oportuna #[b para  prevenir la  difusión  de enfermedades y la ocurrencia de epidemias (ICA, 2021).]

        
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/7.svg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            h4 Registro Único de Vacunación (RUV)
            p Documento que ampara la vacunación de las enfermedades de control oficial en Colombia, para las especies: bovina, bufalina, porcina, équida y las demás que disponga el ICA #[b (ICA, 2021).] 

        
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/8.svg', alt='Texto que describa la imagen')

          .col-md-8.mb-4.mb-md-0
            h4 Registro Único de Identificación (RUI)
            p Documento que ampara la identificación de los animales en las zonas declaradas libres y en proceso de erradicación de peste porcina clásica en Colombia según la normativa vigente #[b (ICA, 2021).] 

        

</template>

<script>
export default {
  name: 'Tema5',
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
