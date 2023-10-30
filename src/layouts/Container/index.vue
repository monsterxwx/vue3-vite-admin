<template>
  <div class="Container">
    <div
      class="aside"
      v-if="!navStore.isSmallScreen"
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
  --un-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --un-ring-shadow: 0 0 rgba(0,0,0,0);
  --un-shadow: 0 0 1px rgba(136,136,136);
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
  .aside {
    overflow: hidden;
    border-right: 1px solid #ececec;
    width: 200px;
    box-shadow: var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow);
    height: 100%;
    background-color: var(--el-bg-color);
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
