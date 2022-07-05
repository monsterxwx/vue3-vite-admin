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
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item
        @click="addItem"
        index="/test1"
      >
        item one
      </el-menu-item>
      <el-menu-item
        @click="addItem2"
        index="/test2"
      >
        item two
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>Navigator Two</span>
      </template>
      <el-menu-item index="2-1">
        item one
      </el-menu-item>
      <el-menu-item index="2-2">
        item two
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
const addItem = () => {
  const Item = {
    path: '/test1',
    name: 'test1'
  }
  navStore.addNavItem(Item)
}
const addItem2 = () => {
  const Item = {
    path: '/test2',
    name: 'test2'
  }
  navStore.addNavItem(Item)
}
</script>

<style lang="scss" scoped>
  .el-menu {
    // 去除右边的线
    border: none;

    // 去除菜单宽度多1px
    // border-right-width: 0px;
  }
  .el-menu-item {
    transition: all 0.3s;
  }
  .el-menu-item.is-active {
    color: #ffffff;
    background-color: #4091f7;
  }
</style>
