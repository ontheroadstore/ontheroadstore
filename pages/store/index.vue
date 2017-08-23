<template>
  <div class="container">
    <el-row>
      <el-col :xs="{ span: '22', push: '1', pull: '1' }" :sm="{ span: '22', push: '1', pull: '1' }" :md="{ span: '15', push: '1' }" :lg="{ span: '15', push: '1' }" class="store-list">
        <div class="title">
          <el-dropdown class="dropdown">
            <span class="el-dropdown-link">
              <h1>黑市</h1>全部 <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>推荐</el-dropdown-item>
              <el-dropdown-item>热门</el-dropdown-item>
              <el-dropdown-item>文化</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" class="item" v-for="item in items" :key="item.id">
            <nuxt-link :to="{ name: 'store-detail-id', params: { id: item.id } }">
              <div class="item-image" v-lazy:background-image.container="item.thumb"></div>
              <div class="item-tag" v-show="item.tags[0]">
                <span v-for="tag in item.tags">{{ tag }}</span>
              </div>
              <div class="item-title">
                <h3>{{ item.title }}</h3>
              </div>
              <div class="item-info">
                <span class="item-view"><i class="el-icon-view"></i>{{ item.view }}</span>
                <span class="item-comment"><i class="el-icon-document"></i>{{ item.comments }}</span>
                <span class="item-like"><i class="el-icon-star-on"></i>{{ item.praise }}</span>
              </div>
              <div class="item-time">{{ item.date }}</div>
            </nuxt-link>
          </el-col>
        </el-row>
        <MyPagination :infinite="infinite" :pagination="pagination" routerName="store-pages" />
      </el-col>

      <el-col :xs="0" :sm="0" :md="{ span: '6', push: '2' }" :lg="{ span: '6', push: '2' }" v-sticky>
        <!-- AD -->
        <div>
          <h3>分享到微信可购买，或者搜索微信公众号：nbheishi</h3>
          <p><img v-lazy='"/heishi_qrcode.png"' /></p>
        </div>
        <!-- TOP10 -->
        <!-- <MyTop10 /> -->
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MyIndexTop10 from '~/components/index/Top10'
import MyPagination from '~/components/Pagination_infinite'

export default {
  head () {
    return {
      title: '黑市'
    }
  },
  fetch ({ store }) {
    return Promise.all([store.dispatch('store/REQ_LIST', 1)])
  },
  computed: {
    items () {
      return this.$store.state.store.index.items
    },
    pagination () {
      return this.$store.state.store.index.pagination
    },
    next_page () {
      return this.$store.state.store.index.pagination.current + 1
    }
  },
  components: {
    'MyTop10': MyIndexTop10,
    'MyPagination': MyPagination
  },
  methods: {
    infinite () {
      this.$store.dispatch('store/REQ_LIST', this.next_page)
    }
  },
  destroyed () {
    this.$store.commit('store/CLEAR_INDEX')
  }
}
</script>
<style lang="scss" scoped>
.container {
  .ismore {
    padding: 1rem;
    text-align: center;
  }
  .store-list {
    padding-bottom: .5rem;
    .title {
      margin: 1rem 0 .5rem 0;
      .dropdown {
        color: initial;
        h1 {
          display: inline-block;
          margin: 0;
          margin-right: 1rem;
        }
      }
    }
    .el-row {
      margin-left: -.5rem;
      .item {
        padding: .5rem;
        transition-property: background-color;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        a {
          display: block;
          position: relative;
          &:hover {
            .item-image {
              &:after {
                background: linear-gradient(0deg,rgba(0,0,0,.2),transparent);
              }
            }
          }
          .item-image {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: rgba(120,120,120,.2);
            &:after {
              content: '';
              display: block;
              padding-bottom: 60%;
              background: linear-gradient(0deg,rgba(0,0,0,.6),transparent);
            }
          }
          .item-tag {
            position: absolute;
            left: .8rem;
            top: .8rem;
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
          .item-title {
            box-sizing: border-box;
            width: 100%;
            padding: 0 .8rem;
            position: absolute;
            bottom: 2.2rem;
            color: #fff;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 -1px 2px rgba(0, 0, 0, 0.1);
            h3 {
              margin: 0;
            }
          }
          .item-info {
            position: absolute;
            bottom: .8rem;
            right: .8rem;
            color: #fff;
            font-size: 13px;
            span {
              margin-left: 1em;
              i {
                margin-right: .5em;
              }
            }
          }
          .item-time {
            font-size: 13px;
            position: absolute;
            color: #fff;
            left: .8rem;
            bottom: .8rem;
          }
        }
      }
    }
  }
}
</style>
