<template>
  <div class="login_box">
    <div class="center_box">
      <div class="user_title">
        <span
          @click="changeUser(index)"
          :class="{ span_active: defindex == index }"
          v-for="(item, index) in users"
          :key="index"
          >{{ item }}</span
        >
      </div>
      <div class="user">
        <div class="reader_info" v-if="defindex == 0">
          <div class="account">
            <label>
              <i class="iconfont">&#xe630;</i>
              <input type="text" placeholder="用户名/账号" v-model="user" />
            </label>
          </div>
          <div class="psw">
            <label>
              <i class="iconfont">&#xe62f;</i>
              <input type="password" placeholder="密码" v-model="psw" />
            </label>
          </div>
          <div class="captcha">
            <label style="width: 60%">
              <i class="iconfont">&#xe631;</i>
              <input
                type="text"
                maxlength="4"
                placeholder="验证码"
                style="width: 35%"
                v-model="cap"
              />
              <img :src="imgsrc" style="width: 120px" @click="changeCap" />
            </label>
          </div>
        </div>
        <div class="admin_info" v-else>
          <div class="account">
            <label>
              <i class="iconfont">&#xe630;</i>
              <input type="text" placeholder="用户名/账号" />
            </label>
          </div>
          <div class="psw">
            <label>
              <i class="iconfont">&#xe62f;</i>
              <input type="password" placeholder="密码" />
            </label>
          </div>
        </div>
      </div>
      <div class="btn" @click="login">登&nbsp;&nbsp;&nbsp;录</div>
      <div
        v-if="defindex == 0"
        class="tip"
        style="text-align: center; margin-top: 20px; font-size: 12px"
      >
        没有账号？<router-link to="/register" style="color: #f13b3b"
          >马上去注册！</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { getUser } from "util/network";
export default {
  name: "Login",
  data() {
    return {
      users: ["用户登录", "管理员登录"],
      defindex: 0,
      imgsrc: "http://localhost:8000/cap",
      user: "",
      psw: "",
      cap: "",
    };
  },
  methods: {
    changeUser(index) {
      this.defindex = index;
    },
    changeCap() {
      this.imgsrc += "?" + Math.random();
    },
    login() {
      let data = {
        username: this.user,
        password: this.psw,
      };
      getUser(0, data).then((res) => {
        if (res.data.code == 200) {
          // console.log(res.data.data);
          localStorage.setItem("nick", res.data.data.nick);
          localStorage.setItem("token", res.data.data.token.data);
          this.$router.replace({
            path: "/home",
          });
          setTimeout(() => {
            window.location.reload();
          }, 100);
        }
      });
    },
  },
};
</script>

<style scoped>
.login_box {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(~@/assets/img/bg/95668721_p0.jpg) no-repeat fixed center;
  background-size: cover;
}

.center_box {
  margin: auto;
  width: 450px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 0px 0 10px #d1cfe3;
  background: #ffffff;
}

.user_title span {
  display: inline-block;
  font-size: 1.3em;
  width: 50%;
  text-align: center;
  border-bottom: 1px solid #a69f9f;
  padding: 15px 0;
  cursor: pointer;
}

.span_active {
  border-bottom-color: #dd2f2f !important;
}

.user {
  margin: 50px 0 30px;
}

.reader_info,
.admin_info {
  display: flex;
  flex-wrap: wrap;
}

.account,
.psw,
.captcha {
  width: 100%;
  margin: 15px auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

.account input,
.psw input,
.captcha input {
  font-size: 18px;
  padding: 0 10px;
  outline: none;
  border: none;
  background: transparent;
}

label {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d1cfe3;
}

i {
  padding: 5px;
}

.btn {
  margin: auto;
  padding: 8px 0;
  background: #d42020;
  color: #f1efef;
  width: 60%;
  border-radius: 3px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #ff2313;
}
</style>