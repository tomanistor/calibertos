import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

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
    name: 'BurritoList',
    path: '/burritos',
    component: BurritoList,
    props: burritos
  }
]

const router = new VueRouter({ mode: 'history', routes: routes })
new Vue(Vue.util.extend({ router }, App)).$mount('#app')
