<template>
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
    <el-button style="margin: 5px" type="danger" size="small" @click="sublist"
      >删除</el-button
    >
    <el-button style="margin: 5px" type="primary" size="small" @click="addlist"
      >添加</el-button
    >
    <el-form-item label="范围" style="margin-top: 50px">
      <el-input placeholder="范围" v-model="range"></el-input>
    </el-form-item>
    <el-form-item label="处理">
      <el-input type="textarea" v-model="handle"></el-input>
    </el-form-item>
    <el-button type="primary" size="small" @click="getParams">提交</el-button>
  </el-form>
</template>
<script>
import { collect } from "util/admin";
export default {
  name: "CollectForm",
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
    };
  },
  methods: {
    getParams() {
      collect(this.url, this.rule, this.range).then((res) => {
        this.$emit("test", res);
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
</style>