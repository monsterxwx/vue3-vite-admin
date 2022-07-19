<template>
  <el-menu
    :default-active="$route.path"
    :collapse="collapse"
    :collapse-transition="false"
    background-color="#001529"
    text-color="#a5adb4"
    :unique-opened="true"
    router
  >
    <el-sub-menu
      v-for="item in navStore.routerList"
      :key="item.id"
      :index="item.id"
    >
      <template #title>
        <el-icon><Menu /></el-icon>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item
        v-for="chil in item.children"
        :key="chil.id"
        @click="addItem(chil)"
        :index="chil.path"
      >
        <el-icon><Wallet /></el-icon>
        <span>{{ chil.name }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import useNavStore from '@/store/nav'
defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})
const navStore = useNavStore()
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
.el-menu {
  // 去除右边的线
  border: none;
}
.el-menu-item {
  transition: all 0.3s;
}
.el-menu-item.is-active {
  color: #ffffff;
  background-color: #4091f7;
}
</style>
