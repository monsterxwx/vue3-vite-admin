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
    <MenuItem :data="navStore.routerList" />
  </el-menu>
</template>

<script setup>
import MenuItem from './MenuItem'
import useNavStore from '@/store/nav'
const navStore = useNavStore()
defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})

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
