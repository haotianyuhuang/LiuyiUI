<template>
  <div>
    <el-table border :data="table" height="500">
      <el-table-column prop="id" label="编号"> </el-table-column>
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column prop="nick" label="发布人"></el-table-column>
      <el-table-column prop="create_time" label="发布时间"></el-table-column>
      <el-table-column label="备注">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleEdit(scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <empty-two :cinfo="info"></empty-two>
  </div>
</template>

<script>
import EmptyTwo from "../EmptyTwo.vue";
import { getNotice } from "util/admin.js";
export default {
  components: { EmptyTwo },
  name: "NoticeTable",
  data() {
    return {
      info: [],
    };
  },
  props: ["table"],
  methods: {
    handleEdit(row) {
      console.log(row);
      this.info = row;
      this.$store.commit("updata");
    },
    handleDelete(row) {
      getNotice(3, { id: row.id }, this.$store.state.token).then((res) => {
        this.data = res;
        alert("删除成功!");
      });
    },
  },
};
</script>

<style scoped>
</style>