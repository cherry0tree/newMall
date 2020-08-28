<template>
<div class="cartListItem">
    <CheckButton @checkBtnClick="checkedChange" v-model="itemInfo.checked"></CheckButton>

    <div class="itemImg">
      <img :src="itemInfo.image" alt="商品图片" @load="imgLoad">
    </div>
    <div class="itemInfo">
      <div class="itemTitle">{{itemInfo.title}}</div>
      <div class="itemDesc">{{itemInfo.desc}}</div>
      <div class="itemBottom">
        <div class="itemPrice-left">¥{{itemInfo.price}}</div>
        <div class="itemCount-right">x{{itemInfo.count}}</div>
      </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
import CheckButton from './checkButton'

export default {
  name: 'cartListItem',
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    imgLoad() {
      console.log(this.itemInfo)
      this.$emit('imgLoad')
    },
    checkedChange() {
      this.itemInfo.checked = !this.itemInfo.checked;
    }
  }
}
</script>
<style scoped>
.cartListItem {
  width: 100%;
  display: flex;
  /* padding: 5px; */
  border-bottom: 1px solid #ccc; 
}
.cartListItem img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.itemInfo {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.itemTitle, .itemDesc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;  
}
.itemBottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.itemPrice-left {
  float: left;
  color: orangered;
}
.itemCount-right {
  float: right;
  margin-right: 110px;
  margin-bottom: 10px;

}
</style>