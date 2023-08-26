import { createApp } from 'vue'
import './style.css'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';

import "echarts";
import VueECharts from 'vue-echarts';

import VueDragResizeRotate from "@gausszhou/vue3-drag-resize-rotate";
import "@gausszhou/vue3-drag-resize-rotate/lib/bundle.esm.css";


import 'virtual:svg-icons-register'

const app = createApp(App)



app.component('v-chart', VueECharts)
app.component('vue-drag-resize', VueDragResizeRotate);
app.use(ArcoVue)
app.mount('#app')
