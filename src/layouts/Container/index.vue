<template>
  <div class="Container">
    <div
      class="aside"
      v-if="!navStore.isSmallScreen"
      :style="{ width: asideWidth }"
    >
      <slot name="aside" />
    </div>
    <div class="content">
      <div class="common">
        <slot name="header" />
        <slot
          name="tab"
        />
      </div>
      <div class="scroll">
        <slot name="main" />
      </div>
    </div>
  </div>
</template>

<script setup>
import useNavStore from '@/store/nav'
const navStore = useNavStore()
defineProps({
  asideWidth: {
    type: String,
    default: '200px'
  }
})
</script>

<style lang="scss" scoped>
.Container {
  --un-ring-offset-shadow: 0 0 rgb(0 0 0 / 0%);
  --un-ring-shadow: 0 0 rgb(0 0 0 / 0%);
  --un-shadow: 0 0 1px rgb(136 136 136);

  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-color: var(--el-bg-color-page);
  .aside {
    overflow: hidden;
    width: 200px;
    height: 100%;
    border-right: 1px solid var(--el-fill-color);
    background-color: var(--el-bg-color);
    box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
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
