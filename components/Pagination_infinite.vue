<template>
  <el-row>
    <el-col :span="24" class="loading">
      <el-button :loading="!loading">加载更多</el-button>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name: 'pagination-infinite',
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
      }
    },
    computed: {
      loading () {
        return this.$store.state.option.infiniteScroll.loading
      }
    },
    created () {
      this.$store.commit('option/SET_INFINTE_LOADING', true)
      this.$store.commit('option/SET_INFINTE', this.infinite)
    },
    destroyed () {
      this.$store.commit('option/SET_INFINTE_LOADING', false)
      this.$store.commit('option/SET_INFINTE', null)
    }
  }
</script>
<style lang="scss" scoped>
  .loading {
    padding: 1rem;
    text-align: center;
  }
</style>
