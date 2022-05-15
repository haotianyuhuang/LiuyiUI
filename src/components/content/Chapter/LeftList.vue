<template>
  <div class="left_list" :style="{ background: $store.state.pageColor }">
    <dl>
      <dd @click="showHandle(1)">
        <i class="iconfont">&#xe605;</i>
        <span>目录</span>
      </dd>
      <dd @click="showHandle(0)">
        <i class="iconfont">&#xe68f;</i>
        <span>设置</span>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  name: "LeftList",
  methods: {
    showHandle(index) {
      this.$store.commit("showHandle", index);
    },
  },
};
</script>
<style scoped>
.left_list {
  position: fixed;
  top: 0;
  left: 0;
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