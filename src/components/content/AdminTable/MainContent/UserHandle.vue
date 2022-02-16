<template>
  <div>
    <user-table :table="data"></user-table>
    <user-page :page="page" @currentpage="changepage"></user-page>
  </div>
</template>
<script>
import { show } from "@/util/admin";
import UserTable from "@/components/common/User/UserTable";
import UserPage from "@/components/common/User/UserPage";
export default {
  components: { UserTable, UserPage },
  name: "UserHandle",
  data() {
    return {
      data: [],
      page: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(page) {
      show(this.$route.name, page).then((res) => {
        this.data = res.data;
        this.page = res;
      });
    },
    changepage(n) {
      this.getData(n);
    },
  },
};
</script>
<style scoped>
</style>