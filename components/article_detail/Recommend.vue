<template>
  <el-row class="recommend">
    <el-col :xs="0" :sm="0" :md="4" :lg="4" class="title">
      <h3>推荐阅读</h3>
    </el-col>
    <el-col :xs="12" :sm="12" :md="5" :lg="5" v-for="item in items" :key="item.id" class="item">
      <nuxt-link :to="{ name: 'video-detail-id', params: { id: item.id } }">
        <div class="item-image" v-lazy:background-image.container="item.thumb">
          <span class="item-tag">混蛋出差</span>
        </div>
        <div class="item-title">
          <h3>{{ item.title }}</h3>
          <p>
            <span><i class="el-icon-time"></i>{{ item.date }}</span>
            <span><i class="el-icon-view"></i>3k</span>
          </p>
        </div>
      </nuxt-link>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    props: {
      items: {
        type: Array
      }
    }
  }
</script>
<style lang="scss" scoped>
  .recommend {
    padding: 1rem .5rem .5rem .5rem;
    .el-col {
      color: #fff;
      &.title {
        text-align: center;
        h3 {
          margin: 0;
        }
      }
      &.item {
        a {
          padding: 0 .5rem;
          display: block;
          &:hover {
            .item-image {
              .item-tag {
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
            .item-tag {
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
              overflow:hidden;
              text-overflow:ellipsis;
              white-space:nowrap;
            }
            p {
              margin: 0;
              opacity: .6;
              padding-bottom: .5rem;
              span {
                margin-right: 1rem;
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
