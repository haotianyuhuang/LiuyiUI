<template>
  <div class="bg">
    <div class="chapter_wrap">
      <chapter-content :text="chapter"></chapter-content>
      <chapter-comment></chapter-comment>
    </div>
  </div>
</template>

<script>
import { searchChapter } from "util/sedata";
import ChapterContent from "components/content/Chapter/ChapterContent.vue";
import ChapterComment from "components/content/Chapter/ChapterComment.vue";
// import RightList from "components/content/Chapter/RightList.vue";
// import LeftList from "components/content/Chapter/LeftList.vue";
export default {
  name: "Chapter",
  components: {
    ChapterContent,
    ChapterComment,
    // RightList,
    // LeftList,
  },
  created() {
    this.getText();
  },
  mounted() {
    this.getVoiceList();
  },
  data() {
    return {
      chapter: [],
      rate: 1, //语速0.1-10
      volume: 1, //音量0-1
      pitch: 1, //音高0-2
      voice: "",
      voices: [],
      source: "",
    };
  },
  methods: {
    getText() {
      document.title = decodeURI(sessionStorage.getItem("chapter"));
      let bookid = this.$route.params.bookid;
      let chapterid = this.$route.params.chapterid;
      searchChapter(bookid, chapterid).then((res) => {
        this.chapter = res.data;
      });
    },
    play() {
      this.cancel();
      this.source = new SpeechSynthesisUtterance();
      this.source.text = this.chapter.content;
      for (let i = 0; i < this.voices.length; i++) {
        if (this.voice == this.voices[i].name) {
          this.source.voice = this.voices[i];
        }
      }
      window.speechSynthesis.speak(this.source);
      // let w = 0;
      // this.source.addEventListener("boundary", function (e) {
      //   console.log(e.charLength);
      // if (e.name == "word") {
      //   w++;
      //   console.log(w);
      // }
      // });
    },
    getVoiceList() {
      let v = window.speechSynthesis;
      v.addEventListener("voiceschanged", () => {
        this.voices = v.getVoices();
        this.voice = v.getVoices()[0].name;
      });
    },
    //暂停
    pause() {
      window.speechSynthesis.pause();
    },
    //继续播放
    resume() {
      window.speechSynthesis.resume(); //继续
    },
    //清除所有语音播报创建的队列
    cancel() {
      window.speechSynthesis.cancel();
    },
  },
};
</script>

<style scoped>
.bg {
  background: url(~@/assets/img/bg/library.jpg) no-repeat fixed center;
  background-size: cover;
  height: 100vh;
  padding: 0 80px;
  overflow: hidden;
}

.chapter_wrap {
  display: flex;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
}
</style>