<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.justify-content-center.align-items-center.mb-5
        p.mb-5 A continuación, se presenta el diagrama que representa el resumen de las temáticas que están desarrolladas en el componente formativo:
  
      .row.justify-content-center
        .col-lg-12.mb-5
          figure
            img(src="@/assets/curso/sintesis.svg", alt=" La imagen presenta una síntesis del proceso de elaboración de modelos masculinos. Se estructura en tres grandes áreas: La forma y lo masculino, que abarca la relación entre la morfología masculina, la sociología y la cultura en la moda masculina. Patrones básicos superiores masculinos, donde se trabaja con la camisa, las mangas y los cuellos, así como sus variaciones.Patrones básicos inferiores masculinos, que incluye el pantalón base, el pantalón clásico y las variaciones tipo slim fit.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis
  
  </template>

<script>
export default {
  name: 'Sintesis',
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
