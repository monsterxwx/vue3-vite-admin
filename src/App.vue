<script setup>
import { ref, onMounted, provide, nextTick } from 'vue'
import useNavStore from '@/store/nav'
const isRouterAlive = ref(true)

const reload = () => {
  isRouterAlive.value = false // 先关闭，
  nextTick(() => {
    isRouterAlive.value = true // 再打开
  })
}
provide('reload', reload)

// 监听浏览器屏幕大小
const navStore = useNavStore()
const screenWidth = ref('')
onMounted(() => {
  window.onresize = () => {
    screenWidth.value = document.body.clientWidth
    if (screenWidth.value < 768) {
      navStore.changeScreen(true)
    // 当屏幕小于768时，执行代码段（手机端）
    } else {
    // 其他时候，执行（比如电脑端）
      navStore.changeScreen(false)
      navStore.changeMenuShow(false)
    }
  }
})
</script>

<template>
  <router-view v-if="isRouterAlive" />
</template>

<style>

</style>
