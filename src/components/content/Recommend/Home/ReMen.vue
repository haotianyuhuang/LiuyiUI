<template>
  <div class="remen">
    <div class="remen_box">
      <div class="title_bar">
        <span>热门作品</span>
      </div>
      <div class="remen_list">
        <div v-for="(item, index) in rm" :key="index" class="wenzi">
          <div class="img_title" @click="getLink(item.link)">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReMen",
  props: ["rm"],
  methods: {
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
.wenzi {
  padding: 5px;
  border-left: 1px dashed #ddd;
}
.img_box {
  width: 120px;
  height: 150px;
  overflow: hidden;
}
.img_title {
  display: inline-block;
  padding: 5px 0 5px 5px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.3s ease-in-out;
}
.img_title:hover {
  color: #fc1e1e;
  cursor: pointer;
}
.remen {
  background: #fff;
  margin-top: 20px;
  border-radius: 3px;
  border: 1px solid #ddd;
}
.title_bar span {
  padding: 9px 40px;
  font-size: 20px;
  font-family: 华文中宋;
}
.title_bar {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
}

.remen_list {
  column-count: 3;
  /* display: flex;
  justify-content: space-around;
  flex-wrap: wrap; */
}

.remen_list img {
  width: 120px;
  height: 150px;
  transition: all 0.3s ease;
}

.remen_list img:hover {
  transform: scale(1.1);
}
</style>