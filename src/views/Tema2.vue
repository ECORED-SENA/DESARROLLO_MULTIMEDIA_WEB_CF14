<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 Fundamentos de posicionamiento SEM 

    #t_2_1.titulo-segundo.color-acento-contenido
      .h4 2.1	Componentes SEM
    
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h4 2.2 Características SEM

    separador
    
</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema2',
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
