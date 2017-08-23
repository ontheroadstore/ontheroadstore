<template>
  <el-row class="top10-items">
    <el-col :span="24" class="title"><h3>大家还买了什么</h3></el-col>
    <el-row>
      <el-col :span="24" class="item" v-for="item in items" :key="item.id">
        <nuxt-link :to="{ name: 'store-detail-id', params: { id: item.id } }" class="el-row">
          <el-col :span="4" class="item-image" v-lazy:background-image.container="item.image"></el-col>
          <el-col :span="20" class="item-title">
            <h4>{{ item.post_title }}</h4>
            <div class="item-info">
              <span class="view"><i class="el-icon-view"></i> {{ item.post_hits }}</span>
              <span class="time"><i class="el-icon-time"></i> {{ item.comment_count }}</span>
            </div>
          </el-col>
        </nuxt-link>
      </el-col>
    </el-row>
  </el-row>
</template>
<script>
  export default {
    name: 'store-top10',
    props: {
      items: {
        type: Array
      }
    }
  }
</script>
<style lang="scss" scoped>
  .top10-items {
    .title {
      display: block;
      padding-top: 1rem;
      padding-bottom: .5rem;
      h3 {
        margin: 0;
        color: inherit;
        opacity: .6;
      }
    }
    & > .el-row {
      margin-left: -12px;
      margin-right: -12px;
      .item {
        padding-left: 12px;
        padding-right: 12px;
        transition-property: background-color;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        border-radius: 5px;
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
              text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1), 0 -2px 2px rgba(0, 0, 0, 0.1);
            }
          }
        }
        a {
          display: block;
          padding-top: .5rem;
          padding-bottom: .5rem;
          border-bottom: 1px solid rgba(120, 130, 140, 0.13);
          position: relative;

          .item-image {
            border-radius: inherit;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: rgba(120,120,120,.2);
            border-radius: 0.2rem;
            &:after {
              content: '';
              display: block;
              // 16:9比例
              padding-bottom: 100%;
            }
          }
          .item-title {
            box-sizing: border-box;
            padding-left: 12px;
            opacity: .9;
            h4 {
              font-weight: normal;
              margin: 0;
              line-height: 1.4em;
              height: 2.8em;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .item-info {
              position: absolute;
              right: 0;
              opacity: .5;
              bottom: .5rem;
              line-height: 0;
              font-size: 12px;
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
