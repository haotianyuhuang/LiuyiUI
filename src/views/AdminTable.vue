<template>
  <div class="admin_table" v-loading="loading">
    <el-container style="overflow: hidden; height: 100vh">
      <el-header style="height: auto; padding: 0">
        <el-container>
          <el-aside style="width: auto">
            <img src="~@/assets/img/logo/Admin.png" @click="gethome" />
          </el-aside>
          <el-main style="text-align: right; color: #dbdbdb">
            <el-dropdown @command="returnhome">
              <span class="el-dropdown-link">
                {{ $store.state.nick }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="1">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-main>
        </el-container>
      </el-header>
      <el-container>
        <el-aside width="200px"><side-menu></side-menu></el-aside>
        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import SideMenu from "components/content/AdminTable/SideMenu.vue";
export default {
  components: { SideMenu },
  name: "AdminTable",
  created() {},
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    gethome() {
      this.$router.push("/home");
    },
    returnhome(command) {
      if (command == 1) {
        localStorage.removeItem("nick");
        localStorage.removeItem("token");
        location.reload();
        alert("退出成功！");
        this.$router.replace("/home");
      }
    },
  },
};
</script>
<style scoped>
.el-aside,
.el-header {
  background: #334157;
}
</style>