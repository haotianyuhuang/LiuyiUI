<template>
  <div class="xianshi">
    <div class="xianshi_box">
      <div class="title_bar">
        <span>限时免费</span>
      </div>
      <div class="xianshi_list">
        <ul v-for="(item, index) in xs" :key="index" class="wenzi">
          <div class="time">{{ time }}</div>
          <li class="img_box">
            <img :src="item.imgUrl" @click="getLink(item.link)" />
          </li>
          <div class="img_title">{{ item.title }}</div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Xianshi",
  props: ["xs"],
  data() {
    return {
      time: "",
    };
  },
  created() {
    this.countdown();
  },
  methods: {
    countdown() {
      let now = new Date().getTime();
      let next = new Date("2022/2/11 14:00:00").getTime();
      let total = (next - now) / 1000;
      let timer = setInterval(() => {
        if (total <= 0) {
          clearInterval(timer);
        } else {
          total--;
          let h = parseInt((total / 60 / 60) % 96);
          h = h < 10 ? "0" + h : h;
          let m = parseInt((total / 60) % 60);
          m = m < 10 ? "0" + m : m;
          let s = parseInt(total % 60);
          s = s < 10 ? "0" + s : s;
          this.time = h + "小时" + m + "分" + s + "秒";
        }
      }, 1000);
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
.time {
  text-align: center;
  color: #ef2145;
  padding: 10px 0;
}
.wenzi {
  padding: 5px;
}
.img_box {
  width: 120px;
  height: 150px;
  overflow: hidden;
}
.img_title {
  width: 120px;
  text-align: center;
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
.xianshi {
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

.xianshi_list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.xianshi_list img {
  width: 120px;
  height: 150px;
  transition: all 0.3s ease;
}

.xianshi_list img:hover {
  transform: scale(1.1);
}
</style>