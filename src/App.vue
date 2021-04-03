<template>
  <div :class="$style['container']">
    <el-menu
      :class="$style['menu']"
      default-active="home"
      class="el-menu-vertical-demo"
      @select="meunSelect"
    >
      <el-menu-item index="home">
        <i class="el-icon-document"></i>
        <template #title>当前数据</template>
      </el-menu-item>
      <el-menu-item index="history">
        <i class="el-icon-setting"></i>
        <template #title>历史数据</template>
      </el-menu-item>
    </el-menu>
    <div :class="$style['view']">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { setup } from "@/modules/useApp";

export default defineComponent({
  setup,
});
</script>
<style lang="less">
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
</style>
<style lang="less" module>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  .menu {
    width: 200px;
    height: 100%;
  }
  .view {
    flex: 1;
  }
}
</style>
