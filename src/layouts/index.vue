<template>
  <Container :aside-width="navStore.collapse ? '64px' : '200px'">
    <template #header>
      <el-button
        round
        size="large"
        @click="navStore.changeCollapse"
      >
        改变宽度
      </el-button>
    </template>
    <template #aside>
      <Menu :collapse="navStore.collapse" />
    </template>
    <template #nav>
      <Nav />
    </template>
    <template #main>
      <router-view v-slot="{Component}">
        <transition
          name="slide-left"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </template>
  </Container>
</template>

<script setup>
import Container from './Container'
import Nav from './Nav'
import Menu from './Menu'
import useNavStore from '@/store/nav'
const navStore = useNavStore()

</script>

<style lang="scss" scoped>

</style>
