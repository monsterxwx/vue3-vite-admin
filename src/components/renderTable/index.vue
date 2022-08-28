<script setup lang="jsx">
import {
  getCurrentInstance, useAttrs, computed, ref
} from 'vue'

let key = 0
const props = defineProps({
  data: {
    type: Array,
    default: () => ([])
  },
  columns: {
    type: Array,
    default: () => ([])
  },
  total: {
    type: Number,
    default: 100
  }
})

const attrs = useAttrs()

// 处理多表头的情况
const getTableColumn = (column) => {
  const {
    render,
    headerRender,
    children,
    ...data
  } = column
  // 处理自定义头部和自定义内容
  const slots = {}
  if (headerRender) {
    slots.header = headerRender
  }
  if (render) {
    slots.default = render
  }
  if (children) {
    slots.default = () => children.map(getTableColumn)
  }
  if (!column.prop && !column.type) {
    key += 1
  }
  const columnProps = { align: 'center', ...data }
  return (
    <el-table-column
      key={column.prop || column.type || key}
      {...columnProps}
      v-slots={slots}>
    </el-table-column>
  )
}
const tableColumns = computed(() => props.columns.map(getTableColumn))
console.log('dd', tableColumns)

// 暴露模板ref，以便能在外部调用el-table的method
const tableRef = ref(null)
defineExpose({
  tableRef
})
// setup script 中使用 jsx
const inst = getCurrentInstance()
inst.render = () =>
  (
   <div class="baseTable">
      <el-table
        stripe
        border
        height="100%"
        ref={tableRef}
        data={props.data}
        {...attrs}
      >
        {tableColumns.value}
      </el-table>

    </div>
  )
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
