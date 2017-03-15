<template>
  <div class="container">

      <section class="page-bg" v-lazy:background-image="banner[1]"></section>

      <el-row class="video-detail">
        <el-col :span="24">a</el-col>
      </el-row>

  </div>
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
  .container {
    .page-bg {
      z-index: 0;
      top: 0;
      left: 0;
      right: 0;
      border: none;
      height: 80vh;
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
    .video-detail {
      position: relative;
      z-index: 10;
    }
  }
</style>
