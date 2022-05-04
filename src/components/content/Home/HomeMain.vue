<template>
  <div class="main">
    <div class="left">
      <span>人气强推</span>
      <ren-qi :lr="books.renqi"></ren-qi>
    </div>
    <div class="middle">
      <loop :carousel="books.lunbotu"></loop>
      <re-men :rm="books.remen"></re-men>
      <xian-shi :xs="books.xianshi"></xian-shi>
    </div>
    <div class="right">
      <span>作品新秀</span>
      <xin-xiu :rx="books.xinxiu"></xin-xiu>
    </div>
  </div>
</template>
<script>
import RenQi from "components/content/Recommend/Home/RenQi.vue";
import XinXiu from "components/content/Recommend/Home/XinXiu.vue";
import Loop from "components/content/Recommend/Carousel/Loop.vue";
import ReMen from "components/content/Recommend/Home/ReMen.vue";
import XianShi from "components/content/Recommend/Home/XianShi.vue";
export default {
  name: "HomeMain",
  data() {
    return {
      bs: "",
    };
  },
  props: ["books"],
  components: {
    RenQi,
    XinXiu,
    Loop,
    ReMen,
    XianShi,
  },
};
</script>
<style>
.main {
  display: flex;
  padding-top: 20px;
  justify-content: space-between;
  color: #2f2c2c;
}

.left,
.right {
  width: 16%;
  background: #fff;
  padding: 0 2%;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
}

.left span,
.right span {
  display: inline-block;
  width: 100%;
  margin: 8% 0;
  border-bottom: 1px solid #2f2c2c;
  padding-bottom: 10%;
  font-size: 23px;
  font-family: 华文中宋;
  letter-spacing: 1px;
  color: #181818;
}

.middle {
  width: 68%;
  margin: 0 10px;
}

.renqi ul li,
.xinxiu ul li {
  padding: 8px 0;
  border-bottom: 1px solid #e6e6e6;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 16px;
  transition: color 0.3s ease;
}

.renqi ul li:hover,
.xinxiu ul li:hover {
  color: #fc1e1e;
  cursor: pointer;
}
</style>