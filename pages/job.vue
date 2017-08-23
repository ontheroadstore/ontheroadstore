<template>
  <div class="container">
    <div class="page-bg" v-lazy:background-image="'/job_01.jpg'"></div>
    <div class="about">
      <el-row>
        <el-col :span="14" :offset="5">
          <img v-lazy="'/job_02.jpg'">
        </el-col>

        <el-col :span="14" :offset="5" class="text">
          <h2>## 行业：</h2>
          <p>青年文化内容电商平台</p>
          <hr>
          <h2>## 福利：</h2>
          <p>1. 弹性工作时间，弹性工作时间，弹性工作时间（重要的事说3遍）。</p>
          <p>2. 五险一金，带薪休假。</p>
          <p>3. 没事部门也有腐败小聚会，喝酒，打德州扑克，各类日常福利活动。</p>
          <p>4. 公路商店老公，小白带你去鼓楼喝酒，蹦迪，呲妞，看演出。</p>
          <p>5. 每年出国游玩机会 <el-tag>泰国</el-tag>、<el-tag>日本</el-tag>、<el-tag>美国</el-tag>、<el-tag>欧洲</el-tag><span class="cheater">（ps：反正老板承诺说过，却从来没有兑现过）</span></p>
          <p>6. 茶水间，进口零食雪糕饮料随便吃随便喝。<span class="cheater">（ps：是的零食要花钱的。）</span></p>
        </el-col>

        <el-col :span="14" :offset="5">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="产品经理 15~25k" name="1">
              <h3>## 要求：</h3>
              <p>1. 两年及以上产品设计经验并主导过百万级用户以上产品者优先考虑（电商行业最好）</p>
              <p>2. 拥有良好的数据分析能力以及行业判断力</p>
              <p>3. 拥有敏锐的洞察力，富有创新意识，对行业新模式敏感</p>
              <p>4. 拥有出色的沟通、协调能力，还要有优秀的执行力和工作的责任心。</p>
              <p>5. 了解亚马逊，etsy 或者fancy 等电商在发展过程中的迭代变化和迭代逻辑</p>
              <h3>## 面试产品经理之前，希望先写一份关于公路商店的产品调研报告在邮件里，以便我们更佳了解彼此 **（我们将会送给你一些黑市的礼品）**</h3>
              <p>1. 请列举出你平时常用的 APP</p>
              <p>2. 请列举出你平时常上的网站</p>
              <p>3. 你最常用的电商类 APP 是哪个？</p>
              <p>4. 描述etsy（买家版）／ Sell on etsy（卖家版） 产品的整个流程包括购物，社交，博客逻辑</p>
              <p>5. 这个 APP 的推广模式是什么？</p>
              <p>6. 如果让你改进这个 APP ，你会怎么改？理由？</p>
              <p>7. 你对黑市产品本身的理解？</p>
              <p>8. 如果让你改进黑市，你会怎么做？</p>
              <h3>## 联系：</h3>
              <p>doub#ontheroadstore.com</p>
            </el-collapse-item>
            <el-collapse-item title="公路商店 - 编辑 20k+++" name="2">
              <p>那些过时的岗位条件找过来的人往往只热衷于下楼去帮人拿快件，我们只想要有意思的朋友来挑逗我们头脑风暴的G点。</p>
              <p>在推文发刊内容执行力度上面可以独当一面，有明确的价值输出能力而不是混圈，你可以一篇公路商店的文章都没读过，但是至少得有一定从业经验，或者1000字就让我们高超的奇瘾技巧。</p>
              <p>如果你或者你的朋友有兴趣尝试，欢迎发送意向作品到zhouyu@ontheroadstore.com。</p>
              <p>终于，我们再度开放了公路商店最核心的内容编辑招聘。</p>
              <p>当然如果你沉迷于吟诗和字眼，热衷于朋友圈段子领袖的身份，忘掉刚才这些话，朋友。</p>
            </el-collapse-item>
          </el-collapse>
        </el-col>

        <el-col :span="14" :offset="5" class="text lagou">
          <h2>你也可以直接在 <a href="https://hr.lagou.com/company/gongsi/j75577.html"  target="_blank" rel="nofollow">拉勾网</a> 上直接投递简历</h2>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: '1'
    }
  },
  head () {
    return {
      title: '工作机会'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  z-index: 10;
  .page-bg {
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    border: none;
    height: 100%;
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
      opacity: .2;
      background-repeat: no-repeat;
    }
  }
  .about {
    .el-row {
      padding: 1rem 0;
      .el-col {
        margin-bottom: 1rem;
        &.lagou {
          text-align: center;
          a {
            color: #6cc788;
          }
        }
        &.text {
          padding: 1rem;
          background-color: #fff;
          .cheater {
            color: #fff;
          }
        }
        img {
          display: block;
          max-width: 100%;
        }
      }
    }
  }
}

</style>
