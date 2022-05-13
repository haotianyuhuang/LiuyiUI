<template>
  <div class="shelf">
    <div class="shelf_top">
      <ul>
        <li
          v-for="(item, index) in tag"
          :key="index"
          :class="{ active: isActive == index }"
          @click="change(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="shelf_main">
      <book-shelf v-if="isActive == 1" :books="shelf"></book-shelf>
      <book-history v-if="isActive == 2" :cinfo="info"></book-history>
    </div>
  </div>
</template>
<script>
import { getShelf } from "util/network";
import BookShelf from "components/content/Shelf/BookShelf.vue";
import BookHistory from "components/content/Shelf/BookHistory.vue";
export default {
  components: { BookShelf, BookHistory },
  name: "Shelf",
  data() {
    return {
      isOpen: true,
      shelf: "",
      tag: ["首页", "书架", "历史记录", "消息中心"],
      isActive: 1,
      info: "",
    };
  },
  created() {
    this.getBooks();
    this.selecthistory();
  },
  methods: {
    getBooks() {
      getShelf(0, "", this.$store.state.token).then((res) => {
        this.shelf = res.data;
        console.log(res);
      });
    },
    change(index) {
      this.isActive = index;
      if (index == 0) {
        this.$router.push("/home");
        this.isActive = 1;
      }
    },
    selecthistory() {
      getShelf(4, "", this.$store.state.token).then((res) => {
        this.info = res;
      });
    },
  },
};
</script>
<style scoped>
.shelf_top ul {
  display: flex;
  justify-content: center;
  background: #464e47;
}

.shelf_top ul li {
  padding: 5px 50px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}

.shelf_main {
  margin: 0 50px;
  display: flex;
  justify-content: center;
}

.active {
  background: #ee4256;
}

.shelf_top ul li:hover {
  background: #161616;
}
</style>