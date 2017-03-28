<template>
  <div class="loading">
    <nuxt-link :to="{ name: 'store-pages', params: { pages: 4 } }" v-if="loading">
      <el-button>查看更多黑市内容</el-button>
    </nuxt-link>
    <el-button :loading="!loading" v-else>加载更多</el-button>
  </div>
</template>
<script>
  export default {
    props: {
      loading: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  .loading {
    text-align: center;
  }
</style>
