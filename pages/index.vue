<template>
  <div class="container">
    <!-- banner -->
    <MyBanner :carousel_items="banner_carousel_items" :recommend_items="banner_recommend_items" />
    <el-row>
      <el-col :xs="{ span: '22', push: '1', pull: '1' }" :sm="{ span: '22', push: '1', pull: '1' }" :md="{ span: '15' }" :lg="{ span: '15' }">
        <!-- 视频 -->
        <!-- <MyVideo :items="video_items" /> -->
        <!-- 文章 -->
        <MyArticle :items="article_items" />
        <!-- 商品 -->
        <MyStore :items="store_items" :infinite="infinite" :isMore="store_isMore" />
      </el-col>
      <el-col :xs="0" :sm="0" :md="{ span: '6', push: '2' }" :lg="{ span: '6', push: '2' }" v-sticky>
        <!-- TOP10 -->
        <MyTop10 :items="top10_items" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MyIndexBanner from '~/components/index/Banner'
import MyIndexArticle from '~/components/index/Article'
import MyIndexVideo from '~/components/index/Video'
import MyIndexStore from '~/components/index/Store'
import MyIndexTop10 from '~/components/index/Top10'

export default {
  head () {
    return {
      title: '为了你不找边际的企图心'
    }
  },
  async fetch ({ store }) {
    await store.dispatch('home/INIT')
  },
  computed: {
    banner_carousel_items () {
      return this.$store.state.home.banner.carousel
    },
    banner_recommend_items () {
      return this.$store.state.home.banner.recommend
    },
    article_items () {
      return this.$store.state.home.article
    },
    top10_items () {
      return this.$store.state.home.top10
    },
    store_items () {
      return this.$store.state.home.store.items
    },
    store_page () {
      return this.$store.state.home.store.pagination.current + 1
    },
    store_isMore () {
      if (this.$store.state.home.store.pagination.current === 3) {
        return true
      }
      return false
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
    infinite () {
      this.$store.dispatch('home/REQ_STORE', this.store_page)
    }
  }
}
</script>
