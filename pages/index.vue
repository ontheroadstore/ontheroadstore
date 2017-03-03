<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br/>
    <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
    <button @click="open">aaa</button>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
  </section>
</template>
<script>
  export default {
    methods: {
      open () {
        this.$message('这是一条消息提示')
      }
    }
  }
</script>
<style scoped>
  .title
  {
    margin: 50px 0;
  }
</style>
