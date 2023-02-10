<script setup lang="ts">
import { GridLayout, GridItem } from "vue3-grid-layout-next";

const state = reactive({
  data: {
    layout: [
      { x: 0, y: 0, w: 12, h: 2, i: "0", static: false },
      { x: 8, y: 0, w: 24, h: 13, i: "1", static: false },
      { x: 14, y: 0, w: 24, h: 10, i: "3", static: false },
    ],
    draggable: true,
    resizable: true,
    index: 0,
    // layout2
    layout2: [
      { x: 0, y: 0, w: 12, h: 6, i: "i3", static: false },
      { x: 2, y: 0, w: 12, h: 6, i: "i4", static: false },
    ],
  },
});

const itemTitle = computed(() => {
  return (item) => {
    let result = item.i;
    if (item.static) {
      result += " - Static";
    }
    return result;
  };
});

const layoutUpdatedEvent = (newLayout) => {
  console.log(newLayout);
};

const containerResizedEvent = (i, newH, newW, newHPx, newWPx) => {
  console.log("CONTAINER RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
};

const resizeEvent = (i, newH, newW, newHPx, newWPx) => {
  console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
};
</script>
<template>
  <div class="layout-grid" style="width: 1200px; background: pink">
    <grid-layout
      v-model:layout="state.data.layout"
      :col-num="24"
      :row-height="15"
      :is-draggable="state.data.draggable"
      :is-resizable="state.data.resizable"
    >
      <grid-item
        style="touch-action: none; box-sizing: border-box"
        v-for="(item, key) in state.data.layout"
        :static="item.static"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="key"
        @container-resized="containerResizedEvent"
      >
        <template v-if="item.i === '1'">
          <grid-layout
            style="background: yellow"
            v-model:layout="state.data.layout2"
            :col-num="24"
            :row-height="15"
            :is-draggable="state.data.draggable"
            :is-resizable="state.data.resizable"
            @layout-updated="layoutUpdatedEvent"
          >
            <grid-item
              style="touch-action: none; box-sizing: border-box"
              v-for="(item2, key) in state.data.layout2"
              :static="item2.static"
              :x="item2.x"
              :y="item2.y"
              :w="item2.w"
              :h="item2.h"
              :i="item2.i"
              :key="key"
              @resize="resizeEvent"
            >
              <span class="text">{{ item2.i }} </span>
            </grid-item>
          </grid-layout>
        </template>

        <span class="text" v-else>
          {{ itemTitle(item) }}
        </span>
      </grid-item>
    </grid-layout>
    <div style="display: flex">
      <pre style="background: green; flex: 1"><code>{{ state.data.layout }}</code></pre>
      <pre style="background: red; flex: 1"><code>{{ state.data.layout2 }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.vue-grid-layout {
  background: #eee;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc;
  border: 1px solid black;
}
.vue-grid-item .resizing {
  opacity: 0.9;
}
.vue-grid-item .static {
  background: #cce;
}
.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}
.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}
.vue-grid-item .minMax {
  font-size: 12px;
}
.vue-grid-item .add {
  cursor: pointer;
}
.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
