<script setup>
import { ref, provide, nextTick } from 'vue'
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
  <router-view v-if="isRouterAlive" />
</template>

<style>

</style>
