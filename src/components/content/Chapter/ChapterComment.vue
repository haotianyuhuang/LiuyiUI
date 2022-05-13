<template>
  <transition name="left-comment">
    <div
      class="comment"
      v-if="$store.state.comment"
      :style="{ background: $store.state.pageColor }"
    >
      <div class="comment_box">
        <div class="send_comment">
          <textarea
            placeholder="有什么想法快写下来吧"
            maxlength="150"
            v-model="comment"
          ></textarea>
          <div class="tool">
            <span class="send" @click="getComment">发布</span>
          </div>
        </div>
      </div>
      <show-comment :ccomments="tocomments"></show-comment>
    </div>
  </transition>
</template>

<script>
import { getCR } from "util/network";
import ShowComment from "./ShowComment.vue";
export default {
  components: { ShowComment },
  name: "ChapterComment",
  data() {
    return {
      comment: "",
      tocomments: "",
    };
  },
  created() {
    this.totalcomment();
  },
  methods: {
    getComment() {
      this.$store.commit("increment");
    },
    totalcomment() {
      let data = {
        book_id: this.$route.params.bookid,
        chapter_id: this.$route.params.chapterid,
      };
      getCR(3, data, this.$store.state.token).then((res) => {
        this.tocomments = res.data;
      });
    },
  },
};
</script>

<style scoped>
.left-comment-enter-active,
.left-comment-leave-active {
  transition: all 0.5s ease-in-out;
}

.left-comment-enter,
.left-comment-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.tool {
  display: flex;
  align-items: center;
  height: 16%;
  background: white;
  justify-content: right;
}

.tool .send {
  display: inline-block;
  width: 60px;
  padding: 3px 0;
  font-size: 14px;
  color: #fff;
  text-align: center;
  border: 1px solid #bf2c24;
  border-radius: 3px;
  background: #bf2c24;
  margin-right: 10px;
  transition: background 0.3s ease;
}

.tool img {
  width: 20px;
  height: 20px;
  margin-right: 30px;
}

.comment {
  position: relative;
  border-left: 1px solid #b1b1b1fa;
  width: 350px;
  padding: 5px;
}

textarea {
  width: 100%;
  height: 80%;
  resize: none;
  padding: 0;
  outline: none;
  border: none;
  font-size: 18px;
  font-family: "楷体";
}

.send_comment {
  height: 150px;
  background: #fff;
}

.comment_box,
.send_comment {
  padding: 5px;
}

.send:hover {
  background: #fa1909;
  cursor: pointer;
}
</style>