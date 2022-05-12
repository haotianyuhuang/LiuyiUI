<template>
  <div
    class="content"
    :style="{
      background: $store.state.pageColor,
      width: $store.state.pageWidth,
    }"
  >
    <transition name="fade">
      <div class="text_title" v-if="show">{{ text.title }}</div>
    </transition>
    <div class="text_content">
      <ul>
        <li
          v-for="(item, index) in text.content"
          :key="index"
          :style="{
            'font-size': $store.state.pageSize,
            'font-family': $store.state.pageFont,
          }"
        >
          <transition name="fade">
            <p v-if="show">{{ item }}</p>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChapterContent",
  props: ["text"],
  data() {
    return {
      show: false,
    };
  },
  created() {
    setTimeout(() => {
      this.show = true;
    }, 1000);
  },
  mounted() {},
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.content {
  overflow-y: scroll;
  position: relative;
}

.text_title {
  margin: 70px 50px 40px;
  font-size: 25px;
  text-align: center;
}

.text_content {
  margin: 50px 50px 40px;
  text-indent: 2em;
}

li {
  line-height: 1.8;
}
</style>