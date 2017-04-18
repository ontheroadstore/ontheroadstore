<template>
  <el-row>
    <el-col :span="24" class="loading">
      <el-button :loading="!loading">加载更多</el-button>
    </el-col>
  </el-row>
</template>
<script>
  import { mapState } from 'vuex'

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
    computed: mapState({
      loading: store => store.Option.infiniteScroll.loading
    }),
    created () {
      this.$store.dispatch('OPTION_INFINTE_LOADING', true)
      this.$store.dispatch('OPTION_INFINITE_SCROLL', this.infinite)
    },
    destroyed () {
      this.$store.dispatch('OPTION_INFINTE_LOADING', false)
      this.$store.dispatch('OPTION_INFINITE_SCROLL', null)
    }
  }
</script>
<style lang="scss" scoped>
  .loading {
    padding: 1rem;
    text-align: center;
  }
</style>
