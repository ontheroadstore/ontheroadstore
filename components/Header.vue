<template>
  <header class="header">
    <el-row :gutter="20" class="navber">
      <el-col :span="6" class="logo">
        <nuxt-link to="/" rel="首页" exact>公路商店 为了你不找边际的企图心</nuxt-link>
      </el-col>
      <el-col :span="12" class="nav">
        <ul>
          <li><nuxt-link to="/" exact>文章</nuxt-link></li>
          <li><nuxt-link to="/store">商品</nuxt-link></li>
          <li><nuxt-link to="/video">视频</nuxt-link></li>
        </ul>
      </el-col>
      <el-col :span="6" class="search">
        <el-button><i class="el-icon-search"></i></el-button>
        <el-tooltip class="item" effect="dark" placement="bottom-start">
          <div slot="content">
            二维码
          </div>
          <el-button>下载APP</el-button>
        </el-tooltip>
      </el-col>
    </el-row>
  </header>
</template>
<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    z-index: 1020;
    left: 0;
    right: 0;
    background-color: #fff;
    margin: inherit;
    box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 -1px 0 rgba(0,0,0,.02);
    -webkit-transform: translateZ(0);
    .el-row {
      padding: 0 1rem;
      flex-shrink: 0;
      .el-col {
        height: 3.5rem;
        line-height: 3.5rem;
        &.logo {
          a {
            display: block;
            text-indent: -9999em;
            overflow: hidden;
            background-image: url('~assets/img/logo.png');
            width: 96px;
            height: 3.5rem;
            background-size: 96px 32px;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
        &.nav {
          text-align: center;
          ul {
            list-style: none;
            display: inline-block;
            padding: 0;
            margin: 0;
            li {
              float: left;
              a {
                font-size: 16px;
                padding: 0 1rem;
                transition-property: color;
                transition-duration: 0.3s;
                transition-timing-function: ease;
                &:hover, &.nuxt-link-active {
                  color: #6cc788;
                  transition-property: color;
                  transition-duration: 0.3s;
                  transition-timing-function: ease;
                }
              }
            }
            &:after {
              content: "";
              display: table;
              clear: both;
            }
          }
        }
        &.search {
          text-align: right;
        }
      }
    }
  }
</style>
