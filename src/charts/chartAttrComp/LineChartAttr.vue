<template>
  <div class="content">
    <a-tabs :default-active-key="2" >
    <a-tab-pane :key="1" title="字段">
      Content of Tab Panel 1
    </a-tab-pane>
    <a-tab-pane :key="2" title="样式" >
      <button @click="chartProps.titleText='111'">aa</button>
      {{ chartProps.titleText }}
    </a-tab-pane>

  </a-tabs>
  </div>

</template>

<script setup lang="ts">
import { onMounted } from "vue";

interface ILineChart {
  height: number;

  width: number;

  top: number;

  left: number;

  isShowTitle: boolean;

  titleText: string;

  titleFontColor: string;

  titleFontSize: number;

  type: string;

  step: boolean;

  xData: string[];

  seriesData: number[];
}

const props = defineProps<{
  chartProps: ILineChart;
}>();

onMounted(() => {
  console.log(props.chartProps);
});
</script>
<style lang="scss" scoped>
.content{
  height: auto;
  width: auto;
  :deep(.arco-tabs-nav-tab-list){
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}
</style>
