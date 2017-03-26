<template>
  <div class="content">
    <div class="page-bg" v-lazy:background-image="banner[1]"></div>
    <el-row class="store-detail">
      <!-- 头部卖家信息 -->
      <el-col :xs="{ span: '0' }" :sm="{ span: '20' ,push : '2' ,pull : '2' }" :md="{ span: '20' ,push : '2' ,pull : '2' }" :lg="{ span: '20' ,push : '2' ,pull : '2' }">
        <Sellers />
      </el-col>
      <el-col :xs="{ span: '20' ,push : '2' ,pull : '2' }" :sm="{ span: '20' ,push : '2' ,pull : '2' }" :md="{ span: '20' ,push : '2' ,pull : '2' }" :lg="{ span: '20' ,push : '2' ,pull : '2' }">
        <el-row>
          <el-col :sm="{ span: '15' }" :md="{ span: '15' }" :lg="{ span: '15' }">
            <!-- 图片列表 -->
            <Images />
            <!-- 商品内容 -->
            <MyContent />
          </el-col>
          <el-col :xs="0" :sm="{ span: '8', offset: '1' }" :md="{ span: '8', offset: '1' }" :lg="{ span: '8', offset: '1' }">
            <!-- 商品信息 -->
            <Infos />
            <!-- 其他商品 -->
            <Top10 />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import Sellers from '~components/store_detail/Sellers'
  import Images from '~components/store_detail/Images'
  import Content from '~components/store_detail/Content'
  import Infos from '~components/store_detail/Infos'
  import Top10 from '~components/store_detail/Top10'

  export default {
    name: 'store_detail',
    data () {
      return {
        banner: [{'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'}]
      }
    },
    components: {
      'Sellers': Sellers,
      'Images': Images,
      'MyContent': Content,
      'Infos': Infos,
      'Top10': Top10
    },
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    mounted () {
    },
    head: {
      titleTemplate: '测试标题'
    }
  }
</script>
<style lang="scss" scoped>
  .content {
    position: relative;
    z-index: 10;
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
    .store-detail {
      position: relative;
      z-index: 10;
    }
  }
</style>
