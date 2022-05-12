<template>
  <div class="search_main">
    <ul>
      <li v-for="(item, index) in cbooks" :key="index" class="book">
        <div class="album">
          <img @click="getBookid(item)" :src="item.img" />
        </div>
        <div class="info">
          <div id="bookname">
            <span @click="getBookid(item)">{{ item.title }}</span>
          </div>
          <div id="author">
            <img src="@/assets/img/user.png" />
            <span @click="getAuthor(item.author)">{{ item.author }}</span>
          </div>
          <div id="desc">{{ item.desc }}</div>
        </div>
        <div class="btn">
          <span @click="getBookid(item)">书籍详情</span>
          <span>加入书架</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchMain",
  props: ["cbooks"],
  methods: {
    getBookid(bookid) {
      let url = this.$router.resolve({
        path: "/info" + "/" + bookid.link,
      });
      window.open(url.href, "_blank");
    },
    getAuthor(a) {
      let url = this.$router.resolve({
        name: "search",
        query: { kw: a, ty: 1 },
      });
      window.open(url.href, "_self");
    },
  },
};
</script>

<style scoped>
.book {
  display: flex;
  padding: 3% 10%;
  position: relative;
  border-bottom: 2px solid #e6e6e6;
}

.book .info {
  margin-left: 3%;
  width: 50%;
}

#bookname span {
  margin-bottom: 3%;
  font-size: 23px;
  transition: color 0.3s ease-in-out;
}

#bookname span:hover {
  color: #ed4259;
}

#author span:hover {
  color: #262626;
  transition: color 0.3s ease-in-out;
}

#author {
  display: flex;
  align-items: center;
}

#author img {
  height: 18px;
  width: 18px;
  margin-top: 3px;
}

#author span {
  margin-left: 2%;
  color: #a6a6a6;
  font-size: 15px;
}

#desc {
  font-size: 16px;
  text-indent: 2em;
  word-wrap: break-word;
  word-break: break-all;
}

.album {
  width: 120px;
  height: 160px;
  overflow: hidden;
  box-shadow: 0 0 7px #999;
}

.book .album img {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  vertical-align: middle;
}

.book .album img:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.info_box {
  margin-bottom: 30%;
}

.btn {
  position: absolute;
  right: 13%;
  bottom: 12%;
}

.btn span {
  border: 1px solid;
  display: inline-block;
  font: 14px/32px PingFangSC-Regular, -apple-system, Simsun;
  height: 32px;
  text-align: center;
  vertical-align: middle;
  width: 98px;
  transition: color 0.3s, background-color 0.3s;
}

.btn span:nth-child(1) {
  background: #bf2c24;
  border-color: #bf2c24;
  color: #fff;
  margin-right: 24px;
}

.btn span:nth-child(1):hover {
  background: #ed4259;
  border-color: #ed4259;
}

.btn span:nth-child(2) {
  border-color: #3f5a93;
  color: #3f5a93;
}

.btn span:nth-child(2):hover {
  background: #f0f5ff;
  border-color: #2972cc;
  color: #2972cc;
}
</style>