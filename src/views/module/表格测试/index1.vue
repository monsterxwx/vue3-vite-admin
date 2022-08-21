<template>
  <div class="base">
    <RenderTable
      ref="el"
      :data="data"
      :columns="tableColumns"
      @selection-change="handleSelect"
    />
  </div>
</template>
<script setup lang="jsx">
import { reactive, ref } from 'vue'
import RenderTable from '@/components/RenderTable'

const data = reactive([
  { name: 'ceshi1', child1: 'child1', child2: 'child2' },
  { name: 'ceshi2', child1: 'child1', child2: 'child2' },
  { name: 'ceshi3', child1: 'child1', child2: 'child2' }
])
const el = ref(null)
const tableColumns = reactive([
  { type: 'selection' },
  { label: '序号', type: 'index', width: '60px' },
  { label: '姓名', prop: 'name' },
  {
    label: '子集',
    prop: 'child',
    children: [
      {
        label: '子集1',
        prop: 'child1'
      },
      {
        label: '子集2',
        prop: 'child2'
      }
    ]
  },
  {
    label: '编辑',
    prop: 'edit',
    headerRender: () => <el-button>测试</el-button>,
    render: ({ row }) => <el-button onClick={() => handleClick(row)}>123</el-button>
  }
])
function handleClick (row) {
  data.push(
    { name: 'ceshi4', child1: 'child1', child2: 'child2' }
  )
  // 取消选中
  el.value.tableRef.clearSelection()
}
function handleSelect (selection) {
  console.log(selection)
}
</script>
