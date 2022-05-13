<template>
  <div class="home">
    <drawer></drawer>
    <div class="top_bar">
      <div class="weather">{{ weather }}</div>
      <div class="words">{{ lyric }}</div>
      <div class="manage" v-if="$store.state.token == null">
        <router-link to="/login">登录</router-link>&nbsp;/&nbsp;
        <router-link to="/register">注册</router-link>
      </div>
      <div class="nick" v-else>
        你好,{{ $store.state.nick }}&nbsp;&nbsp;|&nbsp;&nbsp;<span
          @click="returnLogin()"
          >退出</span
        >
      </div>
    </div>
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
      lyric: "",
      weather: "",
    };
  },
  created() {
    this.homeData();
  },
  computed: {},
  methods: {
    homeData() {
      let data = {
        index: 0,
      };
      getBook(6, data).then((res) => {
        this.list = res.data.rec.list;
        let books = res.data.rec.shouye;
        this.recbooks = {
          lunbotu: res.data.rec.lunbotu,
          renqi: books.slice(0, 17),
          xinxiu: books.slice(17, 34),
          remen: books.slice(34, 49),
          xianshi: books.slice(49, 53),
        };
        this.weather =
          res.data.weather.city +
          "  " +
          res.data.weather.date +
          "  " +
          res.data.weather.weather[0].weather;
        this.lyric = res.data.words.hitokoto;
      });
    },
    returnLogin() {
      localStorage.removeItem("nick");
      localStorage.removeItem("token");
      location.reload();
      alert("退出成功！");
    },
  },
};
</script>
<style scoped>
.top_bar {
  display: flex;
  margin: 5px 50px;
  justify-content: space-between;
}
.nick {
  font-size: 15px;
}

.nick span {
  color: #a6a6a6;
  transition: color 0.3s;
  cursor: pointer;
}

.nick span:hover {
  color: #ed4259;
}
</style>