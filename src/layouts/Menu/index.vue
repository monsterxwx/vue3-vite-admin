<template>
  <el-menu
    :default-active="$route.path"
    :collapse="collapse"
    :collapse-transition="false"
    :unique-opened="true"
    router
  >
    <MenuItem
      v-for="(item, index) in navStore.routerList"
      :key="index"
      :menu="item"
    />
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
  width: 100%;
  border: none;
}

</style>
