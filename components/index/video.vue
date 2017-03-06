<template>
  <!-- video start /components/index/video.vue -->
  <section class="video-items">
    <nuxt-link to="/" class="title"><h2>视频<i class="el-icon-more"></i></h2></nuxt-link>
    <el-row>
      <el-col :span="8" class="item" v-for="item in video">
        <nuxt-link :to="item.url">
          <div class="item-image" v-lazy:background-image.container="item.src">
            <span class="item-time">混蛋出差</span>
          </div>
          <div class="item-title">
            <h3>老公带着小姨子跑路了</h3>
            <p>黑市一律全部1折统统甩货全部1折</p>
          </div>
        </nuxt-link>
      </el-col>
    </el-row>
  </section>
  <!-- video end -->
</template>
<script>
  export default {
    data () {
      return {
        video: [{'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'}]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .video-items {
    .title {
      display: block;
      padding: 1rem 0;
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
              background-color: #767a7e;
              border-radius: 0.2rem;
              color: #fff;
              font-size:12px;
              opacity: .8;
            }
            &:after {
              content: '';
              display: block;
              // 16:9比例
              padding-bottom: 56.25%;
            }
          }
          .item-title {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            h3 {
              margin: .5em 0;
            }
            p {
              margin: 0;
              margin-bottom: 1em;
              opacity: .6;
            }
          }
        }
      }
    }
  }
</style>
