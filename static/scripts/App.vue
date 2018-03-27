<template>
  <div class="container">
    <header>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/burritos">Burritos</router-link>
      <a href="#" v-if="!authenticated" @click="login">Log In</a>
      <a href="#" v-else @click="logout">Log Out</a>
    </header>
    <router-view :auth="auth" :authenticated="authenticated"></router-view>
  </div>
</template>

<script>
  import AuthService from './auth/AuthService'

  const auth = new AuthService()
  const { login, logout, authenticated, authNotifier } = auth

  export default {
    name: 'app',
    data() {
      authNotifier.on('authChange', authState => {
        this.authenticated = authState.authenticated
      })
      return {
        auth,
        authenticated
      }
    },
    methods: {
      login,
      logout
    }
  }
</script>

<style lang="scss">
  @import "../styles/scss/imports.scss";
  @import "../styles/scss/global.scss";
</style>
