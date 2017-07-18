<template>
  <div class="container">
    <div class="about">
      <el-row class="block-one">
        <el-col :span="6" class="title">
          <img src="/flag_min.gif" width="200" height="56">
        </el-col>
        <el-col :span="18" class="image">
          <img src="/about_01.jpg" alt="我们生来就是孤独">
        </el-col>
      </el-row>
      <el-row class="block-two">
        <el-col :span="24" class="title">
          我们是谁
        </el-col>
        <el-col :span="8">
          <h3>公路商店</h3>
          <p>是否是对方的身份</p>
        </el-col>
        <el-col :span="8">
          <h3>黑市</h3>
          <p>青年文化内容电商平台</p>
        </el-col>
        <el-col :span="8">
          asdfsdf
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
            <dd><nuxt-link to="http://36kr.com/p/5043762.html">肆无忌惮的“公路商店”</nuxt-link></dd>
            <dd><nuxt-link to="http://www.cyzone.cn/a/20150624/276576.html">口味略重的「公路商店」，所有生活气息浓郁的产品请绕行</nuxt-link></dd>
            <dd><nuxt-link to="https://mp.weixin.qq.com/s?__biz=MjM5ODc5MDM2MA==&mid=2651685093&idx=1&sn=97210e16cfefd08afaea3141cf40bfcd&chksm=bd3c75528a4bfc44c1ad4f007b611cc42bfc4541b71a6fb2edfae3607aa186a96622661982d4&mpshare=1&scene=1&srcid=1110wBRKRxsiG56SlBmWXUui#rd">我们要上天了！</nuxt-link></dd>
            <dt>活动</dt>
            <dd><nuxt-link to="http://www.cyzone.cn/a/20150624/276576.html">轮滑活动</nuxt-link></dd>
            <dd><nuxt-link to="http://www.cyzone.cn/a/20150624/276576.html">绝对夜计划</nuxt-link></dd>
            <dd><nuxt-link to="http://www.cyzone.cn/a/20150624/276576.html">老公和小白</nuxt-link></dd>
          </dl>
        </el-col>
        <el-col :span="12" class="brand">
          <h2>我们的平台</h2>
          <div class="logo">
            <nuxt-link to="/"><img src="http://thegoodpeoplerecords.com/wp-content/uploads/2015/03/ubisoft-logo2.png"></nuxt-link>
          </div>
          <div class="logo">
            <nuxt-link to="/"><img src="http://thegoodpeoplerecords.com/wp-content/uploads/2015/03/ubisoft-logo2.png"></nuxt-link>
          </div>
        </el-col>
      </el-row>
      <el-row class="block-five">
        <el-col :span="24">
          <baidu-map class="map" :theme="mapTheme">
            <bm-view style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px"></bm-view>
          </baidu-map>
          <div class="cover">
            <address>
              <p><img src="/about_03.png" /></p>
              <p>CALL ME</p>
              <p><a href="tel:12123" class="tel">010123123123</a></p>
              <p><a href="aaaa@ontheroadstore.com" class="email">aaaa@ontheroadstore.com</a></p>
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
      .el-col {
        height: 210px;
        text-align: center;
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
            .email {
              color: rgba(19, 206, 102, 0.8);
            }
          }
        }
      }
    }
  }
</style>
