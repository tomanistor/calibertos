<template>
  <div class="container">
    <router-view></router-view>
    <router-link to="/">Home</router-link>
    <router-link to="/burritos">Burritos</router-link>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  @import "../styles/scss/imports.scss";
  @import "../styles/scss/global.scss";
</style>
