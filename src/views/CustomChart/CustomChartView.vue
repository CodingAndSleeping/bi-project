<template>
  <div class="main">
    <div class="header"></div>

    <div class="body">
      <div class="chart-nav">
        <CustomChartNav></CustomChartNav>
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

      <div class="attr">
        <CustomChartAttr title="数据"></CustomChartAttr>
        <CustomChartAttr :title="title">
          <template #content>
            <component :is="chartAttrComponent" :chartProps="chartObj.chartProps"></component>
          </template>
        </CustomChartAttr>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CustomChartNav from "@/components/CustomChartNav.vue"
import CustomChartAttr from '@/components/CustomChartAttr.vue'
import {  defineAsyncComponent, ref, shallowRef } from "vue"

const title = ref<string>('')
const chartComponents = ref<any>([])
const chartObj = ref<{
  component: any,
  chartProps:any
}>({
  component: null,
  chartProps:null
})
const chartAttrComponent = shallowRef<any>(null)

const handleDrop = async (e: DragEvent) => {
  const data = JSON.parse(e.dataTransfer?.getData("data")!);

  title.value = data.name


  const res = await import(
    `/* @vite-ignore */../../charts/chartClass/${data.key}.ts`
  );
  const component = defineAsyncComponent(() => {
    return import(`../../charts/chartComp/${data.key}.vue`);
  });

  

  const chartProps = new res.default();
  chartProps.left = e.offsetX;
  chartProps.top = e.offsetY;

  chartObj.value = {
    component,
    chartProps,
  };




  chartComponents.value.push(chartObj.value);

  chartAttrComponent.value = defineAsyncComponent(() => {
    return import(`../../charts/chartAttrComp/${data.key}Attr.vue`);
  });
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
    height: calc(100vh - 50px);
    width: 100%;
    display: flex;
    .chart-nav {
      width:auto;
      height: 100%;
      float: left;
    }
    .view {
      flex: 1;
      height: 100%;
      float: left;
      background-color: aquamarine;
    }
    .attr {
      width: auto;
      height: 100%;
    }
  }
}
</style>
