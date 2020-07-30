<template>
  <div id="home">
  <navBar class="home-nav"><div slot="center">购物街</div></navBar>
  <scroll class="content" ref="scroll" :probeType="0" @scroll="scrollContent">
    <homeSwiper :banners="banners"></homeSwiper>
    <homeRecommend :recommends="recommends"> </homeRecommend>
    <featureView></featureView>
    <tabControl :titles="['新款', '流行', '精选']" 
                class="tabControl" 
                @tabClick="tabClick"></tabControl>
    <goodsList :goods="showGoods"></goodsList>
  </scroll>
  <backTop @click.native="backTopClick" v-show="isShow"></backTop>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/navBar.vue'
import scroll from 'components/common/scroll/scroll.vue'
import tabControl from 'components/content/tabControl/tabControl'
import goodsList from 'components/content/goods/goodsList'
import backTop from 'components/content/backTop/backTop'

import {getHomeMultiData, getHomeGoods} from "network/home"

import homeSwiper from './childComps/homeSwiper' 
import homeRecommend from './childComps/homeRecommend'
import featureView from './childComps/featureView'


export default {
  components: {
    navBar,
    homeSwiper,
    homeRecommend,
    featureView,
    tabControl,
    goodsList,
    scroll,
    backTop
  },
  data() {
    return {
      //将数据保存在data里面 避免在created消失
      banners: [],
      recommends: [],
      goods: {
        // key value模型
        'pop':{page: 0, list: []},
        'new':{page: 0, list: []},
        'sell':{page: 0, list: []},
      },
      currentType: 'pop',
      isShow: true

    }
  },
  created() {
    this.getHomeMultiData();

    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    //事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backTopClick() {
        this.$refs.scroll.scrollTo(0, 0)
    },
    scrollContent(position) {
      console.log(position)
      this.isShow = -(position.y) > 200
    },
    //网络请求
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods('pop', page).then(res => {
        // this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  }
}
</script>

<style scoped>
.home-nav {
  color: #fff;
  background-color: #000;
}
#home {
  padding-top: 44px;
  height: 2000px;
}
.tabControl {
  position: sticky;
  top: 44px;
}
.content {
  height: 300px;
  /* overflow: hidden; */
}
</style>