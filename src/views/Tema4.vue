<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 4
      h1 Herramientas para pruebas

    #t_4_1.titulo-segundo.color-acento-contenido
      .h4 4.1	Google analytics 
    
    Separador

    #t_4_2.titulo-segundo.color-acento-contenido
      .h4 4.2 Diagrama de flujo

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido
      .h4 4.3	Wireflow 
    
    Separador

    #t_4_4.titulo-segundo.color-acento-contenido
      .h4 4.4 Software de análisis pagos y gratuitos

    Separador

    #t_4_5.titulo-segundo.color-acento-contenido
      .h4 4.5 Sistemas de feedback para usuarios 

    Separador


</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema4',
  components: { Separador },
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
