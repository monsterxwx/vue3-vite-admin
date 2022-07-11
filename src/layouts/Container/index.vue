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
  .aside {
    width: 200px;
    height: 100%;
    background-color: #001529;
    transition: width 0.3s;
  }
  .content {
    display: flex;
    overflow: hidden;
    height: 100%;
    flex: 1;
    flex-direction: column;
    .common {
      width: 100%;
      height: 80px;
    }
    .scroll {
      overflow: auto;
      padding: 10px;
      flex: 1;
    }
  }
}
</style>
