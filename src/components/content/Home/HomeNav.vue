<template >
  <div class="nav">
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="change(index)">
        {{ item }}
      </li>
      <li>
        <el-dropdown placement="bottom" style="display: block">
          <div class="el-dropdown-link" style="font-size: 18px">
            更多<i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item, index) in more"
              :key="index"
              @click.native="getIndex(index)"
              >{{ item }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeNav",
  props: ["navlist"],
  data() {
    return {
      list: "",
      more: "",
    };
  },
  watch: {
    navlist(n) {
      this.list = n.slice(0, 8);
      this.more = n.slice(8, 14);
    },
  },
  methods: {
    change(num) {
      if (num == 0) {
        this.$router.push("/home");
      } else {
        let url = this.$router.resolve({
          path: "/kind" + "/" + num,
        });
        window.open(url.href, "_blank");
      }
    },
    getIndex(index) {
      let num = index + 8;
      let url = this.$router.resolve({
        path: "/kind" + "/" + num,
      });
      window.open(url.href, "_blank");
    },
  },
};
</script>
<style>
.nav {
  position: relative;
  background: #3e3d43;
  height: 36px;
  font-family: 宋体;
  font-size: 20px;
}

.nav ul {
  position: relative;
  margin: 0 auto;
  width: 1300px;
  display: flex;
  justify-content: space-around;
}

.nav ul li {
  padding: 0 25px;
  height: 36px;
  line-height: 36px;
  color: #fff;
}

.nav ul li:hover {
  background: #fc3714;
}

.nav ul li:nth-child(1) {
  background: #292828;
}
</style>