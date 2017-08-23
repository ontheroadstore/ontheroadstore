<template>
  <el-row class="detail-info">
    <el-col class="title"><h1>{{ item.title }}</h1></el-col>
    <el-col class="time">
      <span><i class="el-icon-time"></i>{{ item.date }}</span>
      <span><i class="el-icon-view"></i>{{ item.view }}</span>
    </el-col>
    <el-col :span="24">
      <el-row>
        <el-col class="tags">
          <nuxt-link to="/" class="item" v-for="item in item.tags" :key="item"># {{ item }}</nuxt-link>
        </el-col>
        <el-col :span="10" class="qrcode">
          <qrCode :value="qrcode.value" :ec_level="qrcode.level" :type="qrcode.type" :size="qrcode.size" />
        </el-col>
        <el-col :span="14" class="price">
          <h2><i>￥</i><span>{{ price }}</span></h2>
          <h3>运费：<i>￥</i><span>{{ item.fare }}</span></h3>
          <h4>库存：<span>{{ item.remain }}</span></h4>
          <!-- <h4>销量：{{ item.sales }}</h4> -->
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" class="alert">
      <el-alert title="用微信扫二维码进入黑市购买" type="info" :closable="false" show-icon />
    </el-col>
  </el-row>
</template>
<script>
  import qrCode from '~/components/Qrcode'

  export default {
    props: {
      qrcode: {
        type: Object,
        default: () => {
          return {
            value: 'http://hs.ontheroadstore.com/Portal/HsArticle/index/id/' + this.item.id + '.html',
            ec_level: 'M',
            type: 'png',
            size: 5
          }
        }
      },
      item: {
        type: Object
      }
    },
    computed: {
      price () {
        if (this.item.price.length === 1) {
          return this.item.price[0]
        } else {
          return this.item.price[0] + '~' + this.item.price[1]
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
          i {
            margin-right: .5rem;
          }
        }
      }
      &.tags {
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
        padding: .2rem;
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
