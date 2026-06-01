import { createRouter, createWebHistory } from 'vue-router'

import { authGuard } from './authGuard';
import HomeView from '@/views/HomeView.vue'

// Service pages
import CustomDevelopment from '@/views/CustomDevelopment.vue'
import CloudMigration from '@/views/CloudMigration.vue'
import ProjectOutsourcing from '@/views/ProjectOutsourcing.vue'
import SystemIntegration from '@/views/SystemIntegration.vue'
import SalesforceServices from '@/views/SalesforceServices.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/login', name: 'login', component: () => import('@/views/auth/LoginView.vue') },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/DashboardView.vue'),
    meta: { requiresAuth: true }
  },
    // Existing routes
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/who-we-are',
      component: () => import('@/views/WhoWeAreView.vue'),
    },

    {
      path: '/what-we-do',
      component: () => import('@/views/WhatWeDoView.vue'),
    },

    {
      path: '/services',
      component: () => import('@/views/ServicesView.vue'),
    },

    {
      path: '/artificial-intelligence',
      component: () => import('@/views/ArtificialIntelligenceView.vue'),
    },

    {
      path: '/case-studies',
      component: () => import('@/views/CaseStudiesView.vue'),
    },

    {
      path: '/blog',
      component: () => import('@/views/BlogView.vue'),
    },

    {
      path: '/contact',
      component: () => import('@/views/ContactView.vue'),
    },

    // Service dropdown pages
    {
      path: '/custom-development',
      component: CustomDevelopment,
    },

    {
      path: '/cloud-migration',
      component: CloudMigration,
    },

    {
      path: '/project-outsourcing',
      component: ProjectOutsourcing,
    },

    {
      path: '/system-integration',
      component: SystemIntegration,
    },

    {
      path: '/salesforce-services',
      component: SalesforceServices,
      
    },
  ],
  

  scrollBehavior() {
    return { top: 0 } 
  },
})

  router.beforeEach(authGuard);

export default router

