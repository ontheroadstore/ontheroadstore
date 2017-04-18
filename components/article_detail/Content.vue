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
      <article>
        {{ item.content }}
      </article>
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
            view: null
          }
        }
      }
    }
  }
</script>
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
      article {
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
        // border-radius: .5rem;
        p {
          clear: both;
          min-height: 1em;
        }
      }
    }
  }
</style>
