<template>
  <div class="show_comments">
    <ul v-for="(item, index) in comments" :key="index" class="root_comment">
      <li>
        {{ item.content }}
      </li>
      <span class="date">
        {{ item.date }}
      </span>
      <span class="reply" @click="active(index)">回复</span>
      <ul v-for="(value, key) in item.reply" :key="key" class="reply_comment">
        <li>
          {{ value.content }}
        </li>
        <span class="date">
          {{ value.date }}
        </span>
        <span class="reply" @click="active(index)">回复</span>
      </ul>
      <div v-if="isActive == index">
        <textarea maxlength="150" v-model="reply"></textarea>
        <div><span @click="addreply(index)">发表</span></div>
      </div>
      <div class="total">
        {{ item.total_comments }}
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ShowComment",
  data() {
    return {
      isActive: null,
      reply: "",
      content: "",
      comment: {},
      comments: [
        {
          content: "hello",
          date: "2022-02-04 10:42",
          total_comments: "共10条回复",
          reply: [
            {
              content: "world",
              date: "2022-02-04 11:00",
            },
          ],
        },
      ],
    };
  },
  methods: {
    active(index) {
      this.isActive = index;
    },
    addlist() {
      this.comment = {
        content: this.content,
        date: this.query(),
        reply: [],
      };
      this.comments.push(this.comment);
      this.comment = "";
    },
    addreply(index) {
      this.comment = {
        content: this.reply,
        date: this.query(),
      };
      this.comments[index].reply.push(this.comment);
      this.reply = "";
      this.isActive = null;
    },
    query() {
      let t = new Date();
      let y = t.getFullYear();
      let m = t.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = t.getDate();
      d = d < 10 ? "0" + d : d;
      let h = t.getHours();
      h = h < 10 ? "0" + h : h;
      let min = t.getMinutes();
      min = min < 10 ? "0" + min : min;
      let date = y + "-" + m + "-" + d + " " + h + ":" + min;
      return date;
    },
  },
};
</script>
<style scoped>
.show_comments {
  height: 420px;
  overflow-y: scroll;
}

.show_comments textarea {
  resize: none;
  width: 200px;
  height: 40px;
  padding: 5px;
}

.total,
.reply,
.date {
  font-size: 12px;
}

.reply {
  margin-left: 50px;
}

.reply:hover {
  color: #00a1d6;
  cursor: pointer;
}

.root_comment {
  padding-left: 10px;
}

.reply_comment {
  padding-left: 40px;
}

.reply_comment li {
  font-size: 14px;
}
</style>