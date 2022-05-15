<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#334157"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item index="/table/user">
      <i class="el-icon-location"></i>
      <span slot="title">用户管理</span>
    </el-menu-item>
    <el-menu-item index="/table/book">
      <i class="el-icon-menu"></i>
      <span slot="title">书籍管理</span>
    </el-menu-item>
    <el-submenu index="/">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>文章管理</span>
      </template>
      <el-menu-item index="/table/comment">评论管理</el-menu-item>
      <el-menu-item index="/table/reply">回复管理</el-menu-item>
      <el-menu-item index="/table/notice">发布公告</el-menu-item>
    </el-submenu>
    <el-menu-item index="/table/collect">
      <i class="el-icon-setting"></i>
      <span slot="title">采集管理</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: "SideMenu",
  data() {
    return {
      options: [
        { id: "1", title: "用户管理", path: "/table/user" },
        { id: "2", title: "书籍管理", path: "/table/book" },
        { id: "3", title: "评论管理", path: "/table/comment" },
        { id: "4", title: "采集管理", path: "/table/collect" },
      ],
    };
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
  },
};
</script>
<style scoped>
.el-main {
  padding: 0;
}
.el-menu {
  border: none;
}
</style>