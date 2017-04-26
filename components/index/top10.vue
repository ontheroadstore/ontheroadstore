<template>
  <div class="top10-items">
    <h3 class="title hvr-wobble-top">大家最近都看在</h3>
    <el-row>
      <el-col :span="24" class="item" v-for="item in items" :key="item.id">
        <nuxt-link :to="{ path: item.category, name: item.category + '-detail-id', params: { id: item.id } }" class="el-row" :title="item.title">
          <el-col :span="4" class="item-image" v-lazy:background-image.container="item.thumb"></el-col>
          <el-col :span="20" class="item-title">
            <h4>{{ item.title }}</h4>
            <div class="item-info">
              <span class="view"><i class="el-icon-view"></i>{{ item.views }}</span>
              <span class="time"><i class="el-icon-time"></i>{{ item.date }}</span>
            </div>
          </el-col>
        </nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'index-top10',
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
      padding: 1rem 0;
      opacity: .6;
      margin: 0;
      cursor: default;
      &:hover {
        color: #13ce66;
        transition: color 0.3s;
      }
    }
    & > .el-row {
      margin: 0 -.5rem;
      .item {
        padding: .5rem;
        transition-property: background-color;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        border-radius: .2rem;
        border-bottom: 1px solid rgba(120, 130, 140, 0.13);
        &:last-child {
          border-bottom: none;
        }
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
              padding-bottom: 100%;
            }
          }
          .item-title {
            box-sizing: border-box;
            padding-left: .5rem;
            opacity: .9;
            h4 {
              font-weight: normal;
              margin: 0;
              line-height: 1.4em;
              height: 2.8em;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .item-info {
              position: absolute;
              right: 0;
              opacity: .5;
              bottom: 0;
              line-height: 0;
              font-size: 12px;
              span {
                margin-left: 1rem;
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
