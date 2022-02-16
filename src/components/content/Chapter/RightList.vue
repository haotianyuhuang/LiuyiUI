<template>
  <div class="right_list">
    <dl>
      <dd @click="achieve()">
        <i class="iconfont icon-31pinglun"></i>
        <span>评论</span>
      </dd>
      <dd>
        <i class="iconfont icon-iconfontzhizuobiaozhun023148"></i>
        <span>点赞</span>
      </dd>
      <dd @click="backTop()" title="返回顶部" v-if="is_Stretch">
        <i class="iconfont icon-31huidaodingbu"></i>
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

    achieve() {
      this.$emit("clickvalue", true);
    },
  },
};
</script>

<style>
.right_list {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 50px;
  text-align: center;
  background: #f3e9c6 url(~@/assets/img/bg/read_02.png) repeat;
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
}

.icon-iconfontzhizuobiaozhun023148,
.icon-31pinglun,
.icon-31huidaodingbu {
  font-size: 25px;
}
</style>