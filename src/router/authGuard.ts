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