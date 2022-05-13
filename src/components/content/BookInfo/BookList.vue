<template>
  <div class="booklist">
    <div class="content_box">
      <ul class="chapter_id">
        <li v-for="(value, index) in cbooklist.chapter" :key="index">
          <p>
            <span @click="getChapterid(value)" :title="value.section">{{
              value.section
            }}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookList",
  props: ["cbooklist"],
  data() {
    return {};
  },
  methods: {
    getChapterid(value) {
      sessionStorage.setItem("title", document.title);
      let url = this.$router.resolve({
        path: "/chapter" + "/" + this.cbooklist.bookid + "/" + value.link,
      });
      window.open(url.href, "_blank");
    },
  },
};
</script>

<style>
.booklist {
  position: relative;
  margin: 1%;
}
.content_box {
  position: relative;
}
.chapter_id {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.chapter_id li {
  width: 33%;
  border-bottom: 1px solid #ebebeb;
}
.chapter_id li p {
  width: 80%;
  margin: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.chapter_id li p span {
  transition: all 0.3s ease-in-out;
}
.chapter_id li p span:hover {
  cursor: pointer;
  color: #ed4259;
}
</style>