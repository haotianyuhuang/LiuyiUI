<template >
  <div class="search">
    <search-box></search-box>
    <search-main :cbooks="books"></search-main>
  </div>
</template>
<script>
import { getBook } from "util/network";
import SearchMain from "components/content/Search/SearchMain.vue";
import SearchBox from "components/common/SearchBox.vue";
export default {
  name: "Search",
  components: {
    SearchMain,
    SearchBox,
  },
  data() {
    return {
      books: "",
    };
  },
  created() {
    this.search();
  },
  methods: {
    search() {
      let kw = this.$route.query.kw;
      let ty = this.$route.query.ty;
      if (ty == 1) {
        getBook(1, { author: kw }).then((res) => {
          this.books = res.data;
        });
      } else {
        getBook(0, { bookname: kw }).then((res) => {
          this.books = res.data;
        });
      }
    },
  },
};
</script>
<style scoped>
.search {
  overflow: hidden;
}
</style>