import Vue from 'vue'

// Routing
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Async HTTP Requests
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

// User Authentication
import Auth from '@okta/okta-vue'
Vue.use(Auth, {
  issuer: 'https://dev-375168.oktapreview.com/oauth2/default',
  client_id: '0oaeg91o03tks3eIF0h7',
  redirect_uri: 'http://localhost:3000/implicit/callback',
  scope: 'openid profile email'
})

// Vue Components
import App from './App.vue'
import CreateBurrito from './components/CreateBurrito.vue'
import BurritoList from './components/BurritoList.vue'

const burritos = {
  burritos: [
    {
      name: "California Burrito",
      price: 4.95
    },
    {
      name: "Carnitas Burrito",
      price: 5.45
    },
    {
      name: "Baja Fish Burrito",
      price: 6.95
    }
  ]
}

const routes = [
  {
    name: 'CreateBurrito',
    path: '/',
    component: CreateBurrito,
    props: burritos
  },
  {
    path: '/implicit/callback',
    component: Auth.handleCallback()
  },
  {
    name: 'BurritoList',
    path: '/burritos',
    component: BurritoList,
    props: burritos
  }
]

const router = new VueRouter({ mode: 'history', routes: routes })

// Check authentications on each route
router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

new Vue(Vue.util.extend({ router }, App)).$mount('#app')
