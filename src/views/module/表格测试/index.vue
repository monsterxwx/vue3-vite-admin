<template>
  <div class="base">
    <div class="flex-1 min-h-0">
      <BaseTable
        :data="list"
        v-bind="tableConfig"
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
      </BaseTable>
    </div>
    <div class="flex justify-end items-center p-[10px_0]">
      <el-pagination
        layout="prev, pager, next"
        :total="50"
      />
    </div>
  </div>
</template>

<script setup>
// 表格测试
import BaseTable from '@/components/BaseTable'
import tableConfig from './tableConfig'

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

const showList = () => {
  console.log(list)
}

</script>

<style lang="scss" scoped>
.test2 {
  // padding: 10px;
  width: 100%;
  height: 100%;
}
</style>
