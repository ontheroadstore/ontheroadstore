<template>
  <div class="container">
    <!-- banner -->
    <MyBanner :carousel_items="banner_carousel_items" :recommend_items="banner_recommend_items" ref="banner" />
    <el-row>
      <el-col :xs="{ span: '22', push: '1', pull: '1' }" :sm="{ span: '22', push: '1', pull: '1' }" :md="{ span: '15' }" :lg="{ span: '15' }">
        <!-- 视频 -->
        <MyVideo :items="video_items" />
        <!-- 文章 -->
        <MyArticle :items="article_items" />
        <!-- 商品 -->
        <MyStore :items="store.items" :isMore="isMore" :infinite="infinite" :testa="next_page" />
      </el-col>
      <el-col :xs="0" :sm="0" :md="{ span: '6', push: '2' }" :lg="{ span: '6', push: '2' }" v-sticky>
        <!-- TOP10 -->
        <MyTop10 />
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { mapState } from 'vuex'

  import MyIndexBanner from '~/components/index/Banner'
  import MyIndexArticle from '~/components/index/Article'
  import MyIndexVideo from '~/components/index/Video'
  import MyIndexStore from '~/components/index/Store'
  import MyIndexTop10 from '~/components/index/Top10'

  export default {
    fetch ({ store }) {
      return Promise.all([store.dispatch('INDEX_INIT_ITEMS')])
    },
    computed: mapState({
      banner_carousel_items: store => store.Index.banner.carousel,
      banner_recommend_items: store => store.Index.banner.recommend,
      video_items: store => store.Index.video,
      article_items: store => store.Index.aticle,
      store: store => store.Index.store,
      next_page: store => store.Index.store.pagination.current + 1,
      isMore: store => {
        if (store.Index.store.pagination.current === 3) {
          return true
        }
        return false
      }
    }),
    components: {
      'MyBanner': MyIndexBanner,
      'MyArticle': MyIndexArticle,
      'MyVideo': MyIndexVideo,
      'MyStore': MyIndexStore,
      'MyTop10': MyIndexTop10
    },
    methods: {
      infinite () {
        this.$store.dispatch('INDEX_GET_STORE_ITEMS', this.next_page)
      }
    }
  }
</script>
