// Vue Router navigation guard. Wire it in your router (src/router/index.ts):
//
//   import { authGuard } from './authGuard';
//   router.beforeEach(authGuard);
//
// And register the two routes:
//
//   { path: '/login',     name: 'login',     component: () => import('@/views/auth/LoginView.vue') }
//   { path: '/dashboard', name: 'dashboard', component: () => import('@/views/dashboard/DashboardView.vue'),
//     meta: { requiresAuth: true } }
import type { NavigationGuardWithThis } from 'vue-router';
import { auth } from '@/utils/apiClient';
export const authGuard: NavigationGuardWithThis<undefined> = (to) => {
  if (to.meta?.requiresAuth && !auth.isAuthenticated()) {
    return { path: '/login', query: { redirect: to.fullPath } };
  }
  if (to.path === '/login' && auth.isAuthenticated()) {
    return { path: '/dashboard' };
  }
  return true;
};