<template>
  <el-container class="page" v-bind:class="isMobile ? 'mobile' : 'pc'">
    <!-- 头部 -->
    <MyHeader ref="header" />
    <!-- 主题内容 -->
    <el-main id="main" :style="{ 'top': margin.top, 'bottom': margin.bottom }" class="main animated" v-smooth-scroll :class="surprises">
      <nuxt />
      <!-- 随机元素 -->
      <MyRandomBackground />
    </el-main>
    <!-- 底部 -->
    <MyFooter ref="footer" />
    <!-- 搜索组建 -->
    <MySearch :dialogShow="dialogShow" />
  </el-container>
</template>
<script>
import MyHeader from '~/components/Header.vue'
import MyFooter from '~/components/Footer.vue'
import MySearch from '~/components/Search.vue'
import MyRandomBackground from '~/components/randomBackground.vue'

export default {
  data () {
    return {
      margin: {
        top: null,
        bottom: null
      }
    }
  },
  computed: {
    isMobile () {
      return this.$store.state.option.isMobile
    },
    dialogShow () {
      return this.$store.state.search.dialog.show
    },
    surprises () {
      return this.$store.state.option.pageAnimation.surprises.current
    }
  },
  components: {
    MyFooter, MyHeader, MySearch, MyRandomBackground
  },
  mounted () {
    this.margin.top = this.$refs.header.$el.clientHeight + 3 + 'px'
    this.margin.bottom = this.$refs.footer.$el.clientHeight + 'px'
    if (process.env.NODE_ENV === 'production') {
      console.log('%c招聘各种岗位，详细查看： %chttp://www.ontheroadstore.com/job', 'color:red;font-size:3em;', 'color:red;font-size:13px;')
    }
  }
}
</script>
<style lang="scss">
body {
  background-color: #ffffde;
  .main {
    position: absolute;
    width: 100%;
    transition-duration: 0.5s;
    transition-property: transform;
    transition-timing-function: ease-out;
    padding: 0;
    &.reverted {
      transform:rotateY(180deg);
    }
    &.rotated {
      transform:rotate(-35deg);
    }
  }
  // 饿了么css hack
  .el-main {
    padding: 0;
  }
  .el-autocomplete {
    width: 100%;
  }
}
</style>
