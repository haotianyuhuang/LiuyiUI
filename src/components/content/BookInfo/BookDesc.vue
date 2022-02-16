<template>
  <div class="desc">
    <div class="img_wrap">
      <div class="imgdiv">
        <img :src="image" />
      </div>
    </div>
    <div class="tag">
      <div class="title">
        {{ title }}
        <span>{{ author }} 著</span>
      </div>
      <div class="tag_box">
        <li v-for="(item, index) in tag" :key="index">{{ item }}</li>
      </div>
    </div>
  </div>
</template>
<script>
// import { searchAuthor } from "@/util/sedata";
export default {
  name: "BookDesc",
  props: ["cdesc"],
  data() {
    return {
      image: "",
      author: "",
      tag: "",
      title: "",
      tag_content: [],
    };
  },
  watch: {
    cdesc(n) {
      this.image = n.img;
      this.tag = n.tag;
      let rex = /[^作者：()]+/;
      this.author = rex.exec(this.tag[0])[0];
      this.tag[0] = this.tag[0].replace(/^.+?\)/, "");
      this.title = n.title;
      // searchAuthor(this.author).then((res) => {
      //   console.log(res.data);
      // });
    },
  },
};
</script>
<style>
.title span {
  padding: 0 80px;
  font-family: 仿宋;
  font-weight: 100;
  font-size: 17px;
  transition: color 0.5s ease-in-out;
}

.title span:hover {
  color: #e73535;
}

.img_wrap {
  width: 18%;
}

.desc {
  display: flex;
  padding: 2%;
  border-bottom: none;
}
.imgdiv {
  overflow: hidden;
  width: 140px;
  height: 190px;
  box-shadow: 0 1px 6px rgb(0 0 0 / 35%), 0 0 5px #f9f2e9 inset;
}
.imgdiv img {
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
}

.imgdiv img:hover {
  transform: scale(1.1);
}

.tag {
  width: 72%;
}

.tag_box {
  padding: 30px 0;
  column-count: 3;
}

.tag_box li {
  font-size: 16px;
}

.title {
  font-size: 30px;
  font-weight: bolder;
}
</style>