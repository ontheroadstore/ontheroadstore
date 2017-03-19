<template>
  <el-dialog v-model="$store.getters.GET_SEARCH_DIALOG_STATE" size="full" v-on:close="closeSearchDialog" :lock-scroll="false" class="search" custom-class="search_dialog">
    <el-row class="search_content">
      <el-col :span="12" :push="6" :pull="6">
        <el-input placeholder="请输入内容">
          <el-button slot="append" icon="search"></el-button>
        </el-input>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
  export default {
    methods: {
      closeSearchDialog () {
        this.$store.dispatch('SEARCH_DIALOG_HIDE')
      }
    },
    mounted () {

    }
  }
</script>
<style lang="scss">
  .search {
    .search_dialog {
      background-color: rgba(0, 0, 0, 0.9);
    }
    .search_content {
      position: fixed;
      top: 50%;
      left: 0;
      right: 0;
    }
  }

</style>
