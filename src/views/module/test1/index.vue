<template>
  <div class="test1">
    <el-card>
      <div>{{ nowTime }}</div>
      <div>{{ userStore.name }}</div>
      <el-button
        round
        size="large"
        @click="changeName"
      >
        改成李四
      </el-button>
      <el-button
        round
        size="large"
        @click="changeName1"
      >
        改成张三
      </el-button>
      <el-button
        :plain="true"
        @click="open"
      >
        Show message
      </el-button>
      <el-timeline style="margin-top: 50px;">
        <el-timeline-item
          v-for="(item, index) in tianqiData"
          :key="index"
          :timestamp="item.wea"
        >
          {{ item.week }}
        </el-timeline-item>
      </el-timeline>
      <div
        v-for="item in 100"
        :key="item"
      >
        2222
      </div>
    </el-card>
  </div>
</template>

<script setup>

import axios from '@/api'
import { ref } from 'vue'
import useUserStore from '@/store/user'
import dayjs from 'dayjs'
const nowTime = dayjs().format('YYYY-MM-DD HH:mm:ss')

const userStore = useUserStore()
const changeName = () => {
  userStore.updateName('李四')
}
const changeName1 = () => {
  userStore.updateName('张三')
}
const open = () => {
  ElMessage('this is a message.')
}

const tianqiData = ref({})
const testApi = () => {
  const params = {
    version: 'v9',
    appid: '23035354',
    appsecret: '8YvlPNrz'
  }
  axios.common.getTianqi(params).then((res) => {
    tianqiData.value = res.data
  })
}
testApi()
</script>

<style lang="scss" scoped>
.test1 {
  height: 100%;
}
</style>
