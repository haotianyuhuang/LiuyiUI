<template>
  <div class="bg">
    <div class="chapter_wrap">
      <chapter-content :text="chapter"></chapter-content>
      <chapter-comment></chapter-comment>
    </div>
    <right-list></right-list>
    <left-list></left-list>
    <page-handle></page-handle>
  </div>
</template>

<script>
import { getBook } from "util/network";
import ChapterContent from "components/content/Chapter/ChapterContent.vue";
import ChapterComment from "components/content/Chapter/ChapterComment.vue";
import RightList from "components/content/Chapter/RightList.vue";
import LeftList from "components/content/Chapter/LeftList.vue";
import PageHandle from "components/content/Chapter/PageHandle.vue";
export default {
  name: "Chapter",
  components: {
    ChapterContent,
    ChapterComment,
    RightList,
    LeftList,
    PageHandle,
  },
  created() {
    this.getText();
  },
  data() {
    return {
      chapter: [],
    };
  },
  methods: {
    getText() {
      document.title = decodeURI(sessionStorage.getItem("chapter"));
      let bookid = this.$route.params.bookid;
      let chapterid = this.$route.params.chapterid;
      getBook(5, { bookid: bookid, chapterid: chapterid }).then((res) => {
        this.chapter = res.data;
      });
    },
  },
};
</script>

<style scoped>
.bg {
  background: url(~@/assets/img/bg/library.jpg) no-repeat fixed center;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
}

.chapter_wrap {
  display: flex;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
}
</style>