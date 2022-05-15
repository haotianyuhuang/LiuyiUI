<template>
  <transition name="enter-show">
    <div class="show_detail">
      <div style="text-align: right; padding: 10px 15px 0 0" class="iconfont">
        <span @click="close()">&#xe603;</span>
      </div>
      <div class="news_detail">
        <ul>
          <li v-for="(item, index) in detail" :key="index">
            <span style="display: block">【{{ index }}】</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "EmptyPage",
  props: ["detail"],
  data() {
    return {
      show: 0,
    };
  },
  methods: {
    close() {
      this.$emit("is_close", 0);
    },
  },
};
</script>

<style scoped>
.news_detail li {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
}

.news_detail ul {
  margin: 10px;
}

.show_detail {
  width: 600px;
  height: 300px;
  position: fixed;
  overflow-y: scroll;
  background: #fff;
  box-shadow: 0 0 10px #8a8888;
  left: 30%;
  top: 20%;
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

.show_detail .iconfont {
  transition: color 0.3s ease-in-out;
}

.show_detail .iconfont:hover {
  color: #f12334;
}
</style>