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
          <a href="#" v-if="authenticated" @click="logout">Log Out</a>
          <span v-if="authenticated">Hey there, {{ username }}</span>
        </div>
      </nav>
    </header>

    <router-view :auth="auth" :authenticated="authenticated"></router-view>

  </div>
</template>

<script>
  import AuthService from './auth/AuthService'

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
        username: userProfile,
        getuserinfo: console.log('auth0 scope: ' + auth.userProfile)
      }
    },
    methods: {
      login,
      logout,
      getProfile,
      userProfile
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
