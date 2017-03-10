<template>
  <section class="content">
    <div class="pos-rlt">
      <div class="page-bg" style="background-image: url('http://flatfull.com/themes/pulse/images/b0.jpg')"></div>
    </div>
    <div class="store-detail">
      <el-row class="detail-user-info">
        <el-col :span="8">
          <nuxt-link to="/" class="el-row">
            <el-col :span="8" class="avatar" style="background-image: url('http://wx.qlogo.cn/mmopen/BA8GZZ2EGwWxO6kHR4SeElLhhzIBzdYqf6Pqhnrg7NemZNzsO9tVM98J0GhEqHH3Zan5mNWwUibjXhQWpIu4zWKHxUSSIIf7P/96')"></el-col>
            <el-col :span="16" class="nickname">
              <span><label>卖家：</label>最猛是我飞机</span>
            </el-col>
          </nuxt-link>
        </el-col>
        <el-col :span="16">
          <el-row class="detail-user-items">
            <el-col :span="6" class="item">
              <nuxt-link to="/">
                <div class="item-image" style="background-image: url('http://flatfull.com/themes/pulse/images/b0.jpg')"></div>
                <div class="item-title">最猛是我飞机</div>
              </nuxt-link>
            </el-col>
            <el-col :span="6" class="item">
              <nuxt-link to="/">
                <div class="item-image" style="background-image: url('http://flatfull.com/themes/pulse/images/b0.jpg')"></div>
                <div class="item-title">最猛是我飞机</div>
              </nuxt-link>
            </el-col>
            <el-col :span="6" class="item">
              <nuxt-link to="/">
                <div class="item-image" style="background-image: url('http://flatfull.com/themes/pulse/images/b0.jpg')"></div>
                <div class="item-title">最猛是我飞机</div>
              </nuxt-link>
            </el-col>
            <el-col :span="6" class="item">
              <nuxt-link to="/">
                <div class="item-image" style="background-image: url('http://flatfull.com/themes/pulse/images/b0.jpg')"></div>
                <div class="item-title">最猛是我飞机</div>
              </nuxt-link>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          asd
        </el-col>
        <el-col :span="8">
          <div class="detail-info">
            <h1 class="title">让“瑞士军刀唇膏”润滑你的一切。</h1>
            <div class="tags">
              <nuxt-link to="/" class="item">#美好而操蛋的东西</nuxt-link>
              <nuxt-link to="/" class="item">#淘宝没有的</nuxt-link>
            </div>
            <div class="qrcode">
              生成二维码
            </div>
            <div class="price">
              <span class="left"><h2>￥199.00</h2></span>
              <span class="right"><h3>运费 ￥11</h3></span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>
<script>
  // import VueQArt from 'vue-qart'
  export default {
    data () {
      return {
        qrcode: {
          value: 'https://www.baidu.com',
          imagePath: '~/assets/logo.png',
          filter: 'color'
        }
      }
    },
    // directives: {
    //   VueQArt
    // },
    validate ({ params }) {
      return /^\d+$/.test(params.id)
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
        height: 50vh;
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
          }
        }
      }
      .detail-user-info {
        padding: 1.5rem 0;
        border-bottom: 1px solid rgba(120,130,140,.13);
        position: relative;
        a {
          display: block;
          .avatar {
            display: block;
            overflow: hidden;
            background-size: cover;
            border-radius: .2rem;
            &:after {
              content: '';
              display: block;
              padding-top: 100%;
            }
          }
          .nickname {
            padding: 0 1rem;
            h3 {
              margin: 0;
            }
          }
        }
        .detail-user-items {
          margin-left: -12px;
          margin-right: -12px;
          .item {
            padding-left: 12px;
            padding-right: 12px;
            position: relative;
            a {
              display: block;
              .item-image {
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                background-color: rgba(120, 120, 120, 0.2);
                border-radius: 3px;
                &:after {
                  content: '';
                  display: block;
                  padding-bottom: 56%;
                }
              }
              .item-title {
                position: absolute;
                bottom: -2em;
                line-height: 1em;
                font-size: 14px;
              }
            }
          }
        }
      }
      .detail-info {
        padding: 12px 0;
        .title {
          margin-top: 0;
          margin-bottom: 12px;
        }
        .tags {
          margin-bottom: 12px;
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
        .price {
          span {
            display: inline-block;
            width: 50%;
            h2, h3 {
              margin: 0;
            }
            &.left {
              text-align: left;
            }
            &.right {
              text-align: right;
            }
          }
        }
      }
    }
  }
</style>
