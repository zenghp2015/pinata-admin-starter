<template>
  <t-layout class="layout-content-container">
    <t-content>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </t-content>
    <t-footer></t-footer>
  </t-layout>
</template>
<style lang="less" scoped>
@anim-duration-slow: 0.28s;
@anim-time-fn-easing: cubic-bezier(0.38, 0, 0.24, 1);
// 动画
.fade-leave-active,
.fade-enter-active {
  transition: opacity @anim-duration-slow @anim-time-fn-easing;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.layout-content-container {
  height: calc(100vh - var(--td-comp-size-xxxl));
  overflow-y: scroll;
  padding: var(--td-comp-paddingTB-xl) var(--td-comp-paddingLR-xl);

  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    border: 2px solid transparent;
    background-clip: content-box;
    background-color: var(--td-scrollbar-color);
  }
}

// .layout {
//   height: calc(100vh - var(--td-comp-size-xxxl));
//   overflow-y: scroll;
//   &-content {
//     padding: var(--td-comp-paddingTB-xl) var(--td-comp-paddingLR-xl);
//   }
// }
</style>
