import _ from 'underscore'

export const state = () => ({
  userAgent: null,
  isMobile: null,
  globalOption: {
    baseCdn: 'http://img8.ontheroadstore.com/www/dist/'
  },
  pageAnimation: {
    switch: true,
    transitionActive: {
      array: ['transitions/0.gif', 'transitions/0.jpg', 'transitions/1.gif', 'transitions/1.jpg', 'transitions/2.gif', 'transitions/2.jpg', 'transitions/3.gif', 'transitions/3.jpg', 'transitions/4.gif', 'transitions/4.jpg', 'transitions/5.gif', 'transitions/5.jpg', 'transitions/6.gif', 'transitions/6.jpg', 'transitions/7.gif', 'transitions/7.jpg', 'transitions/8.gif', 'transitions/9.gif', 'transitions/9.jpg', 'transitions/10.gif', 'transitions/10.jpg', 'transitions/11.gif', 'transitions/11.jpg', 'transitions/12.gif', 'transitions/12.jpg', 'transitions/13.gif', 'transitions/13.jpg', 'transitions/14.gif', 'transitions/14.jpg', 'transitions/15.gif', 'transitions/15.jpg', 'transitions/16.gif', 'transitions/16.jpg', 'transitions/17.gif', 'transitions/17.jpg', 'transitions/18.gif', 'transitions/18.jpg', 'transitions/19.gif', 'transitions/19.jpg', 'transitions/20.gif', 'transitions/21.gif', 'transitions/22.gif', 'transitions/23.gif', 'transitions/24.gif', 'transitions/25.gif', 'transitions/27.gif', 'transitions/28.gif', 'transitions/29.gif', 'transitions/30.gif', 'transitions/1200.gif', 'transitions/horror1.gif', 'transitions/pokemon1.gif', 'transitions/tfelp.gif', 'transitions/tumblr-m2jwxceup81r15otbo5-r1-250.gif', 'transitions/tumblr_l8rhrqykag1qzc4eao1_500.gif', 'transitions/tumblr_lbmcv2oq031qdezf9o1_400.gif', 'transitions/tumblr_lbrfqgasvw1qb8oz7o1_400.gif', 'transitions/tumblr_leod9g5mjp1qa0t82o1_500.gif', 'transitions/tumblr_let12qdtlv1qe0eclo1_r3_500.gif', 'transitions/tumblr_lf5lba3jmp1qeg9a2o1_400.gif', 'transitions/tumblr_lg9n7rhbik1qb68o8o1_400.gif', 'transitions/tumblr_lk0ikbju2k1qbdwboo1_500.gif', 'transitions/tumblr_lkqnt7jeyy1qg39ewo1_500.gif', 'transitions/tumblr_lmpe76cvba1qzniwno1_500.gif', 'transitions/tumblr_lnddjg3mob1qhomlso1_500.gif', 'transitions/tumblr_lpfkqahsqo1qazdhko1_500.gif', 'transitions/tumblr_lpmmenrowy1qazdhko1_500.gif', 'transitions/tumblr_lsjuhx6syq1qaobv7o1_400.gif', 'transitions/tumblr_luxv0pb5cs1r4xjo2o1_250.gif', 'transitions/tumblr_lxmaftq0bd1r50h3xo1_500.gif', 'transitions/tumblr_lxyoq8wefi1rn95k2o1_250.gif', 'transitions/tumblr_m1l7x942j41qz5d8go5_500.gif', 'transitions/tumblr_m1p3n1zdop1r6exezo1_500.gif', 'transitions/tumblr_m2mmngkf7m1rql0f4o1_500.gif', 'transitions/tumblr_m30mr4g62a1rseaazo1_250.gif', 'transitions/vvzu7.gif'],
      active: []
    },
    interImage: {
      number: 7,
      array: ['background/1.png', 'background/10.png', 'background/11.png', 'background/12.png', 'background/13.png', 'background/14.png', 'background/15.png', 'background/16.png', 'background/17.png', 'background/18.png', 'background/19.png', 'background/2.png', 'background/20.png', 'background/3.png', 'background/4.png', 'background/5.png', 'background/6.png', 'background/7.png', 'background/8.png', 'background/9.png', 'background/21.png', 'background/22.png', 'background/23.png', 'background/24bis.png', 'background/26bis.png', 'background/28bis.png', 'background/31bis.png', 'background/33bis.png', 'background/35bis.png', 'background/37bis.png', 'background/38bis.png', 'background/40bis.png', 'background/41bis.png', 'background/43bis.png', 'background/44bis.png', 'background/45bis.png', 'background/46bis.png', 'background/47bis.png', 'background/48bis.png', 'background/292595_3240797013485_1073586111_3087335_34971303_n.png', 'background/295020_357804174262576_176259609083701_967298_825675639_n-1.png', 'background/295184_29909006401694479_100002055408024_675986_503371195_n.png', 'background/301739_371829902860003_176259609083701_1002124_1482773068_n.png', 'background/383522_372353966140930_176259609083701_1003920_296342270_n.png', 'background/383536_374340235942303_176259609083701_1010213_1390217849_n.png', 'background/389718_374322379277422_176259609083701_1010156_394556479_n.png', 'background/389718_374322405944086_176259609083701_1010160_283619923_n-1.png', 'background/394342_365207773522216_176259609083701_988997_1866807191_n.png', 'background/398860_355884117787915_176259609083701_962896_276963769_n.png', 'background/403541_366514546724872_176259609083701_991606_2130718273_n-1.png', 'background/522653_364783180231342_176259609083701_987958_1785661445_n.png', 'background/523671_364133830296277_176259609083701_986380_1633935675_n.png', 'background/524031_379303542112639_176259609083701_1021630_1478131614_n.png', 'background/524264_3630439236548_1141117774_3554167_1795583618_n.png', 'background/525517_371122596264067_176259609083701_1000743_35581657_n.png', 'background/527903_380962198613440_176259609083701_1025155_757548797_n.png', 'background/528151_358563877519939_176259609083701_969914_425908382_n.png', 'background/529740_379292315447095_176259609083701_1021579_212588337_n.png', 'background/529850_375706295805697_176259609083701_1012409_1897331868_n.png', 'background/529988_374088435967483_176259609083701_1009510_998333520_n.png', 'background/530159_201473839969326_100003201353395_335843_1403584592_n.png', 'background/530422_366880410021619_176259609083701_992478_82562104_n.png', 'background/532318_359219980787662_176259609083701_971850_713787897_n.png', 'background/535520_378254005550926_176259609083701_1018995_732144669_n.png', 'background/536009_3550040103249_1040001917_33290290_728290267_n.png', 'background/538638_343255625734879_100001513340933_981098_858368924_n.png', 'background/538683_378882612154732_176259609083701_1020451_1283636355_n.png', 'background/538784_389425437754899_100000623383591_1200590_388179512_n.png', 'background/538902_363654580344202_176259609083701_985379_1341634053_n.png', 'background/538958_3739859219079_1354116612_3373990_728684062_n.png', 'background/540563_375703989139261_176259609083701_1012401_213022673_n.png', 'background/543515_353857241323936_176259609083701_957498_1705406801_n.png', 'background/543515_353857254657268_176259609083701_957501_546782116_n.png', 'background/544746_378881612154832_176259609083701_1020446_93642760_n.png', 'background/544771_357180537658273_176259609083701_965736_420443949_n.png', 'background/557221_361277997248527_176259609083701_976484_2078032897_n.png', 'background/561933_3597970871959_1354116612_3312492_397194019_n.png', 'background/575594_368823583160635_176259609083701_994977_928329617_n.png', 'background/578533_371262399583420_176259609083701_1000938_1636228188_n.png', 'background/579007_3708560476630_1354116612_3360141_214440654_n.png', 'background/579561_363649880344672_176259609083701_985364_1527842879_n.png', 'background/579561_363649887011338_176259609083701_985365_1952188945_n.png'],
      arrayDirections: ['top', 'right', 'bottom', 'left'],
      active: []
    },
    surprises: {
      array: ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flip', 'flipInX', 'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'hinge', 'rollIn', 'reverted', 'rotated'],
      random: 2,
      current: null
    }
  },
  infiniteScroll: {
    callback: null,
    loading: false
  }
})

export const mutations = {
  SET_USER_AGENT: (state, action) => {
    state.userAgent = action
  },
  SET_MOBILE_LAYOUT: (state, action) => {
    state.isMobile = action
  },
  SET_INFINTE: (state, action) => {
    state.infiniteScroll.callback = action
  },
  SET_INFINTE_LOADING: (state, action) => {
    state.infiniteScroll.loading = action
  },
  SET_INTER_IMAGE: (state, action) => {
    state.pageAnimation.interImage.active = []
    let temp = _.sample(state.pageAnimation.interImage.array, Math.ceil(Math.random() * 2) + state.pageAnimation.interImage.number)
    _.each(temp, function (value) {
      let randomLeft = (Math.floor(Math.random() * action.width))
      let randomTop = (Math.floor(Math.random() * action.height))
      state.pageAnimation.interImage.active.push({
        url: state.globalOption.baseCdn + value,
        speed: Math.floor(Math.random() * 4) + 5,
        direction: _.sample(state.pageAnimation.interImage.arrayDirections),
        position: randomLeft + '|' + randomTop,
        left: randomLeft + 'px',
        top: randomTop + 'px'
      })
    })
  },
  SET_SURPRISES: (state, action) => {
    state.pageAnimation.surprises.current = action
  }
}
