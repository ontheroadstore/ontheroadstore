<template>
  <el-button type="button"><i class="el-icon-search"></i></el-button>
</template>
<script>
  import MyFooter from '~components/Footer.vue'
  export default {
    render (createElement) {
      return createElement('div', [ MyFooter ], this.$root)
    },
    mounted () {
      // this.$root.$createElement()
    }
  }
</script>
