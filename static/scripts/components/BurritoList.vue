<template>
  <div>
    <h1>List of Burritos</h1>
    <ul>
      <li v-for="burrito in burritos">
        <span>{{ burrito.name }}</span>
        <span>{{ burrito.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'burrito-list',
    props: ['burritos'],
    data() {
      return {
      }
    },
    methods: {
      createBurrito() {
        this.$emit('burrito-created')
        console.log('adding burrito to list')
      }
    },
    created() {
      console.log(this.burritos)
    },
    mounted() {
      console.log(this.burritos)
    }
  }
</script>

<style lang="scss">

</style>
