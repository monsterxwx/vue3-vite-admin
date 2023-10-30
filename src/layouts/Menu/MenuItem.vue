<template>
  <el-sub-menu
    :index="menu.id"
    v-if="menu.children && menu.children.length > 0"
  >
    <template #title>
      <el-icon><Menu /></el-icon>
      <span>{{ menu.name }}</span>
    </template>
    <MenuItem
      v-for="(menuItem,idx) in menu.children"
      :key="idx"
      :menu="menuItem"
    />
  </el-sub-menu>
  <!-- 无子集 -->
  <el-menu-item
    @click="addItem(menu)"
    :index="menu.path"
    v-else
  >
    <el-icon><Wallet /></el-icon>
    <template #title>
      <span>{{ menu.name }}</span>
    </template>
  </el-menu-item>
</template>

<script setup>
import useNavStore from '@/store/nav'
const navStore = useNavStore()

defineProps({
  menu: {
    type: Object,
    default: () => ({})
  }
})

const addItem = (item) => {
  const Item = {
    path: item.path,
    name: item.name
  }
  navStore.addNavItem(Item)
  if (navStore.isSmallScreen) {
    // 如果是小屏状态，选择一个标签后自动关闭菜单
    navStore.changeMenuShow()
  }
}

</script>

<style lang="scss" scoped>

</style>
