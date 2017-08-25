<template>
  <div class="search">
    <el-dialog v-model="dialogShow" size="full" :lock-scroll="false" custom-class="search_dialog" :close-on-click-modal="false" :show-close="false" :close-on-press-escape="false">
      <el-button class="close-btn" icon="close" size="mini" @click="CloseSearchDialog()"></el-button>
      <el-row class="search_content">
        <el-col :xs="{ span: 24 }" :sm="{ span: 12, offset: 6 }" :md="{ span: 10, offset: 7 }">
          <el-autocomplete :fetch-suggestions="querySearchAsync" placeholder="请输入内容" v-model="keyWords">
            <el-button slot="append" icon="search" @click="submitSearch"></el-button>
          </el-autocomplete>
        </el-col>
        <el-col :xs="{ span: 24 }" :sm="{ span: 12, offset: 6 }" :md="{ span: 10, offset: 7 }">
          <h4>热门搜索：</h4>
          <ul>
            <li @!click="select_keyword(keyword.name)" v-for="keyword in hot_keyword">{{ keyword.name }}</li>
          </ul>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      keyWords: '酒市',
      timeout: null
    }
  },
  fetch ({ store }) {
    return store.dispatch('search/REQ_HOT_KEYWORD')
  },
  props: {
    dialogShow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    items () {
      return this.$store.state.search.dialog.suggest
    },
    hot_keyword () {
      return this.$store.state.search.dialog.hot_keyword
    }
  },
  methods: {
    // 关闭搜索框
    CloseSearchDialog () {
      this.$store.dispatch('search/CLOSE_DIALOG')
    },
    querySearchAsync (queryString, cb) {
      clearTimeout(this.timeout)
      this.$store.dispatch('search/REQ_SEARCH_SUGGEST', queryString).then(() => {
        this.timeout = setTimeout(() => {
          cb(this.items)
        }, 1000 * Math.random())
      })
    },
    submitSearch () {
      this.$router.push({ name: 'search', query: { keyword: this.keyWords } })
    },
    select_keyword (keyword) {
      this.keyWords = keyword
    }
  }
}
</script>
<style lang="scss">
.search {
  .search_dialog {
    background-color: rgba(0, 0, 0, 0.9);
    position: relative;
    .close-btn {
      position: absolute;
      right: 1rem;
      top: 1rem;
      text-align: right;
      border: none;
      background: none;
      color: #fff;
    }
  }
}
</style>
