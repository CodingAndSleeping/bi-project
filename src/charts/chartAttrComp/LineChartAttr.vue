<template>
</template>

<script setup lang="ts">
interface ILineChart {
  height: string;

  width: string;

  top: string;

  left: string;

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
  lineChart: ILineChart;
}>();
</script>
<style lang='scss' scoped>
</style>
