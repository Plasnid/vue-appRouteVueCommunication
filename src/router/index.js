import Vue from 'vue'
import VueRouter from 'vue-router'
import Sign_In from '../views/Sign_In.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Sign_In',
    component: Sign_In
  }
  ,
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Home.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/profile_edit',
    name: 'Profile_Edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Profile_Edit.vue')
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/CheckOut.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
