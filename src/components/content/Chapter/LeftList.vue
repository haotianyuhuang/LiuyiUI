<template>
  <div class="left_list">
    <dl>
      <dd>
        <i class="iconfont icon-31leimu"></i>
        <span>目录</span>
      </dd>
      <dd>
        <img src="@/assets/img/shezhi.png" />
        <span>设置</span>
      </dd>
      <dd>
        <img src="@/assets/img/jiashu.png" />
        <span>书架</span>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  name: "LeftList",
};
</script>
<style>
.left_list {
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  text-align: center;
  background: #f3e9c6 url(~@/assets/img/bg/read_01.png) repeat;
}

dd img {
  width: 25px;
  height: 25px;
}

dd span {
  margin: 5px 0;
}

dd:hover {
  color: #da4040;
}

.icon-31leimu {
  font-size: 25px;
}
</style>