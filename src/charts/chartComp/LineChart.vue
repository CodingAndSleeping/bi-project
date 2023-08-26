<template>
  <vue-drag-resize
    :w="chartProps.width"
    :h="chartProps.height"
    :x="chartProps.left"
    :y="chartProps.top"
    @resizing="handleResizing"
  >
    <v-chart
      ref="chart"
      class="chart"
      :options="options"
      :style="cssProp"
    ></v-chart>
  </vue-drag-resize>
</template>

<script setup lang="ts">
import { number } from "echarts";
import { computed, onMounted, ref, watchEffect, watch, reactive } from "vue";

const props = defineProps<{
  chartProps: any;
}>();
const cssProp = computed(() => ({
  height: props.chartProps.height - 5 + "px",
  width: props.chartProps.width - 5 + "px",
}));

const chart = ref();

let options =   {
      title: {
        text: props.chartProps.titleText,
      },
      xAxis: {
        data:props.chartProps.xData,
      },
      yAxis: {},
      series: [
        {
          type:props.chartProps.type,
          data: props.chartProps.seriesData,
        },
      ],
    };;

watch(
  props.chartProps,
  (val) => {
    options = {
      title: {
        text: val.titleText,
      },
      xAxis: {
        data:val.xData,
      },
      yAxis: {},
      series: [
        {
          type:val.type,
          data: val.seriesData,
        },
      ],
    };
    chart.value!.setOption(options);
  },
  {
    deep: true,
  }
);

onMounted(() => {
  chart.value!.setOption(options);
});

const handleResizing = (l:number, t:number, w:number, h:number) => {
  props.chartProps.height = h;
  props.chartProps.width = w;
  chart.value!.resize(w, h);
};
</script>
<style lang="scss" scoped>
.chart {
  position: relative;
}
</style>
