<template>
  <div class="bh">
    <div class="hs">
      <span class="history_icon"></span>
      <span>历史记录</span>
    </div>
    <el-timeline :reverse="reverse" style="font-size: 18px">
      <el-timeline-item
        v-for="(item, index) in cinfo"
        :key="index"
        :timestamp="item.updatetime"
        size="large"
        type="info"
        placement="top"
      >
        <div class="line_column">
          <div class="history_box" v-if="item.book_cover != null">
            <img :src="item.book_cover" :title="item.book_title" />
          </div>
          <div v-if="item.chapter_id != null">
            阅读 《{{ item.book_title }}》 至第{{ item.chapter_id }}章
          </div>
          <div v-else>添加 《{{ item.book_title }}》</div>
        </div>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "BookHistory",
  props: ["cinfo"],
  created() {},
  data() {
    return {
      reverse: false,
    };
  },
  methods: {},
};
</script>

<style>
.el-timeline {
  font-family: "宋体";
}

.history_box {
  width: 120px;
  margin-right: 20px;
}

.line_column {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #b6afaf;
}

.el-timeline-item__timestamp {
  font-size: 15px !important;
}

.history_icon {
  display: block;
  margin-right: 20px;
  background: url(//s1.hdslb.com/bfs/static/history-record/./img/icons.png) -83px -850px
    no-repeat;
  width: 28px;
  height: 28px;
}

.bh .hs {
  display: flex;
  right: 50px;
  position: relative;
  margin: 10px 0;
  align-items: center;
}
</style>