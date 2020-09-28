<template>
  <div class="detail">
    <detailNavBar class="detailNavBar" @titleClick="titleClick" ref="detailNavBar"></detailNavBar>
    <scroll class="scrollContent"
            ref="scroll"
            @scroll="contentScroll"
            :probeType="3"
             >
      <detailSlider :topImages="topImages"></detailSlider>
      <detailGoodsInfo :goodsInfo="goodsInfo"></detailGoodsInfo>
      <detailShopInfo :shop="shop"></detailShopInfo>
      <detailGoodsimg :detailImg="detailImg" @imgLoad="imgLoad"></detailGoodsimg>
      <detailGoodsParam :goodsParam="goodsParam" ref="Param"></detailGoodsParam>
      <detailCommentInfo :commentInfo="commentInfo" ref="Comment"></detailCommentInfo>
      <detailRecommend :recommendList="recommendList" ref="Recommend"></detailRecommend>
    </scroll>
    <detailBottomBar @addToCart="addToCart"></detailBottomBar>
  </div>
</template>

<script>
/* eslint-disable */
import detailNavBar from './detailComponents/detailNavBar'
import detailSlider from './detailComponents/detailSlider'
import detailGoodsInfo from "./detailComponents/detailGoodsInfo.vue"
import detailShopInfo from "./detailComponents/detailShopInfo.vue"
import detailGoodsimg from "./detailComponents/detailGoodsimg.vue"
import detailGoodsParam from "./detailComponents/detailGoodsParam.vue"
import detailCommentInfo from "./detailComponents/detailCommentInfo.vue"
import detailBottomBar from "./detailComponents/detailBottomBar.vue"
import detailRecommend from './detailComponents/detailRecommend.vue'

import scroll from '@/components/common/scroll/scroll.vue';

import {debounce} from '@/common/utils.js'

import {getDetailViewData, getGoodsInfo, ShopInfo, goodsParam, getRecommend} from "network/detail"

  export default {
    name: 'detail',
    components: {
      scroll,
      detailNavBar,
      detailSlider,
      detailGoodsInfo,
      detailShopInfo,
      detailGoodsimg,
      detailGoodsParam,
      detailCommentInfo,
      detailBottomBar,
      detailRecommend
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goodsInfo: {},
        recommendList: [],
        shop: {},
        detailImg: {},
        newRefresh: null,
        goodsParam: {},
        commentInfo: {},
        titleTopY: [],
        getTitleTopY: null,
        curIndex: 0
      }
    },
    created() {
      this.iid = this.$route.params.id;
      getDetailViewData(this.iid).then(res => {
        this.topImages = res.result.itemInfo.topImages
        console.log(res.result)
        this.goodsInfo = new getGoodsInfo(res.result.itemInfo,
                                          res.result.columns,
                                          res.result.shopInfo.services)
        this.shop = new ShopInfo(res.result.shopInfo)
        this.detailImg = res.result.detailInfo
        this.goodsParam = new goodsParam(res.result.itemParams.info, res.result.itemParams.rule)

        console.log(res.result)
        if (res.result.rate.list) {
          this.commentInfo = res.result.rate.list[0]
        }
        getRecommend().then((res, error) => {
          if (error) return
          this.recommendList = res.data.list
          console.log(this.recommendList)
        })
      })
    },
    mounted() {
        this.newRefresh = debounce(this.$refs.scroll.refresh, 500)
        this.getTitleTopY = debounce(() => {
        this.titleTopY.push(0)
        this.titleTopY.push(this.$refs.Param.$el.offsetTop)
        this.titleTopY.push(this.$refs.Comment.$el.offsetTop)
        this.titleTopY.push(this.$refs.Recommend.$el.offsetTop)
      }, 1000)
    },
    methods: {
      imgLoad() {
        console.log('enter newfre')
        this.newRefresh()
        this.getTitleTopY()
        
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.titleTopY[index], 100)
      },
      contentScroll(position) {
        let length = this.titleTopY.length
        console.log(length)
        const curPositionY = -position.y
        console.log(curPositionY)
        for(let i = 0; i < length; i++) {
          let position = this.titleTopY[i]
          console.log(position)
          if (i < (length - 1) && curPositionY >= this.titleTopY[i] && (curPositionY < this.titleTopY[i+1] || curPositionY < this.titleTopY[i+2]) || (i == length - 1) && curPositionY >= position) {
            this.curIndex = i;
            this.$refs.detailNavBar.curIndex = this.curIndex;
            console.log(this.curIndex)
          }
        }
      },
      addToCart() {
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goodsInfo.title;
        product.desc = this.goodsInfo.desc;
        product.price = this.goodsInfo.nowPrice;
        product.iid = this.iid;
        this.$store.commit('addCart', product)
      }
    }
  }
</script>
<style scoped>
.scrollContent{
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 58px;
}
.detailNavBar{
  position: relative;
  background-color: #fff;
  z-index: 9;
}
</style>