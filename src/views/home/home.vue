<template>
  <div class="home">
    <navBar class="navBar">
      <div slot="center">购物街</div>
    </navBar>

    <tabControl :title="['新款', '流行', '精选']"
                @tabClick="tabClick"
                v-show="isbarFixed"
                class="tabControl"
                ref="topTabBar">{{isbarFixed}}</tabControl>

    <scroll class="scrollContent" 
            :probeType="3"
            @scroll="onScroll"
            ref="scroll"
            @pullingUp="loadMore">
      <homeSlider :banner="banner"></homeSlider>
      <homeRecommend :homeRecommend="recommend"></homeRecommend>
      <homeFeatureView></homeFeatureView>
      <tabControl :title="['新款', '流行', '精选']"
                  @tabClick="tabClick"
                  ref="tabControl"></tabControl>
      <goodsList :goods="showGoods"></goodsList>
    </scroll>

    <backTop @click.native="dobackTop" v-show="isShow"></backTop>
  </div>
</template>

<script>
/* eslint-disable */
import navBar from '@/components/common/navBar/navBar.vue';
import scroll from '@/components/common/scroll/scroll.vue';
import tabControl from '@/components/content/tabControl/tabControl.vue';
import backTop from '@/components/content/backTop/backTop.vue';
// 将goods分类到content里面 是因为不仅home会show good list 其他页面也有这个业务逻辑 层次归类更清晰
import goodsList from '@/components/content/goodsList/goodsList.vue';

import homeSlider from './homeComponents/homeSlider.vue';
import homeRecommend from './homeComponents/homeRecommend.vue';
import homeFeatureView from './homeComponents/homeFeatureView.vue';

import {debounce} from '@/common/utils.js'

import {getMultiData, getGoodsData} from '@/network/home'

  export default {
    name: 'home',
    components: {
      navBar,
      scroll,
      tabControl,
      backTop,
      goodsList,
      homeSlider,
      homeRecommend,
      homeFeatureView
    },
    data() {
      return {
        //接收home multidata
        banner: [],
        recommend: [],
        // 向服务器请求goods数据 构建一个数据结构 给page一个初始值 list装每个page对应的list
        goods: {
          new: {page: 1, list: []},
          pop: {page: 1, list: []},
          sell: {page: 1, list: []}
        },
        curType: 'new',
        isbarFixed: false,
        isShow: false,
        refresh: null,
        saveY: 0
      }
    },
    created() {
      //在created时候做异步数据请求，基本上到updated数据就能过来了
      this.homeGetMultiData();
      this.homeGetGoodsData('new')
      this.homeGetGoodsData('pop')
      this.homeGetGoodsData('sell')
    },
    mounted() {

      const refresh = debounce(this.$refs.scroll.refresh, 100)
       this.$bus.$on('imageLoaded', () => {
        refresh()
      })
    },
    activated() {
      this.saveY = this.$refs.scroll.scrollTo(0, this.saveY, 100)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY =  this.$refs.scroll.scroll.y
    },
    methods: {
      homeGetMultiData() {
        getMultiData().then(res => {
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
      },
      homeGetGoodsData(type) {
        let page = this.goods[type].page;
        getGoodsData(type, page).then(res=> {
          console.log(res.data)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++
        })
      },
      tabClick(index) {
        switch (index) {
          case 0:
            this.curType = 'new'
            break
          case 1:
            this.curType = 'pop'
            break
          case 2:
            this.curType = 'sell'
            break            
        }
        //相同点 click 不同点 curindex 处理方式 让两个组件的curIndex相同即可
        this.$refs.tabControl.curIndex = index;
        this.$refs.topTabBar.curIndex = index;
      },
      onScroll(position) {
        this.isbarFixed = -(position.y) > this.$refs.tabControl.$el.offsetTop
        this.isShow = -(position.y) > 300
      },
      dobackTop() {
        this.$refs.scroll.scrollTo(0,0);
      },
      loadMore() {
        //多次调用加载多个page
        this.homeGetGoodsData(this.curType)
        this.$refs.scroll.finishPullUp()
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.curType].list
      }
    }
  }
</script>
<style scoped>
.navBar{
  position: relative;
  background-color:black;
  color: #ccc;
  font-weight: 700;
  z-index: 9;
}

.home {
  height: 100vh;
}
.scrollContent{
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 45px;
}
.tabControl {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
</style>