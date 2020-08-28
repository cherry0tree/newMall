<template>
<div v-if="Object.keys(goodsParam).length !== 0" class="detailGoodsParam">
  <table v-for="(table, index) in goodsParam.sizes" :key="index">
    <tr v-for="(tr, indey) in table" :key="indey">
      <td v-for="(td, indez) in tr" :key="indez">
        {{td}}
      </td>
    </tr>
  </table>

  <table>
    <tr v-for="(info, index) in goodsParam.infos" :key="index">
      <td class="paramKey">{{info.key}}</td>
      <td class="paramvalue">{{info.value}}</td>
    </tr>
  </table>

  <div class="infoImg" v-if="goodsParam.image.length !== 0">
    <img :src="goodsParam.image" alt="">
  </div>
</div>
</template>

<script>
export default {
  name: 'detailGoodsParam',
  props: {
    goodsParam: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.detailGoodsParam table{
  width: 100%;
  border-collapse: collapse;
}
.detailGoodsParam table tr {
  height: 42px;
}
.detailGoodsParam table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.paramKey{
  width: 95px;
}
.paramvalue{
  color: #eb4868
}
.infoImg{
  width: 100%;
}
</style>