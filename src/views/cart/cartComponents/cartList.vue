<template>
<div class="cartList">
  <cartListItem v-for="item in cartList" 
                :key="item.iid" 
                :itemInfo="item">
  </cartListItem>
</div>
</template>

<script>
import cartListItem from './cartListItem'
import { mapGetters } from 'vuex'

export default {
  name: 'cartList',
  components: {
    cartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  }

}
</script>
<style scoped>

</style>