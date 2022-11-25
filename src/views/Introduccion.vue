<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-1.col-3
        figure
          img(src='@/assets/curso/temas/vec1.svg', alt='')
      .col-lg-11.col-9
        p.mb-0 El posicionamiento orgánico o conocido como SEO significa (Search Engine Optimization) y  en el siguiente video se conocerán las utilidades más algunos datos importantes de este, además de SEM y cómo se vinculan ambas funciones.

    figure.mb-5(data-aos="fade")
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/4h4Lb5DEyxA" title="Posicionamiento del proyecto multimedia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
