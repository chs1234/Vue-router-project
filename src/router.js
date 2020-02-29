import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => {
  return import(/* webpackChunkName: "about" */ './views/About.vue')
}

const Users = () => import(/* webpackChunkName: "users" */ './views/Users.vue')

export default new Router({
  mode: 'history', // default는 #(해쉬) 모드 => /#/, /#/about
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    }
  ]
})
