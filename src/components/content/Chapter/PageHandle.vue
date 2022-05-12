<template>
  <transition name="left-show" v-if="$store.state.handle">
    <div class="handle_box" :style="{ background: $store.state.pageColor }">
      <ul>
        <li class="title_line">
          <i class="title_line_title">阅读主题</i>
          <dl class="themeList">
            <dd
              v-for="(item, index) in themeList"
              :key="index"
              :style="{ background: item }"
              :title="index"
              :class="{ active: themeClick == index }"
              @click="chcolor(index, item)"
            >
              <i
                :class="{ iconfont: themeClick == index }"
                v-if="themeClick == index"
                >&#xe63b;</i
              >
            </dd>
          </dl>
        </li>
        <li class="title_line">
          <i class="title_line_title">正文字体</i>
          <dl class="fontList">
            <dd
              v-for="(item, index) in fontList"
              :key="index"
              :class="{ active: fontClick == index }"
              @click="chfont(index, item)"
            >
              {{ index }}
            </dd>
          </dl>
        </li>
        <li class="title_line">
          <i class="title_line_title">字体大小</i>
          <dl class="sizeList">
            <dd class="iconfont" @click="minsize()">&#xe60e;</dd>
            <dd>{{ sizeClick }}</dd>
            <dd class="iconfont" @click="addsize()">&#xe60f;</dd>
          </dl>
        </li>
        <li class="title_line">
          <i class="title_line_title">页面宽度</i>
          <dl class="widthList">
            <dd class="iconfont" @click="chwidth(0)">&#xe60d;</dd>
            <dd>{{ widthClick }}</dd>
            <dd class="iconfont" @click="chwidth(1)">&#xe60c;</dd>
          </dl>
        </li>
      </ul>
      <div class="el_box">
        <button
          v-for="(item, index) in el_btn_list"
          :key="index"
          :class="{ btn_active: index == 0 }"
          @click="chbtn(index)"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PageHandle",
  data() {
    return {
      themeList: {
        默认: "#faf5eb repeat",
        牛皮纸: "#f5eacc repeat",
        淡绿色: "#e6f2e6 repeat",
        淡蓝色: "#e4f1f5 repeat",
        淡粉色: "#f5e4e4 repeat",
        灰色: "#e0e0e0 repeat",
      },
      fontList: {
        雅黑: "",
        宋体: "宋体",
        楷书: "楷体",
      },
      el_btn_list: ["保存", "取消"],
      themeClick: "默认",
      fontClick: "雅黑",
      sizeClick: 18,
      widthClick: 800,
      btnClick: 0,
    };
  },

  methods: {
    chcolor(index, item) {
      this.themeClick = index;
      this.$store.commit("changePageColor", item);
    },
    chfont(index, item) {
      this.fontClick = index;
      this.$store.commit("changePageFont", item);
    },
    addsize() {
      if (this.sizeClick < 48) {
        this.sizeClick += 2;
        this.$store.commit("changePageSize", this.sizeClick);
      }
    },
    minsize() {
      if (this.sizeClick > 12) {
        this.sizeClick -= 2;
        this.$store.commit("changePageSize", this.sizeClick);
      }
    },
    chwidth(index) {
      if (index == 0) {
        this.widthClick = 640;
      } else {
        this.widthClick = 800;
      }
      this.$store.commit("changePageWidth", this.widthClick);
    },
    chbtn(index) {
      if (index != 0) {
        this.sizeClick = 18;
        this.widthClick = 800;
        this.themeClick = "默认";
        this.fontClick = "雅黑";
        this.$store.commit("restore");
      }
      this.$store.commit("showHandle");
    },
  },
};
</script>

<style scoped>
.el_box {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.el_box button {
  font-size: 16px;
  padding: 5px 30px;
  background: #fff;
  border: 1px solid rgb(199, 196, 196);
  margin: 0 20px;
  cursor: pointer;
  border-radius: 3px;
}

.left-show-enter-active,
.left-show-leave-active {
  transition: all 0.5s ease-in-out;
}

.left-show-enter,
.left-show-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.handle_box {
  position: fixed;
  left: 60px;
  top: 0;
  box-shadow: 0 0 10px gray;
}

.handle_box ul {
  margin: 10px 20px;
}

.title_line_title {
  font-size: 14px;
}

.themeList,
.fontList,
.sizeList,
.widthList {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.themeList dd {
  width: 35px;
  height: 35px;
  border-radius: 100%;
  margin: 0 10px;
  border: 1px solid rgb(189, 185, 185);
  cursor: pointer;
}

.fontList dd {
  width: 80px;
  text-align: center;
  border-radius: 2px;
  margin: 0 12px;
  padding: 1px 3px;
  border: 1px solid rgb(189, 185, 185);
  cursor: pointer;
  font-size: 16px;
}

.sizeList dd,
.widthList dd {
  width: 80px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 2px;
  margin: 0 12px;
  padding: 1px 3px;
  border: 1px solid rgb(189, 185, 185);
  cursor: pointer;
}

.sizeList .iconfont,
.widthList .iconfont {
  font-size: 25px;
  transition: color 0.3s ease-in-out;
}

.sizeList .iconfont:hover,
.widthList .iconfont:hover {
  color: #f32525;
}

.active {
  color: #f32525;
  border: 1px solid #f32525 !important;
}

.el_box .btn_active {
  color: #fff;
  background: #ce0c0c;
  border: none;
  transition: all 0.3s ease-in-out;
}

.el_box .btn_active:hover {
  background: #f32525;
}

.iconfont {
  margin-left: 7px;
  font-size: 20px;
}

.title_line {
  display: flex;
  align-items: center;
}
</style>