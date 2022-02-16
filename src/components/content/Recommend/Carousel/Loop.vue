<template>
  <el-carousel
    height="300px"
    indicator-position="none"
    @change="choose"
    ref="carousel"
  >
    <el-carousel-item v-for="(item, index) in carousel" :key="index">
      <img :src="item.imgUrl" @click="getLink(item.link)" />
    </el-carousel-item>
    <ul class="indicator">
      <li
        v-for="(item, index) in carousel"
        :key="index"
        :class="{ current: isActive == index }"
        @click="getIndex(index)"
      >
        {{ item.title }}
      </li>
    </ul>
  </el-carousel>
</template>
<script>
export default {
  name: "Loop",
  props: ["carousel"],
  data() {
    return {
      isActive: 0,
    };
  },
  methods: {
    choose(n) {
      this.isActive = n;
    },
    getIndex(index) {
      this.$refs.carousel.setActiveItem(index);
    },
    getLink(link) {
      sessionStorage.setItem("link", link);
      let url = this.$router.resolve({
        path: "/info/home",
      });
      window.open(url.href, "_blank");
    },
  },
};
</script>
<style scoped>
.indicator {
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 7);
  top: 260px;
}

.indicator li {
  height: 30px;
  line-height: 30px;
  padding: 3px 0;
  width: 25%;
  text-align: center;
  border: 1px solid;
  color: #fff;
}

.current {
  background: #ee2626;
}
</style>