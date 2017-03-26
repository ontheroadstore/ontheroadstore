<template>
  <section class="store-items" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
    <nuxt-link to="/store" class="title"><h2>黑市<i class="el-icon-more"></i></h2></nuxt-link>
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" class="item" v-for="item in items" :key="item.src">
        <nuxt-link to="/" class="el-row">
          <el-col :span="12" class="item-image" v-lazy:background-image.container="item.thumb"></el-col>
          <el-col :span="12" class="item-title">
            <h4>{{ item.title }}</h4>
            <p>{{ item.abstract }}</p>
            <div class="item-info">
              <span class="view"><i class="el-icon-view"></i> {{ item.view }}</span>
              <span class="sales"><i class="el-icon-star-on"></i> {{ item.praise }}</span>
            </div>
          </el-col>
        </nuxt-link>
      </el-col>
      <el-col :span="24" class="loading" v-show="loading">
        <nuxt-link :to="{ name: 'store-pages', params: { pages: 4 } }" v-if="loading">
          <el-button>查看更多黑市内容</el-button>
        </nuxt-link>
        <el-button :loading="loading" v-else>加载更多</el-button>
      </el-col>
    </el-row>
  </section>
</template>
<script>
  export default {
    props: {
      items: {
        type: Array
      },
      loading: {
        type: Boolean,
        default: false
      },
      More: {
        type: Boolean
      },
      loadMore: {
        type: Function
      },
      pagination: {
        type: Object
      }
    }
  }
</script>
<style lang="scss" scoped>
  .store-items {
    padding-bottom: 5px;
    .title {
      display: block;
      padding: 1rem 0;
      &:hover {
        h2 {
          i {
            color: #6cc788;
            transition-property: color;
            transition-duration: 0.3s;
            transition-timing-function: ease;
          }
        }
      }
      h2 {
        margin: 0;
        position: relative;
        i {
          position: absolute;
          right: 0;
        }
      }
    }
    & > .el-row {
      margin-left: -12px;
      margin-right: -12px;
      .item {
        padding-left: 12px;
        padding-right: 12px;
        border-radius: 5px;
        transition-property: background-color;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        &:hover {
          background-color: rgba(120, 130, 140, 0.13);
          a {
            .item-image {
              &:after {
                background-color: rgba(0, 0, 0, 0.2);
              }
            }
            .item-title {
              opacity: 1;
              text-shadow: 0 2px 2px rgba(255, 255, 255, 0.1), 0 -2px 2px rgba(255, 255, 255, 0.1);
            }
          }
        }
        a {
          display: block;
          border-bottom: 1px solid rgba(120, 130, 140, 0.13);
          padding-top: 1rem;
          padding-bottom: 1rem;
          position: relative;
          .item-image {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: rgba(120,120,120,.2);
            border-radius: 3px;
            &:after {
              content: '';
              display: block;
              padding-bottom: 60%;
            }
          }
          .item-title {
            box-sizing: border-box;
            padding-left: 12px;
            opacity: .9;
            h4 {
              margin: 0;
            }
            p {
              margin: 0;
              margin-top: .5rem;
              line-height: 1.4em;
              height: 2.8em;
              overflow: hidden;
              opacity: .6;
            }
            .item-info {
              position: absolute;
              right: 0;
              bottom: 1rem;
              line-height: 0;
              opacity: .5;
              .view {
                margin-right: 1rem;
              }
            }
          }
        }
      }
    }
    .loading {
      padding: 1rem;
      text-align: center;
    }
  }
</style>
