<template>
  <transition name="enter-show" v-if="$store.state.table.is_show_notice">
    <div class="send_from">
      <div
        style="text-align: right; padding: 10px 15px 0 0"
        class="iconfont"
        @click="$store.commit('addnotice')"
      >
        &#xe603;
      </div>
      <el-form :model="formLabelAlign" style="overflow: hidden; height: auto">
        <el-form-item label="标题">
          <el-input v-model="formLabelAlign.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input
            type="textarea"
            maxlength="150"
            placeholder="请输入内容"
            v-model="formLabelAlign.content"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
      <div style="display: flex; justify-content: center">
        <el-button type="primary" @click="send()">提交</el-button>
      </div>
    </div>
  </transition>
</template>

<script>
import { getNotice } from "util/admin";
export default {
  name: "Empty",
  data() {
    return {
      formLabelAlign: {
        content: "",
        title: "公告",
        nick: this.$store.state.nick,
      },
    };
  },
  methods: {
    send() {
      getNotice(1, this.formLabelAlign, this.$store.state.token).then(() => {
        this.$store.commit("addnotice");
        alert("发布成功!");
      });
    },
  },
};
</script>

<style>
.send_from {
  width: 400px;
  height: 400px;
  position: fixed;
  background: #fff;
  box-shadow: 0 0 10px #8a8888;
  left: 40%;
  top: 20%;
}
.el-textarea__inner {
  resize: none;
  height: 120px;
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

.send_from .iconfont {
  transition: color 0.3s ease-in-out;
}

.send_from .iconfont:hover {
  color: #f12334;
}

.send_from .el-button--primary {
  height: 30px;
  line-height: 0;
}
</style>