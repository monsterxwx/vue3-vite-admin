<template>
  <el-breadcrumb
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
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbList = computed(() => route.matched.filter((item) => item.meta.title))

const handleLink = (item) => {
  const { redirect, path } = item
  redirect ? router.push(redirect) : router.push(path)
}
</script>

<style lang="scss" scoped>

</style>
