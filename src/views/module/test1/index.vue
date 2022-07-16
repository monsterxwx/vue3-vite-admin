<template>
  <div class="base test1">
    <div
      style="width: 100%;gap: 1rem;font-size: 14px;"
      class="flex-between"
    >
      <BaseCard
        v-waves
        v-for="item in 4"
        :key="item"
      >
        <template #title>
          <div>访问数</div>
          <div

            class="btn"
          >
            月
          </div>
        </template>
        <template #content>
          <div>ee</div>
        </template>
      </BaseCard>
    </div>
    <BaseCard
      v-for="item in 3"
      :key="item"
    >
      <template #title>
        五日内天气，现在时间：{{ nowTime }}
      </template>
      <template #content>
        <el-timeline style="margin-top: 50px;">
          <el-timeline-item
            v-for="(item1, index) in tianqiData"
            :key="index"
            :timestamp="item1.wea"
          >
            {{ item.week }}
          </el-timeline-item>
        </el-timeline>
      </template>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from '@/components/BaseCard'
import axios from '@/api'
import { ref } from 'vue'
import dayjs from 'dayjs'
const nowTime = dayjs().format('YYYY-MM-DD HH:mm:ss')

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
.btn {
  padding: 2px 7px;
  border: 1px solid #b7eb8f;
  border-radius: 2px;
  white-space: nowrap;
  color: #389e0d;
  background-color: #f6ffed;
}

</style>
