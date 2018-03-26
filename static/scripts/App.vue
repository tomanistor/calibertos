<template>
  <div class="container">
    <header>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/burritos">Burritos</router-link>
      <a href="#" v-if="!authenticated" v-on:click="login" id="login-button">Login</a>
      <a href="#" v-else v-on:click="logout" id="logout-button">Logout</a>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        authenticated: false
      }
    },
    async created() {
      await this.isAuthenticated()
    },
    watch: {
      // Every time the route changes, check for auth status
      '$route': 'isAuthenticated'
    },
    methods: {
      login() {
        this.$auth.loginRedirect()
      },
      async isAuthenticated() {
        this.authenticated = await this.$auth.isAuthenticated()
      },
      async logout() {
        await this.$auth.logout()
        await this.isAuthenticated()

        // Navigate back to home after logout
        this.$router.push({ path: '/' })
      }
    }
  }
</script>

<style lang="scss">
  @import "../styles/scss/imports.scss";
  @import "../styles/scss/global.scss";
</style>
