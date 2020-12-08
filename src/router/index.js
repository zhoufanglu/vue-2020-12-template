import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const fatherSlot = () => import('@/views/slot/fatherSlot')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fatherSlot',
    name: 'fatherSlot',
    component: fatherSlot
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior(to, from){
    if(to.name==='fatherSlot'){
      console.log("36-rp", localStorage.getItem('scroll'))
      return {x:0, y: parseInt(localStorage.getItem('scroll'))}
    }
    console.log("to",to,"from",from)
  }
})

export default router
