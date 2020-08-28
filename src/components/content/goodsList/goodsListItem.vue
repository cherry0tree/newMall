<template>
<div class="goodsItem" @click="itemClick">
  <img :src="getImg"  @load="imageLoad" alt="">
  <div class="goodsInfo">
    <p>{{goods.title}}</p>
    <span class="price">{{goods.price}}</span>
    <span class="collect">{{goods.cfav}}</span>
  </div>
</div>
</template>

<script>
  export default {
    name: 'goodsListItem',
    props: {
      goods: {
        type: Object
      }
    },
    computed: {
      getImg() {
        console.log(this.goods)
        return  this.goods.image || this.goods.show.img  
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('imageLoaded')
      },
      itemClick() {
        this.$router.push('/detail/' + this.goods.iid)
      }
    }
  }
</script>
<style scoped>

.goodsItem{
  position: relative;
  width: 49%;
}

.goodsItem img{
  border-radius: 5px;
  width: 100%;
}
 .goodsInfo {
  font-size: 12px;
  position: relative;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goodsInfo p {
  margin-top: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.collect{
  position: relative;
}
 .price {
  color: red;
  margin-right: 20px;
}

.collect::before{
  content: '';
  position: absolute;
  left: -18px;
  top: 2px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/views/home/collect.svg") 0 0/14px 14px;
}
</style>