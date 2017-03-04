<template>
  <header class="header">
    <el-row :gutter="20" class="navber">
      <el-col :span="4" class="logo">
        <nuxt-link to="/" rel="首页">公路商店 为了你不找边际的企图心</nuxt-link>
      </el-col>
      <el-col :span="16" class="nav">
        <ul>
          <li><nuxt-link to="/">文章</nuxt-link></li>
          <li><nuxt-link to="/shop">商品</nuxt-link></li>
          <li><nuxt-link to="/video">视频</nuxt-link></li>
        </ul>
      </el-col>
      <el-col :span="4" class="search">
        <i class="el-icon-search"></i>
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
                &.nuxt-link-active {
                  color: #6cc788;
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
