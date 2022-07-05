<template>
  <div>
    登录页
    <!-- <el-button @click="fullScreen">
      {{ isFullScreen?'已全屏':'全屏' }}
    </el-button> -->
    <el-button @click="openMessage">
      消息
    </el-button>
  </div>
</template>

<script setup>
// import  useDialog from '@/hooks/common/useMessageBox'
// useDialog('hhh', () => console.log('eee'))
// import useFullScren from '@/hooks/common/useFullScreen'
// const {
//   isFullScreen,
//   fullScreen
// } = useFullScren()
import useMessage from '@/hooks/common/useMessage'

const openMessage = () => {
  useMessage('success', 'hhh')
}
</script>

<style lang="scss" scoped>

</style>
