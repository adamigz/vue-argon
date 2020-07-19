import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import MainPage from "./views/MainPage.vue";
import User from "./views/User.vue";
import Users from "./views/Users.vue";
import Posts from "./views/Posts.vue";
import Albums from './views/Albums.vue';
import Photos from './views/Photos.vue';


Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "mainpage",
      components: {
        header: AppHeader,
        default: MainPage,
        footer: AppFooter
      }
    },
    {
      path: "/albums",
      name: "albums",
      components: {
        header: AppHeader,
        default: Albums,
        footer: AppFooter
      }
    },
    {
      path: "/albums/:id/photos",
      name: "photos",
      components: {
        header: AppHeader,
        default: Photos,
        footer: AppFooter
      }
    },
    {
      path: "/posts",
      name: "posts",
      components: {
        header: AppHeader,
        default: Posts,
        footer: AppFooter
      }
    },
    {
      path: "/users",
      name: "users",
      components: {
        header: AppHeader,
        default: Users,
        footer: AppFooter
      }
    },
    {
      path: "/user/{id}",
      name: "user",
      components: {
        header: AppHeader,
        default: User,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
