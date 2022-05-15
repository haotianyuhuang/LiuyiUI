<template>
  <div class="message">
    <div class="message_title">平台通知</div>
    <div class="message_box">
      <div class="message_left">
        <div class="message_notice">
          <div class="message_notice_title" style="text-align: center">
            【公告】
          </div>
          <div class="message_notice_list">
            <ul>
              <li
                v-for="(item, index) in notice_list"
                :key="index"
                @click="shownews(item, 1)"
              >
                【标题】{{ item.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="message_right">
        <div class="message_comment">
          <div class="message_comment_title">【我的评论】</div>
          <div class="message_comment_list">
            <ul>
              <li v-for="(item, index) in comment_list" :key="index">
                <span>{{ item.create_time }}</span>
                <span
                  @click="shownews(item, 2)"
                  style="
                    display: block;
                    width: 300px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  "
                  >{{ item.content }}</span
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="message_reply">
          <div class="message_reply_title">【我的回复】</div>
          <div class="message_reply_list">
            <ul>
              <li v-for="(item, index) in reply_list" :key="index">
                <span>{{ item.create_time }}</span>
                <span
                  @click="shownews(item, 3)"
                  style="
                    display: block;
                    width: 300px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  "
                  >{{ item.content }}</span
                >
                <span>{{ item.nick }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <transition name="enter-show">
      <empty-page
        :detail="de"
        @is_close="opendetail"
        v-if="open != 0"
      ></empty-page>
    </transition>
  </div>
</template>

<script>
import { getNotice } from "util/admin";
import { getCR } from "util/network";
import EmptyPage from "components/common/EmptyPage.vue";
export default {
  components: { EmptyPage },
  name: "MessageCenter",
  data() {
    return {
      notice_list: [],
      reply_list: [],
      comment_list: [],
      open: 0,
      de: "",
    };
  },
  created() {
    this.notice();
    this.getnews();
  },
  methods: {
    opendetail(value) {
      this.open = value;
    },
    notice() {
      getNotice(0, "", this.$store.state.token).then((res) => {
        this.notice_list = res;
      });
    },
    shownews(value, index) {
      this.open = 1;
      let data;
      if (index == 1) {
        data = {
          发送时间: value.create_time,
          发送人: "管理员",
          标题: value.title,
          内容: value.content,
        };
      } else if (index == 2) {
        data = {
          评论时间: value.create_time,
          评论书籍: value.book_id,
          评论章节: value.chapter_id,
          评论内容: value.content,
        };
      } else if (index == 3) {
        data = {
          回复时间: value.create_time,
          回复内容: value.content,
          回复者: value.nick,
        };
      }
      this.de = data;
    },
    getnews() {
      getCR(0, "", this.$store.state.token).then((res) => {
        this.comment_list = res.data;
      });
      getCR(4, "", this.$store.state.token).then((res) => {
        this.reply_list = res.data;
      });
    },
  },
};
</script>

<style scoped>
.enter-show-enter-active,
.enter-show-leave-active {
  transition: all 0.5s ease-in-out;
}

.enter-show-enter,
.enter-show-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.message_box {
  position: relative;
  width: 1000px;
  height: 500px;
  border: 1px solid #e6e6e6;
  box-shadow: 0 0 10px #e6e6e6;
  border-radius: 3px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}

.message_title {
  font-size: 25px;
  font-family: "楷体";
  padding: 10px;
}

.message_left {
  width: 30%;
}

.message_notice {
  width: 100%;
  height: 100%;
}

.message_notice_title {
  font-size: 25px;
}

.message_notice_list ul {
  margin: 15px;
}

.message_comment_list ul li,
.message_reply_list ul li {
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 1px solid #e6e6e6;
}

.message_notice_list ul li {
  font-size: 18px;
  font-family: "宋体";
  margin: 10px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 1px solid #e6e6e6;
}

.message_right {
  width: 70%;
  display: flex;
  border-left: 1px solid #e6e6e6;
  flex-direction: column;
  justify-content: space-between;
}

.message_notice,
.message_reply,
.message_comment {
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}

.message_comment {
  height: 50%;
}

.message_reply_title,
.message_comment_title {
  font-size: 20px;
  font-family: "宋体";
}

.message_reply_list ul,
.message_comment_list ul {
  padding: 5px;
}

.message_reply_list ul li,
.message_comment_list ul li {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  font-size: 16px;
  font-family: "宋体";
  border-bottom: 1px solid #e5e6e6;
}

.message_reply {
  border-top: 1px solid #e6e6e6;
  height: 50%;
}
</style>