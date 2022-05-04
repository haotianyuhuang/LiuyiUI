<template>
  <div class="search_bar">
    <dropdown @sendData="choosekey"></dropdown>
    <input
      class="search-box"
      type="text"
      :placeholder="place"
      v-model="input"
      @keyup.enter="jump"
    />
    <i class="iconfont icon-31sousuo" @click="jump()"></i>
  </div>
</template>
<script>
import Dropdown from "./Dropdown.vue";
export default {
  components: { Dropdown },
  name: "SearchBar",
  data() {
    return {
      input: "",
      place: "请输入书名",
      type: 0,
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
    choosekey(data) {
      this.type = data;
      if (data == 0) {
        this.place = "请输入书名";
      } else {
        this.place = "请输入作者名";
      }
    },
  },
};
</script>
<style scoped>
.search_bar {
  display: flex;
  align-items: center;
}

.search-box {
  width: 220px;
  height: 32px;
  font-size: 15px;
  border-bottom: 2px solid #aaa;
  border-top: none;
  border-right: none;
  border-left: none;
  color: #fff;
  transition: color 0.3s, border 0.3s;
  margin: 0 10px;
  background: transparent;
}

.search-box::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-box:focus {
  border-bottom: 2px solid #fff;
}

.icon-31sousuo {
  float: right;
  font-size: 25px;
  color: #fff;
}
</style>