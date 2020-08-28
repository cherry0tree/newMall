<template>
  <div class="homeRecommed">
    <div class="recommendItem" v-for="(item, index) in homeRecommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>
          {{item.title}}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'homeRecommed',
    props: {
      homeRecommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>
<style scoped>
a {
  text-decoration: none;
  color: black;
}
.homeRecommed {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 15px;
  padding: 15px 0 30px;
  border-bottom: 8px solid #eee;
}
.recommendItem{
  flex: 1;
}
.recommendItem img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>