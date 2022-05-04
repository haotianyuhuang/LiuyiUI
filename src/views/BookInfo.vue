<template>
  <div class="bookinfo" v-loading="loading">
    <book-desc :cdesc="desc"></book-desc>
    <div class="hr">
      <span :class="{ current: isShow == false }" @click="change(1)">
        作品信息
      </span>
      <span :class="{ current: isShow == true }" @click="change(2)">
        目录
        <i>({{ total_chapter }})</i>
      </span>
    </div>
    <div class="info" v-if="!isShow">
      <dl>
        <dd v-for="(item, index) in brief" :key="index">
          <p>{{ item }}</p>
        </dd>
      </dl>
    </div>
    <book-list :cbooklist="booklist" v-if="isShow"></book-list>
  </div>
</template>

<script>
import { searchInfo } from "util/sedata";
import { searchList } from "util/sedata";
import { recInfo } from "util/sedata";
import BookList from "components/content/BookInfo/BookList.vue";
import BookDesc from "components/content/BookInfo/BookDesc.vue";

export default {
  name: "BookInfo",
  components: {
    BookList,
    BookDesc,
  },
  data() {
    return {
      booklist: "",
      desc: "",
      isShow: false,
      total_chapter: "",
      brief: [],
      loading: true,
    };
  },
  created() {
    let bookid = this.$route.params.bookid;
    if (bookid == "home") {
      let link = sessionStorage.getItem("link");
      recInfo(link).then((res) => {
        document.title = res.data.list.title;
        this.desc = res.data.desc;
        this.brief = res.data.desc.desc;
        this.booklist = res.data.list;
        this.total_chapter = res.data.list.chapter.length;
        this.loading = false;
      });
    } else {
      searchList(this.$route.params.bookid).then((res) => {
        this.booklist = res.data;
        this.total_chapter = res.data.chapter.length;
        document.title = res.data.title;
        searchInfo(res.data.title).then((res) => {
          this.desc = res.data[0];
          this.brief = res.data[0].desc;
          this.loading = false;
        });
      });
    }
  },
  mounted() {},
  methods: {
    change(num) {
      if (num == 2) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  },
};
</script>

<style scoped>
.bookinfo {
  margin: 0 10%;
  background: #fff;
}
.hr {
  border-bottom: 1px solid #e6e6e6;
}
.hr span {
  display: inline-block;
  padding: 1% 3%;
  font-family: 华文中宋;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.hr span:hover {
  color: #ed4259;
}
i {
  font-style: normal;
  font-family: none;
  font-size: 16px;
}
.current {
  color: #ed4259;
  border-bottom: 1px solid;
}

dd {
  margin: 0;
}

dd p {
  text-indent: 2em;
  line-height: 1.8;
}
</style>