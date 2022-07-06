<template>
  <div class="test2">
    <baseTable
      stripe
      :data="list"
      v-bind="contentTableConfig"
      @selection-change="selectionChange"
      @current-change="test1"
      @page-change="pageChange"
    >
      <template #search>
        <baseSearchForm
          v-bind="searchConfig"
          @search="search"
        />
      </template>
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
  </div>
</template>

<script setup>
// 表格测试
import baseTable from '@/components/baseTable'
import baseSearchForm from '@/components/baseSearchForm'
import { contentTableConfig, searchConfig } from './tableConfig'
import { reactive } from 'vue'

const list = reactive([
  {
    name: '1',
    realname: '2',
    cellphone: '3',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30答复奇偶的叫法欧舒丹即佛爱圣诞节佛山',
    test1: 'test1',
    test2: 'test2',
    test3: 'test3',
    more: 'more'
  },
  {
    name: '11',
    realname: '22',
    cellphone: '33',
    enable: true,
    createAt: '2022-03-29',
    updateAt: '2022-04-30',
    more: 'more'
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
const search = (e) => {
  console.log(e)
}

</script>

<style lang="scss" scoped>
.test2 {
  height: 100%;
}
</style>
