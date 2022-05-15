<template>
  <div>
    <reply-table :table="data"></reply-table>
    <reply-page :page="page" @currentpage="changepage"></reply-page>
  </div>
</template>
<script>
import { show } from "util/admin";
import ReplyTable from "components/common/Comment/ReplyTable";
import ReplyPage from "components/common/Comment/ReplyPage";
export default {
  name: "ReplyHandle",
  components: { ReplyTable, ReplyPage },
  data() {
    return {
      data: [],
      page: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(page) {
      show(this.$route.name, page).then((res) => {
        console.log(res);
        this.data = res.data;
        this.page = res;
      });
    },
    changepage(n) {
      this.getData(n);
    },
  },
};
</script>
<style scoped>
</style>