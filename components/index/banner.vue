<template>
  <!-- banner start /components/index/banner.vue -->
  <section class="banner-items">
    <el-row>
      <el-col :span="12">
        <el-carousel height="100%" arrow="always">
          <el-carousel-item class="item" v-for="item in banner" v-lazy:background-image.container="item.src">
            <nuxt-link :to="item.url" class="item-title">
              <h3>标题标题标题标题标题标题标题标题标题a</h3>
              <p>{{ item.src }}</p>
            </nuxt-link>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col class="item" :span="6" v-for="item in banner" v-lazy:background-image.container="item.src">
        <nuxt-link :to="item.url" class="item-title">
          <h3>标题标题标题标题标题标题标题标题标题</h3>
          <p>SummerellaSummerellaSummerellaSummerellaSummerella</p>
        </nuxt-link>
        <div class="item-shelter"></div>
      </el-col>
    </el-row>
  </section>
  <!-- banner end -->
</template>
<script>
  export default {
    data () {
      return {
        banner: [{'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'}]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .banner-items {
    .el-row {
      .el-col {
        position: relative;
        &:after {
          content: '';
          display: block;
          padding-top: 100%;
        }
        &.el-col-12 {
          .el-carousel {
            position: absolute;
            width: 100%;
            height: 100%;
            .item {
              word-wrap: break-word;
              word-break: normal;
              border-radius: inherit;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: 50% 50%;
              background-color: rgba(120,120,120,.2);
              a{
                &:after {
                  content: '';
                  background-color: rgba(120, 120, 120, 0.1);
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  position: absolute;
                }
              }
              .item-title {
                position: absolute;
                box-sizing: border-box;
                padding: 1rem;
                width: 100%;
                height: 100%;
                h3 {
                  margin: 0;
                  color: #fff;
                  text-shadow: 0 1px 2px rgba(0,0,0,.1), 0 -1px 2px rgba(0,0,0,.1);
                }
                p {
                  color: #fff;
                  opacity: .6;
                  text-shadow: 0 1px 2px rgba(0,0,0,.1), 0 -1px 2px rgba(0,0,0,.1);
                  margin: 1em 0;
                }
              }
            }
          }
        }
        &.el-col-6 {
          &.item {
            position: relative;
            word-wrap: break-word;
            word-break: normal;
            border-radius: inherit;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: rgba(120,120,120,.2);
            &:after {
              background-color: rgba(120, 120, 120, 0.1);
            }
            .item-title {
              position: absolute;
              box-sizing: border-box;
              padding: 1rem;
              width: 100%;
              height: 100%;
              h3 {
                margin: 0;
                color: #fff;
                text-shadow: 0 1px 2px rgba(0,0,0,.1), 0 -1px 2px rgba(0,0,0,.1);
              }
              p {
                color: #fff;
                opacity: .6;
                text-shadow: 0 1px 2px rgba(0,0,0,.1), 0 -1px 2px rgba(0,0,0,.1);
                margin: 1em 0;
              }
            }
          }
        }
      }
    }
  }
</style>
