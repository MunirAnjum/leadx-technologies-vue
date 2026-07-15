import type { NavigationGuardWithThis } from 'vue-router';
import { auth } from '@/utils/apiClient';
export const authGuard: NavigationGuardWithThis<undefined> = (to) => {
  if (to.meta?.requiresAuth && !auth.isAuthenticated()) {
    return { path: '/admin/login', query: { redirect: to.fullPath } };
  }
  if (to.path === '/admin/login' && auth.isAuthenticated()) {
    return { path: '/admin' };
  }
  return true;
};