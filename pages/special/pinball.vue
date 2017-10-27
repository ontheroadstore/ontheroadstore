<template>
  <div class="container">
    <parallax :sectionHeight="100" :parallax="false" class="col-one el-row">
      <el-col :span="24" class="col-video">
        <video-bg videoSrcWebm="/pinball/pinball.WebM" poster="/pinball/pinball_video_bg.jpg" :isOverlay="true"></video-bg>
      </el-col>
      <el-col :span="11" :push="1">
        <div class="logo"><img src="/pinball/logo.png"></div>
      </el-col>
      <el-col :span="11" :push="1">
        <div class="nav el-row">
          <el-col :span="6" class="nav-item">
            <a href="#two">
              <span>文化与起源</span>
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
        </div>
      </el-col>
      <el-col :push="2" :span="20" class="col-img-1" v-lazy:background-image.container="'/pinball/pinball_one_01.png'"></el-col>
    </parallax>
    <parallax :sectionHeight="60" :parallax="false" class="col-two el-row" id="two">
      <el-row>
        <el-col :push="4" :span="16" :pull="4" class="title" v-lazy:background-image.container="'/pinball/pinball_two_01.png'"></el-col>
      </el-row>
      <el-col :push="2" :span="20" :pull="2">
        <el-row>
          <el-col :pull="1" :span="8" class="item">
            <div class="image" v-lazy:background-image.container="'/pinball/pinball_two_02.png'"></div>
            <p>弹珠球是1929年后美国经济崩塌，政府颁布禁酒令时美国人最后一块精神面包。在纽约街头的旅馆或酒吧里，如果有人花3美金玩一把弹球机，积压的阴郁情绪登时一扫而空，黑压压的人群为即将迸射的银色小球屏气凝神，当它穿越所有障碍缓缓流进球洞，那欢呼声甚至能让两条街外排队领取失业救济的人群重燃生活的信心。</p>
          </el-col>
          <el-col :span="8" class="item">
            <div class="image" v-lazy:background-image.container="'/pinball/pinball_two_03.png'"></div>
            <p>从1932年弹珠之城芝加哥胡150多家弹珠机公司发展至今天，加里斯特恩半辈子收购或被收购了许多弹球公司，并最终从世嘉手中搞定斯特恩品球公司，成为了现在唯一能够以纯正美式血统IP的形式制造PINBALL的弹珠机巨头。</p>
          </el-col>
          <el-col :push="1" :span="8" class="item">
            <div class="image" v-lazy:background-image.container="'/pinball/pinball_two_04.png'"></div>
            <p>如今，在浮华虚幻的网络和电子游戏世界中，斯特恩弹珠球公司仍然坚持着纯正而高贵的血统，续承一贯的手工制作，把无数根电线端口接进电板赋予每一台弹球机独立的品格和灵魂。斯特恩弹球公司仍坚守着戎马倥偬的漫长弹球岁月，等待人们重新发现那个狂野银球诱人的魅力。</p>
          </el-col>
        </el-row>
      </el-col>
    </parallax>
    <parallax :sectionHeight="70" :parallax="false" class="col-three el-row" id="three">
      <el-row>
        <el-col :push="4" :span="16" :pull="4" class="title" v-lazy:background-image.container="'/pinball/col-three-01.png'"></el-col>
      </el-row>
      <no-ssr placeholder="Loading ...">
        <el-col :push="2" :span="20">
          <carousel :autoplay="true" :perPage="4" :navigationEnabled="true" :paginationEnabled="true" class="carousel">
            <slide>
              <div class="image" style="background-image: url('/pinball/SW Pro-GAMEpage.png');"></div>
              <div class="text">星球大战</div>
            </slide>
            <slide>
              <div class="image" style="background-image: url('/pinball/GOTproGAMEpage.png');"></div>
              <div class="text">权力游戏</div>
            </slide>
            <slide>
              <div class="image" style="background-image: url('/pinball/game_IRONMAN.png');"></div>
              <div class="text">钢铁侠</div>
            </slide>
            <slide>
              <div class="image" style="background-image: url('/pinball/ac-dc-pro-game.png');"></div>
              <div class="text">AC/DC</div>
            </slide>
            <slide>
              <div class="image" style="background-image: url('/pinball/Aerosmith Pro-GAMEpage.png');"></div>
              <div class="text">Aerosmith</div>
            </slide>
            <slide>
              <div class="image" style="background-image: url('/pinball/BM66 SUPER LE-GAMEpage.png');"></div>
              <div class="text">蝙蝠侠</div>
            </slide>
            <slide>
              <div class="image" style="background-image: url('/pinball/GhostbustersPro-GAMEpage.png');"></div>
              <div class="text">捉鬼敢死队</div>
            </slide>
            <slide>
              <div class="image" style="background-image: url('/pinball/SMVEPremiumGAMEpage.png');"></div>
              <div class="text">蜘蛛侠</div>
            </slide>
            <slide>
              <div class="image" style="background-image: url('/pinball/SternTWDGamePageshot.png');"></div>
              <div class="text">行尸走肉</div>
            </slide>
            <slide>
              <div class="image" style="background-image: url('/pinball/WWEProFrontPageImage.png');"></div>
              <div class="text">WWE</div>
            </slide>
            <slide>
              <div class="image" style="background-image: url('/pinball/game_metallica.png');"></div>
              <div class="text">Metallica</div>
            </slide>
            <slide>
              <div class="image" style="background-image: url('/pinball/game_AVENGERS-pro.png');"></div>
              <div class="text">复仇者联盟</div>
            </slide>
          </carousel>
        </el-col>
      </no-ssr>
      <!-- <div class="overlay"></div> -->
    </parallax>
    <parallax :sectionHeight="40" class="col-four el-row" id="four">
      <el-col :push="1" :span="11" class="col-img-1" v-lazy:background-image.container="'/pinball/col-four-01.png'"></el-col>
      <el-col :pull="1" :span="11" class="col-img-2" v-lazy:background-image.container="'/pinball/col-four-02.jpg'"></el-col>
    </parallax>
  </div>
