<template>
  <div>
    <div class="amateurish" v-if="cvalue">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          :class="{ active: isActive == index }"
          @click="show(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="professional" v-else>
      <el-form label-width="50px">
        <el-form-item label="URL">
          <el-input placeholder="URL" v-model="url"></el-input>
        </el-form-item>
        <el-form-item
          class="rule"
          label="规则"
          v-for="(item, index) in rule"
          :key="index"
        >
          <el-input
            v-model="item.title"
            class="rule_input"
            placeholder="规则名"
          ></el-input>
          <el-input
            v-model="item.query"
            class="rule_input"
            placeholder="选择器"
          ></el-input>
          <el-input
            v-model="item.attr"
            class="rule_input"
            placeholder="元素属性"
          ></el-input>
        </el-form-item>
        <el-button
          style="margin: 5px"
          type="danger"
          size="small"
          @click="sublist"
          >删除</el-button
        >
        <el-button
          style="margin: 5px"
          type="primary"
          size="small"
          @click="addlist"
          >添加</el-button
        >
        <el-form-item label="范围" style="margin-top: 50px">
          <el-input placeholder="范围" v-model="range"></el-input>
        </el-form-item>
        <el-form-item label="处理">
          <el-input type="textarea" v-model="handle"></el-input>
        </el-form-item>
        <el-button type="primary" size="small" @click="getParams"
          >提交</el-button
        >
      </el-form>
    </div>
  </div>
</template>
<script>
import { collect, collect2 } from "util/admin";
export default {
  name: "CollectForm",
  props: ["cvalue"],
  data() {
    return {
      url: "",
      rule: [
        {
          title: "",
          query: "",
          attr: "",
        },
      ],
      range: "",
      handle: "",
      isClear: false,
      isActive: 0,
      list: [
        "首页",
        "玄幻",
        "奇幻",
        "武侠",
        "仙侠",
        "都市",
        "现实",
        "军事",
        "历史",
        "游戏",
        "体育",
        "科幻",
        "悬疑",
        "轻小说",
        "女频",
        "古代言情",
        "仙侠奇缘",
        "现代言情",
        "浪漫青春",
        "玄幻言情",
        "悬疑推理",
        "科幻空间",
        "游戏竞技",
        "女轻",
        "短篇小说",
      ],
    };
  },
  methods: {
    getParams() {
      collect(this.url, this.rule, this.range).then((res) => {
        this.$emit("test", res);
      });
    },
    show(index) {
      this.isActive = index;
      alert("开始采集!");
      collect2(index + 1).then((res) => {
        console.log(res);
        // this.$emit("test", res);
        alert("采集结束!");
      });
    },
    addlist() {
      this.rule.push({
        title: "",
        query: "",
        attr: "",
      });
    },
    sublist() {
      this.rule.pop();
    },
  },
};
</script>
<style>
.el-form {
  height: 450px;
  overflow-y: scroll;
  padding: 20px;
}

.rule .el-form-item__content {
  display: flex;
  justify-content: space-between;
}

.amateurish {
  padding: 10px;
}

.amateurish ul {
  display: flex;
  width: 500px;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #fff;
}

.amateurish ul li {
  width: 100px;
  margin: 10px;
  text-align: center;
  padding: 2px;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #e6e6ee;
  box-shadow: 0 0 10px #e6e6ee;
  transition: all 0.3s ease-in-out;
}

.amateurish ul li:hover {
  color: #fff;
  background: #f75a5a;
}

.active {
  background: #eb3737;
  color: #fff;
}
</style>