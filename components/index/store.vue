<template>
  <div class="store-items">
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
    </el-row>
    <MyPagination :infinite="infinite" v-if="!isMore" />
    <el-row v-else>
      <el-col :span="24" class="ismore">
        <nuxt-link :to="{ name: 'store-pages', params: { pages: '4' } }">
          <el-button>查看更多内容</el-button>
        </nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import MyPagination from '~/components/Pagination_infinite'

  export default {
    name: 'index-store',
    components: {
      'MyPagination': MyPagination
    },
    props: {
      items: {
        type: Array
      },
      infinite: {
        type: Function,
        default: () => {
          return null
        }
      },
      isMore: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .store-items {
    .title {
      display: block;
      padding: 1rem 0 .5rem 0;
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
    .ismore {
      padding: 1rem;
      text-align: center;
    }
    & > .el-row {
      margin: 0 -.5rem;
      .item {
        padding: 0 .5rem;
        border-radius: .4rem;
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
          padding: .5rem 0;
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
              overflow:hidden;
              text-overflow:ellipsis;
              white-space:nowrap;
            }
            p {
              margin: 0;
              margin-top: .5rem;
              line-height: 1.4em;
              height: 2.8em;
              opacity: .6;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              word-break: break-all;
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
  }
</style>
