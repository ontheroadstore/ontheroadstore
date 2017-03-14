<template>
  <el-row class="detail-info">
    <el-col class="title"><h1>让“瑞士军刀唇膏”润滑你的一切。让“瑞士军刀唇膏”润滑你的一切。</h1></el-col>
    <el-col class="time">
      <span><i class="el-icon-time"></i> 2017/02/02</span>
      <span><i class="el-icon-view"></i> 13234</span>
    </el-col>
    <el-col :span="24">
      <el-row>
        <el-col class="tags">
          <nuxt-link to="/" class="item">#美好而操蛋的东西</nuxt-link>
          <nuxt-link to="/" class="item">#淘宝没有的</nuxt-link>
        </el-col>
        <el-col :span="10" class="qrcode">
          <qrCode :value="qrcode.value" :ec_level="qrcode.level" :type="qrcode.type" :size="qrcode.size" />
        </el-col>
        <el-col :span="14" class="price">
          <h2><i>￥</i><span>199.00</span></h2>
          <h3>运费：<i>￥</i><span>11</span></h3>
          <h4>库存：<span>2</span></h4>
          <h4>销量：22</h4>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" class="alert">
      <el-alert title="用微信扫二维码进入黑市购买" type="info" :closable="false" show-icon />
    </el-col>
  </el-row>
</template>
<script>
  import qrCode from '~components/Qrcode'

  export default {
    data () {
      return {
        qrcode: {
          value: 'http://hs.ontheroadstore.com/Portal/HsArticle/index/id/9964.html',
          ec_level: 'M',
          type: 'png',
          size: 5
        }
      }
    },
    components: {
      'qrCode': qrCode
    }
  }
</script>
<style lang="scss" scoped>
  .detail-info {
    padding-top: 1rem;
    .el-col {
      padding-bottom: 1rem;
      &:last-child {
        padding-bottom: 0;
      }
      &.title {
        h1 {
          margin: 0;
        }
      }
      &.time {
        span {
          margin-right: 1rem;
        }
      }
      &.tags {
        // margin-bottom: 12px;
        .item {
          background-color: #68be8c;
          color: #fff;
          display: inline-block;
          margin-left: .5rem;
          padding: .4rem;
          font-size: 14px;
          &:first-child {
            margin-left: 0;
          }
        }
      }
      &.qrcode {
        background-color: #f2f2f2;
        border: 2px solid #68be8c;
        padding: 1rem;
      }
      &.price {
        padding-left: 1rem;
        h2, h3, h4, p {
          margin: 0 0 1em 0;
          i {
            font-style: normal;
          }
        }
        h3 {
          opacity: .6;
        }
        h4 {
          opacity: .8;
        }
        p {
          margin-bottom: 0;
          span {
            margin-right: 1rem;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
