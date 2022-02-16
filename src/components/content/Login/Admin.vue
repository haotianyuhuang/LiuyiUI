<template>
  <div class="admin">
    <div class="input-box">
      <i class="iconfont icon-wode"></i>
      <input type="text" v-model="input1" placeholder="管理员帐号" />
    </div>
    <div class="input-box">
      <i class="iconfont icon-mima"></i>
      <input type="password" v-model="input2" placeholder="密码" />
    </div>
    <div class="input-box">
      <i class="iconfont icon-yanzhengmabeifen"></i>
      <input type="text" v-model="input3" placeholder="验证码" maxlength="4" />
      <img src="@/assets/img/captcha.png" />
    </div>
    <button @click="sendInput()">登 录</button>
  </div>
</template>
<script>
export default {
  name: "Admin",
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
    };
  },
  methods: {
    sendInput() {
      // let data = {
      //   username: this.input1,
      //   password: this.input2,
      //   captcha: this.input3,
      // };
      let url = this.$router.resolve({
        path: "/table",
      });
      window.open(url.href, "_blank");
    },
  },
};
</script>
<style>
</style>