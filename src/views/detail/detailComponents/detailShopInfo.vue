<template>
  <div class="detailShopInfo">

    <div class="shopTop">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>

    <div class="shopMiddle">

      <div class="shopMiddleLeft">
        <div class="CountContainer">
          {{shop.sells | sellCountFilter}}
          <div class="sellText">总销量</div>
        </div>
        <div class="totalItems">
          <div class="goodsCount">{{shop.goodsCount}}</div>
          <div class="goodsText">全部宝贝</div>
        </div>
      </div>

      <div class="shopMiddleRight">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'scoreBetter': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'betterMore': item.isBetter}">{{item.isBetter ? '高':'低'}}</td>
          </tr>
        </table>
      </div>

    </div>
    

    <div class="shopBottom">
      <div class="enterShop">进店逛逛</div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'detailShopInfo',
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      sellCountFilter: function(value) {
        if (value < 10000) return value;
          return (value/10000).toFixed(1) + '万'
      }
    }
  }
</script>
<style scoped>
.detailShopInfo {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shopTop{
 line-height: 45px;
 display: flex;
 align-items: center;
}
.shopTop img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.1);
}
.shopTop .title {
  margin-left: 10px;
  vertical-align: center;
}
.sellText, .goodsText {
  margin-top: 10px;
  font-size: 12px;
}
.shopBottom {
  text-align: center;
  margin-top: 10px; 
}
.enterShop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 10px;
}
.shopMiddle {
  display: flex;
}
.shopMiddleRight .score {
  color: #5ea732;
}
.shopMiddleRight .scoreBetter {
  color: #f13e3a;
}
.betterMore .better {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
}
.shopMiddleRight .betterMore {
  background-color: #f13e3a;
}
.goodsCount {
  font-size: 18px;
}
.shopMiddleRight table{
  width: 120px;
  margin-left: 30px;
}
.shopMiddleRight table td{
  padding: 5px 0;
}
.shopMiddleLeft {
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  margin-top: 25px;
  border-right: 1px solid rgba(0,0,0,.1);
}

.shopMiddle .shopMiddleRight {
  flex: 1;
  font-size: 13px;
  color: #333;
}
.better {
  background-color: #5ea732;
  color: #fff;
  text-align: center; 
}
</style>