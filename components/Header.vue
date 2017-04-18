<template>
  <header class="header">
    <el-row class="navber">

      <el-col :span="8" class="logo">
        <nuxt-link to="/" rel="首页" exact>公路商店 为了你不找边际的企图心</nuxt-link>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="8" class="nav">
        <el-row type="flex" justify="space-around">
          <el-col :span="6"><nuxt-link to="/" exact>首页</nuxt-link></el-col>
          <el-col :span="6"><nuxt-link to="/article">文章</nuxt-link></el-col>
          <el-col :span="6"><nuxt-link to="/store">商品</nuxt-link></el-col>
          <el-col :span="6"><nuxt-link to="/video">视频</nuxt-link></el-col>
        </el-row>
      </el-col>

      <el-col :xs="4" :sm="4" :md="8" :lg="8" class="search">
        <el-button size="mini" icon="search" @click="openSearchDialog"></el-button>
      </el-col>

    </el-row>
  </header>
</template>
<script>
  export default {
    methods: {
      openSearchDialog () {
        this.$store.dispatch('SEARCH_DIALOG_SHOW')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    z-index: 1020;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 -1px 0 rgba(0,0,0,.02);
    -webkit-transform: translateZ(0);
    &>.el-row {
      padding: 0 1rem;
      &>.el-col {
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
          a {
            font-size: 16px;
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
        &.search {
          text-align: right;
        }
      }
    }
  }
</style>
