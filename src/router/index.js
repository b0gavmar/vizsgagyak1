import { createRouter, createWebHistory } from 'vue-router'
import AddNew from '../views/AddNew.vue'
import EmberekView from "../views/EmberekView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'new',
      component: AddNew,
    },
    {
      path: '/emberek',
      name: 'emberek',
      component: EmberekView,
    },
  ],
})

export default router
