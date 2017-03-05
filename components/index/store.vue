<template>
  <!-- store start /components/index/store.vue -->
  <section class="store-items">
    <nuxt-link to="/store" class="title"><h2>黑市</h2></nuxt-link>
    <el-row>
      <el-col :span="12" class="item" v-for="item in store">
        <nuxt-link to="/">
          <el-row>
            <el-col :span="8" class="item-image" v-lazy:background-image.container="item.src"></el-col>
            <el-col :span="14" class="item-title">拥有黄金牙膏，成为贫民窟的百万富翁</el-col>
          </el-row>
        </nuxt-link>
      </el-col>
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
      h2 {
        margin: 0;
      }
    }
    & > .el-row {
      margin-left: -12px;
      margin-right: -12px;
      .item {
        padding-left: 12px;
        padding-right: 12px;
        border-radius: 5px;
        &:hover {
          background-color: rgba(120, 130, 140, 0.13);
        }
        a {
          display: block;
          border-bottom: 1px solid rgba(120, 130, 140, 0.13);
          padding-top: 1rem;
          padding-bottom: 1rem;
          .el-row {
            .item-image {
              float: left;
              width: 40%;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: 50% 50%;
              background-color: rgba(120,120,120,.2);
              border-radius: 3px;
              &:after {
                content: '';
                display: block;
                padding-bottom: 56.25%;
              }
            }
            .item-title {
              width: 60%;
              float: left;
              box-sizing: border-box;
              padding-left: 12px;
            }
          }
        }
      }
    }
  }
</style>
