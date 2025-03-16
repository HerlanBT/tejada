import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Main.vue';
import Admin from '../views/Admin.vue';
import Login from '../views/Login.vue';
import Galeria from '@/components/Galeria.vue';
import NotFound from '../views/NotFound.vue'; // Asegúrate de que este archivo existe

const routes = [
  { path: '/', component: Home },
  { path: '/admin-home', component: Admin, },
  { path: '/admin', component: Login },
  { path: '/galeria/:categoria', component: Galeria },
  { path: '/:pathMatch(.*)*', component: NotFound }, // Ruta 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
