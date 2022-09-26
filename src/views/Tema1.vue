<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 1
      h1 Fundamentos de posicionamiento SEO

    p.mb-0 El SEO, es un área del marketing digital enfocada a mejorar la presencia de un sitio web, específicamente en la parte natural no pagada. 
    p.mb-4 <b>A continuación se conocerán detalladamente qué es SEO y en qué consiste el posicionamiento del mismo:</b>
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-4
      .col-md-10
        .cajon.color-acento-botones.p-4(style='background-color: #FFFAE7')
          p Estas estrategias de marketing digital son fundamentales para que una empresa obtenga reconocimiento en internet y, por lo tanto, obtenga más visitas, clientes y ventas.
    .row.mb-4
      .cajon-b.color-secundario.p-3
        p.mb-0 El SEO es un proceso diseñado por varios componentes que se implementan continuamente. Los resultados no se logran bajo una sola acción, no solamente por utilizar palabras claves, por ejemplo, se puede tener una buena posición en Google. Esto va más allá, se trata de objetivos a largo plazo y una serie de técnicas en grupo, con el fin de mejorar el reconocimiento de un sitio web y atraer visitas relevantes.
    .row.mb-4
      .col-md-12.col-12
        .bloque-texto-g.color-gris.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p Cada proyecto o sitio web contiene sus características. No hay un procedimiento SEO que funcione para todas las webs. La estrategia de SEO es diferente para cada sitio web, se requiere ser diseñada una estrategia a cada proyecto web y conlleva tiempo, dedicación y constancia.
    Separador

    #t_1_1.titulo-segundo.color-acento-botones
      .h2 1.1	Ventajas del SEO

    p.mb-4 El SEO tiene grandes ventajas para las organizaciones.
    .row.justify-content-center.align-items-center.mb-4
      .col-md-4
        figure
          img(src='@/assets/curso/tema1/img2.jpg', alt='')
      .col-md-8
        LineaTiempoD.color-linea
          .row.align-items-center(numero="1" titulo="Promover confianza y seguridad") 
            .col-md-12
              p Si una página web aparece en los primeros lugares, generará confianza en los usuarios, esto hace que haya más interés y seguridad a la hora de definir el contenido de interés que necesitan. 

          .row.align-items-center(numero="2" titulo="Organizar el sitio web")
            .col-md-12
              p Las estrategias de posicionamiento están enfocadas a organizar la forma en que los usuarios interactúan con ella, estas técnicas ayudan a implementar debidamente la información, de su correcta utilización, se logrará posicionar mucho mejor en los motores de búsqueda y también aumentar los resultados del sitio web.

          .row.align-items-center(numero="3" titulo="Procedimiento prolongado")
            .col-md-12
              p Los procedimientos e implementación para la optimización de un sitio web requiere horas de trabajo, lograr obtener posicionamiento ayuda a incrementar las visitas de usuarios frecuentemente, sin tener que realizar pautas pagadas.

          .row.align-items-center(numero="4" titulo="Aumenta la presencia") 
            .col-md-12
              p Con la aplicación correcta de las técnicas de seo, las visitas aumentarán, así se incrementarán las ventas de un negocio.
    Separador

    #t_1_2.titulo-segundo.color-acento-botones
      .h2 1.2	Tipos de SEO

    p.mb-4 El <b> <FONT COLOR="#1565C0"> SEO, </FONT> </b> posiciona un sitio web de forma natural en los motores de búsqueda, sin necesidad de realizar pautas publicitarias pagadas. Estas acciones, actividades y modificaciones para posicionar un sitio web, suelen clasificarse en dos grupos: 

    .row.mb-4
      .col-md-12
        TabsC.color-secundario
          .py-3.py-md-4(titulo="El SEO On Page:")
            .row.justify-content-center.align-items-center.mb-4
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/img3.jpg', alt='Texto que describa la imagen')
                
              .col-md-6
                h4 <FONT COLOR="#1565C0"> El SEO On Page: </FONT>
                p corresponde a las técnicas, actividades y modificaciones que se puede hacer dentro de un sitio web y sus páginas, para posicionarlo en los buscadores. Como por ejemplo organizar su contenido, descripciones, optimización de imágenes, videos, hacen que la duración de carga sea más veloz, todos estos elementos facilitarán al SEO on page, a generar una mejor experiencia con el usuario. En la actualidad Google es el motor de búsqueda más importante
            

          .py-3.py-md-4(titulo="El SEO Off Page:")
            .row.justify-content-center.align-items-center.mb-4
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/img4.jpg', alt='Texto que describa la imagen')
                
              .col-md-6
                h4 <FONT COLOR="#1565C0"> El SEO Off Page: </FONT>
                p son acciones y actividades que se pueden hacer fuera del sitio web que intentan posicionar mejor en los resultados de búsqueda. Básicamente es suministrar su contenido de forma externa para generar visitas a un sitio web. Normalmente esto se traduce en enlaces entrantes, también conocidos como backlinks, que son enlaces de otros sitios web que dirigen a otra web. Un ejemplo de esto son las redes sociales donde es común encontrar links, enlaces que un sitio web.
          
          .py-3.py-md-4(titulo="SEO HAT:")
            .row.justify-content-center.align-items-center.mb-4
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/img5.jpg', alt='Texto que describa la imagen')
                
              .col-md-6
                h4 <FONT COLOR="#1565C0"> SEO HAT: </FONT>
                p corresponde al buen uso de todas las técnicas SEO, sugeridas por los buscadores, implementación, procedimientos que no generen una sanción. Es la claridad, la forma legal de realizar SEO.

          .py-3.py-md-4(titulo="SEO BLACK:")
            .row.justify-content-center.align-items-center.mb-4
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/img6.jpg', alt='Texto que describa la imagen')
                
              .col-md-6
                h4 <FONT COLOR="#1565C0"> SEO BLACK: </FONT>
                p se basa en encontrar un posicionamiento pronto, aplicando elementos, técnicas, poco transparentes, proximidades en las normas de los buscadores, y que conllevarán a sanciones.
          
          .py-3.py-md-4(titulo="SEO para Marketing:")
            .row.justify-content-center.align-items-center.mb-4
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/img7.jpg', alt='Texto que describa la imagen')
                
              .col-md-6
                h4 <FONT COLOR="#1565C0"> El SEO On Page: </FONT>
                p Es necesario incorporar la estrategia SEO con las demás actividades de marketing. Se debe tener presente que el marketing tiene sus cimientos en mantener una relación mutuamente beneficiosa con los clientes. Por eso, se debe tener clara la propuesta de marketing, es decir, saber cuál es el valor que se le entrega a un cliente o usuario y qué es lo que se obtiene de ellos a cambio. Una vez se tenga esto definido, se puede iniciar una estrategia SEO.

</template>

<script>
import Muestras from '../components/Muestras'
import Separador from 'ecored-base-pkg/src/components/Separador.vue' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras,
    Separador,
  },
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
