<template>
  <div class="container">
    <div class="bbb">aaa</div>
    <div class="aaa"><nuxt-child /></div>
  </div>
</div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    mounted () {
      // if (this.$route.name === 'store') {
      //   this.$router.replace({ name: 'store-pages', params: { pages: '1' } })
      // }
      // console.log(this.$route.name)
    }
  }
</script>
