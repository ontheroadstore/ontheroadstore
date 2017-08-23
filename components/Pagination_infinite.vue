<template>
  <el-row>
    <el-col :span="24" v-if="loading">
      <el-button :loading="loading">加载更多</el-button>
    </el-col>
    <el-col :span="24">
      <nuxt-link :to="{ name: this.routerName, params: { pages: nextPage } }" v-if="isMore">
        <el-button>获取更多内容</el-button>
      </nuxt-link>
      <el-button :disabled="true" v-else>没有更多内容了</el-button>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'pagination-infinite',
  data () {
    return {
      prompt: null
    }
  },
  props: {
    moreLoad: {
      type: Boolean,
      default: false
    },
    infinite: {
      type: Function,
      default: () => {
        return null
      }
    },
    pagination: {
      type: Object,
      default: () => {
        return {
          current: 0,
          pagetotal: 0,
          total: 0
        }
      }
    },
    most: {
      type: Number,
      default: 3
    },
    routerName: {
      type: String
    }
  },
  computed: {
    loading () {
      return this.$store.state.option.infiniteScroll.loading
    },
    isMore () {
      if (this.pagination.current >= this.pagination.pagetotal) {
        this.destroy()
        return false
      } else if (this.pagination.current === this.most) {
        this.destroy()
        return true
      }
    },
    nextPage () {
      return this.pagination.current + 1
    }
  },
  methods: {
    init () {
      this.$store.commit('option/SET_INFINTE_LOADING', true)
      this.$store.commit('option/SET_INFINTE', this.infinite)
    },
    destroy () {
      this.$store.commit('option/SET_INFINTE_LOADING', false)
      this.$store.commit('option/SET_INFINTE', null)
    }
  },
  created () {
    this.init()
  },
  destroyed () {
    this.destroy()
  }
}
</script>
<style lang="scss" scoped>
.el-row {
  padding: 1rem 0;
  .el-col {
    text-align: center;
  }
}
</style>
