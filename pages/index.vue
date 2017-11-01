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
        <MyStore :items="store_items" :infinite="infinite" :pagination="pagination" :isMore="store_isMore" />
      </el-col>
      <el-col class="hidden-xs-only hidden-sm-only" :md="{ span: '6', push: '2' }" :lg="{ span: '6', push: '2' }" v-sticky>
        <!-- TOP10 -->
        <MyTop10 :items="top10_items" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MyIndexBanner from '~/components/index/Banner.vue'
import MyIndexArticle from '~/components/index/Article.vue'
import MyIndexVideo from '~/components/index/Video.vue'
import MyIndexStore from '~/components/index/Store.vue'
import MyIndexTop10 from '~/components/index/Top10.vue'

export default {
  head () {
    return {
      title: '为了你不着边际的企图心',
      meta: [
        { hid: 'description', name: 'description', content: '公路商店致力于发现、探索尚未被商业力量全面污染的青年文化以及一切被年轻人所接纳的事物和观点，以先锋视角演绎有趣的青年生活方式' },
        { name: 'keywords', content: '公路商店,黑市,疯狂店员,公路商店老公,公路商店小白,青年文化,先锋文化' }
      ]
    }
  },
  async asyncData ({ app }) {
    const articlebanner = await app.$axios.get('index/articlebanner')
    const storebanner = await app.$axios.get('index/storebanner')
    const article = await app.$axios.get('index/article')
    const top10 = await app.$axios.get('index/top10')
    const video = await app.$axios.get('index/video')
    await app.store.dispatch('home/REQ_STORE', 1)

    return {
      banner_carousel_items: articlebanner.data,
      banner_recommend_items: storebanner.data,
      article_items: article.data,
      top10_items: top10.data,
      video_items: video.data
    }
  },
  computed: {
    store_items () {
      return this.$store.state.home.store.items
    },
    store_page () {
      return this.$store.state.home.store.pagination.current + 1
    },
    pagination () {
      return this.$store.state.home.store.pagination
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
