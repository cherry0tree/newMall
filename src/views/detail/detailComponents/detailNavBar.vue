<template>
  <div class="detailNavBar">
    <navBar>
      <img slot="left" src="@/assets/img/icons/back.svg" 
           alt=""
           class="back"
           @click="backClick">
      <div slot="center" class="title">
        <div v-for="(item, index) in title" 
             :key="index"
              class="detailBarStyle"
              @click="itemClick(index)"
              :class="{active: curIndex === index}">
          {{item}}
        </div>
      </div>
    </navBar>
  </div>
</template>

<script>
import navBar from '@/components/common/navBar/navBar.vue'

  export default {
    name: 'detailNavBar',
    components: {
      navBar
    },
    data() {
      return {
        title: ['商品', '参数', '评论', '推荐'],
        curIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.curIndex = index;
        this.$emit('titleClick', index)
      },
      backClick() {
        this.$router.back();
      }
    }
  }
</script>
<style scoped>
.detailBarStyle{
  flex: 1;
}
.title{
  display: flex;
}
.active {
  color: red;
}
.back{
  width: 60px;
  height: 20px;
  margin-top: 12px;
}
</style>