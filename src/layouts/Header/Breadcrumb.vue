<template>
  <el-breadcrumb
    v-if="!navStore.isSmallScreen"
    separator="/"
  >
    <el-breadcrumb-item
      v-for="(item, index) in breadcrumbList"
      :key="index"
    >
      <a
        @click.prevent="handleLink(item)"
        class="!font-normal"
      > {{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { computed } from 'vue'
import useNavStore from '@/store/nav'
import { useRoute } from 'vue-router'

const navStore = useNavStore()

const route = useRoute()

const breadcrumbList = computed(() => route.matched.filter((item) => item.meta.title))

const handleLink = (item) => {
  const { redirect, path } = item
  redirect ? router.push(redirect) : router.push(path)
}
</script>

<style lang="scss" scoped>

</style>
