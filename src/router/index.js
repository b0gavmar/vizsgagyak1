import { createRouter, createWebHistory } from 'vue-router'
import AddNew from '../views/AddNew.vue'
import EmberekView from "../views/EmberekView.vue";
import EditView from "../views/EditView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/new",
      name: "new",
      component: AddNew,
    },
    {
      path: "/emberek",
      name: "emberek",
      component: EmberekView,
    },
    {
      path: "/emberek/:emberid",
      name: "ember edit",
      component: EditView,
    },
  ],
});

export default router
