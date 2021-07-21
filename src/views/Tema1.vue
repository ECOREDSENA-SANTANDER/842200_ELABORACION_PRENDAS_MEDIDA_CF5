<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 La forma y lo masculino

    .row.justify-content-center.mb-4
      .col-10.col-md-6
        figure
          img(src='@/assets/curso/tema1/img01.png', alt='La forma y lo masculino')
    
    .row.justify-content-center.mb-5 
      .col-12.col-md-8
        .cajon.color-primario.p-4.mb-4
          p La forma se relaciona directamente con el patrón y su desarrollo para llegar a ser una prenda, pero se debe resaltar que la importancia no radica en el producto, sino en el cliente, para ello se debe ofrecer comodidad desde un análisis de su cuerpo y entender cómo es su relación con lo que viste, por esto es importante conocer algo de historia y los personajes más influyentes para lograr acompañarlo en un proceso de asesoría.
    
    hr
    #t_1_1.titulo-segundo
      .h4 1.1 Biotipos masculinos y morfología
    
    p.mb-4 El biotipo masculino hace referencia al tipo de personalidad vinculado a una cierta estructura morfológica de un sujeto, es decir, es la forma del cuerpo y esto se determina por factores óseos, de masa muscular y metabólicos, que se clasifican en:

    .row.justify-content-center.mb-4
      .col-4.col-md-2
        figure
          img(src='@/assets/curso/tema1/img02.svg', alt='ectomorfos')
      .col-4.col-md-2
        figure
          img(src='@/assets/curso/tema1/img03.svg', alt='mesomorfos')
      .col-4.col-md-2
        figure
          img(src='@/assets/curso/tema1/img04.svg', alt='endomorfos')
    
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

    .row.justify-content-center.mb-5
      .col-12.col-md-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/Manual_patronaje_basico.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            strong Manual de patronaje básico e interpretación de diseños
            p Conoce la tabla de medidas estandarizada según estudio antropométrico masculino (ver página 64).
    
    hr
    #t_1_2.titulo-segundo
      .h4 1.2 La relación entre las prendas y el hombre
    
    .row.justify-content-center.mb-5
      .col-12.col-md-10
        .cajon.color-primario.p-4.mb-4
          .row
            .col-12.col-md-8.mb-4.mb-md-0
              p.mb-4 Es importante entender cómo ha sido la adaptación del hombre y su relación con el vestuario masculino, por esto se debe realizar un recorrido corto por el siglo XX en la moda masculina. Para conocer esta relación se invita a leer el siguiente recurso:

              a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo1_Siglo_XX_Moda_Masculina.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  strong Siglo XX moda masculina
                  p Conoce la evolución del vestuario masculino en la línea del tiempo por medio de un análisis de tipologías y su relación con la forma, el color y el estilo, ayudando a comprender por qué el hombre se viste de una manera específica.
            .col-12.col-md-4.mb-4.mb-md-0
              img(src="@/assets/curso/tema1/img09.svg")
    
    hr
    #t_1_3.titulo-segundo
      .h4 1.3 Sociología y cultura en la moda masculina

    .row.justify-content-center.mb-5 
      .col-12.col-md-10
        .cajon.color-primario.p-4.mb-4
          .row
            .col-12.col-md-8.mb-4.mb-md-0
              p.mb-4 La moda masculina siempre ha sido influenciada fuertemente por los fenómenos sociales, políticos y económicos durante toda la historia, pero expresiones artísticas como la música, el cine, la televisión y el fútbol son grandes referentes en cuanto al vestuario masculino; hoy en día las redes sociales han desencadenado una propagación de nuevos estilos y propuestas interesantes para los clósets de los hombres. Para conocer esta relación se invita a hacer lectura del siguiente recurso:
              a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo2_ Sociología_Cultura_Moda_Masculina.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  strong Sociología y cultura en la moda masculina
                  p Conoce los personajes a través de la historia que han aportado al vestuario masculino y nuevos influenciadores del clóset para los hombres.
            .col-12.col-md-4.mb-4.mb-md-0
              img(src="@/assets/curso/tema1/img10.svg")
    
    hr
    #t_1_4.titulo-segundo
      .h4 1.4 Acompañamiento en el estilo masculino 

    .row.justify-content-center.mb-5 
      .col-12.col-md-10
        .cajon.color-acento-contenido.p-4.mb-4
          .row
            .col-12.col-md-8.mb-4.mb-md-0
              p.mb-4 A la hora de vestir, los hombres suelen ser muy prácticos y, normalmente, llama la atención un común denominador: compran poco, pero buscando la calidad y el estilo. Precisamente, esta es la clave del fondo de armario masculino: todo el conjunto de prendas y complementos que se utilizan en cualquier ocasión o momento del año, que no pasan de moda y se caracterizan por ser prácticas y duraderas por su calidad y diseño. Para profundizar en lo anterior es importante leer el siguiente recurso:
              a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo3_Estilo_Masculino.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  strong Estilo masculino
                  p Conoce la guía básica como recurso de acompañamiento y asesoría para clientes masculinos, desde su personalidad hasta los cortes y colores apropiados.
            .col-12.col-md-4.mb-4.mb-md-0
              img(src="@/assets/curso/tema1/img11.svg")

    hr
    #t_1_5.titulo-segundo
      .h4 1.5 Prepatronaje y bases masculinos 
    
    p.mb-4 Antes de iniciar la construcción de moldes masculinos, es importante analizar los factores de preparación para un óptimo desarrollo de las prendas; entre ellos el análisis prepatronaje y el patrón.

    .tarjeta.color-primario.p-3.p-md-3.mb-2
      ol.lista-ol--cuadro
        li
          .lista-ol--cuadro__vineta
            span.text-white a
          p
            strong Análisis prepatronaje: 
            | el proceso de aprendizaje está diseñado para iniciar desde los patrones base que desencadenan una serie de moldes básicos. Siempre se comienza con el siguiente análisis:
    
    .tarjeta.color-acento-contenido.p-4.p-md-5.mb-4
      .row.justify-content-center
        .col-10
          hr
          .row.justify-content-center
            .col-8.col-md-2.mb-4.mb-md-0
              img(src="@/assets/curso/tema1/img12.svg")
            .col-12.col-md-10
              .h5 Tipo de plano 
              p Identificar qué tipo de plano se va a trabajar, si es un plano unido, separado o montado.
          hr
          hr
          .row.justify-content-center
            .col-8.col-md-2.mb-4.mb-md-0
              img(src="@/assets/curso/tema1/img13.svg")
            .col-12.col-md-10
              .h5 Rectángulo 
              p Todo básico inicia siempre desde un rectángulo, el cual se traza con la medida de contorno más protuberante y el largo más largo de la parte del cuerpo a trabajar.
          hr
          hr
          .row.justify-content-center
            .col-8.col-md-2.mb-4.mb-md-0
              img(src="@/assets/curso/tema1/img14.svg")
            .col-12.col-md-10
              .h5 Medida más protuberante a trabajar 
              p.mb-4 Por lo general, el manual trabaja con fórmulas o convenciones, en la mayoría de los casos la medida más protuberante es sustituida por una letra, por ejemplo, en masculino, el contorno de pecho (medida más protuberante de la cintura para arriba) equivale o es igual a la letra “P”.
              strong P = contorno de pecho de la talla a trabajar
          hr
          hr
          .row.justify-content-center
            .col-8.col-md-2.mb-4.mb-md-0
              img(src="@/assets/curso/tema1/img15.svg")
            .col-12.col-md-10
              .h5 Medida más larga a trabajar 
              p El largo inicial del rectángulo se trabaja con la medida más larga de la parte del cuerpo a trabajar, por ejemplo:
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  p 
                    strong Pantalón: 
                    | largo de pantalón.
                li 
                  i.lista-ul__vineta
                  p 
                   strong Falda: 
                   | altura de rodilla.
                li 
                  i.lista-ul__vineta
                  p 
                    strong Superior: 
                    | largo de talle posterior.
          hr
          hr
          .row.justify-content-center
            .col-8.col-md-2.mb-4.mb-md-0
              img(src="@/assets/curso/tema1/img16.svg")
            .col-12.col-md-10
              .h5 Medidas en el trazo 
              p.mb-4 Las medidas que se trabajan en la metodología son deducidas, en algunos casos únicamente se saca del cuadro de talla la medida de contorno y largo; no se trabajan medidas como hombro, anchos, cuello y demás, pues estas salen por fórmula, o como se trabajó en temas anteriores, por medidas deducidas.
              strong En masculino la medida de cuello posterior equivale a: P/20 + 2,5
          hr
          hr
          .row.justify-content-center
            .col-8.col-md-2.mb-4.mb-md-0
              img(src="@/assets/curso/tema1/img17.svg")
            .col-12.col-md-10
              .h5 Manejo del papel 
              p Por lo general el trazo de moldes se suele hacer con papel trazo o manifold, dicho papel tiene dos caras, una cara que al tacto es liso y visualmente brillante y otra que al tacto es corrugada y opaca, por lo general se recomienda trabajar por la parte corrugada con el fin de tener una mejor adhesión del grafito (lápiz) y de no permitir que rebote la luz, es recomendable trabajar en papel blanco con el fin de no cansar la vista y descansar la mente.
          hr

    .tarjeta.color-primario.p-3.p-md-3.mb-4
      ol.lista-ol
        li
          .lista-ol--cuadro__vineta
            span.text-white b
          p
            strong Siluetas: 
            | el manejo de siluetas varía únicamente en las fórmulas, los pasos y guías serán las mismas.
    
    .tarjeta.color-primario.p-3.p-md-3.mb-4
      ol.lista-ol
        li
          .lista-ol--cuadro__vineta
            span.text-white c
          p
            strong Patrón base de camisa: 
            | para la construcción de patrones bases superiores y transformarlos en modelos masculinos listos para ser cortados en el material textil, se implementan una serie de pasos y desarrollos para obtener un resultado con precisión en las prendas finales, entre ellos:
      
    .tarjeta.color-acento-contenido.p-4.p-md-5.mb-4
      .row.justify-content-center
        .col-12.col-md-4.mb-4.mb-md-0
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
        .col-12.col-md-7
          img(src="@/assets/curso/tema1/img18.svg")

    .tarjeta.color-primario.p-3.p-md-3.mb-4
      ol.lista-ol
        li
          .lista-ol--cuadro__vineta
            span.text-white d
          p
            strong Pasos detallados para realizar la base superior masculina: 
            | cuando se habla de la base superior, es la copia de la horma del cuerpo partiendo del cuello hasta el largo que es ubicado entre la cintura y altura de cadera según el propósito del diseño, dicha base será la plantilla que se adecuará para convertirse en camisa, camiseta, chaqueta, chaleco, etc.
    
    .tarjeta.color-acento-contenido.p-4.p-md-5.mb-4
      .row.justify-content-center
        .col-12.col-md-5.mb-4.mb-md-0
          strong Figura 1
          p Base de superior masculina
          img(src="@/assets/curso/tema1/img19.svg")
        .col-12.col-md-5.mb-4.mb-md-0
          strong Figura 2
          p Base masculino Slim fit
          img(src="@/assets/curso/tema1/img20.svg")
        p.mb-4 Lo primero a tener en cuenta para realizar la base superior es el manejo de los básicos dependiendo del tipo de silueta, en este caso se sugiere trabajar el básico de silueta Slim fit. Para iniciar, se debe trazar una línea de manera horizontal en el papel, sobre el que quedarán alineados o aplomados como línea base de construcción; en prendas superiores la línea de aplome o línea base será la línea de profundidad de sisa.
        .col-12.col-md-5.mb-4.mb-md-0
          a.anexo.mb-4.mb-lg-0(href="https://repositorio.sena.edu.co/bitstream/handle/11404/4725/Manual_patronaje_basico_interpretacion_disenos.PDF;jsessionid=CDC8FDE9468D98E37FFD127332113A29?sequence=1" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              strong Manual de patronaje básico e interpretación de diseños 
              | Conoce el esquema del patrón base masculino clásico y Slim fit (ver páginas 65 a 67).
        .col-12.col-md-5.mb-4.mb-md-0
          a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?app=desktop&v=rximz1xBJM8&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              strong Base superior masculina slim fit 
              | Conoce el paso a paso para la elaboración del molde base con forma Slim fit.
        
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
