<template>
  <div class="sousuo">
    <el-dialog v-model="dialogShow" size="full" :lock-scroll="false" class="search" custom-class="search_dialog" :close-on-click-modal="false" :show-close="false" :close-on-press-escape="false">
      <el-button class="close-btn" icon="close" size="mini" @click="CloseSearchDialog()"></el-button>
      <el-row class="search_content">
        <el-col :xs="{ span: 24 }" :sm="{ span: 12, offset: 6 }" :md="{ span: 10, offset: 7 }">
          <el-autocomplete :fetch-suggestions="querySearchAsync" placeholder="请输入内容" v-model="keyWords">
            <el-button slot="append" icon="search" @click="submitSearch"></el-button>
          </el-autocomplete>
        </el-col>
        <el-col :xs="{ span: 24 }" :sm="{ span: 12, offset: 6 }" :md="{ span: 10, offset: 7 }">
          <h4>大家都在搜什么：</h4>
          <ul>
            <!-- <li>sdsjjdj</li> -->
            <li>sdsjjdj</li>
            <li>sdsjjdj</li>
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
  props: {
    dialogShow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    items () {
      return this.$store.state.search.dialog.suggest
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
