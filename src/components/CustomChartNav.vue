<template>
  <div class="main">
    <ul>
      <li v-for="item in charts" :key="item.key" draggable="true" @dragstart="handleDragStart($event, item)" >{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const charts = ref([
  {
    key: "LineChart",
    name: "折线图",
  },
  {
    key: "BarChart",
    name: "柱状图",
  },
  {
    key: "PieChart",
    name: "饼状图",
  },
]);


const handleDragStart = (e: DragEvent, item: { key: string, name:string}) => {
  e.dataTransfer?.setData('data',JSON.stringify(item))
}
</script>

<style lang="scss" scoped></style>
