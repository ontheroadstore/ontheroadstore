<template>
  <div class="article-items">
    <nuxt-link to="/article" class="title hvr-wobble-top" title="文章"><h2>文章<i class="el-icon-more"></i></h2></nuxt-link>
    <el-row>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" class="item" v-for="item in items" :key="item.id">
        <nuxt-link :to="{ path: item.category, name: item.category + '-detail-id', params: { id: item.id } }" :title="item.title">
          <div class="item-image" v-lazy:background-image.container="item.thumb">
            <span class="item-time">{{ item.date }}</span>
          </div>
          <div class="item-title">
            <h4>{{ item.title }}</h4>
            <p>{{ item.abstract }}</p>
          </div>
        </nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'index-article',
    props: {
      items: {
        type: Array
      }
    }
  }
</script>
<style lang="scss" scoped>
  .article-items {
    .title {
      display: block;
      padding: 1rem 0;
      &:hover {
        color: #13ce66;
        transition: color 0.3s;
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
    .el-row {
      margin: 0 -.5rem;
      .item {
        padding: 0 .5rem;
        a {
          display: block;
          &:hover {
            .item-image {
              .item-time {
                background-color: #6cc788;
                transition-property: background-color;
                transition-duration: 0.3s;
                transition-timing-function: ease;
              }
              &:after {
                transition-property: background-color;
                transition-duration: 0.3s;
                transition-timing-function: ease;
                background-color: rgba(0, 0, 0, 0.2);
              }
            }
            .item-title {
              opacity: 1;
              text-shadow: 0 2px 2px rgba(255, 255, 255, 0.1), 0 -2px 2px rgba(255, 255, 255, 0.1);
            }
          }
          .item-image {
            border-radius: inherit;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: rgba(120,120,120,.2);
            border-radius: 0.2rem;
            position: relative;
            .item-time {
              position: absolute;
              bottom: .5rem;
              right: .5rem;
              padding: .4rem;
              line-height: 1em;
              height: 1em;
              background-color: #767a7e;
              border-radius: 0.2rem;
              color: #fff;
              font-size:12px;
            }
            &:after {
              content: '';
              display: block;
              padding-top: 100%;
            }
          }
          .item-title {
            display: block;
            opacity: .9;
            h4 {
              margin: .5em 0;
              overflow:hidden;
              text-overflow:ellipsis;
              white-space:nowrap;
            }
            p {
              opacity: .6;
              margin: 0;
              margin-bottom: 1em;
              overflow:hidden;
              text-overflow:ellipsis;
              white-space:nowrap;
            }
          }
        }
      }
    }
  }
</style>
