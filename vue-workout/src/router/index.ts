import { createRouter, createWebHashHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getSession } from '@/model/session';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: "/my-activity",
      name: "my activity",
      component: () => import("../views/MyActivityView.vue"),
    },
    {
      path: "/friends-activity",
      name: "friends activity",
      component: () => import("../views/FriendsActivityView.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
    },
    {
      path: "/users",
      name: "users",
      component: () => import("../views/UsersView.vue"),
    },
  ],
});

function requireLogin(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  
  const session = getSession();
  if(!session.user){
    session.redirectUrl = to.fullPath;
    next('/login');
  }else{
    next();
  }
}

export default router