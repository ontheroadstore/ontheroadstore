<template>
  <section class="container" :style="{ 'padding-top': padding.top, 'padding-bottom': padding.bottom }" ref="container">
    {{ error.statusCode }}
    操他妈老子出错了
    ERROR：{{ error.message }}
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">返回首页</nuxt-link>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        padding: {
          top: 0,
          bottom: 0
        }
      }
    },
    props: ['error']
  }
</script>

<style scoped>

</style>
