<template>
  <div class="header flex-between">
    <div class="flex-align-center">
      <div
        class="ml-15px flex-align-center"
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
      <div class="ml-20px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">
            首页
          </el-breadcrumb-item>
          <el-breadcrumb-item> <a href="/test1">test</a></el-breadcrumb-item>
          <el-breadcrumb-item>{{ navStore.currentRouterPath.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="flex-align-center">
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
      <div class="mr-15px flex-align-center">
        <el-dropdown>
          <div class="flex-align-center cursor-pointer">
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
import useNavStore from '@/store/nav'
import useFullScreen from '@/hooks/common/useFullScreen.js'
const navStore = useNavStore()
const { fullScreen } = useFullScreen()
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
}
</style>
