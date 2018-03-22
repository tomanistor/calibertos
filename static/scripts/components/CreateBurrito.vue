<template>
  <div>
    <h1>Submit a Burrito</h1>
    <form>
      <div>
        <label>Name:</label>
        <input type="text" v-model="item.name">
      </div>
      <div>
      <label>Price:</label>
      <input type="text" v-model="item.price">
      </div>
      <button @click="addItem">Add Burrito</button>
    </form>
    <BurritoList></BurritoList>
  </div>
</template>

<script>
  import BurritoList from './BurritoList.vue'

  export default {
    data() {
      return {
        item: {}
      }
    },
    components: { BurritoList },
    methods: {
      addItem() {

      }
    }
  }
</script>

<style lang="scss">
  body {
    border: 2px $c-3 solid;
  }
</style>
