<template>
  <vue-drag-resize
    :w="chartProps.width"
    :h="chartProps.height"
    @resizing="handleResizing"
    @resizestop='handleResizestop'
  >
    <v-chart
      ref="chart"
      class="chart"
      :options="options"
      :style="{
        height: cssProp['--height'],
        width: cssProp['--width'],
        left: cssProp['--left'],
        top: cssProp['--top'],
      }"
    ></v-chart>
  </vue-drag-resize>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

const props = defineProps<{
  chartProps: any;
}>();
const cssProp = computed(()=>({
  // height:props.chartProps.height + 'px',
  "--height": props.chartProps.height + "px",
  "--width": props.chartProps.width + "px",
  "--left": props.chartProps.left + "px",
  "--top": props.chartProps.top + "px",
}));

const chart = ref();

const options = ref({
  title: {
    text: props.chartProps.titleText,
  },
  xAxis: {
    data: props.chartProps.xData,
  },
  yAxis: {},
  series: [
    {
      type: props.chartProps.type,
      data: props.chartProps.seriesData,
    },
  ],
});

onMounted(() => {
  chart.value!.setOption(options.value);
});

const handleResizing = (l, t, w, h) => {

  props.chartProps.height = h;
  props.chartProps.width = w
  chart.value!.resize(w, h)


};

</script>
<style lang="scss" scoped>
.chart {
  position: relative;
  // height: var(--height);
  // width: var(--width);
  // left: var(--left);
  // top: var(--top);
}
</style>
