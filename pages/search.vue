<template>
  <div class="container">
    <el-row>
      <el-col :xs="{ span: '22', push: '1', pull: '1' }" :sm="{ span: '22', push: '1', pull: '1' }" :md="{ span: '12', offset: '5' }" :lg="{ span: '12', offset: '5' }" class="search">
        <el-autocomplete :fetch-suggestions="SearchAsync" v-model="keyWords" placeholder="请输入关键词">
          <el-button slot="append" icon="search" @click="submitSearch"></el-button>
        </el-autocomplete>
        <span><b>{{ resultsNumber }}</b>个搜索结果</span>
      </el-col>
    </el-row>
    <el-row class="search-list">
      <el-col :xs="{ span: '22', push: '1', pull: '1' }" :sm="{ span: '22', push: '1', pull: '1' }" :md="{ span: '12', offset: '5' }" :lg="{ span: '12', offset: '5' }" class="item" v-for="item in items" :key="item.id">
        <nuxt-link :to="{ name: item.category + '-detail-id', params: { id: '123' } }" class="el-row">
          <el-col :span="5" class="item-image" v-lazy:background-image.container="item.thumb">
            <div class="tag">{{ item.category }}</div>
          </el-col>
          <el-col :span="18" :offset="1" class="item-title">
            <h4 v-highlight="keyWords">{{ item.title }}</h4>
            <p v-highlight="keyWords">{{ item.abstract }}</p>
            <div class="item-info">
              <span class="view"><i class="el-icon-view"></i>{{ item.views }}</span>
              <span class="time"><i class="el-icon-time"></i>{{ item.date }}</span>
            </div>
          </el-col>
        </nuxt-link>
      </el-col>
    </el-row>
    <MyPagination :infinite="infinite" v-if="!isMore" />
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import MyPagination from '~/components/Pagination_infinite'

  export default {
    fetch ({ store, query }) {
      return Promise.all([store.dispatch('SEARCH_INIT_ITEMS', query.keyword), store.dispatch('SEARCH_DIALOG_HIDE')])
    },
    asyncData ({ query }) {
      return {
        keyWords: query.keyword
      }
    },
    data () {
      return {
        restaurants: []
      }
    },
    computed: mapState({
      items: store => store.Search.items,
      next_page: store => store.Search.pagination.current + 1,
      isMore: store => {
        if (store.Search.pagination.current === 3) {
          return true
        }
        return false
      },
      resultsNumber: store => store.Search.pagination.total
    }),
    components: {
      'MyPagination': MyPagination
    },
    methods: {
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
      },
      infinite () {
        this.$store.dispatch('SEARCH_GET_ITEMS', this.next_page)
      }
    },
    destroyed () {
      this.$store.commit('SEARCH_CLEAR_ITEMS')
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
            .tag {
              position: absolute;
              bottom: .5rem;
              right: .5rem;
              padding: .4rem .6rem;
              line-height: 1em;
              height: 1em;
              background-color: #767a7e;
              border-radius: 0.2rem;
              color: #fff;
              font-size: 12px;
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
