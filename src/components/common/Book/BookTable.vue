<template>
  <el-table border :data="table" height="500">
    <el-table-column prop="bookID" label="书籍编号"> </el-table-column>
    <el-table-column prop="bookName" label="书名"> </el-table-column>
    <el-table-column prop="author" label="作者"></el-table-column>
    <el-table-column prop="bookType" label="类型"> </el-table-column>
    <el-table-column prop="chapterNum" label="章节数"></el-table-column>
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
  name: "BookTable",
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