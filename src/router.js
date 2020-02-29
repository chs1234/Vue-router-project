import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => {
  return import(/* webpackChunkName: "about" */ './views/About.vue')
}

const Users = () => import(/* webpackChunkName: "users" */ './views/Users.vue')
const UsersDetail = () => import(/* webpackChunkName: "users-detail" */ './views/UsersDetail.vue')
const UsersEdit = () => import(/* webpackChunkName: "users-edit" */ './views/UsersEdit.vue')

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
      // beforeEnter(to, from, next) {
      //   console.log("beforeEnter");
      //   next();

      //   // if (isUserLogin === true) {
      //   //   next()
      //   // } else {
      //   //   next('/')
      //   // }
      // },
      component: Users,
      children: [
        {
          path: ':id',
          name: 'users-detail',
          component: UsersDetail
        },
        {
          path: ':id/edit',
          name: 'users-edit',
          component: UsersEdit
        }
      ]
    },
    {
      path: '/redirect-me',
      // redirect: "/Users"
      redirect: {
        name: 'users'
      }
    },
    {
      path: "/*",
      redirect: {
        name: 'home'
      }
    }
  ]
})
