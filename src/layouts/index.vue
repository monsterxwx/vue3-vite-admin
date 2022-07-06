<template>
  <Container :aside-width="collapse ? '64px' : '200px'">
    <template #header>
      <el-button
        round
        size="large"
        @click="changeColl"
      >
        改变宽度
      </el-button>
    </template>
    <template #aside>
      <Menu :collapse="collapse" />
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
import { ref } from 'vue'
import Container from './Container'
import Nav from './Nav'
import Menu from './Menu'

const collapse = ref(false)

const changeColl = () => {
  collapse.value = !collapse.value
}

</script>

<style lang="scss" scoped>

</style>
