<template>
  <el-row>
    <el-col>
      <el-pagination :current-page="pagination.current" layout="prev, pager, next" :total="pagination.total" :page-count="pagination.pagetotal" @current-change="handleCurrentChange" class="pagination"></el-pagination>
    </el-col>
  </el-row>
</template>
<style lang="scss" scoped>
  .pagination {
    text-align: center;
    padding: 1rem 0;
  }
</style>
<script>
  export default {
    name: 'pagination',
    props: {
      pagination: {
        type: Object,
        default: () => {
          return {
            current: 0,
            pagetotal: 0,
            total: 0
          }
        }
      }
    },
    methods: {
      handleCurrentChange (val) {
        this.$router.push({
          name: this.$router.name,
          params: {
            pages: val
          }
        })
      }
    }
  }
</script>
