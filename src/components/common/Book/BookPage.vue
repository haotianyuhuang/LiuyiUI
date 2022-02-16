<template>
  <el-pagination
    style="text-align: center"
    background
    layout="prev, pager, next"
    :total="page.total"
    :current-page="page.current_page"
    @current-change="current"
  >
  </el-pagination>
</template>
<script>
export default {
  name: "BookPage",
  props: ["page"],
  methods: {
    current(index) {
      this.$emit("currentpage", index);
    },
  },
};
</script>
<style scoped>
</style>