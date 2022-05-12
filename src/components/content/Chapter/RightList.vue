<template>
  <div class="right_list" :style="{ background: $store.state.pageColor }">
    <dl>
      <dd @click="active()">
        <i class="iconfont">&#xe600;</i>
        <span>评论</span>
      </dd>
      <dd>
        <i class="iconfont">&#xe696;</i>
        <span>点赞</span>
      </dd>
      <dd @click="backTop()" title="返回顶部" v-if="is_Stretch">
        <i class="iconfont">&#xe607;</i>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "RightList",
  data() {
    return {
      is_Stretch: false,
    };
  },
  mounted() {
    this.getTop();
  },
  methods: {
    backTop() {
      let timer = setInterval(() => {
        document.documentElement.scrollTop -= 100;
        if (document.documentElement.scrollTop == 0) {
          clearInterval(timer);
        }
      }, 10);
    },

    getTop() {
      window.addEventListener("scroll", () => {
        let height = document.documentElement.scrollTop;
        if (height >= 100) {
          sessionStorage.setItem("height", height);
          this.is_Stretch = true;
        } else {
          sessionStorage.removeItem("height");
          this.is_Stretch = false;
        }
      });
    },

    active() {
      this.$store.commit("showComment");
    },
  },
};
</script>

<style scoped>
.right_list {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 50px;
  text-align: center;
}

dd,
dl {
  margin: 0 auto;
  font-size: 12px;
}

dd {
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #82817c;
  transition: all 0.5s ease;
}

.iconfont {
  font-size: 25px;
  transition: all 0.3s ease;
}

.iconfont:hover,
dd:hover {
  color: #fff;
  background: #f32727;
}
</style>