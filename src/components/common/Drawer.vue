<template>
  <el-drawer
    :visible.sync="drawer"
    :direction="direction"
    :show-close="false"
    :modal="false"
    :size="size"
    :withHeader="false"
  >
    <div><img src="@/assets/img/logo/title.png" /></div>
    <search-bar></search-bar>
    <div class="sign" v-if="$store.state.token == null">
      <router-link to="/login">登录</router-link>/
      <router-link to="/register">注册</router-link>
    </div>
  </el-drawer>
</template>
<script>
import SearchBar from "./SearchBar.vue";
export default {
  components: { SearchBar },
  name: "Drawer",
  data() {
    return {
      drawer: false,
      direction: "ttb",
      size: "20%",
    };
  },
  created() {
    this.getHeight();
  },
  methods: {
    getHeight() {
      window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop >= 200) {
          this.drawer = true;
        } else {
          this.drawer = false;
        }
      });
    },
  },
};
</script>
<style>
.el-drawer {
  box-shadow: none !important;
}
.ttb {
  height: 50px !important;
}
.el-drawer__wrapper {
  height: 50px;
}
.el-drawer__body {
  background: #3e3d43;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.sign {
  display: flex;
  justify-content: space-around;
  width: 6%;
}

.sign a {
  color: #fff;
}
</style>