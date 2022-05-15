<template>
  <div class="white_page" :style="{ background: $store.state.pageColor }">
    <div style="text-align: right; padding: 10px 15px 0 0" class="iconfont">
      <span @click="close()">&#xe603;</span>
    </div>
    <div>
      <div class="message_reply_title">查看回复</div>
      <div class="message_reply_list">
        <ul>
          <li style="padding: 10px 0; border-bottom: 1px solid #e6e6e6">
            <div style="font-size: 15px">ID名:{{ list.comment.nick }}</div>
            <div style="font-size: 15px">{{ list.comment.content }}</div>
            <div style="color: #a6a6a6; font-size: 14px">
              <span style="margin-right: 30px">{{
                list.comment.create_time
              }}</span>
              <i class="iconfont" style="color: #ada5a5">&#xe663;</i>
              <span
                v-if="list.total == 0"
                @click="close_reply_box()"
                style="cursor: pointer"
                >回复</span
              >
              <span v-else @click="close_reply_box()" style="cursor: pointer"
                >{{ list.total }}条回复</span
              >
            </div>
            <div class="reply_box" v-if="down_open">
              <div class="send_reply">
                <textarea
                  placeholder="有什么想法快写下来吧"
                  maxlength="150"
                  v-model="reply"
                ></textarea>
              </div>
              <div class="tool">
                <i style="margin-right: 50px" @click="close_reply_box()"
                  >取消</i
                >
                <span class="send" @click="sendReply()">回复</span>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li
            style="padding: 10px 0; border-bottom: 1px solid #e6e6e6"
            v-for="(item, index) in list.reply"
            :key="index"
          >
            <div style="font-size: 15px">ID名:{{ item.nick }}</div>
            <div style="font-size: 15px">{{ item.content }}</div>
            <div style="color: #a6a6a6; font-size: 14px">
              <span style="margin-right: 30px">{{ item.create_time }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getCR } from "util/network";
export default {
  name: "ShowReply",
  data() {
    return {
      reply: "",
      list: this.$store.state.reply_data,
      is_center_show: false,
      down_open: false,
    };
  },
  methods: {
    sendReply() {
      let data = {
        comment_id: this.list.comment.id,
        content: this.reply,
        reply_id: this.list.comment.user_id,
        nick: this.$store.state.nick,
      };
      getCR(6, data, this.$store.state.token).then((res) => {
        if (res.code == 200) {
          alert("回复成功!");
          this.close();
        }
      });
    },
    close_reply_box() {
      this.down_open = !this.down_open;
    },
    close() {
      this.$store.commit("open_reply_list");
    },
  },
};
</script>

<style scoped>
textarea {
  display: block;
  overflow: hidden;
  width: 97.5%;
  height: 60px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  font: 14px/1.8 "Helvetica Neue Light", "Microsoft YaHei", sans-serif;
  resize: none;
  outline: 0;
}

.tool {
  text-align: right;
  margin-top: 3px;
}

.tool span {
  display: inline-block;
  padding: 0 15px;
  border-radius: 3px;
  color: #fff;
  font-size: 15px;
  background: #bf2c24;
}

.message_reply_list {
  padding: 0 15px;
}

.message_reply_title {
  font-size: 20px;
  padding: 15px;
  font-family: "楷体";
}

.white_page {
  width: 800px;
  height: 400px;
  position: fixed;
  overflow-y: scroll;
  box-shadow: 0 0 10px #8a8888;
  left: 20%;
  top: 10%;
}

.white_page .iconfont {
  transition: color 0.3s ease-in-out;
}

.white_page .iconfont:hover {
  color: #f12334;
}
</style>