<template>
  <div class="home">
    <drawer></drawer>
    <logo></logo>
    <home-nav :navlist="list"></home-nav>
    <home-main :books="recbooks"></home-main>
  </div>
</template>
<script>
import { getBook } from "util/network";
import Logo from "components/content/Home/Logo.vue";
import HomeMain from "components/content/Home/HomeMain.vue";
import HomeNav from "components/content/Home/HomeNav.vue";
import Drawer from "components/common/Drawer.vue";
export default {
  name: "Home",
  components: {
    Logo,
    HomeMain,
    HomeNav,
    Drawer,
  },
  data() {
    return {
      list: "",
      recbooks: "",
    };
  },
  created() {
    this.homeData();
  },
  methods: {
    homeData() {
      let data = {
        index: 0,
      };
      getBook(6, data).then((res) => {
        this.list = res.data.list;
        let books = res.data.shouye;
        this.recbooks = {
          lunbotu: res.data.lunbotu,
          renqi: books.slice(0, 17),
          xinxiu: books.slice(17, 34),
          remen: books.slice(34, 49),
          xianshi: books.slice(49, 53),
        };
      });
    },
  },
};
</script>
<style scoped>
</style>