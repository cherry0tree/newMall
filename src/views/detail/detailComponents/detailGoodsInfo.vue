<template>
  <div v-if="Object.keys(goodsInfo).length !== 0" class="detailGoodsInfo">
    <div class="infoTitle">{{goodsInfo.title}}</div>

    <div class="infoPrice">
      <span class="newPrice">{{goodsInfo.newPrice}}</span>
      <span class="oldPrice">{{goodsInfo.oldPrice}}</span>
      <span class="discount">{{goodsInfo.discount}}</span>
    </div>

    <div class="infoOther">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>

    <div class="infoService">
      <span class="infoServiceItem" v-for="(item,index) in goodsInfo.services" :key="index">
        <img :src="goodsInfo.services[index].icon">
        <span>{{goodsInfo.services[index].name}}</span>
      </span>
    </div>
  </div>
</template>



<script>
    // this.title = itemInfo.title;
    // this.desc = itemInfo.desc;
    // this.newPrice = itemInfo.price;
    // this.oldPrice = itemInfo.oldPrice;
    // this.discount = itemInfo.discountDesc;
    // this.columns = columns;
    // this.services = services;
    // this.nowPrice = itemInfo.highNowPrice;
  export default {
    name: 'detailGoodsInfo',
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>
<style scoped>
.detailGoodsInfo{
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.infoTitle{
  color: #222;
}
.infoPrice{
  margin-top: 10px;
}
.infoPrice .newPrice{
  font-size: 24px;
  color: red;
}
.infoPrice .oldPrice{
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.infoPrice .discount{
  font-size: 12px;
  padding: 2px 5px;
  color: red;
  border-radius: 8px;
  margin-left: 5px;
}
.infoOther{
  display: flex;
  margin-top: 15px;
  line-height: 30px;
  font-size: 13px;
  border-bottom: 1px solid rgba(100,100,100,.1);
  justify-content: space-between;
}
.infoServiceItem img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;    
}
.infoServiceItem span {
    font-size: 13px;
    color: #333;  
}
</style>