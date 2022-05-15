<template>
  <div>
    <el-button type="success" @click="$store.commit('addnotice')"
      >新增公告</el-button
    >
    <notice-table :table="data"></notice-table>
    <empty></empty>
  </div>
</template>

<script>
import { getNotice } from "util/admin.js";
import Empty from "components/common/Empty.vue";
import NoticeTable from "components/common/Comment/NoticeTable";
export default {
  name: "Notice",
  components: { Empty, NoticeTable },
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.notice();
  },
  methods: {
    notice() {
      getNotice(0, "", this.$store.state.token).then((res) => {
        this.data = res;
      });
    },
  },
};
</script>

<style>
</style>