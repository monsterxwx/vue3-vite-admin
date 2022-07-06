<template>
  <div class="test2">
    <!-- <el-card> -->
    <baseTable
      stripe
      height="250"
      :data="list"
      v-bind="tableConfig"
      @selection-change="selectionChange"
      @current-change="test1"
      @page-change="pageChange"
    >
      <template #status="scope">
        <el-switch v-model="scope.row.enable" />
      </template>
      <template #handler>
        <el-button
          @click="showList"
          type=""
        >
          hh
        </el-button>
      </template>
    </baseTable>
    <!-- </el-card> -->
  </div>
</template>

<script setup>
// 表格测试
import baseTable from '@/components/baseTable'
import tableConfig from './tableConfig'
import { reactive } from 'vue'

const list = reactive([
  {
    name: '1',
    realname: '2',
    cellphone: '3',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30',
    test1: 'test1',
    test2: 'test2'
  },
  {
    name: '11',
    realname: '22',
    cellphone: '33',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30'

  },
  {
    name: '111',
    realname: '222',
    cellphone: '333',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30'

  },
  {
    name: '111',
    realname: '222',
    cellphone: '333',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30'

  },
  {
    name: '111',
    realname: '222',
    cellphone: '333',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30'

  },
  {
    name: '111',
    realname: '222',
    cellphone: '333',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30'

  },
  {
    name: '111',
    realname: '222',
    cellphone: '333',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30'

  },
  {
    name: '111',
    realname: '222',
    cellphone: '333',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30'

  },
  {
    name: '111',
    realname: '222',
    cellphone: '333',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30'

  },
  {
    name: '111',
    realname: '222',
    cellphone: '333',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30'

  },
  {
    name: '111',
    realname: '222',
    cellphone: '333',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30'

  },
  {
    name: '111',
    realname: '222',
    cellphone: '333',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30'

  },
  {
    name: '111',
    realname: '222',
    cellphone: '333',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30'

  },
  {
    name: '111',
    realname: '222',
    cellphone: '333',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30'

  }
])
const selectionChange = (res) => {
  console.log(res)
}

const showList = () => {
  console.log(list)
}
const test1 = (e) => {
  console.log(e)
}
const pageChange = (e) => {
  console.log('页数', e)
}

</script>

<style lang="scss" scoped>
.test2 {
  height: 100%;
}
</style>
