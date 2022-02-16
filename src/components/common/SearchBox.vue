<template>
  <div class="bar">
    <input
      placeholder="请输入书名/作者名"
      type="text"
      v-model="keyword"
      @keyup.enter="getKeyword()"
    />
    <i class="iconfont icon-31sousuo" @click="getKeyword()"></i>
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    getKeyword() {
      if (this.keyword.length != 0) {
        let url = this.$router.resolve({
          name: "search",
          query: { kw: this.keyword },
        });
        window.open(url.href, "_self");
      } else {
        alert("不能为空");
      }
    },
  },
};
</script>
<style scoped>
.bar {
  display: flex;
  width: 380px;
  padding-left: 15px;
  margin: 40px auto;
  border-radius: 18px;
  overflow: hidden;
  background-color: white;
}

.bar input {
  width: 100%;
  font-size: 17px;
  padding-left: 3%;
  border: none;
  background: transparent;
}

i {
  border-left: 1px solid #ccc;
  background: #fb6b84;
  padding-right: 5px;
}

.icon-31sousuo {
  font-size: 40px;
}
</style>