<template>
  <div style="display: flex">
    <div>
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </el-switch>
    </div>
    <collect-form @test="showResult" :cvalue="value"></collect-form>
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
      value: true,
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