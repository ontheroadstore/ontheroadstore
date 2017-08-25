<template>
  <el-row class="banner-items">
    <el-col :xs="24" :sm="12" :md="12" class="carousel">
      <el-carousel height="100%" arrow="always">
        <el-carousel-item class="item" v-for="item in carousel_items" v-lazy:background-image.container="item.thumb" :key="item.id">
          <nuxt-link :to="{ name: 'article-detail-id', params: { id: item.id } }" :key="item.id" :title="item.title" class="item-title">
            <h3>{{ item.title }}</h3>
            <p v-html="item.description"></p>
          </nuxt-link>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col class="item" :xs="12" :sm="6" :md="6" v-for="item in recommend_items" v-lazy:background-image.container="item.thumb" :key="item.id">
      <nuxt-link :to="{ name: 'store-detail-id', params: { id: item.id } }" :key="item.id" :title="item.title" class="item-title">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </nuxt-link>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'index-banner',
  props: {
    carousel_items: {
      type: Array
    },
    recommend_items: {
      type: Array
    }
  }
}
</script>
<style lang="scss" scoped>
.banner-items {
  .el-col {
    position: relative;
    &:after {
      content: '';
      display: block;
      padding-top: 100%;
    }
    &.carousel {
      .el-carousel {
        position: absolute;
        width: 100%;
        height: 100%;
        .item {
          word-wrap: break-word;
          word-break: normal;
          border-radius: inherit;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          background-color: rgba(120,120,120,.2);
          a {
            &:after {
              content: '';
              background-color: rgba(120, 120, 120, 0.1);
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              position: absolute;
              transition-property: background-color;
              transition-duration: 0.3s;
              transition-timing-function: ease;
            }
            &:hover {
              &:after {
                color: inherit;
                background-color: rgba(0, 0, 0, 0.1);
                border-color: rgba(0, 0, 0, 0.1);
              }
            }
            &.item-title {
              position: absolute;
              box-sizing: border-box;
              padding: 1rem;
              width: 100%;
              height: 100%;
              h3 {
                margin: 0;
                color: #fff;
                text-shadow: 0 1px 2px rgba(255,255,255,.1), 0 -1px 2px rgba(255,255,255,.1);
              }
              p {
                color: #fff;
                opacity: .6;
                text-shadow: 0 1px 2px rgba(255,255,255,.1), 0 -1px 2px rgba(255,255,255,.1);
                margin: 1em 0;
              }
            }
          }
        }
      }
    }
    &.item {
      position: relative;
      word-wrap: break-word;
      word-break: normal;
      border-radius: inherit;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-color: rgba(120,120,120,.2);
      transition-property: background-color;
      transition-duration: 0.3s;
      transition-timing-function: ease;
      &:after {
        background-color: rgba(120, 120, 120, 0.1);
        transition-property: background-color;
        transition-duration: 0.3s;
        transition-timing-function: ease;
      }
      &:hover {
        &:after {
          color: inherit;
          background-color: rgba(0, 0, 0, 0.1);
          border-color: rgba(0, 0, 0, 0.1);
        }
      }
      .item-title {
        position: absolute;
        box-sizing: border-box;
        padding: 1rem;
        width: 100%;
        height: 100%;
        h3 {
          margin: 0;
          color: #fff;
          text-shadow: 0 1px 2px rgba(255,255,255,.1), 0 -1px 2px rgba(255,255,255,.1);
        }
        p {
          color: #fff;
          opacity: .6;
          text-shadow: 0 1px 2px rgba(255,255,255,.1), 0 -1px 2px rgba(255,255,255,.1);
          margin: 1em 0;
        }
      }
    }
  }
}
</style>
