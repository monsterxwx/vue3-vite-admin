<template>
  <div class="base">
    <baseTable
      :data="list"
      v-bind="tableConfig"
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
import baseTable from '@/components/BaseTable'
import baseSearchForm from '@/components/SearchForm'
import tableConfig from './tableConfig'
import searchConfig from './searchConfig'

const list = Array.from({ length: 20 }).map((item, index) => {
  return {
    name: 'test' + index,
    realname: index * 2,
    cellphone: index * 3,
    enable: true,
    createAt: '2022-03-' + index,
    updateAt: '2022-04-30答复奇偶的叫法欧舒丹即佛爱圣诞节佛山',
    test1: 'test1',
    test2: 'test2',
    test3: 'test3',
    more: 'more'
  }
})

const selectionChange = (res) => {
  console.log(res)
}

const showList = () => {
  console.log(list)
}
const test1 = (e) => {
  console.log('总', e)
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
  // padding: 10px;
  width: 100%;
  height: 100%;
}
</style>
