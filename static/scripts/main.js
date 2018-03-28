import Vue from 'vue'

// Routing
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Async HTTP requests
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

// Vue components
import App from './App.vue'
import Callback from './components/Callback.vue'
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
    path: '/',
    name: 'home',
    component: CreateBurrito,
    props: burritos
  },
  {
    path: '/callback',
    name: 'callback',
    component: Callback
  },
  {
    path: '/burritos',
    name: 'burrito-list',
    component: BurritoList,
    props: burritos
  }
]

const router = new VueRouter({ mode: 'history', routes: routes })
export default router

const vm = new Vue(Vue.util.extend({ router }, App)).$mount('#app')
