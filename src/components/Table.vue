<template>
  <div :class="$style['container']">
    <div :class="$style['theader']">
      <template v-for="item in columns" :key="item.key || item.slot">
        <div
          v-if="item.children && item.children.length"
          :style="setStyle(item)"
          :class="$style['header-child']"
        >
          <div style="text-align: center;">
            {{ item.name }}
          </div>
          <div :class="$style['flex-center']">
            <div
              v-for="child in item.children"
              :key="child.key || child.slot"
              :style="setStyle(child)"
            >
              {{ child.name }}
            </div>
          </div>
        </div>
        <div v-else-if="item.key" :style="setStyle(item)">
          {{ item.name }}
        </div>
        <div v-else-if="item.slot" :style="setStyle(item)">
          {{ item.name }}
        </div>
      </template>
    </div>
    <div :class="$style['tbody']">
      <div v-for="item in data" :key="item.id">
        <div v-for="col in columns" :key="col.key || col.slot" :style="setStyle(col)">
          <div v-if="col.children && col.children.length" :class="$style['table-child']">
            <div
              v-for="child in col.children"
              :key="child.key || child.slot"
              :style="setStyle(child)"
              
            >
              <div v-if="child.key" :style="setStyle(child)">
                {{ item[child.key] }}
              </div>
              <template v-else-if="child.slot" :default="scope">
                <slot
                  :name="child.slot"
                  :row="scope"
                  :style="setStyle(child)"
                ></slot>
              </template>
            </div>
          </div>
          <div v-else-if="col.key" >
            {{ item[col.key] }}
          </div>
          <template v-else-if="col.slot">
            <slot :name="col.slot" :row="item"></slot>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { setup } from "@/modules/useTable";

export default defineComponent({
  props: {
    columns: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  setup,
});
</script>
<style lang="less" module>
@header-height: 48px;
@body-height: 28px;
.container {
  .flex-center {
    display: flex;
    align-items: center;
  }
  .theader {
    .flex-center;
    & > div {
      border: 1px solid #dddddd;
      height: @header-height;
      line-height: @header-height;
      text-align: center;
      margin-right: -1px;
      box-sizing: border-box;
    }
    .header-child {
      & > div {
        height: calc(@header-height / 2);
        line-height: calc(@header-height / 2);
        box-sizing: border-box;
        &:nth-child(1) {
          border-bottom: 1px solid #dddddd;
        }
        & > div {
          border-right: 1px solid #dddddd;
          &:nth-last-child(1) {
            border-right: 0;
          }
        }
      }
    }
  }
  .tbody {
    & > div {
      .flex-center;
      & > div {
        border: 1px solid #dddddd;
        border-top: 0;
        height: @body-height;
        line-height: @body-height;
        text-align: center;
        margin-right: -1px;
        box-sizing: border-box;
      }
      .table-child {
        display: flex;
        align-items: center;
        .flex-center;
      & > div {
        border-right: 1px solid #dddddd;
        height: @body-height;
        line-height: @body-height;
        text-align: center;
        margin-right: -1px;
        box-sizing: border-box;
        &:nth-last-child(1) {
            border-right: 0;
        }
      }
      }
    }
  }
}
</style>
