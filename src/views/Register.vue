<template>
  <div class="register_box">
    <div class="center_box">
      <div class="user_title">填写用户信息</div>
      <div class="user">
        <div class="reader_info">
          <div class="account">
            <label>
              <i>账号:</i>
              <input type="text" placeholder="手机号" v-model="username" />
              <i class="iconfont" :style="{ color: itu == 0 ? '' : 'green' }"
                >&#xe6a5;</i
              >
            </label>
          </div>
          <div class="nick">
            <label>
              <i>昵称:</i>
              <input type="text" maxlength="6" v-model="nick" />
            </label>
          </div>
          <div class="psw">
            <label>
              <i>密码:</i>
              <input
                type="password"
                placeholder="8-16位大小写字母、符号或数字"
                v-model="password"
                minlength="8"
                maxlength="16"
              />
              <i class="iconfont" :style="{ color: itp == 0 ? '' : 'green' }"
                >&#xe6a5;</i
              >
            </label>
          </div>
          <div class="psw2">
            <label>
              <i>确认密码:</i>
              <input
                type="password"
                style="width: 60%"
                v-model="repsw"
                minlength="8"
                maxlength="16"
              />
              <i class="iconfont" :style="{ color: itr == 0 ? '' : 'green' }"
                >&#xe6a5;</i
              >
            </label>
          </div>
        </div>
      </div>
      <div
        class="btn"
        @click="register"
        :style="{
          'pointer-events': itp == 0 || itu == 0 || itr == 0 ? 'none' : '',
        }"
      >
        立即注册
      </div>
    </div>
  </div>
</template>

<script>
import { getAdmin } from "util/network";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      nick: "",
      repsw: "",
      itu: 0,
      itp: 0,
      itr: 0,
    };
  },
  watch: {
    username(n) {
      const rep =
        /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
      if (rep.test(n) == true) {
        this.itu = 1;
      } else {
        this.itu = 0;
      }
    },
    password(n) {
      const rep =
        /^.*(?=.{8,16})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
      if (rep.test(n) == true) {
        this.itp = 1;
      } else {
        this.itp = 0;
      }
    },
    repsw(n) {
      if (n == this.password) {
        if (n == null || n == undefined || n == "") {
          this.itr = 0;
        } else {
          this.itr = 1;
        }
      } else {
        this.itr = 0;
      }
    },
  },
  methods: {
    register() {
      let data = {
        username: this.username,
        password: this.password,
        nick: this.nick,
      };
      console.log(1, data);
      getAdmin(1, data).then((res) => {
        if (res.data.code == 206) {
          alert("用户名已存在！");
        } else if (res.data.code == 200) {
          alert("注册成功！");
          this.$router.replace({
            path: "/login",
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.register_box {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(~@/assets/img/bg/68408099_p0.jpg) no-repeat fixed center;
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

.user_title {
  text-align: center;
  font-size: 1.5em;
  border-bottom: 1px solid #a69f9f;
  padding: 15px 0;
}

.user {
  margin: 30px 0 50px;
}

.reader_info {
  display: flex;
  flex-wrap: wrap;
}

.account,
.psw,
.nick,
.psw2 {
  width: 100%;
  margin: 15px auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

.account input,
.psw input,
.psw2 input,
.nick input {
  font-size: 15px;
  width: 70%;
  padding: 10px;
  outline: none;
  border: none;
  background: transparent;
}

label {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d1cfe3;
  width: 70%;
}

.btn {
  margin: auto;
  padding: 10px 0;
  background: #d42020;
  color: #f1efef;
  width: 54%;
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