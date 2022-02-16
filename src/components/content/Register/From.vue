<template>
  <div class="register_form">
    <div class="input_item">
      <i>手机号:</i>
      <input type="text" placeholder="输入手机号" v-model="form_item1" />
    </div>
    <div class="input_item">
      <i>密码:</i>
      <input
        type="password"
        placeholder="8-16位大小写字母、符号或数字"
        v-model="form_item2"
      />
    </div>
    <div class="input_item">
      <i>确认密码:</i>
      <input type="text" placeholder="再次输入密码" v-model="form_item3" />
    </div>
    <button class="submit">立即注册</button>
  </div>
</template>
<script>
export default {
  name: "From",
  data() {
    return {
      form_item1: "",
      form_item2: "",
      form_item3: "",
    };
  },
  methods: {},
};
</script>
<style scoped>
.register_form {
  width: 450px;
  height: 400px;
  background: #fff;
  margin: 5% auto 0;
  padding-top: 5%;
  box-shadow: 0 0 3px #a3a3a3;
}

.input_item {
  width: 80%;
  margin: 0 auto 10%;
  border: 1px solid #a3a3a3;
  padding-left: 3%;
}

.register_form .submit {
  display: block;
  width: 300px;
  font-size: 20px;
  margin: 0 auto;
  outline: none;
  height: 40px;
  color: #fff;
  border: 1px solid #b41313;
  background: #b41313;
}
</style>