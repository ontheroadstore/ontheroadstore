<template>
  <div class="container">
    <!-- banner -->
    <MyBanner />
    <section class="content">
      <el-row>
        <el-col :span="16">
          <!-- 视频 -->
          <MyVideo />
          <!-- 文章 -->
          <MyArticle />
          <!-- 商品 -->
          <MyStore />
        </el-col>
        <el-col :span="8">
          <!-- TOP10 -->
          <MyTop10 />
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
  import MyIndexBanner from '~/components/index/banner'
  import MyIndexArticle from '~/components/index/article'
  import MyIndexVideo from '~/components/index/video'
  import MyIndexStore from '~/components/index/store'
  import MyIndexTop10 from '~/components/index/top10'

  export default {
    data () {
      return {
        banner: [{'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'}]
      }
    },
    components: {
      'MyBanner': MyIndexBanner,
      'MyArticle': MyIndexArticle,
      'MyVideo': MyIndexVideo,
      'MyStore': MyIndexStore,
      'MyTop10': MyIndexTop10
    },
    methods: {
    },
    beforeCreate () {
      // this.$store.dispatch('INDEX_INIT_ITEMS')
    },
    mounted () {
      // console.log(this)
    }
  }
</script>
<style lang="scss" scoped>
  .content {
    & > .el-row {
      & > .el-col {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        &.el-col-16 {
          border-right: 1px solid rgba(120,130,140,.13);
        }
      }
    }
  }
</style>
