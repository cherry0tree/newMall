<template>
<div class="detailCommentInfo" v-if="Object.keys(commentInfo).length !== 0">
  <div class="header">
    <div class="headerTitle">用户评价</div>
    <div class="headerMore">更多</div>
  </div>

  <div class="userInfo">
    <img :src="commentInfo.user.avatar" alt="">
    <span>{{commentInfo.user.uname}}</span>
  </div>

  <div class="detailInfo">
    <p>{{commentInfo.content}}</p>
    <div class="otherInfo">
      <span class="date">{{commentInfo.created | showDate}}</span>
      <span>{{commentInfo.style}}</span>
    </div>
    <div class="infoImg" v-for="(item, index) in commentInfo.images" :key="index">
      <img :src="item" alt="">
    </div>
  </div>
</div>
</template>

<script>
import {formatDate} from "@/common/utils";

export default {
  name: 'detailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate: function (value) {
      let date = new Date(value*1000);
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>
<style scoped>
.header{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0,0,0,.1); 
}
.headerTitle{
  float: left;
  font-size: 15px;  
}
.headerMore{
  float: right;
  margin-right: 10px;
  font-size: 13px;  
}
.userInfo{
  padding: 10px 0 5px;
}
.userInfo img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.userInfo span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px; 
}
.otherInfo {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.date{
  margin-right: 8px;
}
.infoImg{
  margin-top: 10px;
}
.infoImg img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>