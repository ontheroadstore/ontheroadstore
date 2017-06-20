<template>
  <div class="page" v-bind:class="isMobile ? 'mobile' : 'pc'">
    <!-- 头部 -->
    <MyHeader ref="header" />
    <!-- 主题内容 -->
    <main id="main" :style="{ 'top': margin.top, 'bottom': margin.bottom }" class="main animated" v-smooth-scroll :class="surprises.current">
      <nuxt />
      <MyRandomBackground />
    </main>
    <!-- 底部 -->
    <MyFooter ref="footer" />
    <!-- 搜索组建 -->
    <!-- <MySearch /> -->
    <!-- 加载动画 -->
    <MyLoadAnimation @leaveAnimateEnded="leaveAnimateEnded" />
<!--     <div class="surprises">
      <div class="rainbow">
        <div class="blue"></div>
        <div class="green"></div>
        <div class="yellow"></div>
        <div class="orange"></div>
        <div class="red"></div>
      </div>
    </div> -->
  </div>
</template>
<script>
  import _ from 'underscore'
  import MyHeader from '~components/Header.vue'
  import MyFooter from '~components/Footer.vue'
  import MySearch from '~components/Search.vue'
  import MyLoadAnimation from '~components/loadAnimation.vue'
  import MyRandomBackground from '~components/randomBackground.vue'

  export default {
    data () {
      return {
        margin: {
          top: null,
          bottom: null
        },
        surprises: {
          random: 2,
          current: null,
          array: ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flip', 'flipInX', 'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'hinge', 'rollIn', 'reverted', 'rotated']
        }
      }
    },
    computed: {
      isMobile () {
        return this.$store.state.option.isMobile
      }
    },
    components: {
      MyFooter, MyHeader, MySearch, MyLoadAnimation, MyRandomBackground
    },
    methods: {
      leaveAnimateEnded () {
        this.initSurprises()
      },
      initSurprises () {
        if (_.random(1, this.surprises.random) % this.surprises.random === 0) {
          let surprisesTemp = _.sample(this.surprises.array)
          this.surprises.current = surprisesTemp
          setTimeout(() => {
            this.surprises.current = null
          }, 1200)
        }
      }
    },
    mounted () {
      this.margin.top = this.$refs.header.$el.clientHeight + 'px'
      this.margin.bottom = this.$refs.footer.$el.clientHeight + 'px'
      if (process.env.NODE_ENV === 'production') {
        console.log('%c直接发简历 %cdoub@ontheroadstore.com', 'color:red;font-size:3em;', 'color:red;font-size:13px;')
      }
    }
  }
</script>
<style lang="scss">
  @import '~normalize.css';

  html {
    height:100%;
    overflow:auto;
    background: transparent;
    body {
      color: rgba(0, 0, 0, 0.87);
      font-size: 0.875rem;
      background-color: #f3f3f3;
      -webkit-font-smoothing: antialiased;
      height:100%;
      overflow:hidden;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    *:focus {
      outline: 0 !important;
    }
    a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      outline: 0;
      &:hover,
      &:focus {
        color: inherit;
        text-decoration: none;
      }
    }
    [data-scrollbar] .scrollbar-thumb, [scrollbar] .scrollbar-thumb, scrollbar .scrollbar-thumb {
    // background-color: #13ce66;
    background: rgba(19,206,102,.8);
  }
}
.main {
  position: absolute;
  width: 100%;
  transition-duration: 0.5s;
  transition-property: transform;
  transition-timing-function: ease-out;
  &.reverted {
    transform:rotateY(180deg);
  }
  &.rotated {
    transform:rotate(-35deg);
  }
}
.surprises {
  .rainbow {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 850;
    & > div {
      position: absolute;
      left: -100%;
      top: 0;
      width: 100%;
      height: 20%;
      .blue {
        background: blue;
        top: 80%;
      }
      .green {
        background: green;
        top: 60%;
      }
      .yellow {
        background: yellow;
        top: 40%;
      }
      .orange {
        background: orange; top: 20%;
      }
      .red {
        background: red;
      }
    }
  }
}
</style>
