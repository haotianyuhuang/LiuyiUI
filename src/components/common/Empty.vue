<template>
  <div>跳转中请稍候.....</div>
</template>

<script>
export default {
  name: "Empty",
  created() {
    this.$router.replace("/home");
  },
};
</script>

<style>
</style>