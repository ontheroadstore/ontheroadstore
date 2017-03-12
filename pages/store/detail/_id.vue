<template>
  <section class="content">
    <div class="pos-rlt">
      <div class="page-bg" v-lazy:background-image="banner[1]"></div>
    </div>
    <div class="store-detail">
      <!-- 头部卖家信息 -->
      <Sellers />
      <el-row>
        <el-col :span="16">
          <!-- 图片列表 -->
          <Images />
          <!-- 商品内容 -->
          <MyContent />
        </el-col>
        <el-col :span="8">
          <!-- 商品信息 -->
          <Infos />
          <!-- 其他商品 -->
          <Top10 />
        </el-col>
      </el-row>
    </div>
  </section>
</template>
<script>
  import Sellers from '~components/store_detail/Sellers'
  import Images from '~components/store_detail/Images'
  import Content from '~components/store_detail/Content'
  import Infos from '~components/store_detail/Infos'
  import Top10 from '~components/store_detail/Top10'

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
    .pos-rlt {
      position: relative;
      z-index: 1;
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
    }
    .store-detail {
      position: relative;
      z-index: 10;
      & > .el-row {
        & > .el-col {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          &.el-col-16 {
            border-right: 1px solid rgba(120,130,140,.13);
            &:after {
              content: '';
              display: block;
              padding-top: 50%;
            }
          }
        }
      }
    }
  }
</style>
