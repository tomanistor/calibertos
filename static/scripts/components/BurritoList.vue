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
    }
  }
</script>

<style lang="scss">

</style>
