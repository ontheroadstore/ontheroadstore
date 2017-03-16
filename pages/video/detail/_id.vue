<template>
  <div class="container">
    <section class="page-bg" v-lazy:background-image="banner[1]"></section>
    <el-row class="video-detail">
      <el-col :sm="{ span: '24' ,push : '0' ,pull : '0' }" :md="{ span: '18' ,push : '3' ,pull : '3' }" :lg="{ span: '20' ,push : '2' ,pull : '2' }"
      class="video">
      <video controls="controls" src="http://182.254.72.15/vhot2.qqvideo.tc.qq.com/o0300d1mqy0.p702.1.mp4?sha=3B9D14343597E85F02A7FF60B912D1996D3FEAE1&sdtfrom=v1090&type=mp4&vkey=152F34764259D0BE5DECF0227DF97C21E4EF155989BFAD359D7381DA0A84AE25C386C47940AD9544CFF2A86EA3CF60BFA8739C262B0CD050B4A5B924491AA5D89DE06EBA7A49B208E657C356671031EE2BE8C98BDE2E65BC&level=0&platform=70902&br=60&fmt=hd&sp=0&charge=0&vip=0&guid=9A2F06CB1F58C62C26443F3FA296E50497F4099E&ocid=2617316780&ocid=849876396&ocid=744682762"></video>
    </el-col>
    <el-col class="title" :xs="{ span: '20' ,push : '1' ,pull : '1' }" :sm="{ span: '20' ,push : '1' ,pull : '1' }" :md="{ span: '18' ,push : '3' ,pull : '3' }" :lg="{ span: '20' ,push : '2' ,pull : '2' }">
      <h1>标题</h1>
      <div class="time">
        <span><i class="el-icon-time"></i>2017/02/02</span>
        <span><i class="el-icon-view"></i>10k</span>
      </div>
    </el-col>
    <el-col class="content" :xs="{ span: '20' ,push : '1' ,pull : '1' }" :sm="{ span: '20' ,push : '1' ,pull : '1' }" :md="{ span: '18' ,push : '3' ,pull : '3' }" :lg="{ span: '20' ,push : '2' ,pull : '2' }">
      <article>
        简单的介绍一下吧
      </article>
    </el-col>
    <el-col class="recommend" :span="24">
      推荐视频

    </el-col>
  </el-row>
</div>
</template>
<script>
  import qrCode from '~components/Qrcode'
  export default {
    data () {
      return {
        qrcode: {
          value: 'http://hs.ontheroadstore.com/Portal/HsArticle/index/id/9964.html',
          ec_level: 'M',
          type: 'png',
          size: 5
        },
        banner: [{'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c4.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c1.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c2.jpg'},
        {'url': '/', 'src': 'http://flatfull.com/themes/pulse/images/c3.jpg'}]
      }
    },
    components: {
      'qrCode': qrCode
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    .page-bg {
      z-index: 0;
      top: 0;
      left: 0;
      right: 0;
      border: none;
      height: 80vh;
      background-position: 50% 50%;
      background-size: 0;
      bottom: 0;
      position: absolute;
      background-repeat: no-repeat;
      &:after {
        content: '';
        height: 50%;
        width: 100%;
        background-image: linear-gradient(to bottom,rgba(255,255,255,0),#f2f2f2);
        background-repeat: repeat-x;
        bottom: 0;
        position: absolute;
      }
      &:before {
        content: '';
        background-size: cover;
        background-image: inherit;
        background-position: inherit;
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: .1;
        background-repeat: no-repeat;
      }
    }
    .video-detail {
      position: relative;
      z-index: 10;
      & > .el-col {
        margin-top: 1.5rem;
        // padding-top: 1.5rem;
      }
      .video {
        video {
          width: 100%
        }
      }
      .title {
        h1 {
          margin: 0;
        }
        .time {
          margin-top: 1rem;
          span {
            margin-right: 1rem;
            opacity: .6;
            i {
              margin-right: .5rem;
            }
          }
        }
      }
      .recommend {
        background-color: #1c202b;
      }
    }
  }
</style>
