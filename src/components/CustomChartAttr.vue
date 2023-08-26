<template>
  <a-menu
    class="menu"
    :collapsed-width="50"
    :show-collapse-button="false"
    :collapsed="collapsed"
    :style="{ width: '200px', height: '100%' }"
  >
    <div class="header">
      <CustomChartAttrHeader
        :title="title"
        @collapsed="handleCollapsed"
      ></CustomChartAttrHeader>
    </div>
    <slot name="content"></slot>

    <slot name="footer"></slot>
  </a-menu>
</template>

<script setup lang="ts">
import CustomChartAttrHeader from "./CustomChartAttrHeader.vue";
import { ref } from "vue";

const props = defineProps<{
  title:string
}>()

const collapsed = ref<boolean>(false);
const handleCollapsed = (val: boolean) => {
  collapsed.value = val
};
</script>
<style lang="scss" scoped>
.menu {
  float: right;
  border: 1px solid red;
  .header{
    height: auto;
  }
}
</style>
