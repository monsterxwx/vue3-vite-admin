<template>
  <div class="flex justify-between items-center h-40px bg-#fff">
    <div class="flex items-center">
      <div
        v-if="!navStore.isSmallScreen"
        class=" flex items-center p-[0_15px]"
        @click="navStore.changeCollapse"
      >
        <el-icon
          :size="22"
          v-if="!navStore.collapse"
        >
          <Fold />
        </el-icon>
        <el-icon
          :size="22"
          v-else
        >
          <Expand />
        </el-icon>
      </div>
      <div
        class="cursor-pointer p-[0_20px]"
        v-else
        @click="navStore.changeMenuShow"
      >
        <el-icon
          size="22"
          color="#409eff"
        >
          <Menu />
        </el-icon>
      </div>
      <Breadcrumb />
    </div>

    <div class="flex items-center">
      <el-icon class="mr-15px">
        <Grid />
      </el-icon>
      <el-icon
        class="mr-20px  cursor-pointer"
        @click="fullScreen"
      >
        <FullScreen />
      </el-icon>
      <el-icon class="mr-20px">
        <Setting />
      </el-icon>
      <div class="mr-15px flex items-center">
        <el-dropdown>
          <div class="flex items-center cursor-pointer">
            <div class="mr-10px">
              {{ 'admin' }}
            </div>
            <el-icon>
              <arrow-down />
            </el-icon>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from './Breadcrumb.vue'
import useNavStore from '@/store/nav'
import useFullScreen from '@/hooks/common/useFullScreen.js'
const navStore = useNavStore()
const { fullScreen } = useFullScreen()

</script>

<style lang="scss" scoped>
.header {
  height: 40px;
  background-color: #ffffff;
}
</style>
