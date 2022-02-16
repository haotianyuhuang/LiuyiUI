<template>
  <div>
    <ul>
      <li v-for="item in 8" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CommentHandle",
};
</script>
<style scoped>
</style>