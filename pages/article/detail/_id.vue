<template>
  <div class="container">
    <div class="page-bg" v-lazy:background-image="item.cover"></div>
    <el-row class="article-detail">
      <el-col :xs="0" :sm="0" :md="{ span: '24', push: '21' }" :lg="{ span: '24', push: '21' }" v-sticky style="    position: absolute">
        <div class="qrcode">
          <qrCode :value="qrcode.value" :ec_level="qrcode.level" :type="qrcode.type" :size="qrcode.size" />
          <div class="qrcode-info">
            分享、转发<br>请微信扫一扫
          </div>
        </div>
      </el-col>
      <el-col :xs="{ span: '22' ,push : '1' ,pull : '1' }" :sm="{ span: '22' ,push : '1' ,pull : '1' }" :md="{ span: '16' ,push : '4' ,pull : '4' }" :lg="{ span: '16' ,push : '4' ,pull : '4' }">
        <MyContent :item="item" />
      </el-col>
      <el-col :span="24">
        <MyRecommend :items="recommendItem" />
      </el-col>
      <el-col :xs="{ span: '22' ,push : '1' ,pull : '1' }" :sm="{ span: '22' ,push : '1' ,pull : '1' }" :md="{ span: '16' ,push : '4' ,pull : '4' }" :lg="{ span: '16' ,push : '4' ,pull : '4' }">
        <MyLoadMore :items="moreItem" :infinite="infinite" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import qrCode from '~components/Qrcode'
  import MyContent from '~components/article_detail/Content'
  import MyRecommend from '~components/article_detail/Recommend'
  import MyLoadMore from '~components/loadMore'

  export default {
    validate ({ params }) {
      return (!!params.id && !Object.is(Number(params.id), NaN))
    },
    fetch ({ store, params }) {
      return Promise.all([store.dispatch('ARTICLE_DETAIL_INIT', params.id)])
    },
    head () {
      return {
        title: this.item.title,
        meta: [
        { hid: 'description', name: 'description', content: this.item.abstract }
        ]
      }
    },
    computed: mapState({
      item: store => store.Article.detail.item,
      moreItem: store => store.Article.detail.more.items,
      morePagination: store => store.Article.detail.more.pagination,
      moreNextPage: store => store.Article.detail.more.pagination.current + 1,
      qrcode: store => {
        return {
          value: 'http://hs.ontheroadstore.com/Portal/HsArticle/index/id/3.html',
          ec_level: 'M',
          type: 'png',
          size: 5
        }
      },
      recommendItem: store => store.Article.detail.recommend
    }),
    components: {
      'qrCode': qrCode,
      'MyContent': MyContent,
      'MyRecommend': MyRecommend,
      'MyLoadMore': MyLoadMore
    },
    methods: {
      infinite () {
        this.$store.dispatch('ARTICLE_DETAIL_GET_ITEMS', this.moreNextPage)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    .page-bg {
      z-index: 0;
      top: 0;
      left: 0;
      right: 0;
      border: none;
      height: 80vh;
      background-position: 50% 50%;
      background-size: 0;
      bottom: 0;
      position: absolute;
      background-repeat: no-repeat;
      &:after {
        content: '';
        height: 50%;
        width: 100%;
        background-image: linear-gradient(to bottom,rgba(255,255,255,0),#f2f2f2);
        background-repeat: repeat-x;
        bottom: 0;
        position: absolute;
      }
      &:before {
        content: '';
        background-size: cover;
        background-image: inherit;
        background-position: inherit;
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: .1;
        background-repeat: no-repeat;
      }
    }
    .article-detail {
      position: relative;
      z-index: 10;
      .qrcode {
        margin-top: 1rem;
        right: 1rem;
        text-align: center;
        width: 102px;
        padding: 1rem;
        background-color: #fff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 -1px 0 rgba(0, 0, 0, 0.02);
        z-index: 1020;
        opacity: .8;
        .qrcode-item {
          width: 102px;
          height: 102px;
        }
        .qrcode-info {
          margin-top: 1rem;
          color: #717375;
        }
      }
    }
    .recommend {
      background-color: #1c202b;
    }
  }
</style>
