<template>
  <div>
    <template
      v-for="(item, index) in data"
      :key="index"
    >
      <!--  有子集-->
      <el-sub-menu
        :index="item.id"
        v-if="item.children && item.children.length > 0"
      >
        <template #title>
          <el-icon><Menu /></el-icon>
          <span>{{ item.name }}</span>
        </template>
        <MenuItem :data="item.children" />
      </el-sub-menu>
      <!-- 无子集 -->
      <el-menu-item
        @click="addItem(item)"
        :index="item.path"
        v-else
      >
        <el-icon><Wallet /></el-icon>
        <template #title>
          <span>{{ item.name }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script setup>
import useNavStore from '@/store/nav'
const navStore = useNavStore()

defineProps({
  data: {
    type: Array,
    default: () => ([])
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
