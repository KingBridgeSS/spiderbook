import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Post from '../components/Post'
import Book from '../components/Book'
import Update from '../components/Update'
import About from '../components/About'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/post',
      component: Post
    },
    {
      path: '/book',
      component: Book
    },
    {
      path: '/update',
      component: Update
    },
    {
      path:'/about',
      component:About
    }
  ]
})
