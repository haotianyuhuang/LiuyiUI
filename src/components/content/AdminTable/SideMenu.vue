<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#334157"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item v-for="(item, i) in options" :index="item.path" :key="i">{{
      item.title
    }}</el-menu-item>
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