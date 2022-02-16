<template>
  <div class="search_wrap">
    <input
      class="search-box"
      type="text"
      placeholder="请输入完整书名"
      v-model="input"
      @keyup.enter="jump"
    />
    <i class="iconfont icon-31sousuo" @click="jump()"></i>
  </div>
</template>
<script>
export default {
  name: "SearchWrap",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    jump() {
      if (this.input.length != 0) {
        let url = this.$router.resolve({
          path: "/search",
          query: {
            kw: this.input,
            ty: this.type,
          },
        });
        window.open(url.href, "_blank");
      } else {
        alert("不能为空");
      }
    },
  },
};
</script>
<style scoped>
.search_wrap {
  margin: 0 200px;
}
.search-box {
  width: 320px;
  padding-left: 10px;
  height: 32px;
  font-size: 18px;
  border: 2px solid gray;
  border-right: none;
}

i {
  background: #bf2c24;
}

.icon-31sousuo {
  float: right;
  font-size: 38px;
  color: white;
}
</style>