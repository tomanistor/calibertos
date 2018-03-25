<template>
  <div>
    <h1>Submit a Burrito</h1>
    <form>
      <div>
        <label>Name</label>
        <input type="text" v-model.trim="newBurrito.name">
      </div>
      <div>
        <label>Price</label>
        <input type="text" v-model.trim="newBurrito.price" v-on:keypress="isNumber()" maxlength="5">
      </div>
      <input type="button" @click="createBurrito()" value="Add Burrito">
      <input type="button" @click="destroyBurrito()" value="Clear">
    </form>
    <burrito-list :burritos="burritos"></burrito-list>
  </div>
</template>

<script>
  import BurritoList from './BurritoList.vue'

  export default {
    name: 'create-burrito',
    components: { BurritoList },
    props: ['burritos'],
    data() {
      return {
        newBurrito: {
          name: '',
          price: ''
        }
        // burritos: [
        //   {
        //     name: "California Burrito",
        //     price: 4.95
        //   },
        //   {
        //     name: "Carnitas Burrito",
        //     price: 5.45
        //   },
        //   {
        //     name: "Baja Fish Burrito",
        //     price: 6.95
        //   }
        // ]
      }
    },
    methods: {
      isNumber(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
          evt.preventDefault();;
        } else {
          return true;
        }
      },
      createBurrito() {
        let burrito = this.newBurrito
        if (burrito.name.length >= 1 && burrito.price.length >= 1) {
          // Place new burrito in burritos array
          this.burritos.push({
            name: burrito.name,
            price: burrito.price
          })
          // Reset burrito inputs to empty strings
          burrito.name = ''
          burrito.price = ''
        }
      },
      destroyBurrito() {
        this.newBurrito.name = ''
        this.newBurrito.price = ''
      }
    }
  }
</script>

<style lang="scss">

</style>
