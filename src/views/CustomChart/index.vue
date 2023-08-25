<template>
  <div class="main">
    <div class="header"></div>

    <div class="body">
      <div class="chart-nav">
        <CusiomChartNav></CusiomChartNav>
      </div>
      <div class="view" @dragover.prevent @drop="handleDrop">
        <component
          v-for="(item, index) in chartComponents"
          :key="index"
          :is="item.component"
          :chartProps="item.chartProps"
        >
          {{ item.chartProps }}</component
        >
      </div>

      <div class="attr"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import CusiomChartNav from "../../components/CustomChartNav.vue";

const chartComponents = ref<any>([]);

const chartObj = ref();
const handleDrop = async (e: DragEvent) => {
  const data = JSON.parse(e.dataTransfer?.getData("data")!);
  const res = await import(
    `/* @vite-ignore */../../charts/chartClass/${data.key}.ts`
  );
  chartObj.value = {
    component: defineAsyncComponent(() => {
      return import(`../../charts/chartComp/${data.key}.vue`);
    }),
    chartProps: new res.default(),
  };
  chartComponents.value.push(chartObj.value);
};
</script>
<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;

  .header {
    width: 100%;
    height: 50px;
    background-color: rgb(30, 226, 233);
  }

  .body {
    height: 100%;
    display: flex;
    .chart-nav {
      width: 20vw;
      height: 100%;
    }

    .view {
      width: 60vw;
      height: calc(100vh - 50px);
      background-color: aquamarine;
    }

    .attr {
      width: 20vw;
      height: 100%;
    }
  }
}
</style>
../../charts/chartClass/LineChart
