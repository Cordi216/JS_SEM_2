import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MainView/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: HomeView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    props: (route) => ({
      image: route.query.image,
      title: route.query.title,
      text: route.query.text
    }),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailView/DetailView.vue')
  },
  {
    path: '/element/:element',
    name: 'element',
    // route level code-splitting
    // this generates a separate chunk (my.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    props: true,
    component: () => import(/* webpackChunkName: "my" */ '../views/ElementView/ElementView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
