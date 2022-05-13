<template>
  <div class="bs">
    <ul>
      <li v-for="(item, index) in books" :key="index">
        <div class="img_box">
          <img
            :src="item.book_cover"
            :title="item.book_title"
            @click="startread(item)"
          />
          <span @click="startread(item)">{{ item.book_title }}</span>
        </div>
        <div class="tools">
          <div class="current_page">
            <span v-if="item.chapter_id == null" @click="startread(item)">
              尚未阅读
            </span>
            <span v-else @click="startread(item)" title="继续阅读"
              >已阅读至第{{ item.chapter_id }}章</span
            >
          </div>
          <div class="removeshelf" @click="reshelf(item)">移出书架</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getShelf } from "util/network";
export default {
  name: "BookShelf",
  props: ["books"],
  data() {
    return {};
  },
  methods: {
    reshelf(item) {
      getShelf(1, { id: item.id }, this.$store.state.token).then((res) => {
        if (res.code == 200) {
          alert("删除成功");
        } else {
          alert("删除失败");
        }
      });
      setTimeout(() => {
        window.location.reload();
      }, 100);
    },
    startread(item) {
      let chapter_id = item.chapter_id;
      if (chapter_id == null) {
        chapter_id = 1;
      }
      let url = this.$router.resolve({
        path: "/chapter" + "/" + item.book_id + "/" + chapter_id,
      });
      window.open(url.href, "_blank");
    },
  },
};
</script>

<style scoped>
.bs ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 30px 0 0;
  padding: 20px 10px;
  border: 1px solid #dbd9d9;
  box-shadow: 0 0 10px #c2c1c1;
  background: #fff;
  border-radius: 5px;
}

.img_box {
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul li {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin: 10px;
}

.tools {
  margin-left: 20px;
}

img {
  border: 1px solid #c2c1c1;
  box-shadow: 0 0 10px #c2c1c1;
}

.removeshelf,
.current_page {
  margin: 20px 0;
  padding: 5px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
}

.removeshelf {
  background: #d32506;
  color: #fff;
  text-align: center;
}

.current_page:hover {
  border-color: #3f5a93;
  color: #3f5a93;
}

.removeshelf:hover {
  background: #ed4259;
  border-color: #ed4259;
}
</style>