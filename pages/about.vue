<template>
  <div class="container">
    <div class="about">
      <el-row class="block-one">
        <el-col :span="6" class="title">
          <img v-lazy="'/flag_min.gif'" width="200" height="56">
        </el-col>
        <el-col :span="18" class="image">
          <img v-lazy="'/about_01.jpg'" alt="我们生来就是孤独">
        </el-col>
      </el-row>
      <el-row class="block-two">
        <el-col :span="24" class="title">
          我们是谁
        </el-col>
        <el-col :span="8">
          <h3>公路商店</h3>
          <p>一些小众自我的东西往往会成为切入主流的创作者成为主流，我们探索所有年轻人最野生最自发的尚未被商业力量全面污染的亚文化以及那些美好而操蛋的东西。</p>
        </el-col>
        <el-col :span="8">
          <h3>黑市</h3>
          <p>线上最大的亚文化市集。贩售、分享见不得光的狠货以及美好而操蛋的东西</p>
        </el-col>
        <el-col :span="8">
          <h3>疯狂店员</h3>
          <p>满足青年个性文化需求与消费需求，持续提供先锋性的价值产物通过CTC电商平台场景，以消费定义潮流符号，引导价值认同者共路而行</p>
        </el-col>
      </el-row>
      <el-row class="block-three">
        <el-col :span="24">
          <img src="/about_02.jpg">
        </el-col>
      </el-row>
      <el-row class="block-four">
        <el-col :span="12" class="other">
          <h2>我们还做了什么？</h2>
          <dl>
            <dt>新闻</dt>
            <dd><a href="http://36kr.com/p/5043762.html" target="_blank" rel="nofollow">肆无忌惮的“公路商店”</a></dd>
            <dd><a href="http://www.cyzone.cn/a/20150624/276576.html" target="_blank" rel="nofollow">口味略重的「公路商店」，所有生活气息浓郁的产品请绕行</a></dd>
            <dd><a href="https://mp.weixin.qq.com/s?__biz=MjM5ODc5MDM2MA==&mid=2651685093&idx=1&sn=97210e16cfefd08afaea3141cf40bfcd&chksm=bd3c75528a4bfc44c1ad4f007b611cc42bfc4541b71a6fb2edfae3607aa186a96622661982d4&mpshare=1&scene=1&srcid=1110wBRKRxsiG56SlBmWXUui#rd" target="_blank" rel="nofollow">我们要上天了！</a></dd>
            <dt>活动</dt>
            <dd><a href="http://www.cyzone.cn/a/20150624/276576.html" target="_blank" rel="nofollow">轮滑活动</a></dd>
            <dd><a href="http://www.cyzone.cn/a/20150624/276576.html" target="_blank" rel="nofollow">绝对夜计划</a></dd>
            <dd><a href="http://www.cyzone.cn/a/20150624/276576.html" target="_blank" rel="nofollow">老公和小白</a></dd>
          </dl>
        </el-col>
        <el-col :span="12" class="brand">
          <h2>我们的平台</h2>
          <div class="logo">
            <a href="http://www.ontheroadstore.com/"><img src="/ontheroadstore.png"></a>
          </div>
          <div class="logo">
            <a href="http://hs.ontheroadstore.com/"><img src="/heishi.png"></a>
          </div>
        </el-col>
      </el-row>
      <el-row class="block-five">
        <el-col :span="24">
          <baidu-map class="map" :theme="mapTheme" :center="{lng: 116.537722, lat: 39.921122}" :zoom="13" :scroll-wheel-zoom="true">
            <bm-view style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px"></bm-view>
          </baidu-map>
          <div class="cover">
            <address>
              <p><img src="/about_03.png" /></p>
              <p>北京 朝阳区 朝阳路 兴隆庄甲8号B座4层</p>
              <p><a href="tel:01056098767" class="tel">010-56098767</a></p>
              <p><a href="email:hz@ontheroadstore.com" class="email">商务合作：hz@ontheroadstore.com</a></p>
            </address>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      mapTheme: [{
        'featureType': 'all',
        'elementType': 'geometry',
        'stylers': {
          'hue': '#904502',
          'saturation': 50
        }
      }]
    }
  },
  methods: {
    infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    }
  },
  head () {
    return {
      title: `关于我们`
    }
  }
}
</script>

<style lang="scss" scoped>

.about {
  background-color: #323232;
  z-index: -20;
  .block-one {
    .el-col {
      height: 410px;
    }
    .title {
      position: relative;
      img {
        z-index: 20;
        position: absolute;
        display: block;
        top: 50%;
        right: -100px;
        margin-top: -28px;
      }
    }
    .image {
      position: absolute;
      top: 0;
      height: 100%;
      right: 0;
      background: #dddddd;
      overflow: hidden;
      img {
        max-height: 100%;
        opacity: 0.5;
        filter: grayscale(1);
      }
    }
  }
  .block-two {
    background-color: #1b1b1b;
    color: #fff;
    padding: 0 2rem;
    .el-col {
      height: 210px;
      text-align: center;
      padding: 0 2rem;
      &.title {
        line-height: 80px;
        height: 80px;
        font-size: 24px;
      }
      h3 {
        margin: 0;
        font-size: 18px;
        color: rgba(19, 206, 102, 0.8);
      }
      p {
        color: #ddd;
        line-height: 2em;
        text-indent: 2em;
      }
    }
  }
  .block-three {
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .block-four {
    .el-col {
      padding: 2rem;
      color: #fff;
      a {
        color: #8c8c8c;
      }
      h2 {
        color: #fff;
        margin: 0;
      }
    }
    .brand {
      background-color: #141414;
      .logo {
        width: 50%;
        float: left;
        position: relative;
        height: 100%;
        margin: 2rem 0;
        a {
          display: table;
          margin: 0 auto;
          img {
            width: auto;
            max-height: 100px;
            opacity: 0.5;
            display: block;
            filter: grayscale(1);
            transition: opacity 0.3s cubic-bezier(0.55, 0, 0.1, 1);
            animation: fadeInScale 0.3s forwards;
          }
        }
      }
    }
    .other {
      background-color: #1d1d1d;
      dl {
        margin: 1rem 0 0 0;
        dt {
          font-size: 18px;
          padding: .5rem 0;
        }
        dd {
          font-size: 14px;
          margin: 0;
          padding: .5rem 0;
        }
      }
    }
  }
  .block-five {
    position: relative;
    height: 425px;
    background-color: #ddd;
    .el-col {
      .map {
        width: 100%;
        height: 425px;
      }
      .cover {
        position: absolute;
        height: 100%;
        width: 50%;
        top: 0;
        left: 0;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, transparent 100%);
        address {
          position: absolute;
          top: 10%;
          left: 10%;
          color: #fff;
          font-style: normal;
          font-size: 16px;
          // text-shadow: 1px 1px 1px #333;
          .email {
            padding: .2rem;
            background-color: #fff;
            color: rgba(19, 206, 102, 1);
          }
        }
      }
    }
  }
}
</style>
