<template>
  <transition name="left-show" v-if="$store.state.list">
    <div
      class="clist"
      :style="{
        background: $store.state.pageColor,
        width: $store.state.pageWidth,
      }"
    >
      <ul>
        <li
          v-for="(item, index) in booklist"
          :key="index"
          @click="getChapterid(item)"
        >
          {{ item.section }}
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import { getBook } from "util/network";
export default {
  name: "ChapterList",
  data() {
    return {
      booklist: "",
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      getBook(4, { bookid: this.$route.params.bookid }).then((res) => {
        this.booklist = res.data.chapter;
        console.log(res.data);
      });
    },
    getChapterid(value) {
      this.$router.push({
        name: "chapter",
        params: {
          bookid: this.$route.params.bookid,
          chapterid: value.link,
        },
      });
      setTimeout(() => {
        location.reload();
      }, 100);
    },
  },
};
</script>

<style scoped>
.clist {
  position: fixed;
  height: 300px;
  border: 1px solid #e6e6e6;
  box-shadow: 0 0 10px #e6e6e6;
  left: 0;
  top: 138px;
  font-size: 18px;
  overflow-y: scroll;
}

.clist ul {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.clist ul li {
  width: 40%;
  padding: 10px 0;
  border-bottom: 1px solid #e6e6e6;
  transition: color 0.3s ease;
  cursor: pointer;
}

.clist ul li:hover {
  color: #fa3636;
}

.left-show-enter-active,
.left-show-leave-active {
  transition: all 0.5s ease-in-out;
}

.left-show-enter,
.left-show-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>