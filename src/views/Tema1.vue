<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 La forma y lo masculino

    .row.justify-content-center.align-items-center
      .col-lg-7.col-md-12
        .cajon.color-primario.p-4.mb-4
          p La forma se relaciona directamente con el patrón y su desarrollo para llegar a ser una prenda, pero se debe resaltar que la importancia no radica en el producto, sino en el cliente, para ello se debe ofrecer comodidad desde un análisis de su cuerpo y entender cómo es su relación con lo que viste, por esto es importante conocer algo de historia y los personajes más influyentes para lograr acompañarlo en un proceso de asesoría.
      .col-lg-5.col-md-6
        figure
          img(src='@/assets/curso/tema1/img01.png', alt='La forma y lo masculino')

      
    hr
    separador
    #t_1_1.titulo-segundo
      .h2 1.1 Biotipos masculinos y morfología
    
    p.mb-4 El biotipo masculino hace referencia al tipo de personalidad vinculado a una cierta estructura morfológica de un sujeto, es decir, es la forma del cuerpo y esto se determina por factores óseos, de masa muscular y metabólicos, que se clasifican en:

    .row.justify-content-center.mb-5 
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4
          .row
            .col-12.col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img05.png', alt='endomorfos')
            .col-12.col-md-8.mb-4.mb-md-0
              p La técnica empleada para la creación de moldes bases y básicos para modelos masculinos, se centra en la comprensión del biotipo del cliente, pues el objetivo es trabajar con sus medidas; sin embargo, como segunda opción se puede emplear la medida de contorno de la persona que más se le aproxime a los números en el cuadro de tallas estandarizado y realizar el levantamiento por esta adaptación, en este sentido es importante tenerlo en cuenta cuando no se requieran siluetas ajustadas para hacer las adaptaciones en la moldería. 

    .row.mb-4
      .col-12.col-md-4.mb-4.mb-md-0.d-flex
        .tarjeta.color-acento-contenido.p-4.p-md-5.mb-4
          .h3.text-center Ectomorfos
          .row.justify-content-center
            .col-6
              img(src="@/assets/curso/tema1/img06.svg")
          p Hombres que poseen físicamente cuerpos delgados de poca musculatura esquelética.
      .col-12.col-md-4.mb-4.mb-md-0.d-flex
        .tarjeta.color-acento-contenido.p-4.p-md-5.mb-4
          .h3.text-center Mesomorfos
          .row.justify-content-center
            .col-8
              img(src="@/assets/curso/tema1/img07.svg")
          p Son relativamente altos, con huesos grandes y anchos.
      .col-12.col-md-4.mb-4.mb-md-0.d-flex
        .tarjeta.color-acento-contenido.p-4.p-md-5.mb-4
          .h3.text-center Endomorfos
          .row.justify-content-center
            .col-6
              img(src="@/assets/curso/tema1/img08.svg")
          p Son hombres de huesos grandes en longitud, además tienen cintura ancha y piernas densas.
    
      .py-4
      .row.align-items-center.justify-content-center(data-aos="flip-up")
        .col-lg-10 
          .tarjeta.tarjeta-descarga.color-verde.p-4.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/pdf.svg")  
              .col 
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    strong Manual de patronaje básico
                    .text-small Conoce la tabla de medidas estandarizada según estudio antropométrico masculino (ver página 67).
                  .col-sm-auto
                    a.boton.color-secundario.texto-blanco(:href="obtenerLink('/downloads/Manual_patronaje_basico.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-download
    
    hr
    separador
    #t_1_2.titulo-segundo
      .h2 1.2 La relación entre las prendas y el hombre
    
    .row.justify-content-center.mb-5
      .col-12.col-md-12.col-lg-11
        .cajon.color-primario.mb-4
          .row.align-items-center.justify-content-center
            .col-md-7.mb-4.mb-md-0.p-2
                p.px-4.mb-4 Es importante entender cómo ha sido la adaptación del hombre y su relación con el vestuario masculino, por esto se debe realizar un recorrido corto por el siglo XX en la moda masculina. Para conocer esta relación se invita a visitar el siguiente recurso:
            .col-md-5.mb-4.mb-md-0.col-8
              img.desborde(src="@/assets/curso/tema1/img09.svg")

      .py-2
      .row.align-items-center.justify-content-center(data-aos="flip-up")
        .col-lg-10 
          .tarjeta.tarjeta-descarga.color-verde.p-4.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/pdf.svg")  
              .col 
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p #[b Siglo XX moda masculina] 
                      span.text-small Conoce la evolución del vestuario masculino en la línea del tiempo por medio de un análisis de tipologías y su relación con la forma, el color y el estilo, ayudando a comprender por qué el hombre se viste de una manera específica.
                  .col-sm-auto
                    a.boton.color-secundario.texto-blanco(:href="obtenerLink('/downloads/Siglo_XX_Moda_Masculina.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-download
    
    hr
    separador
    #t_1_3.titulo-segundo
      .h2 1.3 Sociología y cultura en la moda masculina

    .row.justify-content-center.mb-5 
      .col-12.col-md-12.col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          .row
            .col-12.col-md-12.mb-4.mb-md-0.col-lg-9.p-4
              p.mb-4 La moda masculina siempre ha sido influenciada fuertemente por los fenómenos sociales, políticos y económicos durante toda la historia, pero expresiones artísticas como la música, el cine, la televisión y el fútbol son grandes referentes en cuanto al vestuario masculino; hoy en día las redes sociales han desencadenado una propagación de nuevos estilos y propuestas interesantes para los clósets de los hombres. Para conocer esta relación se invita a hacer lectura del siguiente recurso:
              .row.align-items-center.justify-content-center(data-aos="flip-up")
                .tarjeta.tarjeta-descarga.color-naranja.p-2.mb-5
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.imgico(src="@/assets/curso/pdf.svg")  
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          strong Sociología y cultura en la moda masculina
                          p Conoce los personajes a través de la historia que han aportado al vestuario masculino y nuevos influenciadores del clóset para los hombres.
                        .col-sm-auto
                          a.boton.color-secundario.texto-blanco(:href="obtenerLink('/downloads/Sociología_Cultura_Moda_Masculina.pdf')" target="_blank")
                            span Descargar
                            i.fas.fa-download
            .col-12.col-md-6.mb-md-0.col-lg-3
              img(src="@/assets/curso/tema1/img10.svg")
    
    hr
    separador
    #t_1_4.titulo-segundo
      .h2 1.4 Acompañamiento en el estilo masculino 

    .row.justify-content-center.mb-5 
      .col-12.col-md-12.col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          .row
            .col-12.col-md-12.mb-4.mb-md-0.col-lg-9.p-4
              p.mb-4 Cuando se trata de vestir, los hombres tienden a priorizar la practicidad. Generalmente, se observa una tendencia común: compran con menos frecuencia, pero enfocan su atención en la calidad y el estilo. Este enfoque es fundamental para crear un armario masculino sólido, compuesto por prendas y accesorios versátiles que son atemporales, prácticos y duraderos debido a su calidad y diseño. Estas características aseguran que sean apropiados para cualquier ocasión o temporada. Para entender mejor estos conceptos, es recomendable consultar el siguiente recurso: 
              .row.align-items-center.justify-content-center(data-aos="flip-up")
                .tarjeta.tarjeta-descarga.color-naranja.p-2.mb-5
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.imgico(src="@/assets/curso/pdf.svg")  
                    .col 
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          strong Estilo masculino
                          p Conoce la guía básica como recurso de acompañamiento y asesoría para clientes masculinos, desde su personalidad hasta los cortes y colores apropiados.
                        .col-sm-auto
                          a.boton.color-secundario.texto-blanco(:href="obtenerLink('/downloads/Estilo_Masculino.pdf')" target="_blank")
                            span Descargar
                            i.fas.fa-download
            .col-12.col-md-6.mb-4.mb-md-0.col-lg-3
              img(src="@/assets/curso/tema1/img11.svg")

    hr
    separador
    #t_1_5.titulo-segundo
      .h2 1.5 Prepatronaje y bases masculinos 
    
    p.mb-4 Antes de iniciar la construcción de moldes masculinos, es importante analizar los factores de preparación para un óptimo desarrollo de las prendas; entre ellos el análisis prepatronaje y el patrón.

    .tarjeta.color-primario.p-3.p-md-3.mb-2
      ol.lista-ol--cuadro
        li
          .lista-ol--cuadro__vineta
            span.text-white a
          | #[b Análisis prepatronaje: ] 
          | el proceso de aprendizaje está diseñado para iniciar desde los patrones base que desencadenan una serie de moldes básicos. Siempre se comienza con el siguiente análisis:
    
    .tarjeta.p-4.p-md-5.mb-4
      .row.justify-content-between.align-items-center
        .col-12
          hr
          .row.justify-content-center.align-items-center
            .col-8.col-md-2.mb-4.mb-md-0
              img(src="@/assets/curso/tema1/img12.svg")
            .col-12.col-md-4
              h3 Tipo de plano 
              p.text-small Identificar qué tipo de plano se va a trabajar, si es un plano unido, separado o montado.
            .col-8.col-md-2.mb-4.mb-md-0
              img(src="@/assets/curso/tema1/img15.svg")
            .col-12.col-md-4
              h3 Medida más larga a trabajar 
              p.text-small El largo inicial del rectángulo se trabaja con la medida más larga de la parte del cuerpo a trabajar, por ejemplo:
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta.text-dark.text-small
                  span.text-small Pantalón: largo de pantalón.
                li 
                  i.lista-ul__vineta.text-dark.text-small.sinespacio
                  span.text-small Falda: altura de rodilla.
                li 
                  i.lista-ul__vineta.text-dark.text-small.sinespacio
                  span.text-small Superior: largo de talle posterior.
          hr
     
          .row.justify-content-center.align-items-center
            .col-8.col-md-2.mb-4.mb-md-0
              img(src="@/assets/curso/tema1/img13.svg")
            .col-12.col-md-4
              h3 Rectángulo 
              p.text-small Todo básico inicia siempre desde un rectángulo, el cual se traza con la medida de contorno más protuberante y el largo más largo de la parte del cuerpo a trabajar.
            .col-8.col-md-2.mb-4.mb-md-0
              img(src="@/assets/curso/tema1/img16.svg")
            .col-12.col-md-4
              h3 Medidas en el trazo 
              p.text-small.mb-4 Las medidas que se trabajan en la metodología son deducidas, en algunos casos únicamente se saca del cuadro de talla la medida de contorno y largo; no se trabajan medidas como hombro, anchos, cuello y demás, pues estas salen por fórmula, o como se trabajó en temas anteriores, por medidas deducidas.
              h6 En masculino la medida de cuello posterior equivale a: P/20 + 2,5
          hr
    
          .row.justify-content-center
            .col-8.col-md-2.mb-4.mb-md-0
              img(src="@/assets/curso/tema1/img14.svg")
            .col-12.col-md-4
              h3 Medida más protuberante a trabajar 
              p.mb-4.text-small Por lo general, el manual trabaja con fórmulas o convenciones, en la mayoría de los casos la medida más protuberante es sustituida por una letra, por ejemplo, en masculino, el contorno de pecho (medida más protuberante de la cintura para arriba) equivale o es igual a la letra “P”.
              h6 P = contorno de pecho de la talla a trabajar
            .col-8.col-md-2.mb-4.mb-md-0
              img(src="@/assets/curso/tema1/img17.svg")
            .col-12.col-md-4
              h3 Manejo del papel 
              p.text-small Para el trazado de moldes, se emplea comúnmente papel trazo o #[em manifold]. Este tipo de papel presenta dos superficies distintas: una lisa y brillante, y otra corrugada y opaca. Se recomienda usar la cara corrugada para mejorar la adhesión del grafito (lápiz) y evitar el reflejo de la luz, lo cual facilita el trabajo visual. Además, es preferible trabajar sobre papel blanco, ya que esto ayuda a reducir la fatiga visual y proporciona un descanso mental durante el proceso. 
          hr

    .tarjeta.color-primario.p-3.p-md-3.mb-4
      ol.lista-ol
        li
          .lista-ol--cuadro__vineta
            p.text-white.text-center b 
          | #[b Siluetas:]
          | el manejo de siluetas varía únicamente en las fórmulas, los pasos y guías serán las mismas.

    .tarjeta.color-primario.p-3.p-md-3.mb-4
      ol.lista-ol
        li
          .lista-ol--cuadro__vineta
            p.text-white.text-center c
          | #[b Patrón base de camisa:]
          | para la construcción de patrones bases superiores y transformarlos en modelos masculinos listos para ser cortados en el material textil, se implementan una serie de pasos y desarrollos para obtener un resultado con precisión en las prendas finales, entre ellos:
      
    .tarjeta.color-acento-contenido.p-4.p-md-12.mb-4
      .row.justify-content-center
        .col-12.col-md-8.mb-4.mb-md-0
          ul.lista-ul--color
            li 
              i.lista-ul__vineta
              | Elaboración de patrones bases. 
            li 
              i.lista-ul__vineta
              | Interpretación.
            li 
              i.lista-ul__vineta
              | Desahogos – contorno: largos y anchos.
            li 
              i.lista-ul__vineta
              | Sistema de ajuste.
            li 
              i.lista-ul__vineta
              | Sistema de cierre.
            li 
              i.lista-ul__vineta
              | Piezas de complementos.
            li 
              i.lista-ul__vineta
              | Señalización.
            li 
              i.lista-ul__vineta
              | Despiece.
        .col-12.col-md-8
          img(src="@/assets/curso/tema1/img18.svg")

    .tarjeta.color-primario.p-3.p-md-3.mb-4
      ol.lista-ol
        li
          .lista-ol--cuadro__vineta
            span.text-white d
          strong Pasos detallados para realizar la base superior masculina: 
          | cuando se habla de la base superior, es la copia de la horma del cuerpo partiendo del cuello hasta el largo que es ubicado entre la cintura y altura de cadera según el propósito del diseño, dicha base será la plantilla que se adecuará para convertirse en camisa, camiseta, chaqueta, chaleco, etc.
    
    .tarjeta.color-acento-contenido.p-4.p-md-5.mb-4
      .row.justify-content-center
        .col-12.col-md-5.mb-4.mb-md-0
          strong Figura 1
          p Base de superior masculina
          img(src="@/assets/curso/tema1/figura1.png", alt="La imagen muestra un diagrama técnico de lo que parece ser un patrón de costura. Hay varias líneas y curvas que indican el contorno y detalles de una prenda, con marcas de medidas numéricas y letras que posiblemente se corresponden con puntos específicos para cortar, doblar o coser. Las líneas sólidas definen la forma general, mientras que las líneas punteadas y curvas pueden representar pliegues o costuras. Algunas secciones tienen anotaciones que indican ajustes a las medidas, como A +1/3 o B-1, sugiriendo incrementos o decrementos en las dimensiones. Además, hay referencias como P/6 +7 y P/6 +9, que se refieren a proporciones o fracciones relacionadas con las medidas de la prenda. El esquema incluye también ejes claramente etiquetados, como centro atrás, lo que ayuda en la orientación del patrón. Este diagrama es típicamente utilizado por diseñadores de moda y sastres para crear piezas de vestuario a medida.")
        p.mb-4.py-4 Lo primero a tener en cuenta para realizar la base superior es el manejo de los básicos dependiendo del tipo de silueta, en este caso se sugiere trabajar el básico de silueta #[em Slim fit]. Para iniciar, se debe trazar una línea de manera horizontal en el papel, sobre el que quedarán alineados o aplomados como línea base de construcción; en prendas superiores la línea de aplome o línea base será la línea de profundidad de sisa.
        
      .py-4
      .row.align-items-center.justify-content-center(data-aos="flip-up")
        .col-lg-10 
          .tarjeta.tarjeta-descarga.color-naranja.p-4.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/pdf.svg")  
              .col 
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h6 Manual de patronaje básico e interpretación de diseños
                    p.text-small Conoce el esquema del patrón base masculino clásico y #[em Slim fit] (ver páginas 71).
                  .col-sm-auto
                    a.boton.color-secundario.texto-blanco(:href="obtenerLink('downloads/Manual_patronaje_basico.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-download
                      .col-12.col-md-5.mb-4.mb-md-0
      .row.justify-content-center
        .col-12.col-md-5.mb-4.mb-md-0
          strong Figura 2
          p Base masculino #[em Slim fit]
          img(src="@/assets/curso/tema1/figura2.png", alt="La imagen expone un patrón de costura slim fit para ropa masculina, detallando las medidas y ajustes necesarios para un corte que se adapta ceñidamente al cuerpo. Se observan líneas y marcas que delinean elementos como la sisa y el cuello, así como ajustes específicos para personalizar el ajuste. Las anotaciones y las líneas indican las áreas de corte, pliegue y costura, imprescindibles para lograr el diseño slim fit deseado. Se pueden identificar diferentes partes del patrón: la curvatura para la sisa, la indicación de la ubicación del cuello y las líneas que definen el contorno de los lados y la cintura. Las anotaciones numéricas y las letras (como A, B, P, CF) son referencias de medidas específicas o puntos de ajuste que se utilizan para construir el patrón y adaptarlo al tamaño y forma deseados.")
      .py-2
      .row.align-items-center.justify-content-center(data-aos="flip-up")
        .col-lg-10 
          .tarjeta.tarjeta-descarga.color-verde.p-4.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/video.svg")  
              .col 
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h6 Base superior masculina #[em Slim fit]
                    p.text-small Conoce el paso a paso para la elaboración del molde base con forma #[em Slim fit.]
                  .col-sm-auto 
                    a.boton.color-secundario.texto-blanco(:href="('https://youtu.be/zEqZGyEEhnU?si=m8GYbKkof3W3dsmm')" target="_blank")
                      span ir al video
                      i.fas.fa-video
            
        
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
