<template>
  <div class="xinxiu">
    <ul>
      <li v-for="(item, index) in rx" :key="index" @click="getLink(item.link)">
        {{ item.title }}
      </li>
    </ul>
    <div class="eye"></div>
  </div>
</template>
<script>
export default {
  name: "XinXiu",
  props: ["rx"],
  data() {
    return {};
  },
  methods: {
    getLink(link) {
      sessionStorage.setItem("link", link);
      let url = this.$router.resolve({
        path: "/info/home",
      });
      window.open(url.href, "_blank");
    },
  },
};
</script>
<style>
</style>