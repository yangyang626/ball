<template>
  <div :class="$style['container']">
    <Table :columns="columns" :data="tableData">
      <template v-slot:action="{row}">
        <span @click="open(row)" :class="$style['button']"> 
          同赔
        </span>
      </template>
    </Table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Table from '@/components/Table.vue';
import { setup } from "@/modules/useHome";

export default defineComponent({
  components: {
    Table
  },
  setup,
});
</script>
<style lang="less" module>
.container {
  padding: 16px;
  .button {
    color: #409EFF;
    cursor: pointer;
  }
}
</style>