</template>
<script>
import Parallax from '~/components/Parallax'
import VideoBg from '~/components/videoBackground'
import { Carousel, Slide } from 'vue-carousel'

export default {
  layout: 'special',
  components: {
    Parallax,
    'video-bg': VideoBg,
    Carousel,
    Slide
  }
}
</script>
<style lang="scss" scoped>
body {
  background-color: #000;
  .container {
    .overlay {
      position: absolute;
      background: rgba(34, 34, 34 ,.75);
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: -100;
    }
    .col-one {
      .col-video {
        z-index: -999;
      }
      .logo {
        margin-top: 2rem;
      }
      .nav {
        text-align: right;
        margin-top: 2rem;
        .nav-item {
          a {
            color: #fff;
            text-align: center;
            span {
              display: block;
              font-size: 18px;
            }
            p {
              font-size: 12px;
              margin: 0;
              padding: 0;
              margin-top: .2rem;
            }
          }
        }
      }
      .slogan {
        position: absolute;
        text-align: center;
        bottom: 2rem;
        font-size: 16px;
        color: #fc0035;
      }
      .col-img-1 {
        text-align: center;
        position: absolute;
        top: 50%;
        margin-top: -83px;
        height: 12rem;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .col-two {
      background-color: #ff0036;
      .title {
        background-size: contain;
        height: 4rem;
        margin: 2rem 0;
        background-repeat: no-repeat;
        background-position: center;
      }
      .item {
        .image {
          height: 7rem;
          width: 100%;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
        p {
          // padding-top: 14rem;
          font-size: 14px;
          line-height: 28px;
        }
      }
    }
    .col-three {
      background-color: #e6e6e6;
      .title {
        background-size: contain;
        height: 6rem;
        margin: 2rem 0;
        background-repeat: no-repeat;
        background-position: center;
      }
      .carousel {
        .VueCarousel-wrapper {
          .VueCarousel-navigation {
            a {
              font-size: 24px;
            }
          }
        }
        .image {
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          height: 20rem;
        }
        .text {
          text-align: center;
          font-size:26px;
          font-weight: bold;
          font-style: italic;
        }
      }
    }
    .col-four {
      .col-img-1 {
        width: 100%;
        position: absolute;
        top: 10%;
        // left: 0;
        background-size: 40vh;
        height: 20vh;
        background-repeat: no-repeat;
        background-position: 1rem 1rem;
        z-index: 10;
      }
      .col-img-2 {
        width: 100%;
        z-index: -1;
        position: absolute;
        // top: 0;
        bottom: 0;
        background-size: 40vh;
        height: 40vh;
        // margin: 2rem 0;
        background-repeat: no-repeat;
        background-position: right bottom;
      }
    }
  }
}
</style>
