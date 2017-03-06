<template>
  <!-- article start /components/index/article.vue -->
  <section class="article-items">
    <nuxt-link to="/" class="title"><h2>文章<i class="el-icon-more"></i></h2></nuxt-link>
    <el-row>
      <el-col :span="6" class="item" v-for="item in article">
        <nuxt-link :to="item.url">
          <div class="item-image" v-lazy:background-image.container="item.src">
            <span class="item-time">2017/11/02</span>
          </div>
          <div class="item-title">
            <h4>aaaa</h4>
            <p>asd</p>
          </div>
        </nuxt-link>
      </el-col>
    </el-row>
  </section>
  <!-- article end -->
</template>
<script>
  export default {
    data () {
      return {
        article: [{'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'}]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .article-items {
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
    .el-row {
      margin-left: -12px;
      margin-right: -12px;
      .item {
        padding-left: 12px;
        padding-right: 12px;
        a {
          display: block;
          &:hover {
            .item-image {
              .item-time {
                background-color: #6cc788;
                transition-property: background-color;
                transition-duration: 0.3s;
                transition-timing-function: ease;
              }
              &:after {
                transition-property: background-color;
                transition-duration: 0.3s;
                transition-timing-function: ease;
                background-color: rgba(0, 0, 0, 0.2);
              }
            }
            .item-title {
              opacity: 1;
              text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1), 0 -2px 2px rgba(0, 0, 0, 0.1);
            }
          }
          .item-image {
            border-radius: inherit;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: rgba(120,120,120,.2);
            border-radius: 0.2rem;
            position: relative;
            .item-time {
              position: absolute;
              bottom: .5rem;
              right: .5rem;
              padding: .4rem;
              line-height: 1em;
              height: 1em;
              background-color: #767a7e;
              border-radius: 0.2rem;
              color: #fff;
              font-size:12px;
              // opacity: .8;
            }
            &:after {
              content: '';
              display: block;
              padding-top: 100%;
            }
          }
          .item-title {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            opacity: .9;
            h4 {
              margin: .5em 0;
              // margin-top: 1em;
            }
            p {
              opacity: .6;
              margin: 0;
              margin-bottom: 1em;
            }
          }
        }
      }
    }
  }
</style>
