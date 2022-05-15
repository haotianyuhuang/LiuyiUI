<template>
  <div class="reckind">
    <drawer></drawer>
    <home-nav :navlist="list"></home-nav>
    <search-box></search-box>
    <div class="kind_box">
      <ul>
        <li v-for="(item, index) in books" :key="index">
          <div class="img_box">
            <img :src="item.imgUrl" @click="getLink(item.link)" />
          </div>
          <div class="rec_title" @click="getLink(item.link)">
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getBook } from "util/network";
import Drawer from "components/common/Drawer.vue";
import HomeNav from "components/content/Home/HomeNav.vue";
import SearchBox from "components/common/SearchBox.vue";
export default {
  components: { Drawer, HomeNav, SearchBox },
  name: "RecKind",
  data() {
    return {
      list: "",
      books: "",
    };
  },
  created() {
    this.kind();
  },
  methods: {
    kind() {
      getBook(7, { index: this.$route.params.index }).then((res) => {
        document.title = res.data.list[this.$route.params.index];
        this.list = res.data.list;
        this.books = res.data.books;
        console.log(res);
      });
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
.reckind .kind_box {
  width: 1000px;
  margin: 0 auto;
}

.kind_box ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.kind_box ul li {
  margin: 10px;
}

.img_box {
  width: 150px;
}

.rec_title {
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
</style>