<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero 
        span 1
      h1 Fundamentos de posicionamiento SEO

    p.mb-0(data-aos="fade-right") El SEO, es un área del <i>marketing</i> digital enfocada a mejorar la presencia de un sitio <i>web,</i> específicamente en la parte natural no pagada. 
    p.mb-4(data-aos="fade-right") <b>A continuación se conocerán detalladamente qué es SEO y en qué consiste el posicionamiento del mismo:</b>
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/fHEeho3AWWg" title="Posicionamiento SEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-4(data-aos="fade")
      .col-md-10
        .cajon.color-acento-botones.p-4(style='background-color: #FFFAE7')
          p Estas estrategias de marketing digital son fundamentales para que una empresa obtenga reconocimiento en internet y, por lo tanto, obtenga más visitas, clientes y ventas.
    .row.mb-4(data-aos="fade-right")
      .cajon-b.color-acento-contenido.p-3
        p.mb-0 El SEO es un proceso diseñado por varios componentes que se implementan continuamente. Los resultados no se logran bajo una sola acción, no solamente por utilizar palabras claves, por ejemplo, se puede tener una buena posición en Google. Esto va más allá, se trata de objetivos a largo plazo y una serie de técnicas en grupo, con el fin de mejorar el reconocimiento de un sitio <i>web</i> y atraer visitas relevantes.
    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-10.col-12
        .bloque-texto-g.color-gris.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p Cada proyecto o sitio <i>web</i> contiene sus características. No hay un procedimiento SEO que funcione para todas las <i>webs</i>. La estrategia de SEO es diferente para cada sitio <i>web</i>, se requiere ser diseñada una estrategia a cada proyecto <i>web</i> y conlleva tiempo, dedicación y constancia.
    Separador

    #t_1_1.titulo-segundo.color-acento-botones
      .h2 1.1	Ventajas del SEO

    p.mb-4(data-aos="fade-right") El SEO tiene grandes ventajas para las organizaciones.
    .row.justify-content-center.align-items-center.mb-4
      .col-md-4(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema1/img2.jpg', alt='')
      .col-md-8(data-aos="fade-left")
        LineaTiempoD.color-linea
          .row.align-items-center(numero="1" titulo="Promover confianza y seguridad") 
            .col-md-12
              p Si una página <i>web</i> aparece en los primeros lugares, generará confianza en los usuarios, esto hace que haya más interés y seguridad a la hora de definir el contenido de interés que necesitan. 

          .row.align-items-center(numero="2" titulo="Organizar el sitio <i>web</i>")
            .col-md-12
              p Las estrategias de posicionamiento están enfocadas a organizar la forma en que los usuarios interactúan con ella, estas técnicas ayudan a implementar debidamente la información, de su correcta utilización, se logrará posicionar mucho mejor en los motores de búsqueda y también aumentar los resultados del sitio <i>web</i>.

          .row.align-items-center(numero="3" titulo="Procedimiento prolongado")
            .col-md-12
              p Los procedimientos e implementación para la optimización de un sitio <i>web</i> requiere horas de trabajo, lograr obtener posicionamiento ayuda a incrementar las visitas de usuarios frecuentemente, sin tener que realizar pautas pagadas.

          .row.align-items-center(numero="4" titulo="Aumenta la presencia") 
            .col-md-12
              p Con la aplicación correcta de las técnicas de seo, las visitas aumentarán, así se incrementarán las ventas de un negocio.
    Separador

    #t_1_2.titulo-segundo.color-acento-botones
      .h2 1.2	Tipos de SEO

    p.mb-4(data-aos="fade-right") El <b> <FONT COLOR="#1565C0"> SEO, </FONT> </b> posiciona un sitio <i>web</i> de forma natural en los motores de búsqueda, sin necesidad de realizar pautas publicitarias pagadas. Estas acciones, actividades y modificaciones para posicionar un sitio <i>web</i>, suelen clasificarse en dos grupos: 
    br
    .bg_grad-01
      .row.mb-4(data-aos="fade")
        .col-md-12
          TabsC.color-secundario
            .py-3.py-md-4(titulo="El SEO <i>On Page</i>")
              .row.justify-content-center.align-items-center.mb-4
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img3.jpg', alt='Texto que describa la imagen')
                  
                .col-md-6
                  h4 <FONT COLOR="#1565C0"> El SEO <i>on page</i> </FONT>
                  p corresponde a las técnicas, actividades y modificaciones que se puede hacer dentro de un sitio <i>web</i> y sus páginas, para posicionarlo en los buscadores. Como por ejemplo organizar su contenido, descripciones, optimización de imágenes, videos, hacen que la duración de carga sea más veloz, todos estos elementos facilitarán al SEO <i>on page</i>, a generar una mejor experiencia con el usuario. En la actualidad Google es el motor de búsqueda más importante
              

            .py-3.py-md-4(titulo="El SEO <i>Off Page</i>")
              .row.justify-content-center.align-items-center.mb-4
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img4.jpg', alt='Texto que describa la imagen')
                  
                .col-md-6
                  h4 <FONT COLOR="#1565C0"> El SEO <i>off page</i></FONT>
                  p Son acciones y actividades que se pueden hacer fuera del sitio <i>web</i> que intentan posicionar mejor en los resultados de búsqueda. Básicamente es suministrar su contenido de forma externa para generar visitas a un sitio <i>web</i>. Normalmente esto se traduce en enlaces entrantes, también conocidos como <i>backlinks,</i> que son enlaces de otros sitios <i>web</i> que dirigen a otra <i>web</i>. Un ejemplo de esto son las redes sociales donde es común encontrar <i>links,</i> enlaces que un sitio <i>web</i>.
            
            .py-3.py-md-4(titulo="SEO HAT")
              .row.justify-content-center.align-items-center.mb-4
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img5.jpg', alt='Texto que describa la imagen')
                  
                .col-md-6
                  h4 <FONT COLOR="#1565C0"> SEO HAT</FONT>
                  p Corresponde al buen uso de todas las técnicas SEO, sugeridas por los buscadores, implementación, procedimientos que no generen una sanción. Es la claridad, la forma legal de realizar SEO.

            .py-3.py-md-4(titulo="SEO BLACK")
              .row.justify-content-center.align-items-center.mb-4
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img6.jpg', alt='Texto que describa la imagen')
                  
                .col-md-6
                  h4 <FONT COLOR="#1565C0"> SEO BLACK</FONT>
                  p Se basa en encontrar un posicionamiento pronto, aplicando elementos, técnicas, poco transparentes, proximidades en las normas de los buscadores, y que conllevarán a sanciones.
            
            .py-3.py-md-4(titulo="SEO para <i>Marketing</i>")
              .row.justify-content-center.align-items-center.mb-4
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img7.jpg', alt='Texto que describa la imagen')
                  
                .col-md-6
                  h4 <FONT COLOR="#1565C0">SEO para <i>marketing</i> </FONT>
                  p.mb-4 Es necesario incorporar la estrategia SEO con las demás actividades de <i>Marketing</i>. Se debe tener presente que el <i>Marketing</i> tiene sus cimientos en mantener una relación mutuamente beneficiosa con los clientes. Por eso, se debe tener clara la propuesta de <i>Marketing</i>, es decir, saber cuál es el valor que se le entrega a un cliente o usuario y qué es lo que se obtiene de ellos a cambio. Una vez se tenga esto definido, se puede iniciar una estrategia SEO.
                  p.mb-4 El SEO se necesita para ayudar a Google a encontrar un contenido. Esto se puede hacer, por ejemplo, a través de los sitemaps, construyendo relaciones con otros sitios web por medio de enlaces, o promocionando una web. 
                  p.mb-0 Se debe facilitar a Google a comprender el contenido, pero, al mismo tiempo, ayudar a los usuarios a entender un contenido. Google debe poder ver el sitio web como los usuarios lo hacen. Para eso se debe facilitar la lectura de los archivos JavaScript, CSS e imágenes, a los robots de Google que, al leerlos correctamente, indexarán las páginas web. Se puede comenzar por hacer las URL más amigables, lo que facilitará su comprensión a los usuarios y a Google.


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
