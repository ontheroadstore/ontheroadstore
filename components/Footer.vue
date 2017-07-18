<template>
  <footer class="footer">
    <el-row>
      <el-col :xs="4" :sm="4" :md="6" :lg="6">
        <div class="copyright">
          &copy; Copyright 2017 公路商店
        </div>
      </el-col>
      <el-col :xs="0" :sm="0" :md="4" :lg="4">
        <div class="icp">
          京ICP备14015381号-1
        </div>
      </el-col>
      <el-col :xs="18" :sm="18" :md="8" :lg="8">
        <div class="link">
          <nuxt-link to="/about">关于我们</nuxt-link>
          <nuxt-link to="/job">工作机会</nuxt-link>
          <nuxt-link to="/contact">联系我们</nuxt-link>
          <nuxt-link to="/service">黑市客服</nuxt-link>
        </div>
      </el-col>
      <el-col :xs="0" :sm="0" :md="6" :lg="6">
        <div class="qrcode">
          <el-tooltip placement="top">
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
          </el-tooltip>
        </div>
      </el-col>
    </el-row>
  </footer>
</template>
<style lang="scss" scoped>
  .pc {
    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0;
      z-index: 1020;
      background-color: #363c43;
      box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 -1px 0 rgba(0,0,0,.02);
      -webkit-transform: translateZ(0);
      .el-row {
        padding: 0 1rem;
        .el-col {
          height: 3.25rem;
          line-height: 3.25rem;
          font-size: 14px;
          color: #fff;
          .link {
            text-align: right;
            a {
              margin-right: 1em;
              &:last-child {
                margin-right: 0;
              }
            }
          }
          .qrcode {
            text-align: right;
          }
        }
      }
    }
  }
  .mobile {
    .footer {
      display: none;
    }
  }
</style>
