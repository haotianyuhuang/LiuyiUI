<template>
  <div class="logo_wrap">
    <div class="logo">
      <img src="@/assets/img/logo/logo2.png" />
    </div>
    <search-wrap></search-wrap>
    <router-link class="book-shelf" to="/shelf">
      <i class="iconfont">&#xe620;</i>
      <span>我的书架</span>
    </router-link>
  </div>
</template>
<script>
import SearchWrap from "components/common/SearchWrap.vue";
export default {
  name: "Logo",
  components: {
    SearchWrap,
  },
};
</script>
<style scoped>
.logo_wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
}

.book-shelf {
  transition: all 0.3s ease;
  margin-left: 110px;
  border: 1px solid #fff;
}

.book-shelf:hover {
  color: #fff;
  background: #ed4259;
  border: 1px solid #f11c38;
  border-radius: 3px;
}

.iconfont {
  font-size: 28px;
}
</style>