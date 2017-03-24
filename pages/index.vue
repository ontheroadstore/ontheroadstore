<template>
  <div class="container">
    <!-- banner -->
    <MyBanner :carousel_items="banner_carousel_items" :recommend_items="banner_recommend_items" />
    <el-row class="content">
      <el-col :xs="24" :sm="24" :md="16" :lg="16">
        <!-- 视频 -->
        <MyVideo :items="video_items" />
        <!-- 文章 -->
        <MyArticle :items="article_items" />
        <!-- 商品 -->
        <MyStore :loadMore="loadMore" :loading="loading" :items="store.items" :pagination="store.pagination" />
      </el-col>
      <el-col :xs="0" :sm="0" :md="8" :lg="8">
        <!-- TOP10 -->
        <MyTop10 />
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { mapState } from 'vuex'

  import MyIndexBanner from '~/components/index/banner'
  import MyIndexArticle from '~/components/index/article'
  import MyIndexVideo from '~/components/index/video'
  import MyIndexStore from '~/components/index/store'
  import MyIndexTop10 from '~/components/index/top10'

  export default {
    data () {
      return {
        loading: false
      }
    },
    fetch ({ store }) {
      return Promise.all([store.dispatch('INDEX_INIT_ITEMS')])
    },
    computed: mapState({
      banner_carousel_items: store => store.Index.banner.carousel,
      banner_recommend_items: store => store.Index.banner.recommend,
      video_items: store => store.Index.video,
      article_items: store => store.Index.aticle,
      store: store => store.Index.store,
      page: store => store.Index.store.pagination.current + 1
    }),
    components: {
      'MyBanner': MyIndexBanner,
      'MyArticle': MyIndexArticle,
      'MyVideo': MyIndexVideo,
      'MyStore': MyIndexStore,
      'MyTop10': MyIndexTop10
    },
    methods: {
      loadMore () {
        this.loading = true
        this.$store.dispatch('INDEX_GET_STORE_ITEMS', this.page)
        if (this.page === 3) {
          this.loading = true
        } else {
          this.loading = false
        }
      }
    },
    destroyed () {
      this.$store.commit('INDEX_CLEAR_STORE_ITEMS')
    }
  }
</script>
<style lang="scss" scoped>
  .content {
    & > .el-col {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      &.el-col-md-16, .el-col-lg-16 {
        border-right: 1px solid rgba(120,130,140,.13);
      }
    }
  }
</style>
