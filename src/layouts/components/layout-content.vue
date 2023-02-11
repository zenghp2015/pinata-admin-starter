<template>
  <t-layout class="layout-content">
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

.layout {
  height: calc(100vh - var(--td-comp-size-xxxl));
  overflow-y: scroll;
  &-content {
    padding: var(--td-comp-paddingTB-xl) var(--td-comp-paddingLR-xl);
  }
}
</style>
