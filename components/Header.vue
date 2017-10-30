<template>
  <el-header class="header" height="60">
    <el-row type="flex" justify="space-between">
      <el-col :xs="4" :sm="4" :md="8" :lg="8">
        <div class="logo">
          <nuxt-link to="/" rel="首页" exact title="公路商店">公路商店 为了你不着边际的企图心</nuxt-link>
        </div>
      </el-col>

      <el-col :xs="12" :sm="12" :md="8" :lg="8">
        <el-row type="flex" justify="space-around" class="nav">
          <el-col :span="6"><nuxt-link to="/" exact>首页</nuxt-link></el-col>
          <el-col :span="6"><nuxt-link to="/article">文章</nuxt-link></el-col>
          <el-col :span="6"><nuxt-link to="/store">商品</nuxt-link></el-col>
        </el-row>
      </el-col>

      <el-col :xs="2" :sm="4" :md="8" :lg="8">
        <div class="search">
          <el-button size="mini" :plain="true" :round="true" icon="el-icon-search" @click="openSearchDialog()"></el-button>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>
<script>
export default {
  methods: {
    openSearchDialog () {
      this.$store.dispatch('search/OPEN_DIALOG')
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
  background-color: #f0e042;
  box-shadow: 0 0.1rem 0.2rem rgba(0,0,0,.1), 0 -0.1rem 0 rgba(0,0,0,.02);
  -webkit-transform: translateZ(0);
  border-bottom: 0.2rem solid #cd2836;
  &>.el-row {
    // padding: 0 1rem;
    &>.el-col {
      line-height: 60px;
      .logo {
        a {
          display: block;
          text-indent: -9999em;
          overflow: hidden;
          background-image: url('~assets/img/logo.png');
          width: 96px;
          background-size: 96px 32px;
          background-position: center;
          background-repeat: no-repeat;
        }
      }
      .nav {
        text-align: center;
        a {
          font-size: 16px;
          transition-property: color;
          transition-duration: 0.3s;
          transition-timing-function: ease;
          display: block;
          width: 100%;
          &:hover, &.nuxt-link-active {
            color: #cd2836;
            transition-property: color;
            transition-duration: 0.3s;
            transition-timing-function: ease;
          }
        }
      }
      .search {
        text-align: right;
      }
    }
  }
}
</style>
