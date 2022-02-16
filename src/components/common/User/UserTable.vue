<template>
  <el-table border :data="table" height="500">
    <el-table-column prop="id" label="编号"> </el-table-column>
    <el-table-column prop="username" label="用户名"> </el-table-column>
    <el-table-column prop="password" label="密码"></el-table-column>
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
  name: "UserTable",
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