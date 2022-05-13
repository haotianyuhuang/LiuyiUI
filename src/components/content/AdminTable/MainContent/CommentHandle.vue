<template>
  <div>
    <comment-table :table="data"></comment-table>
    <comment-page :page="page" @currentpage="changepage"></comment-page>
  </div>
</template>
<script>
import { show } from "util/admin";
import CommentTable from "components/common/Comment/CommentTable";
import CommentPage from "components/common/Comment/CommentPage";
export default {
  name: "CommentHandle",
  components: { CommentTable, CommentPage },
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