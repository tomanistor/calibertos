<template>
  <div class="app-container">

    <header>
      <nav>
        <div class="nav-left">
          <router-link to="/" exact>Home</router-link>
          <router-link to="/burritos">Burritos</router-link>
        </div>
        <div class="nav-right">
          <a href="#" v-if="!authenticated" @click="login">Log In</a>
          <span v-if="authenticated">Hey there, {{ profile }}</span>
          <a href="#" v-if="authenticated" @click="logout">Log Out</a>
        </div>
      </nav>
    </header>

    <router-view :auth="auth" :authenticated="authenticated"></router-view>

  </div>
</template>

<script>
  import AuthService from './auth/AuthService'
  // const userProfile = AuthService.userProfile

  const auth = new AuthService()
  const { login, logout, authenticated, authNotifier, getProfile, userProfile } = auth

  export default {
    name: 'app',
    data() {
      authNotifier.on('authChange', authState => {
        this.authenticated = authState.authenticated
      })
      return {
        auth,
        authenticated,
        profile: userProfile
      }
    },
    created: function() {
      auth.getProfile()
      console.log(userProfile)
      console.log(this.userProfile)
      console.log(auth.userProfile)
      console.log(this.auth.userProfile)
      console.log(self.userProfile)
      console.log(AuthService.userProfile)
    },
    mounted: function() {
      auth.getProfile()
      console.log(userProfile)
      console.log(this.userProfile)
      console.log(auth.userProfile)
      console.log(this.auth.userProfile)
      console.log(self.userProfile)
      console.log(AuthService.userProfile)
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

  nav {
    display: grid;
    // grid-template-areas: "nav-left nav-right"
    grid-template-columns: 1fr auto;
    padding: 1rem;
    background-color: $c-2;

    a {
      color: $c-4;

      &:hover {
        color: $c-1;
      }
    }
  }

  .nav-left > * {
    padding: 1rem;
  }

  .nav-right {
    justify-self: end;

    & > * {
      padding: 1rem;
    }
  }
</style>
