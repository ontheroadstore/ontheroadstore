<template>
  <el-container>
    <el-main>
      <div class="container">
        <div class="error">
          <div class="error-content">
            <h1 class="error-code">{{ error.statusCode }} <img src="/404.png" width="88" height="120" /></h1>
            <div class="error-wrapper-message">
              <h2 class="error-massage">{{ error.message }}</h2>
            </div>
            <p>
              <nuxt-link class="error-link" to="/" v-if="error.statusCode === 404">返回首页</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  props: ['error'],
  head () {
    return {
      title: this.error.message
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  .error {
    position: relative;
    width: 100%;
    overflow: hidden;
    text-align: center;
    padding: 2em 0;
    .error-content {
      .error-code {
        font-size: 9rem;
      }
    }
  }
}
</style>
