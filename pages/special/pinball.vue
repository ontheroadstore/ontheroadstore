<template>
  <el-main>
    <el-row class="one">
      <el-col :push="2" :span="10" class="logo">
        <img src="/pinball/logo.png" />
      </el-col>
      <el-col :push="2" :span="10" class="nav">
        <el-row>
          <el-col :span="6" class="nav-item">
            <a href="#two">
              <span>文化起源</span>
              <p>Culture & Origin</p>
            </a>
          </el-col>
          <el-col :span="6" class="nav-item">
            <a href="#three">
              <span>机型目录</span>
              <p>Game Catalogue</p>
            </a>
          </el-col>
          <el-col :span="6" class="nav-item">
            <a href="#four">
              <span>活动合作</span>
              <p>cooperation</p>
            </a>
          </el-col>
          <el-col :span="6" class="nav-item">
            <a href="#four">
              <span>预定购买</span>
              <p>Buy</p>
            </a>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="video">
        <video poster="/pinball/pinball_video_bg.jpg" muted loop ref="video">
          <source src="/pinball/pinball.WebM" type="video/WebM" />
        </video>
      </el-col>
      <el-col :push="3" :span="18" class="title">
        <img src="/pinball/pinball_one_01.png" />
      </el-col>
      <el-col class="arrow">
        <img src="/pinball/arrow.png" />
      </el-col>
      <div class="overlay"></div>
    </el-row>
    <el-row class="two" id="two">
      <el-col :push="4" :span="16" class="title">
        <img src="/pinball/pinball_two_01.png" />
      </el-col>
      <el-col :push="2" :span="20" :pull="2" class="item-list">
        <el-row>
          <el-col :pull="1" :span="8">
            <img src="/pinball/pinball_two_02.png" />
            <p>弹珠球是1929年后美国经济崩塌，政府颁布禁酒令时美国人最后一块精神面包。在纽约街头的旅馆或酒吧里，如果有人花3美金玩一把弹球机，积压的阴郁情绪登时一扫而空，黑压压的人群为即将迸射的银色小球屏气凝神，当它穿越所有障碍缓缓流进球洞，那欢呼声甚至能让两条街外排队领取失业救济的人群重燃生活的信心。</p>
          </el-col>
          <el-col :span="8">
            <img src="/pinball/pinball_two_03.png" />
            <p>从1932年弹珠之城芝加哥胡150多家弹珠机公司发展至今天，加里斯特恩半辈子收购或被收购了许多弹球公司，并最终从世嘉手中搞定斯特恩品球公司，成为了现在唯一能够以纯正美式血统IP的形式制造PINBALL的弹珠机巨头。</p>
          </el-col>
          <el-col :push="1" :span="8">
            <img src="/pinball/pinball_two_04.png" />
            <p>如今，在浮华虚幻的网络和电子游戏世界中，斯特恩弹珠球公司仍然坚持着纯正而高贵的血统，续承一贯的手工制作，把无数根电线端口接进电板赋予每一台弹球机独立的品格和灵魂。斯特恩弹球公司仍坚守着戎马倥偬的漫长弹球岁月，等待人们重新发现那个狂野银球诱人的魅力。</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="three" id="three">
      <el-col :push="4" :span="16" class="title">
        <img src="/pinball/col-three-01.png" />
      </el-col>
      <no-ssr placeholder="Loading ...">
        <el-col :push="2" :span="20">
          <carousel :autoplay="true" :perPage="4" :navigationEnabled="true" :paginationEnabled="true" class="carousel">
            <slide>
              <img src="/pinball/SW Pro-GAMEpage.png" />
              <div class="text">星球大战</div>
            </slide>
            <slide>
              <img src="/pinball/GOTproGAMEpage.png" />
              <div class="text">权力游戏</div>
            </slide>
<!--             <slide>
              <img src="/pinball/game_IRONMAN.png" />
              <div class="text">钢铁侠</div>
            </slide>
            <slide>
              <img src="/pinball/ac-dc-pro-game.png" />
              <div class="text">AC/DC</div>
            </slide> -->
            <slide>
              <img src="/pinball/Aerosmith Pro-GAMEpage.png" />
              <div class="text">Aerosmith</div>
            </slide>
            <slide>
              <img src="/pinball/BM66 SUPER LE-GAMEpage.png" />
              <div class="text">蝙蝠侠</div>
            </slide>
            <slide>
              <img src="/pinball/GhostbustersPro-GAMEpage.png" />
              <div class="text">捉鬼敢死队</div>
            </slide>
            <slide>
              <img src="/pinball/SMVEPremiumGAMEpage.png" />
              <div class="text">蜘蛛侠</div>
            </slide>
            <slide>
              <img src="/pinball/SternTWDGamePageshot.png" />
              <div class="text">行尸走肉</div>
            </slide>
            <slide>
              <img src="/pinball/WWEProFrontPageImage.png" />
              <div class="text">WWE</div>
            </slide>
<!--             <slide>
              <img src="/pinball/game_metallica.png" />
              <div class="text">Metallica</div>
            </slide>
            <slide>
              <img src="/pinball/game_AVENGERS-pro.png" />
              <div class="text">复仇者联盟</div>
            </slide> -->
          </carousel>
        </el-col>
      </no-ssr>
    </el-row>
    <el-row class="four" id="four">
      <el-col :push="2" :span="10" class="col-1">
        <img src="/pinball/col-four-01.png">
      </el-col>
      <el-col :span="14" class="col-2">
        <img src="/pinball/col-four-02.jpg">
      </el-col>
    </el-row>
  </el-main>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  head () {
    return {
      title: '弹珠机'
    }
  },
  layout: 'special',
  components: {
    Carousel,
    Slide
  },
  computed: {
    isMobile () {
      return this.$store.state.option.isMobile
    }
  },
  mounted () {
    if (!this.isMobile) {
      this.$refs.video.play()
    }
  }
}
</script>
<style lang="scss" scoped>
.overlay {
  position: absolute;
  background: rgba(34, 34, 34 ,.75);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -100;
}
.one {
  height: 90vh;
  .video {
    top: 0;
    position: absolute;
    overflow: hidden;
    height: 90vh;
    video {
      position: absolute;
      min-width: 100%;
      min-height: 100%;
      height: auto;
      width: auto;
      overflow: hidden;
      z-index: -100;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      background-image: url('/pinball/pinball_video_bg.jpg');
      opacity: 1;
    }
  }
  .logo {
    margin-top: 2rem;
  }
  .nav {
    margin-top: 2rem;
    text-align: right;
    z-index: 999;
    .nav-item {
      color: #fff;
      text-align: center;
      span {
        display: block;
        font-size: 16px;
      }
      p {
        font-size: 12px;
        margin: 0;
        padding: 0;
        margin-top: .2rem;
      }
    }
  }
  .title {
    position: absolute;
    top: 40%;
    img {
      width: 100%;
    }
  }
  .arrow {
    text-align: center;
    position: absolute;
    bottom: 2rem;
  }
}
.two {
  padding: 2rem 0;
  background-color: #ff0036;
  .title {
    text-align: center;
    img {
      width: 60%;
    }
  }
  .item-list {
    margin-top: 2rem;
    img {
      width: 100%;
    }
    p {
      text-indent: 2em;
      line-height: 1.5em;
    }
  }
}
.three {
  padding: 2rem 0;
  background-color: #e6e6e6;
  .title {
    text-align: center;
    img {
      width: 60%;
    }
  }
  .carousel {
    padding-top: 2rem;
    img {
      max-width: 100%;
    }
  }
}
.four {
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
  }
  .col-1 {
    margin-top: 2rem;
  }
}
</style>
