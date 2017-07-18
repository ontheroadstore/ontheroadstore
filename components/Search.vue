<template>
  <el-dialog v-model="searchDialogDisplay" size="full" :lock-scroll="false" class="search" custom-class="search_dialog" :close-on-click-modal="false" :show-close="false" :close-on-press-escape="false">
    <el-row class="search_content">
      <el-col :span="2" :offset="22"><el-button type="primary" icon="close" size="mini" @click="CloseSearchDialog()"></el-button></el-col>
      <el-col :xs="{ span: '22', pull: '1', push: '1' }" :sm="{ span: '22', pull: '1', push: '1' }" :md="{ span: '14', pull: '5', push: '5' }" :lg="{ span: '14', pull: '5', push: '5' }">
        <el-autocomplete :fetch-suggestions="SearchAsync" placeholder="请输入内容" v-model="keyWords">
          <el-button slot="append" icon="search" @click="submitSearch"></el-button>
        </el-autocomplete>
      </el-col>
      <el-col :xs="{ span: '22', pull: '1', push: '1' }" :sm="{ span: '22', pull: '1', push: '1' }" :md="{ span: '14', pull: '5', push: '5' }" :lg="{ span: '14', pull: '5', push: '5' }">
        <h4>大家都在搜什么：</h4>
        <ul>
          <li>sdsjjdj</li>
          <li>sdsjjdj</li>
          <li>sdsjjdj</li>
        </ul>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
export default {
  data () {
    return {
      keyWords: null,
      restaurants: [],
      timeout: null
    }
  },
  methods: {
    // 关闭搜索框
    CloseSearchDialog () {
      this.$store.commit('option/SET_SEARCH_DIALOG', false)
    },
    SearchAsync (queryString, cb) {
      let restaurants = this.restaurants
      let results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.value.indexOf(queryString.toLowerCase()) === 0)
      }
    },
    submitSearch () {
      this.$router.push({ name: 'search', query: { keyword: this.keyWords } })
    }
  },
  computed: {
    searchDialogDisplay () {
      return this.$store.state.option.globalOption.searchDialogSwitch
    }
  }
}
</script>
<style lang="scss">
.search {
  .search_dialog {
    background-color: rgba(0, 0, 0, 0.9);
  }
    // .search_content {
    //   position: fixed;
    //   top: 50%;
    //   left: 0;
    //   right: 0;
    // }
  }

  </style>
