<template>
  <div class="main">
    <div class="list">
      <ul>
        <li draggable="true" v-for="(item, index) in data" :key="item.id" @dragstart="handleDragStart($event, item)"> {{
          item.name }}
        </li>
      </ul>
    </div>
    <div draggable="true" class="view" @drop="handleDrop" @dragover="handleDragOver">
      <ul>
        <li draggable="true" v-for="(item, index) in viewData" :key="item.id" @dragstart="handleDragStart($event, item)">
          {{
            item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const data = ref<Array<object>>(
  [{
    id: 1,
    name: "aa"
  },
  {
    id: 2,
    name: "bb"
  }, {
    id: 3,
    name: "cc"
  }]
)

const viewData = ref<Array<object>>([])

function handleDragStart(e: DragEvent, val: object) {
  e.dataTransfer!.setData("aaa", JSON.stringify(val))

}


function handleDrop(e: Event) {
  viewData.value.push(JSON.parse(e.dataTransfer!.getData("aaa")))
}


function handleDragOver(e: DragEvent) {
  e.preventDefault()
}



</script>
<style lang='scss' scoped>
.main {
  height: 100%;
  width: 100%;
  // background-color: gray;

  display: flex;

  .list {
    border: 1px solid red;
    width: 30%;
  }

  .view {
    border: 1px solid gray;
    width: 70%;
  }
}
</style>
