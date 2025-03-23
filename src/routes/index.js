import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Main.vue';
import Admin from '../views/Admin.vue';
import Login from '../views/Login.vue';
import Galeria from '@/components/Galeria.vue';
import NotFound from '../views/NotFound.vue'; // Asegúrate de que este archivo existe
import GaleriaImagenes from '@/components/Galeria-Imagenes.vue';
import Nosotros from '@/components/Nosotros.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/admin-home', component: Admin, },
  { path: '/admin', component: Login },
  { path: '/galeria', component: GaleriaImagenes },
  { path: '/galeria/:categoria', component: Galeria },
  { path: '/nosotros', component: Nosotros },
  { path: '/:pathMatch(.*)*', component: NotFound }, // Ruta 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
