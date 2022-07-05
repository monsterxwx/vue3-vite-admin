<template>
  <div class="error404">
    <div class="image" />
    <div class="button">
      <el-button @click="goIndex">
        返回首页
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goIndex = () => {
  router.push('/test1')
}
</script>

<style lang="scss" scoped>
.error404 {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translate(-50%, -50%);
  .image {
    width: 800px;
    height: 800px;
    background: url("../assets/status/404.jpeg") no-repeat;
  }
  .button {
    position: absolute;
    top: 60%;
    margin-top: 10px;
  }
}
</style>
