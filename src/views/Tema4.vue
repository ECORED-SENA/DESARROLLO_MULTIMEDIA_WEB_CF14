<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero 
        span 4
      h1 Herramientas para pruebas

    p.mb-4(data-aos="fade-right") Una herramienta para prueba de análisis, permite darse a conocer como un procedimiento específico, y que permite organizar, descomponer, presentar o estructurar datos e información, con el propósito de extraer conclusiones significativas que faciliten la toma de decisiones. 
    Separador

    #t_4_1.titulo-segundo.color-acento-botones
      .h2 4.1	Google Analytics 

    .row.align-items-center.mb-4
      .col-md-7(data-aos="fade-right")
        <b> <FONT COLOR="#1565C0"> <em>Google Analytics</em> </FONT> </b> es la herramienta que ofrece la posibilidad de realizar seguimiento a sitios <i>web</i> y redes sociales, suministrando contenido de un sitio <i>web</i>, dicho de otra manera, ayuda a medir y analizar lo que sucede en un sitio <i>web</i>. Analytics es una herramienta compatible con las demás herramientas de Google.
      .col-md-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img1.jpg', alt='')

    .row.mb-4(data-aos="fade-right")
      .cajon.color-acento-botones.p-4(style='background-color: #FFFAE7')
        p Según el autor (Wikipedia, 2021) Analytics ofrece información agrupada del tráfico que llega a los sitios <i>web</i> según la audiencia, la adquisición, el comportamiento y las conversiones que se llevan a cabo en el sitio <i>web</i>.

    .row.justify-content-center.mb-5
      .col-md-5.mb-4(data-aos="fade-right")
        .tarjeta.color6.p-4
          h4.mb-4 Sus principales componentes son:
          ul.lista-ul--color.mb-4
            li 
              i.fas.fa-check
              p.mb-0 Cantidad de visitas.
            li 
              i.fas.fa-check
              p.mb-0 El tiempo de las visitas.
            li 
              i.fas.fa-check
              p.mb-0 Las fuentes de tráfico.
            li 
              i.fas.fa-check
              p.mb-0 Las páginas visitadas.
          .row
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                span.mx-2 Ver imagen
                .p-1
                  figure
                    img(src='@/assets/curso/temas/zoom.svg', alt='') 
                .indicador--click(v-if="mostrarIndicador")
      .col-md-5(data-aos="fade-left")
        .tarjeta.color7.p-4
          h4.mb-4 También aplica sobre otros elementos como:
          ul.lista-ul--color.mb-4
            li 
              i.fas.fa-check
              p.mb-0 Las secciones preferidas los usuarios.
            li 
              i.fas.fa-check
              p.mb-0 Palabras claves utilizadas.
            li 
              i.fas.fa-check
              p.mb-0 Características técnicas de los dispositivos de los visitantes.
          .row
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                span.mx-2 Ver imagen
                .p-1
                  figure
                    img(src='@/assets/curso/temas/zoom.svg', alt='') 
                .indicador--click(v-if="mostrarIndicador")

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-12
          figure
            img(src='@/assets/curso/temas/ampliar1.jpg', alt='Texto que describa la imagen')

    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .col-md-12
          figure
            img(src='@/assets/curso/temas/ampliar2.jpg', alt='Texto que describa la imagen')

    .bg_grad-05(data-aos="fade")
      .row.mb-4
        .col-lg-3.col-md-6
          .tarjeta.colorsub.p-2
            h4.mb-0.text-center.text-white Funcionamiento de Analytics

      p.mb-4 Funciona a partir de captura de datos implementando una combinación de cookies, navegadores y código JavaScript. Logra obtener datos de un sitio web, gracias al código JavaScript que se debe incorporar en las páginas y las cookies que se generan una vez el usuario ingresa a la web a través de un navegador. <b>Su funcionamiento tiene cuatro  (4) procesos: </b>

      .tarjeta.tarjeta-zul.p-4.mb-4
        PasosB.color-secundario
          .row.justify-content-center.align-items-center(titulo="Recopilación de información")
            .col-lg-8.col-md-12.col-12.mb-4
              .row.justify-content-center
                .col-md-11
                  .tarjeta.color-azul2.p-4
                    h4 Recopilación de información
                    p.mb-3 El primer paso es la respuesta del servidor el cual envía la página que se solicita al navegador del usuario, en este proceso el navegador analiza la información y se pondrá en contacto con otros servidores. Así funciona el código de <em>Google Analytics</em>.
                    p.mb-3 Posteriormente el navegador del usuario que visita una página le solicita ese código a <i>analytics</i>. Acto seguido la plataforma lo envía y se guarda en un fichero.
                    p.mb-3 <b>Una vez se almacena la información, el código crea <i>cookies</i> en el computador o dispositivo móvil del usuario.</b>
                    p.mb-0 Una vez están definidas las <i>cookies</i>, el código envía la información al servidor de <em>Google Analytics</em> con la solicitud de un fichero GIF invisible. Esta información es almacenada en otro fichero denominado fichero <i>logs</i> y crea un apartado de datos en el mismo por cada página visitada.
            .col-lg-3.col-md-8.col-8
              figure
                img(src='@/assets/curso/tema4/1.jpg', alt='')

          .row.justify-content-center.align-items-center(titulo="Procesamiento de información")
            .col-lg-8.col-md-12.col-12.mb-4
              .row.justify-content-center
                .col-md-11
                  .tarjeta.color-azul2.p-4
                    h4 Procesamiento de información 
                    p En cuanto se compilan las acciones de los usuarios Google Analytics empieza la reorganización en datos importantes que suministran información útil. 
            .col-lg-3.col-md-8.col-8
              figure
                img(src='@/assets/curso/tema4/2.jpg', alt='')

          .row.justify-content-center.align-items-center(titulo="Configuración <em>Google Analytics</em>")
            .col-lg-8.col-md-12.col-12.mb-4
              .row.justify-content-center
                .col-md-11
                  .tarjeta.color-azul2.p-4
                    h4 Configuración <em>Google Analytics</em>
                    p Suministra su configuración a los datos sin procesar. Cuando se realiza el procesamiento de datos una vez almacenados en la base de datos no se podrán cambiar ni editar.
            .col-lg-3.col-md-8.col-8
              figure
                img(src='@/assets/curso/tema4/3.jpg', alt='')

          .row.justify-content-center.align-items-center(titulo="Generación de informes")
            .col-lg-8.col-md-12.col-12.mb-4
              .row.justify-content-center
                .col-md-11
                  .tarjeta.color-azul2.p-4
                    h4 Generación de informes 
                    p Cuando se requiere mirar informes de se puede realizar a través del servicio <i>web</i> de <em>Google Analytics</em>, estos informes se organizan en relación a diferenciaciones de rangos, dicho de otra manera, se organizan comportamientos como el lugar de un usuario o el porcentaje que llevan los usuarios en llevar a cabo una determinada acción. 
            .col-lg-3.col-md-8.col-8
              figure
                img(src='@/assets/curso/tema4/4.jpg', alt='')
      .row.mb-4
        .col-md-12
          .cajon-b.color-acento-contenido
            p.mb-0 <b>Una de las cualidades de <em>Google Analytics</em> es permitir saber el comportamiento de las campañas de <i>marketing</i> digital,</b>  es importante saber la manera de estructurar los objetivos, de esta forma se logrará obtener información valiosa para futuros cambios. Se pueden organizar objetivos que se quieran tales como el número de visitas de un usuario, cantidad de páginas visitadas, etc. <b>No obstante, se cuenta con la función de objetivos automáticos, estos son</b>

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-3.col-md-6
          .tarjeta.color6-1.p-4.mb-4
            .col-5
              figure.mb-2
                img(src='@/assets/curso/tema4/icon1.png', alt='')
            p.mb-2 <b>Destino</b>
            p.mb-4 Encuentra la ubicación detallada.
        .col-lg-3.col-md-6
          .tarjeta.color6-1.p-4.mb-4
            .col-5
              figure.mb-2
                img(src='@/assets/curso/tema4/icon2.png', alt='')
            p.mb-2 <b>Duración</b>
            p.mb-4 Define el tiempo de una visita.
        .col-lg-3.col-md-6
          .tarjeta.color6-1.p-4.mb-4
            .col-5
              figure.mb-2
                img(src='@/assets/curso/tema4/icon3.png', alt='')
            p.mb-2 <b>Páginas</b>
            p.mb-4 Cantidad de páginas visitadas en la misma visita.
        .col-lg-3.col-md-6
          .tarjeta.color6-1.p-4.mb-4
            .col-5
              figure.mb-2
                img(src='@/assets/curso/tema4/icon4.png', alt='')
            p.mb-2 <b>Eventos</b>
            p.mb-0 Inicia una acción que se haya definido anteriormente en un evento.

    .row.mb-4(data-aos="fade-right")
      .col-lg-3.col-md-6
        .tarjeta.colorsub.p-2
          h4.mb-0.text-center.text-white Interfaz de <em>Google Analytics</em>

    p.mb-4(data-aos="fade-right") La versión más reciente es Google 4, es una interfaz muy amigable y fácil a la hora de utilizar, en la parte izquierda aparecen los informes que suministra Google, opciones de programación y administración, en la zona superior se puede programar un periodo de análisis, incorporar segmentos de información, también aparece la opción de descargar o exportar informes.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10(data-aos="fade")
        .tarjeta.color8.p-4.mb-4
          .col-md-10
            p.mb-0 Los datos para el informe van cambiando mientras navegamos por los cuatro tipos de informes principales: 
            b Audiencia, Adquisición, Comportamiento y Conversiones.
        figure
          img(src='@/assets/curso/tema4/img2.jpg', alt='')
    Separador

    #t_4_2.titulo-segundo.color-acento-botones
      .h2 4.2 Diagrama de flujo

    p.mb-4 El diagrama de flujo corresponde al desarrollo de actividades es una forma gráfica de representar un algoritmo o un proceso que están estructurados e incorporados que pueden ser analizados. La aplicación gráfica en este proceso implementa una variedad de formas geométricas que identifican cada paso. Estas formas seleccionadas se enlazan a través de flechas y líneas que comunican la dirección del flujo y definen el trayecto del proceso. <b>Los diagramas de flujo están representados en cuatro (4) modos.</b>

    .row.mb-4(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-4
        .tarjeta.colorlineaazul.p-4
          .col-3
            figure.mb-4
              img(src='@/assets/curso/tema4/1.svg', alt='')
          h3 Horizontal
          p.mb-0 Como su palabra lo indica su recorrido es horizontal de izquierda a derecha, según el orden de lectura.
      .col-lg-3.col-md-6.mb-4
        .tarjeta.colorlineaazul.p-4
          .col-3
            figure.mb-4
              img(src='@/assets/curso/tema4/2.svg', alt='')
          h3 Vertical 
          p.mb-0 Se desarrolla de arriba hacia abajo como un texto organizado.
      .col-lg-3.col-md-6.mb-4
        .tarjeta.colorlineaazul.p-4
          .col-3
            figure.mb-4
              img(src='@/assets/curso/tema4/3.svg', alt='')
          h3 Panorámico
          p.mb-0 Dejan observan en un solo plano o hoja el proceso.
      .col-lg-3.col-md-6.mb-4
        .tarjeta.colorlineaazul.p-4
          .col-3
            figure.mb-4
              img(src='@/assets/curso/tema4/4.svg', alt='')
          h3 Arquitectónico 
          p.mb-0 Muestran un trayecto de trabajo o una parte de trabajo.

    p.mb-4(data-aos="fade-right") Los diagramas de flujo es una forma de control y descripción de tareas que ayudan a una mejor organización, análisis y reorganización de seguimiento de tareas y procesos de características diferentes, gracias a su facilidad y versatilidad. Tradicionalmente son implementadas en áreas financieras, informáticas, industriales, etc. <b>A continuación se podrá conocer los elementos que tiene un diagrama: </b>

    .row.mb-4(data-aos="fade-right")
      .col-lg-3.col-md-6
        .tarjeta.colorsub.p-2
          h4.mb-0.text-center.text-white Elementos del diagrama 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-md-8.mb-4
        LineaTiempoD.color-linea
          .row.align-items-center(numero="1" titulo="Terminador") 
            .col-md-12
              p Representa el principio y el final de un proceso, su nombre es (inicio/final) y está representado por el símbolo rectángulo con curvas en las esquinas.

          .row.align-items-center(numero="2" titulo="Procesos")
            .col-md-12
              p Hace referencia a una operación en un proceso, se describe de manera puntual y concreta. Su nombre es proceso y está representado por un rectángulo.

          .row.align-items-center(numero="3" titulo="Decisión")
            .col-md-12
              p Puede corresponder a una decisión ejemplo “si o no” se representa con el símbolo de un diamante.

          .row.align-items-center(numero="4" titulo="Conector") 
            .col-md-12
              p Ayuda a que los procesos estén enlazados de manera lógica y correcta en varias páginas. Está representado por un círculo.

          .row.align-items-center(numero="4" titulo="Líneas de flecha") 
            .col-md-12
              p Ayudan a mantener la claridad del diagrama, si los ciclos son necesarios se pueden extender las líneas de flechas hacia arriba y abajo para mejor claridad. Se representa con una flecha.
      .col-md-4
        figure
          img(src='@/assets/curso/tema4/vec1.svg', alt='')
    .row.mb-4(data-aos="fade")
      .col-md-12
        h5.text-center En la siguiente imagen, se detalla la representación gráfica de los símbolos más comunes y su nombre: 
    .row.justify-content-center.mb-4(data-aos="fade")
      .col-xl-6.col-lg-8.col-md-10.col-12
        .tarjeta.color9.p-3
          .col-md-12
            .row.align-items-center
              .col-lg-3.mb-4
                .tarjeta.color10.p-3
                  .row.justify-content-center.mb-2
                    .col-lg-11.col-5
                      figure
                        img(src='@/assets/curso/tema4/icon5.png', alt='')
                  p.mb-0.text-center Inicio / Fin
              .col-lg-3.mb-4
                .tarjeta.color10.p-3
                  .row.justify-content-center.mb-2
                    .col-lg-11.col-5
                      figure
                        img(src='@/assets/curso/tema4/icon6.png', alt='')
                  p.mb-0.text-center Proceso
              .col-lg-3.mb-4
                .tarjeta.color10.p-3
                  .row.justify-content-center.mb-2
                    .col-lg-8.col-3
                      figure
                        img(src='@/assets/curso/tema4/icon7.png', alt='')
                  p.mb-0.text-center Decisión
              .col-lg-3.mb-4
                .tarjeta.color10.p-3
                  .row.justify-content-center.mb-2
                    .col-lg-8.col-3
                      figure
                        img(src='@/assets/curso/tema4/icon8.png', alt='')
                  p.mb-0.text-center Conector
    .row.justify-content-center.mb-4(data-aos="fade")
      .col-xl-6.col-lg-8.col-md-10.col-12
        .tarjeta.color9.p-3
          .col-md-12
            .row.align-items-center
              .col-lg-3.mb-4
                .tarjeta.color10.p-3
                  .row.justify-content-center.mb-2
                    .col-lg-10.col-4
                      figure
                        img(src='@/assets/curso/tema4/icon9.png', alt='')
                  p.mb-0.text-center Línea de flecha
              .col-lg-3.mb-4
                .tarjeta.color10.p-3
                  .row.justify-content-center.mb-2
                    .col-lg-10.col-4
                      figure
                        img(src='@/assets/curso/tema4/icon10.png', alt='')
                  p.mb-0.text-center Documento
              .col-lg-3.mb-4
                .tarjeta.color10.p-3
                  .row.justify-content-center.mb-2
                    .col-lg-10.col-4
                      figure
                        img(src='@/assets/curso/tema4/icon11.png', alt='')
                  p.mb-0.text-center Datos o entrada / Salida
              .col-lg-3.mb-4
                .tarjeta.color10.p-3
                  .row.justify-content-center.mb-2
                    .col-lg-10.col-4
                      figure
                        img(src='@/assets/curso/tema4/icon12.png', alt='')
                  p.mb-0.text-center Bases de datos
    .row.mb-4
      .col-md-12
        h5.text-center A continuación, una representación gráfica de un diagrama básico: 

    .row.justify-content-center.mb-4
      .col-md-10
        figure
          img(src='@/assets/curso/tema4/mapa.svg', alt='')
      
    .row.mb-4(data-aos="fade-right")
      .col-lg-3.col-md-6
        .tarjeta.colorsub.p-2
          h4.mb-0.text-center.text-white Diagramas para algoritmos

    p.mb-4(data-aos="fade-right") Los diagramas de flujo son una forma práctica para explicar un algoritmo, implementar un diagrama para describir la forma lógica internamente en un programa previamente de iniciar la codificación en proceso autorizado. Es una forma de estructurar un punto de vista general y brindar un modelo a partir del inicio que se requiere codificar. 

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-md-12
        .tarjeta.color6.p-5
          .row.align-items-center
            .col-md-7
              h5.mb-4 Los diagramas de flujo pueden ser:
              ul.lista-ul--color.mb-4
                li 
                  i.fas.fa-check
                  p.mb-0 Probar como está organizado el código. 
                li 
                  i.fas.fa-check
                  p.mb-0 Observar la utilización del código.
                li 
                  i.fas.fa-check
                  p.mb-0 Presentar la organización de un sitio <i>web</i> o aplicación. 
                li 
                  i.fas.fa-check
                  p.mb-0 Entender como los usuarios interactúan en un sitio <i>web</i> o programa. 
              p.mb-4 Frecuentemente los desarrolladores pueden redactar un Pseudocódigo, una mezcla de lenguaje natural y lenguaje informático, que logre ser leído por los usuarios. Esto puede autorizar más detalle que el diagrama de flujo y ayudar como cambio del diagrama de flujo o como el siguiente procedimiento del código.
            .col-md-4
              figure
                img(src='@/assets/curso/tema4/img3.jpg', alt='')
    p.mb-4(data-aos="fade-right") <b>Diagramas relacionados implementados en el <i>software.</i></b>

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-4.mb-4
        .tarjeta.colorlinealnaranja.p-4.mb-2
          h4 Diagramas Drakon:
          p.mb-0 Lenguaje de programación visual de algoritmos utilizado para diseñar diagramas de flujo. 

      .col-lg-4.mb-4
        .tarjeta.colorlinealnaranja.p-4.mb-2
          h4 Lenguaje unificado de modelo: 
          p.mb-0 Es un lenguaje de propósito general utilizado en el software modelado.

      .col-lg-4.mb-4
        .tarjeta.colorlinealnaranja.p-4.mb-2
          h4 Diagramas Nassi:
          p.mb-0 Implementado en la programación estructurada en la ingeniería de sistemas.

    p.mb-4(data-aos="fade-right") En la siguiente imagen se detalla un ejemplo de diagrama de flujo, relacionando con una actividad cotidiana.
    .row.justify-content-center.mb-4
      .col-md-10
        figure
          img(src='@/assets/curso/tema4/mapa2.svg', alt='')
    
    .row.mb-4
      .col-lg-3.col-md-6
        .tarjeta.colorsub.p-2
          h4.mb-0.text-center.text-white Clases de diagramas de flujo

    .row.justify-content-center.align-items-center.mb-5
      .col-md-6.mb-4(data-aos="fade-right")
        LineaTiempoD.color-linea
          .row.align-items-center(numero="1" titulo="Diagramas de flujos de sistemas") 
            .col-md-12
              p Indican el flujo de información que va hacia los componentes principales del sistema, pueden ser entradas de información, forma de almacenamiento, redes de comunicación.

          .row.align-items-center(numero="2" titulo="Diagrama de flujo de datos")
            .col-md-12
              p Señalan los controles que rigen los flujos de datos en un sistema. Se utilizan para informar los canales donde se transmiten los datos.

          .row.align-items-center(numero="3" titulo="Diagramas de flujo de documentos")
            .col-md-12
              p Su finalidad es informar sobre los controles existentes en el flujo de documentos a través de los componentes del sistema.

          .row.align-items-center(numero="4" titulo="Diagrama de flujo de programas") 
            .col-md-12
              p Indican la ubicación de los controles ubicados internamente en un programa dentro de un sistema.

          .row.align-items-center(numero="4" titulo="Diagrama de flujo de sistema") 
            .col-md-12
              p Detecta los dispositivos utilizados.

          .row.align-items-center(numero="5" titulo="Diagrama de flujo general") 
            .col-md-12
              p Observación general.
      .col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img4.jpg', alt='')

    p.mb-4 <b>Existen otras herramientas para la creación de diagramas de flujo que se pueden utilizar on-line:</b>

    .row.mb-4(data-aos="fade-right")
      .col-md-12
        .tarjeta.color8.p-5
          .row.justify-content-center.mb-4
            .col-lg-7.col-md-12
              .col-4
                figure.mb-4
                  img(src='@/assets/curso/tema4/logo.png', alt='')
              p.mb-4 Es una herramienta diseñada para la creación de diagramas de flujo de una forma ágil y fácil, en el proceso de creación de un <i>wireframe</i> se debe dar clic en el botón “<i>See chaarts</i>” posteriormente definir entre las opciones de menús y plantillas a disposición. Esta herramienta tiene una particular característica es que se puede implementar para el trabajo en equipo simultáneamente. Es una interfaz amigable tiene una variedad en cuanto a diseños gráficos se refiere, simplemente basta con arrastrarlos y soltar sobre una hoja de trabajo, su variedad de herramientas permite interconectar de manera fácil, contiene la posibilidad de exportar a una imagen jpg. Esta herramienta es de uso gratuito.
            .col-lg-5.col-md-12
              figure.mb-2
                img(src='@/assets/curso/tema4/img5.png', alt='')
          .row.mb-4
            .color.color11.p-4
              p.mb-0 La herramienta Wireflow, es adecuada en el desarrollo de proyectos, una herramienta que funciona muy bien en metodologías ágiles. Su objetivo principal es documentar las interacciones: modificación de diseño, ventanas emergentes, comentarios.
          p.mb-4 <b>En la elaboración de un <i>wireflow</i> hay que tener presente varios aspectos:</b>
          .row.mb-4 
            .col-md-12
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  p.mb-0 Definir el objetivo de flujo. 
                li 
                  i.fas.fa-check
                  p.mb-0 Diseñar una página de estrada donde el usuario comience el proceso.
                li 
                  i.fas.fa-check
                  p.mb-0 Alternamente seguir desarrollando las otras pantallas y los enlaces entre estas.
                li 
                  i.fas.fa-check
                  p.mb-0 Realizar un análisis detallado y ajustar posibles cambios y brindar mayor facilidad al usuario.
                li 
                  i.fas.fa-check
                  p.mb-0 Revisar posibles errores que se pueda presentar en su desarrollo (errores, desconexión de internet, campos vacíos).
    .row.mb-4(data-aos="fade-left")
      .col-md-12
        .tarjeta.color12.p-5
          .row.justify-content-center
            .col-lg-5.col-md-12
              .col-5
                figure.mb-4
                  img(src='@/assets/curso/tema4/logo1.jpg', alt='')
              p.mb-4 Funciona a partir de un registro o una cuenta en Google drive o OneDrive, y se puede trabajar en línea para su almacenamiento.
              figure.mb-4
                img(src='@/assets/curso/tema4/img1.png', alt='')
              .row.mb-4
                .col-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                    span.mx-2 Ver imagen
                    .p-1
                      figure
                        img(src='@/assets/curso/temas/zoom.svg', alt='') 
                    .indicador--click(v-if="mostrarIndicador")
            .col-lg-1.col-md-12
              span
            .col-lg-5.col-md-12
              .col-5
                figure.mb-4
                  img(src='@/assets/curso/tema4/logo2.jpg', alt='')
              p.mb-4 Es una buena herramienta para la elaboración de diagramas de flujo, es un servicio <i>online</i>, ofrece una versión gratis y también una versión plus pagada, posee una interfaz fácil de usar con el método de arrastrar y soltar.
              figure.mb-4
                img(src='@/assets/curso/tema4/img2.png', alt='')
              .row
                .col-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
                    span.mx-2 Ver imagen
                    .p-1
                      figure
                        img(src='@/assets/curso/temas/zoom.svg', alt='') 
                    .indicador--click(v-if="mostrarIndicador")
    .row.mb-4(data-aos="fade-right")
      .col-lg-12
        .tarjeta.color8.p-5
          .row.justify-content-center
            .col-lg-5.col-md-12
              .col-5
                figure.mb-4
                  img(src='@/assets/curso/tema4/logo2.png', alt='')
              p.mb-4 Es un programa diseñado para la elaboración de diagramas de flujo, muy práctico a la hora de utilizarlo en los procesos de trabajo en equipo, brinda varias opciones de clases de diagramas y plantillas. 
              figure.mb-4
                img(src='@/assets/curso/tema4/img5.jpg', alt='')
              .row.mb-4
                .col-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal5 = true")
                    span.mx-2 Ver imagen
                    .p-1
                      figure
                        img(src='@/assets/curso/temas/zoom.svg', alt='') 
                    .indicador--click(v-if="mostrarIndicador")
            .col-lg-1.col-md-12
              span
            .col-lg-5.col-md-12
              .col-2
                figure.mb-4
                  img(src='@/assets/curso/tema4/logo3.jpg', alt='')
              p.mb-4 Teniendo una cuenta en Google, se puede acceder a esta herramienta gratis, ingresando a la cuenta drive, posteriormente dar clic en crear nuevo y se escoge dibujos de Google. Es una herramienta muy fácil de utilizar a la hora de manipular los elementos basta como mover, arrastrar, cambiar tamaños dependiendo de lo que se requiera.
              figure.mb-4
                img(src='@/assets/curso/tema4/img2.png', alt='')
              .row
                .col-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal6 = true")
                    span.mx-2 Ver imagen
                    .p-1
                      figure
                        img(src='@/assets/curso/temas/zoom.svg', alt='') 
                    .indicador--click(v-if="mostrarIndicador")


    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center
        .col-md-12
          figure
            img(src='@/assets/curso/temas/ampliar3.jpg', alt='Texto que describa la imagen')
    ModalA(:abrir-modal.sync="modal4")
      .row.align-items-center
        .col-md-12
          figure
            img(src='@/assets/curso/temas/ampliar4.jpg', alt='Texto que describa la imagen')
    ModalA(:abrir-modal.sync="modal5")
      .row.align-items-center
        .col-md-12
          figure
            img(src='@/assets/curso/temas/ampliar5.jpg', alt='Texto que describa la imagen')
    ModalA(:abrir-modal.sync="modal6")
      .row.align-items-center
        .col-md-12
          figure
            img(src='@/assets/curso/tema4/img2.png', alt='Texto que describa la imagen')

    Separador

    #t_4_3.titulo-segundo.color-acento-botones
      .h2 4.3 <i>Software</i> de análisis pagos y gratuitos

    p.mb-4(data-aos="fade-right") Saber y entender la importancia que cumplen las herramientas de análisis <i>web</i>, es una tarea ardua, muchas veces se cometen errores de diseñar estrategias y dejarlas que fluyan solas, sin hacerles el correspondiente seguimiento y comportamiento, cometer estos errores es catapultar al fracaso, esto sería como un barco a la deriva sin rumbo fijo.
    p.mb-4(data-aos="fade-right") Aquí una descripción de las herramientas más utilizadas, algunas de uso gratis y otras de método pagado.
    figure.mb-5(data-aos="fade-up")
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/JUfI_XrNkrE" title="Software de análisis pagos y gratuitos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador

    #t_4_4.titulo-segundo.color-acento-botones
      .h2 4.4 Sistemas de <i>Feedback</i> para usuarios 
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-7
        p.mb-4 <b> <FONT COLOR="#1565C0"> Un <i>Feedback</i> es la opinión que tiene alguien de un producto o servicio predeterminado que en algún momento alguien ha utilizado o consumido. </FONT> </b> Para realizar una cantidad de comentarios acerca de atributos se puede implementar el <i>Feedback</i> para realizar este análisis y del servicio o producto determinado. 
        p.mb-4 Para una compañía es importante el <i>Feedback</i> de un cliente ya que permite saber y analizar la opinión de un cliente, un ejemplo puede ser el lanzamiento de un producto el cual inicia con unas ventas altas, pero en el transcurso de los días comienzan a disminuir. El <i>Feedback</i> puede ayudar a detectar esa situación y permitir recuperar nuevamente las ventas y elevarlas, preguntarles directamente a los clientes que piensan.
        .tarjeta.colortext.mb-5
          p.mb-0.textz Darle importancia a la retroalimentación desde diferentes ángulos para abordarla con los clientes y aprovecharla al máximo en el desarrollo de nuevas estrategias. 
      .col-md-5
        figure
          img(src='@/assets/curso/tema4/img3.png', alt='')

    .bg_grad-06(data-aos="fade-up")   
      .row.mb-4
        .col-lg-2.col-md-5.col-6
          .tarjeta.colorsub.p-2
            h4.mb-0.text-center.text-white Clases de <i>Feedback</i>:
      br
      br
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.color13.p-4
              h5 <i>Feedback</i> directo 
              p Se organiza de forma contundente y mensajes directos.

            .tarjeta.color13.p-4
              h5 <i>Feedback</i> indirecto
              p Desde donde se emite no es explícito ni claro.

            .tarjeta.color13.p-4
              h5 <i>Feedback</i> positivo
              p Destaca las cualidades positivas de un producto o servicio.

            .tarjeta.color13.p-4
              h5 <i>Feedback</i> negativo
              p Su finalidad es detallar las características negativas de una experiencia frente a un producto o servicio.

            .tarjeta.color13.p-4
              h5 <i>Feedback</i> constructivo
              p Su finalidad es dar un punto de vista objetivo y comunicar cualidades negativas como positivas al consumir un producto o servicio.

            .tarjeta.color13.p-4
              h5 <i>Feedback</i> general
              p Brinda una opinión general acerca de un producto o servicio, sin involucrarse en cualidades específicas. 

            .tarjeta.color13.p-4
              h5 <i>Feedback</i> concreto
              p Esta clase de <i>Feedback</i> lo realizan quienes nombran atributos concretos de un producto o servicio.

            .tarjeta.color13.p-4
              h5 <i>Feedback</i> solicitado
              p La retroalimentación se realiza por solicitud, como en una encuesta o cuestionario la retroalimentación es solicitada.  
      .row.justify-content-center.align-items-center.mb-4
        .col-md-10
          .tarjeta.color14.p-5
            .row.justify-content-end
              .col-md-2
                figure.mb-4
                  img(src='@/assets/curso/tema4/img4.png', alt='')
              .col-md-10
                p.mb-4 <b>Se recomienda implementar un <i>Feedback</i> en tres escenarios diferentes:</b> posteriormente de haber realizado el lanzamiento de un producto o servicio, cuando se determina un cambio brusco en el proceso de un producto o servicio y cuando un producto o servicio se conserva estancado.
                p.mb-4 <b> Esto no quiere decir que en el momento que se pretenda o decida implementarlos no se pueda hacer, lo más importante es determinar cuál es el <i>Feedback</i> más adecuado para lo que se pretenda hacer.</b>
    .row.mb-4(data-aos="fade-up-right")
      .col-lg-4.col-md-7.col-10
        .tarjeta.colorsub.p-2
          h4.mb-0.text-center.text-white Estrategias para conseguir <i>Feedback</i>:  

    .row.mb-4(data-aos="fade")
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-azul")
          .row(titulo="Envío de correos de seguimiento")
            .col-md-12.mb-4.mb-md-0
              p Es una forma muy común en solicitar información vía correo electrónico, cuando un producto o servicio ha sido adquirido y entregado al cliente, se puede enviar el cuestionario al correo electrónico. Un ejemplo puede ser cuando se utiliza un servicio de hotel y llega una solicitud de calificar la experiencia. 

          .row(titulo="Encuestas SMS")
            .col-md-12.mb-4.mb-md-0
              p Los mensajes son uno de los métodos más fuertes que hay para solicitar un <i>Feedback</i> a un cliente. En la actualidad la mayoría de usuarios poseen un dispositivo móvil, haciendo que los mensajes sean una gran forma de crear una cercanía con el cliente.   

          .row(titulo="Cuestionarios en una red Wi-Fi")
            .col-md-12.mb-4.mb-md-0
              p Esta estrategia es muy común verlas en establecimientos de comercio, hoteles, centros comerciales. Sencillamente por otorgar el servicio Wi-Fi gratis, previamente aparece un pequeño cuestionario de preguntas, una vez el usuario las suministra tiene acceso al servicio Wi-Fi. Actualmente se implementa bastante.

          .row(titulo="Tarjetas <i>Feedback</i>")
            .col-md-12.mb-4.mb-md-0
              p Este es un método tradicional para crear físicamente formularios, cuestionarios para la recolección de opinión de un cliente, aunque funciona implica más tiempo y gastos.

          .row(titulo="Transcripciones de chat en vivo")
            .col-md-12.mb-4.mb-md-0
              p Este método ha captado la atención a clientes, revisar las transcripciones de los <i>chats</i> y organizar las opiniones en diferentes categorías servirán para conocer las debilidades en un negocio. También permitirá incrementar la satisfacción de los clientes y simplificar significativamente los recursos asignados al área de atención al cliente.

          .row(titulo="Entrevistas al cliente")
            .col-md-12.mb-4.mb-md-0
              p Existen fidelidad de clientes que amablemente querrán dar su retroalimentación si se solicita, después de todo son cercanos a la marca y se identifican con esta.

          .row(titulo="Supervisar las redes sociales")
            .col-md-12.mb-4.mb-md-0
              p Es una de las herramientas más eficientes a la hora de interactuar con la audiencia, habitualmente los clientes están conectados en las redes sociales como Instagram, Facebook, Twitter, esto reducirá tiempo y esfuerzo a la compañía interactuar con ellos. Se recomienda responder mensajes, enviar mensajes directos, conectar con los usuarios interesados en la marca y entender lo que verdaderamente piensan de un producto, servicio, o compañía.         
      .col-md-5
        figure
          img(src='@/assets/curso/tema4/vec2.svg', alt='')

</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema4',
  components: { Separador },
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
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
