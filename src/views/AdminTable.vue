<template>
  <div class="admin_table" v-loading="loading">
    <el-container style="height: 100vh; overflow: hidden">
      <el-header></el-header>
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
  methods: {},
};
</script>
<style scoped>
.el-aside,
.el-header {
  background: #334157;
}
</style>