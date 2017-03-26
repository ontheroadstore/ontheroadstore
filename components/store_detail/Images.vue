<template>
  <el-row class="detail-images">
    <el-col :span="24">
      <el-carousel :interval="4000" type="card" height="100%">
        <el-carousel-item class="item" v-for="item in banner" v-lazy:background-image="item" :key="item.src"></el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
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
  .detail-images {
    .el-col {
      padding: 1rem 0;
      &:after {
        content: '';
        display: block;
        padding-top: 50%;
      }
      .el-carousel {
        width: inherit;
        height: 100%;
        overflow: hidden;
        position: absolute;
        .item {
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50% 50%;
        }
      }
    }
  }
</style>
