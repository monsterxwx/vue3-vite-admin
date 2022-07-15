<template>
  <div class="Container">
    <div
      class="aside"
      :style="{ width: asideWidth }"
    >
      <slot name="aside">
        Aside
      </slot>
    </div>
    <div class="content">
      <div class="common">
        <slot name="header">
          Header
        </slot>
        <slot name="tab" />
      </div>
      <div class="scroll">
        <slot name="main">
          Main
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  asideWidth: {
    type: String,
    default: '200px'
  }
})
</script>

<style lang="scss" scoped>
.Container {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
  .aside {
    overflow: hidden;
    width: 200px;
    height: 100%;
    background-color: #001529;
    transition: width 0.3s;
  }
  .content {
    display: flex;
    overflow: hidden;
    min-height: 0;
    flex: 1;
    flex-direction: column;
    .common {
      width: 100%;
      height: 80px;
    }
    .scroll {
      overflow-x: hidden;
      overflow-y: auto;
      padding: 16px;
      min-height: 0;
      flex: 1;
    }
  }
}
</style>
