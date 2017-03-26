<template>
  <section class="video-items">
    <nuxt-link to="/" class="title"><h2>视频<i class="el-icon-more"></i></h2></nuxt-link>
    <el-row>
    <el-col :xs="12" :sm="12" :md="8" :lg="8" class="item" v-for="item in items" :key="item.src">
        <nuxt-link :to="{ path: item.category, name: item.category + '-detail-id', params: { id: item.id } }" :title="item.title">
          <div class="item-image" v-lazy:background-image.container="item.thumb">
            <span class="item-time">{{ item.tag }}</span>
          </div>
          <div class="item-title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.abstract }}</p>
          </div>
        </nuxt-link>
      </el-col>
    </el-row>
  </section>
</template>
<script>
  export default {
    name: 'index-video',
    props: {
      items: {
        type: Array
      }
    }
  }
</script>
<style lang="scss" scoped>
  .video-items {
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
    .el-row {
      margin-left: -12px;
      margin-right: -12px;
      .item {
        padding-left: 12px;
        padding-right: 12px;
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
              // opacity: .8;
            }
            &:after {
              content: '';
              display: block;
              // 16:9比例
              padding-bottom: 56.25%;
            }
          }
          .item-title {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            opacity: .9;
            h3 {
              margin: .5em 0;
            }
            p {
              margin: 0;
              margin-bottom: 1em;
              opacity: .6;
            }
          }
        }
      }
    }
  }
</style>
