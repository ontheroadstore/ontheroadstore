<template>
  <footer class="footer">
    <el-row :gutter="20">
      <el-col :span="6" class="copyright">
        &copy; Copyright 2017 公路商店
      </el-col>
      <el-col :span="6" class="icp">
        京ICP备14015381号-1
      </el-col>
      <el-col :span="6" class="link">
        <nuxt-link to="/about">关于我们</nuxt-link>
        <nuxt-link to="/job">加入我们</nuxt-link>
        <nuxt-link to="/service">黑市客服</nuxt-link>
      </el-col>
      <el-col :span="6" class="qrcode">
        <el-button>微信公众号</el-button>
        <el-button>APP下载</el-button>
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
      padding: 0 1rem;
      flex-shrink: 0;
      .el-col {
        height: 3.25rem;
        line-height: 3.25rem;
        font-size: 14px;
        color: #fff;
        &.link {
          text-align: right;
          a {
            margin-right: 1em;
            &:last-child {
              margin-right: 0;
            }
          }
        }
        &.qrcode {
          text-align: right;
        }
      }
    }
  }
</style>
