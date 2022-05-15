<template>
  <div class="bg">
    <div class="chapter_wrap">
      <chapter-content :text="chapter"></chapter-content>
      <chapter-comment></chapter-comment>
    </div>
    <right-list></right-list>
    <left-list></left-list>
    <page-handle></page-handle>
    <chapter-list></chapter-list>
    <transition name="enter-show" v-if="$store.state.is_center_show">
      <show-reply></show-reply>
    </transition>
  </div>
</template>

<script>
import { getBook } from "util/network";
import { getShelf } from "util/network";
import ChapterContent from "components/content/Chapter/ChapterContent.vue";
import ChapterComment from "components/content/Chapter/ChapterComment.vue";
import RightList from "components/content/Chapter/RightList.vue";
import LeftList from "components/content/Chapter/LeftList.vue";
import PageHandle from "components/content/Chapter/PageHandle.vue";
import ChapterList from "components/content/Chapter/ChapterList.vue";
import ShowReply from "components/content/Chapter/ShowReply.vue";
export default {
  name: "Chapter",
  components: {
    ChapterContent,
    ChapterComment,
    RightList,
    LeftList,
    PageHandle,
    ChapterList,
    ShowReply,
  },
  created() {
    this.getText();
    setTimeout(() => {
      this.syshelf();
    }, 3000);
  },
  data() {
    return {
      chapter: [],
    };
  },
  methods: {
    getText() {
      document.title = "第" + this.$route.params.chapterid + "章";
      let bookid = this.$route.params.bookid;
      let chapterid = this.$route.params.chapterid;
      getBook(5, { bookid: bookid, chapterid: chapterid }).then((res) => {
        this.chapter = res.data;
      });
    },
    syshelf() {
      getShelf(
        3,
        {
          title: sessionStorage.getItem("title"),
          book_id: this.$route.params.bookid,
          chapter_id: this.$route.params.chapterid,
        },
        this.$store.state.token
      ).then((res) => {
        console.log(res);
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

.enter-show-enter-active,
.enter-show-leave-active {
  transition: all 0.5s ease-in-out;
}

.enter-show-enter,
.enter-show-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
</style>