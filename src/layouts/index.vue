<template>
  <Container :aside-width="navStore.collapse ? '64px' : '200px'">
    <template #header>
      <Header />
    </template>
    <template #aside>
      <Menu :collapse="navStore.collapse" />
    </template>
    <template #tab>
      <Tab />
    </template>
    <template #main>
      <router-view v-slot="{Component}">
        <transition
          name="slide-left"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </template>
  </Container>
  <div class="drawer">
    <el-drawer
      v-model="navStore.isShowMenu"
      :with-header="false"
      direction="ltr"
      size="200px"
    >
      <Menu />
    </el-drawer>
  </div>
</template>

<script setup>
import Container from './Container'
import Tab from './Tab'
import Menu from './Menu'
import Header from './Header'
import useNavStore from '@/store/nav'
const navStore = useNavStore()

</script>

<style lang="scss" scoped>
.drawer {
  :deep(.el-drawer.ltr) {
    background-color: var(--el-bg-color);
  }
  :deep(.el-drawer__body) {
    padding: 0;
    background-color: var(--el-bg-color);
  }
}

</style>
