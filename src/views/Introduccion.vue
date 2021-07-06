<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/mHn4cjPKOUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-4 A partir de la implementación del concepto básico de patrones, se estudia el desarrollo y modificación de los moldes, se analizan las distintas prendas que componen la indumentaria masculina y se crean, según la forma del cuerpo, con medidas y formas correspondientes de cada cliente. En este punto, se debe considerar comprender, explicar, apropiar y analizar los conocimientos técnicos, convenciones, procesamiento de reglas, composición de curvas y partes que se utilizarán. El análisis principal del cuerpo y la estructura son los componentes básicos para el desarrollo del molde básico.

    p.mb-4 Para desarrollar el modelo o diseño se realiza a partir de la unidad de medida en centímetros, pero si se toma de la guía del Manual de patronaje básico e interpretación de diseños, del SENA, se encontrará que está en pulgadas la tabla, por ello, se recomienda realizar la conversión para facilitar el procesamiento de líneas. El manejo de siluetas, en masculino este mismo manual trabaja dos siluetas, una clásica y otra Slim fit, si bien el desarrollo de los planos y moldes cumplen con los mismos pasos o el mismo orden secuencial, lo que varían son las fórmulas, específicamente para el desarrollo de los moldes básicos.

    p.mb-4 Para la implementación y modificación de moldes básicos es importante tener claridad en cada uno de los conceptos de patronaje como medidas, pasos, elementos y vocabulario técnico que se irá implementando en el desarrollo de los trazos, moldes o planos. En este punto, para la implementación de los básicos se debe tomar como referencia los pasos del patronaje sobre la metodología SENA.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
