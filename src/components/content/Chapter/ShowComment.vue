<template>
  <div class="show_comments">
    <div class="commnet_line_title"></div>
    <ul
      class="show_comment_box"
      v-for="(item, index) in ccomments"
      :key="index"
    >
      <li class="commenter_info">
        <span>{{ item.nick }}</span>
        <span class="time">{{ item.create_time }}</span>
      </li>
      <li class="scontent" style="font-size: 14px">{{ item.content }}</li>
      <li class="reply_info">
        <div @click="getID(item)">
          <i class="iconfont" style="color: #ada5a5">&#xe663;</i>
          <i style="font-size: 14px; margin-left: 5px">回复</i>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getCR } from "util/network";
export default {
  name: "ShowComment",
  props: ["ccomments"],
  data() {
    return {
      info: [],
    };
  },
  methods: {
    getID(value) {
      this.$store.commit("open_reply_list");
      getCR(5, { id: value.id }, this.$store.state.token).then((res) => {
        this.$store.commit("make", res.data);
        console.log(this.$store.state.reply_data);
      });
    },
  },
};
</script>
<style scoped>
.show_comments {
  height: 420px;
  overflow-y: scroll;
  padding: 10px;
}

.show_comment_box {
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  border-radius: 3px;
  margin: 10px 0;
}

.commenter_info {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}
</style>