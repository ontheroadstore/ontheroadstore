<template>
  <footer class="footer">
    <el-row :gutter="20">
      <el-col :span="4">
        &copy; Copyright 2017 公路商店
      </el-col>
      <el-col :span="4">
        京ICP备14015381号-1
      </el-col>
      <el-col :span="8">
        <nuxt-link to="/about">关于我们</nuxt-link>
        <nuxt-link to="/job">加入我们</nuxt-link>
        <nuxt-link to="/service">客服售后</nuxt-link>
      </el-col>
      <el-col :span="8">
<!--         <el-tooltip placement="top">
          <div slot="content">
            二维码
          </div>
          <el-button>微信公众号</el-button>
        </el-tooltip>
        <el-tooltip placement="top">
          <div slot="content">
            二维码
          </div>
          <el-button>APP下载</el-button>
        </el-tooltip> -->
      </el-col>
    </el-row>
  </footer>
</template>
<style lang="scss" scoped>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    z-index: 1030!important;
    background-color: #363c43;
    .el-row {
      height: 3.25rem;
      line-height: 3.25rem;
      .el-col {
        padding: 0 1rem;
      }
    }
  }
</style>
