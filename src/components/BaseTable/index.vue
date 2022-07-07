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
      border
      height="250"
      highlight-current-row
      v-bind="$attrs"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      />
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      />
      <template
        v-for="propItem in propList"
        :key="propItem.prop"
      >
        <!-- 多级表头 render渲染 -->
        <template v-if="propItem.mulHeaderRender">
          <component
            :is="propItem.mulHeaderRender"
          />
        </template>

        <el-table-column
          v-else
          v-bind="propItem"
        >
          <!-- 自定义 header -->
          <template
            #header
            v-if="propItem.renderHeader"
          >
            <component
              :is="propItem.renderHeader"
              :row="propItem"
            />
          </template>
          <template #default="scope">
            <component
              v-if="propItem.render"
              :is="propItem.render"
              :row="scope.row"
            />
            <slot
              v-else
              :name="propItem.slotName"
              :row="scope.row"
            >
              <!-- 图片(自带预览),只支持单张图片，多张使用插槽自定义 -->
              <el-image
                v-if="propItem.image"
                :src="scope.row[propItem.prop]"
                :preview-src-list="[scope.row[propItem.prop]]"
                fit="cover"
                class="table-image"
                preview-teleported
              />
              <!-- showTip: 对于内容超过一行的开启省略，鼠标移入后显示在上方 -->
              <el-popover
                v-if="propItem.showTip"
                placement="top"
                :width="180"
                trigger="hover"
                :content="scope.row[propItem.prop]"
              >
                <template #reference>
                  <span class="ellipsis">
                    {{ scope.row[propItem.prop] }}
                  </span>
                </template>
              </el-popover>
              <span v-else>
                {{ scope.row[propItem.prop] }}
              </span>
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-if="pagination"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="50"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        />
      </slot>
    </div>
  </div>
</template>

<script setup>

// import { Delete, Edit, CirclePlus, RefreshRight } from '@element-plus/icons-vue'
defineProps({
  title: {
    type: String,
    default: ''
  },
  propList: {
    type: Array,
    required: true
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  pagination: {
    // 是否显示分页
    type: Boolean,
    default: true
  },
  total: {
    type: Number,
    default: 100
  }
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

</script>

<style lang="scss" scoped>
.baseTable {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  .el-table {
    width: 100%;
    flex: 1;
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
