<template>
  <div class="goods">
    <goodsListItem v-for="item in goods" :goodsItems="item">
      {{goods}}
    </goodsListItem>
  </div>
</template>

<script>
import  goodsListItem from "./goodsListItem"

export default {
    components: {
      goodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
}
</script>

<style>

</style>