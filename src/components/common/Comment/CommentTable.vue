<template>
  <el-table border :data="table" height="500">
    <el-table-column prop="id" label="编号"> </el-table-column>
    <el-table-column prop="book_id" label="书籍编号"> </el-table-column>
    <el-table-column prop="chapter_id" label="章节编号"></el-table-column>
    <el-table-column prop="content" label="内容"></el-table-column>
    <el-table-column prop="user_id" label="发布人"></el-table-column>
    <el-table-column prop="create_time" label="发布时间"></el-table-column>
    <el-table-column label="备注">
      <template slot-scope="scope">
        <el-button
          type="primary"
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "CommentTable",
  props: ["table"],
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style scoped>
</style>