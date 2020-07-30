<template>
  <div class="good-item">
    <img src="goodsItems.show.img" alt="">
    <div>
      <!-- 试下直接放在goodlist行不行 -->
      <p>{{goodsItems.title}}</p>
      <span class="price">{{goodsItems.price}}</span>
      <span class="collect">{{goodsItems.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItems: {
      type: Object,
      default() {
        return []
      }
    }
  }
}
</script>

<style>

good-item {
  padding-bottom: 40px;
}

</style>