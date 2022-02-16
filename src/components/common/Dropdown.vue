<template>
  <el-dropdown size="medium">
    <span class="el-dropdown-link">
      {{ list[0].title }}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="reverse()">{{
        list[1].title
      }}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  name: "Dropdown",
  data() {
    return {
      list: [
        {
          id: 0,
          title: "书名",
        },
        {
          id: 1,
          title: "作者",
        },
      ],
    };
  },
  methods: {
    reverse() {
      this.list.reverse();
      this.$emit("sendData", this.list[0].id);
    },
  },
};
</script>
<style>
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>