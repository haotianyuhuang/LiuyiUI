<template>
  <div class="logo_wrap">
    <div class="logo">
      <img src="@/assets/img/logo/logo2.png" />
    </div>
    <search-wrap></search-wrap>
    <router-link class="book-shelf" to="/shelf">
      <i class="iconfont icon-line-bookmarksshuqian"></i>
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
<style>
.logo_wrap {
  display: flex;
  align-items: center;
  padding: 1% 0;
}

.icon-line-bookmarksshuqian {
  font-size: 36px;
}

.book-shelf {
  transition: all 0.3s;
  margin-left: 110px;
  border: 1px solid #fff;
}

.book-shelf:hover {
  color: #fff;
  background: #ed4259;
  border: 1px solid #f11c38;
  border-radius: 3px;
}

.book-shelf span {
  float: right;
  padding: 0 5px;
  line-height: 36px;
}

.logo {
  margin-left: 70px;
}
</style>