<template>
  <div class="login">
    <div class="account">
      <div class="box_title">
        <span
          v-for="(item, index) in accounts"
          :key="index"
          :class="{ current: isActive == index }"
          @click="active(index)"
          >{{ item }}</span
        >
      </div>
      <user v-if="isActive == 0"></user>
      <admin v-if="isActive == 1"></admin>
    </div>
  </div>
</template>
<script>
import Admin from "components/content/Login/Admin.vue";
import User from "components/content/Login/User.vue";
export default {
  name: "Login",
  components: { User, Admin },
  created() {},
  data() {
    return {
      isActive: 0,
      accounts: ["用户登录", "管理员登录"],
    };
  },
  methods: {
    active(num) {
      this.isActive = num;
    },
  },
};
</script>
<style scoped>
.login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(~@/assets/img/bg/95668721_p0.jpg) no-repeat fixed center;
  background-size: cover;
}

.login .current {
  border-bottom: 2px solid #df1c15;
}

.account {
  width: 380px;
  height: 450px;
  border: 2px solid #d5d7f3;
  border-radius: 5px;
  box-shadow: 0 0 5px #e0dede;
  background: rgba(255, 255, 255, 0.3);
}

.box_title {
  display: flex;
  justify-content: space-around;
  font-size: 25px;
  font-weight: bold;
}

.box_title span {
  width: 50%;
  padding: 10px 0;
  text-align: center;
  cursor: pointer;
  border-bottom: 2px solid #d5d7f3;
}

.user,
.admin {
  padding: 20px 30px 0;
}
</style>