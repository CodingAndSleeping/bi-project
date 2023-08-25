import { createApp } from 'vue'
import './style.css'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';

import "echarts";
import VueECharts from 'vue-echarts';

import VueDragResizeRotate from "@gausszhou/vue3-drag-resize-rotate";
import "@gausszhou/vue3-drag-resize-rotate/lib/bundle.esm.css";


const app = createApp(App)


app.use(ArcoVue)
app.component('v-chart', VueECharts)
app.component('vue-drag-resize', VueDragResizeRotate);

app.mount('#app')
