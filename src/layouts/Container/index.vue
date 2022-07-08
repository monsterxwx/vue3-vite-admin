<template>
  <div class="baseContainer">
    <div
      class="aside"
      :style="{ width: asideWidth,backgroundColor:asideBgColor }"
    >
      <slot name="aside">
        Aside
      </slot>
    </div>
    <div class="content">
      <div
        class="header"
        :style="{ height: headerHeight,backgroundColor:headerBgColor }"
      >
        <slot name="header">
          Header
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
  },
  asideBgColor: {
    type: String,
    default: '#001529'
  },
  headerHeight: {
    type: String,
    default: '55px'
  },
  headerBgColor: {
    type: String,
    default: '#f7f7f7'
  }
})
</script>

<style lang="scss" scoped>
.baseContainer {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  .aside {
    overflow: hidden;
    height: 100%;
    transition: width 0.3s;
  }
  .content {
    display: flex;
    flex: 1 0;
    flex-direction: column;
    min-width: 0;
    .main {
      display: flex;
      overflow: hidden;
      flex: 1 0;
      flex-direction: column;
      .mainContent {
        overflow-y: auto;
        flex: 1 0;
        padding: 10px;
      }
    }
  }
}
</style>
