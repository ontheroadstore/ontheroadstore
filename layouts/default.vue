<template>
  <div class="ontheroadstore">
    <MyHeader ref="header" />
    <nuxt :style="{ 'padding-top': padding.top, 'padding-bottom': padding.bottom }" ref="container" />
    <my-footer ref="footer" />
  </div>
</template>
<script>
  import MyHeader from '~components/Header.vue'
  import MyFooter from '~components/Footer.vue'

  export default {
    data () {
      return {
        padding: {
          top: 0,
          bottom: 0
        }
      }
    },
    components: {
      MyFooter, MyHeader
    },
    mounted () {
      this.padding.top = this.$refs.header.$el.clientHeight + 'px'
      this.padding.bottom = this.$refs.footer.$el.clientHeight + 'px'
    }
  }
</script>

<style lang="scss">
  .container {
    // position: relative;
    // z-index: 10;
  }
</style>
