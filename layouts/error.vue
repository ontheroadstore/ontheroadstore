<template>
  <div class="container">
    <div class="content">
      <div class="error">
        <div class="error-content">
          <h1 class="error-code">{{ error.statusCode }}</h1>
          <div class="error-wrapper-message">
            <h2 class="error-message">{{ error.message }}</h2>
            <h2 class="error-massage">傻逼后端，操他妈老子出错了</h2>
          </div>
          <p>
            <nuxt-link class="error-link" to="/" v-if="error.statusCode === 404">返回首页</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
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
    .content {
      .error {
        position: relative;
        // min-height: 100vh;
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
  }
</style>
