<template>
  <!-- article start /components/index/article.vue -->
  <section class="article-items">
    <nuxt-link to="/" class="title"><h2>文章</h2></nuxt-link>
    <el-row>
      <el-col :span="6" class="item" v-for="item in article">
        <nuxt-link :to="item.url">
          <div class="item-image" v-lazy:background-image.container="item.src"></div>
          <div class="item-title">
            <h4>aaaa</h4>
            <p>asd</p>
          </div>
        </nuxt-link>
      </el-col>
<!--       <el-col :span="6" class="item">
        <nuxt-link to="/">bbb</nuxt-link>
      </el-col>
      <el-col :span="6" class="item">
        <nuxt-link to="/">ccc</nuxt-link>
      </el-col>
      <el-col :span="6" class="item">
        <nuxt-link to="/">ddd</nuxt-link>
      </el-col> -->
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
      h2 {
        margin: 0;
      }
    }
    .el-row {
      margin-left: -12px;
      margin-right: -12px;
      .item {
        padding-left: 12px;
        padding-right: 12px;
        a {
          .item-image {
            border-radius: inherit;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: rgba(120,120,120,.2);
            border-radius: 0.2rem;
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
            h4 {
              margin: .5em 0;
              // margin-top: 1em;
            }
            p {
              margin: 0;
              margin-bottom: 1em;
            }
          }
        }
      }
    }
  }
</style>
