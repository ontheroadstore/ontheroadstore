<template>
  <el-row class="sellers">
    <el-col :span="8">
      <el-row class="detail-user-info">
        <nuxt-link to="/">
          <el-col :span="8" class="avatar" v-lazy:background-image="author.avatar">
            <span>卖家</span>
          </el-col>
          <el-col :span="16" class="nickname">
            <span>{{ author.nickname }}</span>
          </el-col>
        </nuxt-link>
      </el-row>
    </el-col>
    <el-col :span="16">
      <el-row class="detail-user-items">
        <el-col :span="6" class="item" v-for="item in items" :key="item.id">
          <nuxt-link to="/">
            <div class="item-image" v-lazy:background-image="item.cover"></div>
            <div class="item-title">{{ item.title }}</div>
          </nuxt-link>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    props: {
      author: {
        type: Object,
        default: () => {
          return {
            id: null,
            nickname: null,
            avatar: null
          }
        }
      },
      items: {
        type: Array
      }
    }
  }
</script>
<style lang="scss" scoped>
  .sellers {
    padding: 1rem 0;
    border-bottom: 1px solid rgba(120,130,140,.13);
    position: relative;
    & > .el-col {
      .detail-user-info {
       a {
        display: block;
        .avatar {
          display: block;
          overflow: hidden;
          border-radius: .2rem;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          position: relative;
          span {
            width: 100%;
            bottom: 0;
            position: absolute;
            text-align: center;
            background-color: rgba(104,190,140,0.6);
            line-height: 1.4em;
            color: #fff;
          }
          &:after {
            content: '';
            display: block;
            padding-top: 100%;
          }
        }
        .nickname {
          padding: 0 1rem;
          h3 {
            margin: 0;
          }
        }
      }
    }
    .detail-user-items {
      margin: 0 -.5rem;
      .item {
        padding: 0 .5rem;
        position: relative;
        a {
          display: block;
          .item-image {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-color: rgba(120, 120, 120, 0.2);
            border-radius: 3px;
            &:after {
              content: '';
              display: block;
              padding-bottom: 56%;
            }
          }
          .item-title {
            line-height: 2em;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
