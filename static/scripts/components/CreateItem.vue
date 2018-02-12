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
      <button>Add Burrito</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {}
    }
  },
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
