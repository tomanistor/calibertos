<template>
  <div class="spinner">
    <img src="../../images/loading.gif" />
  </div>
</template>

<script>
  export default {
    name: 'callback',
    props: ['auth'],
    data() {
      this.auth.handleAuthentication()
      return {}
    }
  }
</script>

<style lang="scss">
  .spinner {
    margin: auto;
  }
</style>
