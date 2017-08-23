<template>
  <el-row>
    <el-col :span="24" class="title">
      <h1>{{ item.title }}</h1>
    </el-col>
    <el-col :span="24" class="time">
      <span><i class="el-icon-time"></i>{{ item.date }}</span>
      <span><i class="el-icon-view"></i>{{ item.view }}</span>
    </el-col>
    <el-col :span="24">
      <div class="article" v-html="item.content"></div>
    </el-col>
    <el-col :span="24">
      <a :href="item.link" target="_blank" :title="item.title">阅读原文</a>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'article-content',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          id: null,
          title: null,
          abstract: null,
          content: null,
          cover: null,
          date: null,
          view: null,
          link: null
        }
      }
    }
  }
}
</script>
<style lang="scss">
.article {
  overflow: hidden;
  color: #3e3e3e;
  font-size: 16px;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  line-height: 1.5em;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  img {
    max-width: 100%;
    margin: 0;
    padding: 0;
    display: block;
  }
  p {
    clear: both;
    &.image-alt {
      font-size: 14px;
      margin-top: 0;
      padding: .2rem;
      color: #000;
      opacity: .5;
      text-align: center;
    }
  }
}
</style>
<style lang="scss" scoped>
.el-row {
  .el-col {
    padding-top: 1rem;
    &:last-child {
      padding-bottom: 1rem;
    }
    &.title {
      position: relative;
      h1 {
        margin: 0;
      }
    }
    &.time {
      span {
        margin-right: 1rem;
        opacity: .6;
        i {
          margin-right: .5rem;
        }
      }
    }
  }
}
</style>
