<template>
<div class="checkButton">
  <div class="iconSelect" :class="{selectActive: checked}" @click="selectItem">
    <img src="~/assets/img/views/cart/tick.svg" alt="">
  </div>
</div>
</template>

<script>
export default {
  name: 'checkButton',
  props: {
    value: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      checked: this.value
    }
  },
  methods: {
    selectItem() {
      this.$emit('checkBtnClick')
    }
  },
  watch: {
    value(newValue) {
      this.checked = newValue;
    }
  }
}
</script>
<style scoped>
.selectActive{
  background-color: #ff8198;
  border-color: #ff8198;
}
.iconSelect{
  position: relative;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
} 
</style>