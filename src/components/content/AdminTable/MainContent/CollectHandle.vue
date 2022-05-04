<template>
  <div style="display: flex">
    <collect-form @test="showResult"></collect-form>
    <textarea v-model="result"></textarea>
  </div>
</template>
<script>
import CollectForm from "components/common/Collect/CollectForm.vue";
export default {
  components: { CollectForm },
  name: "CollectHandle",
  data() {
    return {
      result: "",
    };
  },
  methods: {
    showResult(n) {
      this.result = n;
    },
  },
};
</script>
<style scoped>
textarea {
  width: 50%;
  margin: 0 10%;
  height: 450px;
  resize: none;
  overflow-y: scroll;
}
</style>