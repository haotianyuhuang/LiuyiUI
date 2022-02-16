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
import Admin from "@/components/content/Login/Admin.vue";
import User from "@/components/content/Login/User.vue";
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
  background-image: url(~@/assets/img/bg/login.jpg);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.current {
  border-bottom: 2px solid #df1c15 !important;
}

.account {
  position: fixed;
  right: 50px;
  top: 100px;
  width: 380px;
  height: 450px;
  border: 2px solid #d5d7f3;
  border-radius: 3px;
  box-shadow: 0 0 10px #c9c5c5;
  background: rgba(255, 255, 255, 79%);
}

.box_title {
  display: flex;
  justify-content: space-around;
  font-size: 20px;
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