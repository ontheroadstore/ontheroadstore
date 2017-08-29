<template>
  <div class="container">
    <el-row>
      <el-col :span="16">
        <div class="store-list">
          <div class="title">
            <h1>黑市</h1>
          </div>
          <el-row>
            <el-col :span="12" class="item" v-for="item in items" :key="item.id">
              <nuxt-link :to="{ name: 'store-detail-id', params: { id: item.id } }">
                <div class="item-image" v-lazy:background-image.container="item.thumb + '@640w_1l'"></div>
                <div class="item-tag" v-show="item.tags[0]">
                  <span v-for="tag in item.tags">{{ tag }}</span>
                </div>
                <div class="item-title">
                  <h3>{{ item.title }}</h3>
                </div>
                <div class="item-info">
                  <span class="item-view"><i class="el-icon-star-off"></i>{{ item.view }}</span>
                  <span class="item-comment"><i class="el-icon-star-off"></i>{{ item.comments }}</span>
                  <span class="item-like"><i class="el-icon-star-off"></i>{{ item.praise }}</span>
                </div>
                <div class="item-time">{{ item.date }}</div>
              </nuxt-link>
            </el-col>
            <el-col :span="24">
              <MyPagination :pagination="pagination" />
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8">
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
import MyPagination from '~/components/Pagination'

export default {
  head () {
    return {
      title: '黑市'
    }
  },
  validate ({ params }) {
    return (!!params.pages && !Object.is(Number(params.pages), NaN))
  },
  fetch ({ store, params }) {
    return Promise.all([store.dispatch('store/REQ_PAGES', params.pages)])
  },
  computed: {
    items () {
      return this.$store.state.store.pages.items
    },
    pagination () {
      return this.$store.state.store.pages.pagination
    }
  },
  components: {
    'MyTop10': MyIndexTop10,
    'MyPagination': MyPagination
  }
}
</script>
<style lang="scss" scoped>
.container {
  & > .el-row {
    & > .el-col {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      &.el-col-16 {
        border-right: 1px solid rgba(120,130,140,.13);
        .store-list {
          padding-bottom: .75rem;
          .title {
            margin-top: 12px;
            .dropdown {
              color: initial;
              h1 {
                display: inline-block;
                margin: 0;
                margin-right: 1rem;
              }
            }
          }
          & > .el-row {
            margin-left: -12px;
            margin-right: -12px;
            .item {
              padding: 12px;
              border-radius: 5px;
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
    }
  }
}
</style>
