<template>
  <div class="title">
    <div class="name">{{ title }}</div>
    <div class="icon" @click="handleClick">
      <SvgIcon name="menu-fold" size="1.3" v-if="!collapsed"></SvgIcon>
      <SvgIcon name="menu-unfold" size="1.3" v-else></SvgIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";
defineProps<{
  title: string;
}>();

const emits = defineEmits<{
  collapsed:[val:boolean]
}>()

const collapsed = ref<boolean>(false);
const handleClick = () => {
  collapsed.value = !collapsed.value
  emits('collapsed', collapsed.value)
};
</script>
<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  .name {
    height: 20px;
    line-height: 20px;
  }
  .icon {
    // display: flex;
    height: 20px;
    width: 20px;
  }
}
</style>
