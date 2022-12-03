<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero 
        span 2
      h1 Fundamentos de posicionamiento SEM

    p.mb-4(data-aos="fade-right") El SEM son las siglas de Search Engine Marketing, es decir conjunto de técnicas de mercadotecnia que se utiliza para estrategias que nos ayudan a obtener mejor impacto en buscadores generando de esta forma recibir más tráfico en páginas y sitios <i>web</i> a través de un mecanismo de búsqueda. 
    p.mb-4(data-aos="fade-right") <b>Para conocer con mayor precisión en qué consiste el posicionamiento SEM, se podrá ver el siguiente video:</b>
    figure.mb-5(data-aos="fade")
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/ne_yaOOLL5Q" title="Posicionamiento SEM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-10.col-12
        .bloque-texto-g.color-gris.p-5.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5.mb-5
            p <b> <FONT COLOR="#1565C0"> El SEM es el <i>marketing</i> en redes sociales (smm) </FONT> </b> que se busca en la explotación de medios sociales para influir en los usuarios y así persuadirlos hacia la compra de un producto o servicio.
    Separador

    #t_2_1.titulo-segundo.color-acento-botones
      .h2 2.1	Componentes SEM

    p.mb-4(data-aos="fade-right") Diseñar una buena estrategia SEM, implica aspectos a tener en cuenta con el objetivo de obtener los mejores resultados y optimizar la inversión. Se debe diseñar la estrategia teniendo presente los siguientes aspectos:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .tarjeta.color1.p-4
        .row.align-items-center
          .col-md-4
            figure.mb-4
              img(src='@/assets/curso/tema2/img1.png', alt='Texto que describa la imagen')
          .col-md-8
            ul.lista-ul--color
              li 
                i.fas.fa-check
                p.mb-1 Una estrategia acorde en la definición de palabras clave.
              li 
                i.fas.fa-check
                p.mb-1 Definir la inversión de la campaña, definición geográfica.
              li 
                i.fas.fa-check
                p.mb-1 Una buena redacción en el anuncio a pautar.
              li 
                i.fas.fa-check
                p.mb-1 Implementación de <em> landing pages </em> que conlleven a la acción. 
              li 
                i.fas.fa-check
                p.mb-1 Estrategias de proporción, la publicidad se maneja por temporalidades esto quiere decir que se debe aprovechar al máximo fechas importantes, definir cómo y cuándo aplicarlas.
    p.mb-4(data-aos="fade-right") <b>Para tener una buena estrategia SEM se deben reconocer las ventajas que tiene:</b>
    .bg_grad-02
      .row.justify-content-center.align-items-center.mb-4
        .col-md-5(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema2/img2.png', alt='Texto que describa la imagen')
        .col-md-7(data-aos="fade-left")
          .row.justify-content-center.align-items-center.mb-4
            .col-md-10
              SlyderF.mb-5(columnas="col-lg-12 col-xl-12")
                .tarjeta-avatar
                  img(src='@/assets/curso/tema2/avatar1.svg' alt='')
                  .tarjeta.color-tarjeta
                    .text-black.p-4
                      h4 Crece el tráfico en la <i>web</i>
                      p.mb-0 Realizando un buen trabajo SEM se consigue obtener mejores visitas de nuestra <i>web</i>, teniendo en cuenta que los objetivos pueden ser variados desde ofrecer nuestro producto de hecho hasta potenciar nuestra marca. Por esta razón es importante ajustar las campañas a los objetivos determinados.

                .tarjeta-avatar
                  img(src='@/assets/curso/tema2/avatar4.svg' alt='')
                  .tarjeta.color-tarjeta
                    .text-black.p-4
                      h4 Posicionamiento rápido
                      p.mb-0 Resultado en menor tiempo, especialmente si lo relacionamos con las técnicas SEO las cuales funcionan a mediano y largo plazo mientras que si se cuenta con el presupuesto en poco tiempo la compañía recibirá vistas de inmediato.

                .tarjeta-avatar
                  img(src='@/assets/curso/tema2/avatar3.svg' alt='')
                  .tarjeta.color-tarjeta
                    .text-black.p-4
                      h4 Presupuesto personalizado
                      p.mb-0 Controlar y ajustar el presupuesto y así definir al máximo lo que estamos dispuesto a desembolsar en la compaña. Cuanto se invertirá día tras día y lo que estamos dispuestos a pagar por cada clic (CPC) por lo que se estudiará si realmente conseguimos una oportunidad de venta o conversión.

                .tarjeta-avatar
                  img(src='@/assets/curso/tema2/avatar2.svg' alt='')
                  .tarjeta.color-tarjeta
                    .text-black.p-4
                      h4 Poder de segmentación
                      p.mb-0 Dependiendo se puede escoger un público objetivo a comparación del SEO. Se puede instaurar en base a unos criterios como edad, comportamiento, palabra clave o localización.
    Separador

    #t_2_2.titulo-segundo.color-acento-botones
      .h2 2.2 Características SEM

    p.mb-4(data-aos="fade-right") SEM tiene diferentes tipos de características que permite sea más efectivo su optimización, así mismo los inconvenientes que pueda tener para su implementación. 

    .row.justify-content-center.mb-4
      .col-md-8.col-lg-5.col-10.mb-5(data-aos="fade-right")
        .tarjetar.color2.p-3.mb-2
          h4.text-center.mb-0 Características
        .row.mb-5
          .col-md-12
            .tarjeta-numerada.color-acento-contenido.p-4.mb-4
              .tarjeta-numerada__numero
                figure
                  img(src='@/assets/curso/tema2/punto.svg' alt='')
              h5.mb-1 Acciones de pago
              p.mb-0 Corresponde al protocolo de pago por <i>clics</i>, dicho de otra forma, únicamente se cancela por <i>clics</i> recibidos por usuarios.

            .tarjeta-numerada.color-acento-contenido.p-4.mb-4
              .tarjeta-numerada__numero
                figure
                  img(src='@/assets/curso/tema2/punto.svg' alt='')
              h5.mb-1 Posicionamiento rápido
              p.mb-0 Con la técnica SEM, se obtiene un proceso de posicionamiento más pronto en un tiempo más corto, el objetivo de la pauta paga, es buscar un lugar dentro de las primeras posiciones de Google.

            .tarjeta-numerada.color-acento-contenido.p-4.mb-4
              .tarjeta-numerada__numero
                figure
                  img(src='@/assets/curso/tema2/punto.svg' alt='')
              h5.mb-1 Utilización de Google Ads
              p.mb-0 La implementación de la herramienta Google Ads, sirve para realizar campañas SEM, de la manera que se quiera y realizar pagos solamente por los resultados que se hayan obtenido.

            .tarjeta-numerada.color-acento-contenido.p-4.mb-4
              .tarjeta-numerada__numero
                figure
                  img(src='@/assets/curso/tema2/punto.svg' alt='')
              h5.mb-1 Estrategia de fusión
              p.mb-0 Diseñar una estrategia de <i>marketing</i> digital, fusionando estrategias de SEM y estrategias de SEO, se logrará obtener posicionamiento a corto, mediano y largo plazo, no se trata de tomar una opción entre las dos, sencillamente las dos son el complemento adecuado para el desarrollo de una buena estrategia de <i>marketing</i> digital.

      .col-md-2
        span
    
      .col-md-8.col-lg-5.col-10(data-aos="fade-left")
        .tarjetar.color4.p-3.mb-2
          h4.text-center.mb-0 Inconvenientes 
        .row.mb-5
          .col-md-12
            .tarjeta-numerada1.color-acento-contenido.p-4.mb-4
              .tarjeta-numerada1__numero
                figure
                  img(src='@/assets/curso/tema2/punto2.svg' alt='')
              h5.mb-1 Desaparición rápida
              p.mb-0 Una campaña SEM adquiere una capital a largo plazo, solo funciona mientras estás inyectando presupuesto, teniendo en cuenta también que si un competidor hace una oferta superior la posición de privilegio desaparece, lo cual puede ser inalcanzable para pequeñas empresas.

            .tarjeta-numerada1.color-acento-contenido.p-4.mb-4
              .tarjeta-numerada1__numero
                figure
                  img(src='@/assets/curso/tema2/punto2.svg' alt='')
              h5.mb-1 El éxito no está garantizado
              p.mb-0 Sin las palabras claves correctas, es probable que los usuarios atraídos no sea el anhelado. De esta manera se tratará de simples visitas que no tendrán impacto en el ROI (Retorno de la Inversión)

            .tarjeta-numerada1.color-acento-contenido.p-4.mb-4
              .tarjeta-numerada1__numero
                figure
                  img(src='@/assets/curso/tema2/punto2.svg' alt='')
              h5.mb-1 Genera menos confianza que el SEO
              p.mb-0 Los públicos ya saben diferenciar sobre el efecto orgánico y los resultados de pago. Saben que cualquier sitio <em>web</em> puede aparecer en las primeras posiciones solo activando una campaña así generando desconfianza, mientras que con los resultados orgánicos no pasa. Una compañía que aparece en las primeras posiciones de manera SEO significa que hace una buena labor.
    
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
