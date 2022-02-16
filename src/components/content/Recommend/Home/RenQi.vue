<template>
  <div class="renqi">
    <ul>
      <li v-for="(item, index) in lr" :key="index" @click="getLink(item.link)">
        {{ item.title }}
      </li>
    </ul>
    <div class="eye"></div>
  </div>
</template>
<script>
export default {
  name: "RenQi",
  props: ["lr"],
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