<template>
  <el-row class="detail-images">
    <el-col :span="24">
      <el-carousel :interval="4000" type="card" height="100%">
        <el-carousel-item class="item" v-for="item in items" v-lazy:background-image="item" :key="item"></el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    props: {
      items: {
        type: Array
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
