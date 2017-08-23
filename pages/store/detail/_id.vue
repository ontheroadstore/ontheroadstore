<template>
  <div class="container">
    <div class="page-bg" v-lazy:background-image="item.cover"></div>
    <el-row class="store-detail">
      <!-- 头部卖家信息 -->
      <el-col :xs="{ span: '0' }" :sm="{ span: '20' ,push : '2' ,pull : '2' }" :md="{ span: '18' ,push : '3' ,pull : '3' }" :lg="{ span: '18' ,push : '3' ,pull : '3' }">
        <Sellers :Sellers="sellers" />
      </el-col>
      <el-col :xs="{ span: '22' ,push : '1' ,pull : '1' }" :sm="{ span: '20' ,push : '2' ,pull : '2' }" :md="{ span: '18' ,push : '3' ,pull : '3' }" :lg="{ span: '18' ,push : '3' ,pull : '3' }">
        <el-row>
          <el-col :sm="{ span: '15' }" :md="{ span: '15' }" :lg="{ span: '15' }">
            <!-- 图片列表 -->
            <Images :items="item.images" />
            <!-- 商品内容 -->
            <MyContent :item="item" :comments="comments" :praises="praises" />
          </el-col>
          <el-col :xs="0" :sm="{ span: '8', offset: '1' }" :md="{ span: '8', offset: '1' }" :lg="{ span: '8', offset: '1' }">
            <!-- 商品信息 -->
            <Infos :item="item" :qrcode="qrcode" />
            <!-- 其他商品 -->
            <Top10 :items="alike" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Sellers from '~/components/store_detail/Sellers'
import Images from '~/components/store_detail/Images'
import Content from '~/components/store_detail/Content'
import Infos from '~/components/store_detail/Infos'
import MyTop10 from '~/components/store_detail/Top10'

export default {
  validate ({ params }) {
    return (!!params.id && !Object.is(Number(params.id), NaN))
  },
  asyncData ({ store, params, error }) {
    return store.dispatch('store/REQ_DETAIL', params.id).catch((data) => {
      error({
        statusCode: 404,
        message: data.info
      })
    })
  },
  fetch ({ store, params }) {
    return Promise.all([
      store.dispatch('store/REQ_SELLERS', params.id),
      store.dispatch('store/REQ_COMMENT', params.id, 1),
      store.dispatch('store/REQ_PRAISE', params.id),
      store.dispatch('store/REQ_ALIKE', params.id)
    ])
  },
  head () {
    return {
      title: this.item.title,
      meta: [
      { hid: 'description', name: 'description', content: this.item.abstract },
      { name: 'keywords', content: 'asd' }
      ]
    }
  },
  computed: {
    item () {
      return this.$store.state.store.detail.items
    },
    sellers () {
      return this.$store.state.store.detail.sellers
    },
    comments () {
      return this.$store.state.store.detail.comments
    },
    praises () {
      return this.$store.state.store.detail.praises
    },
    alike () {
      return this.$store.state.store.detail.alike
    },
    qrcode () {
      return {
        value: 'http://hs.ontheroadstore.com/Portal/HsArticle/index/id/' + this.item.id + '.html',
        ec_level: 'M',
        type: 'png',
        size: 5
      }
    }
  },
  destroyed () {
    // this.$store.commit('store/CLEAR_DETAIL')
  },
  components: {
    'Sellers': Sellers,
    'Images': Images,
    'MyContent': Content,
    'Infos': Infos,
    'Top10': MyTop10
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  z-index: 10;
  .page-bg {
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    border: none;
    height: 100%;
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
  .store-detail {
    position: relative;
    z-index: 10;
  }
}
</style>
