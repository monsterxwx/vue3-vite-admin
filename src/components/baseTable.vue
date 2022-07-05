<template>
  <div class="baseTable">
    <div class="header">
      <slot name="header">
        <div class="title">
          {{ title }}
        </div>
        <div class="handler">
          <slot name="headerHandler" />
        </div>
        <!-- <div>
          <el-button
            type="primary"
            size="default"
            :icon="CirclePlus"
          >
            新增
          </el-button>
          <el-button
            type="primary"
            :icon="Edit"
          >
            编辑
          </el-button>
          <el-button
            type="primary"
            :icon="Delete"
          >
            删除
          </el-button>
          <el-button
            type="primary"
            :icon="RefreshRight"
          >
            刷新
          </el-button>
        </div> -->
      </slot>
    </div>
    <el-table
      :header-cell-style="{ background: '#fafafa' }"
      border
      highlight-current-row
      v-bind="$attrs"
      style="width: 100%;"
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
        <el-table-column
          v-bind="propItem"
          align="center"
        >
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
  :deep(.el-table) {
    overflow: auto;
    min-height: 0;
    flex: 1 0;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    height: 45px;
    .title {
      font-size: 20px;
      font-weight: 700;
    }
    .handler {
      align-items: center;
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
