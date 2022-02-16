<template>
  <div>
    <book-table :table="data"></book-table>
    <book-page :page="page" @currentpage="changepage"></book-page>
  </div>
</template>
<script>
import { show } from "@/util/admin";
import BookTable from "@/components/common/Book/BookTable";
import BookPage from "@/components/common/Book/BookPage";
export default {
  components: { BookTable, BookPage },
  name: "BookHandle",
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