<template>
  <div>
    <h1>List of Burritos</h1>
    <ul>
      <li>
        <slot></slot>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'burritolist',
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">

</style>
