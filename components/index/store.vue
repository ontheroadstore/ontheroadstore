<template>
  <!-- store start /components/index/store.vue -->
  <section class="store-items">
    <nuxt-link to="/store" class="title"><h2>黑市<i class="el-icon-more"></i></h2></nuxt-link>
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" class="item" v-for="item in store">
        <nuxt-link to="/" class="el-row">
          <el-col :span="12" class="item-image" v-lazy:background-image.container="item.src"></el-col>
          <el-col :span="12" class="item-title">
            <h4>拥有黄金牙膏，成为贫民窟的百万富翁</h4>
            <p>拥有黄金牙膏，成为贫民窟的百万富翁拥有黄金牙膏，成为贫民窟的百万富翁拥有黄金牙膏，成为贫民窟的百万富翁</p>
            <div class="item-info">
              <span class="view"><i class="el-icon-edit"></i> 111111</span>
              <span class="sales"><i class="el-icon-edit"></i> 123123</span>
            </div>
          </el-col>
        </nuxt-link>
      </el-col>
      <el-col :span="24" class="loading"><el-button :loading="false">加载更多</el-button></el-col>
    </el-row>
  </section>
  <!-- store end -->
</template>
<script>
  export default {
    data () {
      return {
        store: [{'url': '/', 'src': 'http://img8.ontheroadstore.com/upload/170303/fac75bbcdce87ade74b4a9d6c7795028.jpg@640w_1l'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'},
        {'url': '/', 'src': 'http://img8.ontheroadstore.com/upload/170303/fac75bbcdce87ade74b4a9d6c7795028.jpg@640w_1l'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://img8.ontheroadstore.com/upload/170303/fac75bbcdce87ade74b4a9d6c7795028.jpg@640w_1l'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'}]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .store-items {
    padding-bottom: 5px;
    .title {
      display: block;
      padding: 1rem 0;
      &:hover {
        h2 {
          i {
            color: #6cc788;
            transition-property: color;
            transition-duration: 0.3s;
            transition-timing-function: ease;
          }
        }
      }
      h2 {
        margin: 0;
        position: relative;
        i {
          position: absolute;
          right: 0;
        }
      }
    }
    & > .el-row {
      margin-left: -12px;
      margin-right: -12px;
      .item {
        padding-left: 12px;
        padding-right: 12px;
        border-radius: 5px;
        transition-property: background-color;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        &:hover {
          background-color: rgba(120, 130, 140, 0.13);
          a {
            .item-image {
              &:after {
                background-color: rgba(0, 0, 0, 0.2);
              }
            }
            .item-title {
              opacity: 1;
              text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1), 0 -2px 2px rgba(0, 0, 0, 0.1);
            }
          }
        }
        a {
          display: block;
          border-bottom: 1px solid rgba(120, 130, 140, 0.13);
          padding-top: 1rem;
          padding-bottom: 1rem;
          position: relative;
          .item-image {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: rgba(120,120,120,.2);
            border-radius: 3px;
            &:after {
              content: '';
              display: block;
              padding-bottom: 60%;
            }
          }
          .item-title {
            box-sizing: border-box;
            padding-left: 12px;
            opacity: .9;
            h4 {
              margin: 0;
            }
            p {
              margin: 0;
              margin-top: .5rem;
              line-height: 1.4em;
              height: 2.8em;
              overflow: hidden;
              opacity: .6;
            }
            .item-info {
              position: absolute;
              right: 0;
              bottom: 1rem;
              line-height: 0;
              opacity: .5;
              .view {
                margin-right: 1rem;
              }
            }
          }
        }
      }
    }
    .loading {
      padding: 1rem;
      text-align: center;
    }
  }
</style>
