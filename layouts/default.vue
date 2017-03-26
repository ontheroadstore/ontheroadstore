<template>
  <div v-bind:class="isMobile ? 'mobile' : 'pc'">
    <MyHeader ref="header" />
    <main :style="{ 'padding-top': padding.top, 'padding-bottom': padding.bottom }" class="main" ref="container">
      <nuxt />
    </main>
    <MyFooter ref="footer" />
    <MySearch />
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import MyHeader from '~components/Header.vue'
  import MyFooter from '~components/Footer.vue'
  import MySearch from '~components/Search.vue'

  export default {
    data () {
      return {
        padding: {
          top: 0,
          bottom: 0
        }
      }
    },
    computed: mapState({
      isMobile: store => store.Option.isMobile
    }),
    components: {
      MyFooter, MyHeader, MySearch
    },
    mounted () {
      this.padding.top = this.$refs.header.$el.clientHeight + 'px'
      this.padding.bottom = this.$refs.footer.$el.clientHeight + 'px'
    }
  }
</script>
<style lang="scss" scoped>
  .main {
    position: absolute;
    width: 100%;
  }
</style>
