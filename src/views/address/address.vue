<template>
<div class="address">
  <navBar class="navBar">
    <img slot="left" src="@/assets/img/icons/back.svg" 
    alt=""
    class="back"
    @click="backClick">
    <div slot="center" class="loginText">我的地址</div>
  </navBar>
 
  <van-radio-group v-model="default_address" @change="setDefaultAddress">
    <van-cell-group v-for="item in addressList" :key="item.id" class="addressGroup">
				<van-cell
					isLink
					icon="dingwei"
					title="张三"
					label="门店地址: 四川省 成都市 高新区 创新创业园"
				/>

        <van-cell>
					<van-radio
						slot="title"
						:name="item.id"
						@change="setDefaultAddress(item.id)">
						<span>设为默认</span>
					</van-radio>

          <router-link :to="{path: 'addaddress', params: {addressId: item.id}}">
            
          </router-link>

        </van-cell>

    </van-cell-group>

  </van-radio-group>


</div>
</template>

<script>
/* eslint-disable */
import navBar from '@/components/common/navBar/navBar.vue';
import { RadioGroup, CellGroup, Cell, Radio} from "vant";
import 'vant/lib/index.css';

export default {
  name: 'Address',
  components: {
    navBar,
    [Radio.name]: Radio,
    [Cell.name]: Cell,
    [RadioGroup.name]: RadioGroup,
    [CellGroup.name]: CellGroup
  },
  methods: {
    backClick(){
      this.$router.back();
    },
    setDefaultAddress(id) {
      console.log(id);
    }
  },
  data(){
    return {
      default_address: 1,
      addressList: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        }
      ]      
    }
  }
}
</script>
<style  scoped>
.navBar{
  position: relative;
  background-color:black;
  font-weight: 700;
  color: #ccc;
  z-index: 9;
}
.back{
  width: 60px;
  height: 20px;
  margin-top: 12px;
}
.loginText{
  margin-right: 50px;
}
.addressGroup{
  margin-bottom: 10px;
}
.addressGroup:last-child {
    margin-bottom: 0;
}

</style>