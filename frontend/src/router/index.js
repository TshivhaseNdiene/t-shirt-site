import { createRouter, createWebHashHistory } from 'vue-router';
import HomeSection from '@/views/HomeSection.vue';

const router = createRouter({
  history: createWebHashHistory('/'), // Fallback to '/' as the base URL
  routes: [
    {
      path: '/',
      name: 'homeView',
      component: HomeSection,
    },
  ],
});

export default router;
