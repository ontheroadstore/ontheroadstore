<template>
  <div class="pc">
    <MyHeader ref="header" />
    <main :style="{ 'padding-top': padding.top, 'padding-bottom': padding.bottom }" ref="container">
      <nuxt />
    </main>
    <MyFooter ref="footer" />
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
