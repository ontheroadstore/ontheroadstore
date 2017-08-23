<template>
  <div class="container">
    <el-row>
      <el-col :xs="{ span: '22', push: '1', pull: '1' }" :sm="{ span: '22', push: '1', pull: '1' }" :md="{ span: '12', offset: '5' }" :lg="{ span: '12', offset: '5' }" class="search">
        <el-autocomplete :fetch-suggestions="querySearchAsync" v-model="keyWords" placeholder="请输入关键词">
          <el-button slot="append" icon="search" @click="submitSearch"></el-button>
        </el-autocomplete>
        <span><b>{{ pagination.total }}</b>个搜索结果</span>
      </el-col>
    </el-row>
    <el-row class="search-list">
      <el-col :xs="{ span: '22', push: '1', pull: '1' }" :sm="{ span: '22', push: '1', pull: '1' }" :md="{ span: '12', offset: '5' }" :lg="{ span: '12', offset: '5' }" class="item" v-for="item in items" :key="item.goods_id">
        <nuxt-link :to="{ name: 'store-detail-id', params: { id: item.goods_id } }" class="el-row">
          <el-col :span="5" class="item-image" v-lazy:background-image.container="item.goods_cover_img">
          </el-col>
          <el-col :span="18" :offset="1" class="item-title">
            <h4 v-highlight="keyWords">{{ item.goods_title }}</h4>
            <div class="tag">
              <span v-for="tag in item.goods_keywords">{{ tag }}</span>
            </div>
            <div class="item-info">
              <span class="view"><i class="el-icon-view"></i>{{ item.goods_hits }}</span>
              <span class="time"><i class="el-icon-time"></i>{{ item.goods_comments }}</span>
            </div>
          </el-col>
        </nuxt-link>
      </el-col>
      <el-col :span="24">
        <MyPagination :pagination="pagination" :infinite="infinite" :most="0" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MyPagination from '~/components/Pagination_infinite'

export default {
  fetch ({ store, query }) {
    return Promise.all([
      store.commit('search/SET_QUERY', query.keyword),
      store.dispatch('search/REQ_SEARCH_QUERY', 1),
      store.dispatch('search/CLOSE_DIALOG')
    ])
  },
  asyncData ({ query }) {
    return {
      keyWords: query.keyword
    }
  },
  data () {
    return {
      keyWords: '酒市',
      timeout: null
    }
  },
  computed: {
    items () {
      return this.$store.state.search.pages.items
    },
    pagination () {
      return this.$store.state.search.pages.pagination
    },
    next_page () {
      return this.$store.state.search.pages.pagination.current + 1
    },
    suggest_items () {
      return this.$store.state.search.dialog.suggest
    }
  },
  components: {
    'MyPagination': MyPagination
  },
  methods: {
    querySearchAsync (queryString, cb) {
      clearTimeout(this.timeout)
      this.$store.dispatch('search/REQ_SEARCH_SUGGEST', queryString).then(() => {
        this.timeout = setTimeout(() => {
          cb(this.suggest_items)
        }, 1000 * Math.random())
      })
    },
    submitSearch () {
      this.$router.push({ name: 'search', query: { keyword: this.keyWords } })
    },
    infinite () {
      this.$store.dispatch('search/REQ_SEARCH_QUERY', this.next_page)
    }
  },
  destroyed () {
    this.$store.commit('search/CLEAR_PAGES')
  }
}
</script>
<style lang="scss" scoped>
.container {
  .search {
    padding-top: 1rem;
    span {
      display: block;
      margin-top: .5rem;
      font-size: 15px;
      b {
        color: red;
        margin-right: .2rem;
      }
    }
  }
  .search-list {
    .item {
      padding: 1rem 0;
      border-bottom: 1px solid rgba(120, 130, 140, 0.13);
      &:last-child {
        border-bottom: none;
      }
      a {
        display: block;
        position: relative;
        .item-image {
          border-radius: inherit;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          background-color: rgba(120,120,120,.2);
          border-radius: 0.2rem;
          position: relative;
          &:after {
            content: '';
            display: block;
            padding-bottom: 100%;
          }
        }
        .item-title {
          box-sizing: border-box;
          padding-left: .5rem;
          opacity: .9;
          h4 {
            font-weight: normal;
            margin: 0 0 .5rem 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 16px;
          }
          .tag {
            padding-top: .5rem;
            span {
              line-height: 1em;
              height: 1em;
              background-color: #6cc788;
              border-radius: 0.2rem;
              color: #fff;
              font-size: 12px;
              padding: .4rem;
              margin-right: 1rem;
            }
          }
          p {
            margin: .5rem 0;
            font-size: 14px;
            line-height: 1.6em;
            height: 3.2em;
            overflow: hidden;
            opacity: .8;
          }
          .item-info {
            position: absolute;
            right: 0;
            opacity: .5;
            bottom: 0;
            line-height: 0;
            font-size: 14px;
            span {
              margin-left: 1rem;
              i {
                margin-right: .5rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
