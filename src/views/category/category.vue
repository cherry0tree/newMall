<template>
  <div class="category">
    <navBar class="navBar">
      <div slot="center">商品分类</div>
    </navBar>
    <div class="content">
      <tabMenu :categories="categories" @selectItem="selectItem"></tabMenu>
      <scroll class="scrollContent" >
        <tabContentCategory :subcategories="showSubcategory"></tabContentCategory>
        <!-- <tabControl :title="['综合', '新品', '销量']"></tabControl>
        <tabContentdetail :categoryDetail="showCategoryDetail"></tabContentdetail> -->
      </scroll>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import scroll from '@/components/common/scroll/scroll.vue';
import navBar from '@/components/common/navBar/navBar.vue';
import tabControl from '@/components/content/tabControl/tabControl.vue';

import tabMenu from './childComps/tabMenu';
import tabContentCategory from './childComps/tabContentCategory';
import tabContentdetail from './childComps/tabContentdetail';

import {POP, SELL, NEW} from "@/common/const";

import {getCategory, getSubcategory, getCategoryDetail} from "network/category";

  export default {
    name: 'category',
    components: {
      scroll,
      navBar,
      tabControl,
      tabMenu,
      tabContentCategory,
      tabContentdetail
    },
    data() {
      return {
        categories: [],
        categoryData: {},
        currentIndex: -1
      }
    },
    created() {
      this.getCategory()
    },
    computed: {
      showSubcategory() {
        console.log(this.currentIndex)
        if(this.currentIndex === -1) return {}
        console.log(this.categoryData[this.currentIndex].subcategories)
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
        if (this.currentIndex === -1) return []
        console.log(this.categoryData[this.currentIndex].categoryDetail[this.currentType])
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods: {
      getCategory() {
        getCategory().then(res => {
          // 得到分类数据
          console.log(res)
          this.categories = res.data.category.list
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                pop:  [],
                new:  [],
                sell: []
              }
            }
          }
          this.getSubcategories(0)
        })
      },
      getSubcategories(index) {
        this.currentIndex = index;
        const mailKey = this.categories[index].maitKey;

        getSubcategory(mailKey).then(res => {
          console.log(res.data)
          this.categoryData[index].subcategories = res.data
          console.log(this.categoryData)
          this.categoryData = {...this.categoryData}
          console.log(this.categoryData)
          this.getCategoryDetail(POP)
          this.getCategoryDetail(SELL)
          this.getCategoryDetail(NEW)
        })
      },
      getCategoryDetail(type) {
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        getCategoryDetail(miniWallkey, type).then(res => {
          console.log(res)
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      },
      
      selectItem(index) {
        this.getSubcategories(index)
      }
    }
  }
</script>
<style scoped>
.category{
  height: 100vh;
}
.navBar{
  position: relative;
  background-color:black;
  font-weight: 700;
  color: #ccc;
  z-index: 9;
}
.scrollContent{
  height: 100%;
  flex: 1;
}
.content{
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
</style>