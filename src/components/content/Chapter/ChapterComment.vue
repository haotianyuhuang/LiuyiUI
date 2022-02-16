<template>
  <div class="comment">
    <div class="comment_box">
      <div class="send_comment">
        <textarea placeholder="有什么想法快写下来吧" maxlength="150"></textarea>
        <div class="tool">
          <img src="@/assets/img/emoji.png" />
          <span class="send">发布</span>
        </div>
      </div>
    </div>
    <show-comment></show-comment>
  </div>
</template>

<script>
import ShowComment from "./ShowComment.vue";
export default {
  components: { ShowComment },
  name: "ChapterComment",
  data() {
    return {};
  },
  created() {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
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
  background: url(~@/assets/img/bg/chapter_01.png) repeat;
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

/* .comment_box,
.send_comment,
.show_comments {
  border: 1px solid;
} */
</style>