<template>
  <div class="baseContainer">
    <div class="header">
      <slot name="header">
        Header
      </slot>
    </div>
    <div class="content">
      <div
        class="aside"
        :style="{ width: asideWidth }"
      >
        <slot name="aside">
          Aside
        </slot>
      </div>
      <div class="main">
        <div class="headerNav">
          <slot name="nav" />
        </div>
        <div class="mainContent">
          <slot name="main">
            Main
          </slot>
        </div>
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
.baseContainer {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  .header {
    height: 60px;
    background-color: #f7f7f7;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: row;
    height: calc(100% - 60px);
    .aside {
      overflow: hidden;
      background-color: #001529;
      transition: width 0.2s;
    }
    .main {
      display: flex;
      width: calc(100% - 200px);
      background-color: #eeeeee;
      flex: 1;
      flex-direction: column;
      .mainContent {
        overflow: hidden;
        padding: 10px;
        min-height: 0;
        background-color: #ffffff;
        flex: 1;
      }
    }
  }
}
</style>
