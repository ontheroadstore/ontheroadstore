<template>
  <div class="container">
    <div class="page-bg" v-lazy:background-image="detail.cover"></div>
    <el-row class="store-detail">
      <!-- 头部卖家信息 -->
      <el-col :xs="{ span: '0' }" :sm="{ span: '20' ,push : '2' ,pull : '2' }" :md="{ span: '18' ,push : '3' ,pull : '3' }" :lg="{ span: '18' ,push : '3' ,pull : '3' }">
        <Sellers :author="sellersAuthor" :items="sellersItems" />
      </el-col>
      <el-col :xs="{ span: '22' ,push : '1' ,pull : '1' }" :sm="{ span: '20' ,push : '2' ,pull : '2' }" :md="{ span: '18' ,push : '3' ,pull : '3' }" :lg="{ span: '18' ,push : '3' ,pull : '3' }">
        <el-row>
          <el-col :sm="{ span: '15' }" :md="{ span: '15' }" :lg="{ span: '15' }">
            <!-- 图片列表 -->
            <Images :items="imagesItems" />
            <!-- 商品内容 -->
            <MyContent :item="detail" />
          </el-col>
          <el-col :xs="0" :sm="{ span: '8', offset: '1' }" :md="{ span: '8', offset: '1' }" :lg="{ span: '8', offset: '1' }">
            <!-- 商品信息 -->
            <Infos :item="infos" :qrcode="qrcode" />
            <!-- 其他商品 -->
            <Top10 />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import Sellers from '~components/store_detail/Sellers'
  import Images from '~components/store_detail/Images'
  import Content from '~components/store_detail/Content'
  import Infos from '~components/store_detail/Infos'
  import MyTop10 from '~components/store_detail/Top10'

  export default {
    validate ({ params }) {
      return (!!params.id && !Object.is(Number(params.id), NaN))
    },
    fetch ({ store, params }) {
      return Promise.all([store.dispatch('STORE_DETAIL_INIT', params.id)])
    },
    computed: mapState({
      detail: store => store.Store.detail,
      sellersAuthor: store => store.Store.detail.sellers.author,
      sellersItems: store => store.Store.detail.sellers.items,
      infos: store => store.Store.detail.infos,
      imagesItems: store => store.Store.detail.images,
      qrcode: store => {
        return {
          value: 'http://hs.ontheroadstore.com/Portal/HsArticle/index/id/9964.html',
          ec_level: 'M',
          type: 'png',
          size: 5
        }
      }
    }),
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
