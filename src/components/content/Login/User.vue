<template>
  <div class="user">
    <div class="input-box">
      <i class="iconfont icon-wode"></i>
      <input type="text" v-model="input1" placeholder="用户名/账号/手机号" />
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
  name: "User",
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
    };
  },
  methods: {
    sendInput() {
      let data = {
        username: this.input1,
        password: this.input2,
        captcha: this.input3,
      };
      console.log(data);
    },
  },
};
</script>
<style>
.icon-wode,
.icon-mima,
.icon-yanzhengmabeifen {
  font-size: 22px;
  margin: 0 10px;
}

input {
  border: none;
  width: 80%;
  font-size: 17px;
  height: 40px;
  background: transparent;
}

.input-box {
  line-height: 40px;
  display: flex;
  margin: 20px 0 30px;
  border: 1px solid #fff;
  border-radius: 3px;
}

.input-box:nth-child(3) input {
  width: 50%;
}

.input-box:nth-child(3) img {
  width: 35%;
  float: right;
  margin: 3px 5px;
  line-height: 40px;
  height: 36px;
}

.user button,
.admin button {
  border: none;
  width: 100%;
  height: 35px;
  font-size: 18px;
  line-height: 35px;
  color: #fff;
  background: #bf2c24;
  transition: background-color 0.3s;
}

button:hover {
  background: #ed4259;
  cursor: pointer;
}
</style>