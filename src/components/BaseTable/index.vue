<template>
  <div class="baseTable">
    <div class="search">
      <slot name="search" />
    </div>
    <div>
      <div class="header">
        <slot name="header" />
      </div>
    </div>
    <el-table
      ref="baseTableRef"
      :header-cell-style="{ background: '#fafafa' }"
      stripe
      border
      height="100%"
      highlight-current-row
      v-bind="$attrs"
    >
      <el-table-column
        v-if="selectColumn"
        type="selection"
        align="center"
        width="60"
      />
      <el-table-column
        v-if="indexColumn"
        type="index"
        :index="cumsumIndex"
        label="序号"
        align="center"
        width="80"
      />
      <TableColumn
        v-for="item in propList"
        :key="item.prop || item.label"
        :col="item"
      >
        <template
          v-for="slot in Object.keys(customSlots)"
          #[slot]="scope"
        >
          <slot
            :name="slot"
            v-bind="scope"
          />
        </template>
      </TableColumn>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-if="pagination"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[20, 50, 100, 200]"
          :page-size="50"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        />
      </slot>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, reactive } from 'vue'
import TableColumn from './TableColumn'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  propList: {
    type: Array,
    required: true
  },
  indexColumn: {
    type: Boolean,
    default: true
  },
  selectColumn: {
    type: Boolean,
    default: true
  },
  pagination: {
    // 是否显示分页
    type: Boolean,
    default: true
  },
  pageNum: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 10
  },
  total: {
    type: Number,
    default: 0
  }
})
const { proxy } = getCurrentInstance()
const customSlots = reactive({
  ...proxy.$slots
})
const emit = defineEmits(['pageChange', 'sizeChange'])
// 每页显示页数发生改变
const handleSizeChange = (value) => {
  emit('sizeChange', value)
}
// 当前页数发生改变
const handleCurrentChange = (value) => {
  emit('pageChange', value)
}
// 自定义序号
const cumsumIndex = (index) => {
  return (props.pageNum - 1) * props.pageSize + index + 1
}
</script>

<style lang="scss" scoped>
.baseTable {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  .el-table {
    width: 100%;
  }
  :deep(.el-table__header th),
  :deep(.el-table__body td) {
    text-align: center;
  }
  .header {
    .title {
      font-size: 20px;
      font-weight: 700;
    }
  }
  .footer {
    margin-top: 15px;
    :deep(.el-pagination) {
      justify-content: flex-end;
    }
  }
  .table-image {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
}
</style>
