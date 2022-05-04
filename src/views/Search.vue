<template >
  <div class="search">
    <search-box></search-box>
    <search-main :cbooks="books"></search-main>
  </div>
</template>
<script>
import { searchBook } from "util/sedata";
import { searchAuthor } from "util/sedata";
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
    this.getBooklist();
  },
  methods: {
    getBooklist() {
      let kw = this.$route.query.kw;
      let ty = this.$route.query.ty;
      if (ty == 1) {
        searchAuthor(kw).then((res) => {
          this.books = res.data;
        });
      } else {
        searchBook(kw).then((res) => {
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