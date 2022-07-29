<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { ref, provide, nextTick, watch } from 'vue'
import useNavStore from '@/store/nav'
import { useWindowSize } from '@vueuse/core'

const navStore = useNavStore()
const { width } = useWindowSize()

watch(width, () => {
  console.log('浏览器宽度', width.value)
  if (width.value < 768) {
    // 当屏幕小于768时，执行代码段（手机端）
    navStore.changeScreen(true)
  } else {
    // 其他时候，执行（比如电脑端）
    navStore.changeScreen(false)
    navStore.changeMenuShow(false)
  }
}, {
  immediate: true
})

const isRouterAlive = ref(true)

const reload = () => {
  isRouterAlive.value = false // 先关闭，
  nextTick(() => {
    isRouterAlive.value = true // 再打开
  })
}
provide('reload', reload)

</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view v-if="isRouterAlive" />
  </el-config-provider>
</template>

<style>

</style>
