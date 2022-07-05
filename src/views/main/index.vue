<template>
  <div class="main">
    <base-container :aside-width="collapse ? '64px' : '200px'">
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
        <baseMenu :collapse="collapse" />
      </template>
      <template #nav>
        <baseHeaderNav />
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
    </base-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import baseContainer from '@/layouts/baseContainer'
import baseHeaderNav from '@/layouts/baseHeaderNav'
import baseMenu from '@/layouts/baseMenu'

const collapse = ref(false)

const changeColl = () => {
  collapse.value = !collapse.value
}

</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
  width: 100%;
  height: 100vh;
}
.slide-left-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}
.slide-left-enter-to {
  transform: translateX(0);
}
.slide-left-leave-from {
  transform: translateX(0);
}
.slide-left-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s;
}

</style>
