import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register'
import AdminTable from '../views/AdminTable'
import RecKind from '../views/RecKind'
import Shelf from '../views/Shelf'
import BookInfo from '../views/BookInfo'
import Chapter from '../views/Chapter'
import Search from '../views/Search.vue'
import UserHandle from '../components/content/AdminTable/MainContent/UserHandle.vue'
import BookHandle from '../components/content/AdminTable/MainContent/BookHandle.vue'
import CommentHandle from '../components/content/AdminTable/MainContent/CommentHandle.vue'
import CollectHandle from '../components/content/AdminTable/MainContent/CollectHandle.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: { title: "首页-六一书苑" }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { title: "登录-六一书苑" }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { title: "注册-六一书苑" }
  },
  {
    path: "/search",
    name: "search",
    component: Search,
    meta: { title: "搜索-六一书苑" }
  },
  {
    path: "/info/:bookid",
    name: "info",
    component: BookInfo,
  },
  {
    path: "/chapter/:bookid/:chapterid",
    name: "chapter",
    component: Chapter,
  }, {
    path: "/kind/:index",
    name: "kind",
    component: RecKind,
  },
  {
    path: "/shelf",
    name: "shelf",
    component: Shelf,
    meta: { title: "书架-个人中心-六一书苑" }
  },
  {
    path: "/table",
    name: "table",
    component: AdminTable,
    meta: { title: "后台管理-六一书苑" },
    children: [
      {
        path: "/table",
        redirect: "user",
      },
      {
        path: "user",
        name: "user",
        component: UserHandle,
      },
      {
        path: "book",
        name: "book",
        component: BookHandle,
      },
      {
        path: "comment",
        name: "comment",
        component: CommentHandle,
      },
      {
        path: "collect",
        name: "collect",
        component: CollectHandle,
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
})
export default router
