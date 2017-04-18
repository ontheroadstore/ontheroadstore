<template>
  <div class="loadmore">
    <el-row>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" v-for="item in items" :key="item.id" class="item">
        <nuxt-link :to="{ name: 'video-detail-id', params: { id: item.id } }">
          <div class="item-image" v-lazy:background-image.container="item.thumb"></div>
          <div class="item-title">{{ item.title }}</div>
        </nuxt-link>
      </el-col>
    </el-row>
    <MyPagination :infinite="infinite" />
  </div>
</template>
<script>
  import MyPagination from '~/components/Pagination_infinite'

  export default {
    name: 'loadmore',
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
      }
    }
  }
</script>
<style lang="scss" scoped>
  .loadmore {
    padding: .5rem 0;
    margin: 0 -.5rem;
    .el-col {
      padding: .5rem .5rem;
      &.item {
        a {
          display: block;
          position: relative;
          &:hover {
            .item-image {
              &:after {
                transition-property: background-color;
                transition-duration: 0.3s;
                transition-timing-function: ease;
                background-color: rgba(0, 0, 0, 0.2);
              }
            }
          }
          .item-image {
            border-radius: inherit;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: rgba(120,120,120,.2);
            &:after {
              content: '';
              display: block;
              padding-bottom: 56.25%;
            }
          }
          .item-title {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            color: #fff;
            font-size: 16px;
            background-color: rgba(108,199,136,.8);
            padding: .5rem;
          }
        }
      }
    }
  }
</style>
