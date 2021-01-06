import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const fatherSlot = () => import('@/views/slot/fatherSlot')

const pageA = () => import('@/views/keepAlive/pageA')
const pageB = () => import('@/views/keepAlive/pageB')
const pageC = () => import('@/views/keepAlive/pageC')

const swiper = () => import('@/views/swiper')
const carousel3D = () => import('@/views/carousel3D')

const mixinsPage = () => import('@/views/mixin/mixinsPage')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      keepAlive:false //需要被缓存的组件
    },
  },
  {
    path: '/fatherSlot',
    name: 'fatherSlot',
    component: fatherSlot,
    meta:{
      keepAlive:false //需要被缓存的组件
    },
  },
  {
    path: '/pageA',
    name: 'pageA',
    component: pageA,
    meta:{
      keepAlive:true //需要被缓存的组件
    },
  },
  {
    path: '/pageB',
    name: 'pageB',
    component: pageB,
    meta:{
      keepAlive:false //需要被缓存的组件
    },
  },
  {
    path: '/pageC',
    name: 'pageC',
    component: pageC,
    meta:{
      keepAlive:false //需要被缓存的组件
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: swiper
  },
  {
    path: '/carousel3D',
    name: 'carousel3D',
    component: carousel3D
  },
  {
    path: '/mixinsPage',
    name: 'mixinsPage',
    component: mixinsPage
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior(to, from){
    if(to.name==='fatherSlot'){
      console.log("36-rp", localStorage.getItem('scroll'))
      return {x:0, y: parseInt(localStorage.getItem('scroll'))}
    }
  }
})

export default router
