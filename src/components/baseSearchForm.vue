<template>
  <div class="baseSearch">
    <div class="left">
      <template
        v-for="item in searchPropList"
        :key="item.prop"
      >
        <!-- 文本框 -->
        <template v-if="item.type == undefined || item.type == 'text'">
          <el-input
            v-model="searchParam[item.prop]"
            placeholder="请输入"
            v-bind="item"
            :clearable="clearable(item)"
          />
        </template>
        <!-- 下拉选择框 -->
        <template v-if="item.type == 'select' || item.type == 'multipleSelect'">
          <el-select
            v-model="searchParam[item.prop]"
            :multiple="item.type == 'multipleSelect'"
            v-bind="item"
            placeholder="请选择"
            :clearable="clearable(item)"
          >
            <el-option
              v-for="itemValue in item.enum"
              :key="itemValue.value"
              :label="itemValue.label"
              :value="itemValue.value"
              :disabled="itemValue.disabled"
            />
          </el-select>
        </template>
        <!-- 下拉树形选择框 -->
        <template v-if="item.type == 'treeSelect' || item.type == 'multipleTreeSelect'">
          <el-tree-select
            v-model="searchParam[item.prop]"
            v-bind="item"
            :multiple="item.type == 'multipleTreeSelect'"
            :data="item.enum"
          />
        </template>
        <!-- 日期选择 -->
        <template v-if="item.type == 'date'">
          <el-date-picker
            v-model="searchParam[item.prop]"
            v-bind="item"
            value-format="YYYY-MM-DD"
            type="date"
            placeholder="请选择日期"
            :clearable="clearable(item)"
          />
        </template>
        <!-- 时间范围选择 -->
        <template v-if="item.type == 'timerange'">
          <el-time-picker
            v-model="searchParam[item.prop]"
            v-bind="item"
            is-range
            value-format="HH:mm:ss"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            :clearable="clearable(item)"
          />
        </template>
        <!-- 日期范围选择 -->
        <template v-if="item.type == 'daterange'">
          <el-date-picker
            v-model="searchParam[item.prop]"
            type="daterange"
            v-bind="item"
            value-format="YYYY-MM-DD"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            :clearable="clearable(item)"
          />
        </template>
        <!-- 日期时间范围选择 -->
        <template v-if="item.type == 'datetimerange'">
          <el-date-picker
            v-model="searchParam[item.prop]"
            v-bind="item"
            type="datetimerange"
            value-format="YYYY-MM-DD HH:mm:ss"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            :clearable="clearable(item)"
          />
        </template>
      </template>
    </div>
    <div class="right">
      <el-button
        type="primary"
        :icon="Search"
        @click="search"
      >
        搜索
      </el-button>
      <el-button
        :icon="Delete"
        @click="reset"
      >
        重置
      </el-button>
      <!-- <el-button
        type="primary"
        link
        class="search-isOpen"
        @click="searchShow = !searchShow"
        v-if="columns.length > maxLength"
      >
        {{ searchShow ? "合并" : "展开" }}
        <el-icon class="el-icon--right">
          <component :is="searchShow ? ArrowUp : ArrowDown" />
        </el-icon>
      </el-button> -->
    </div>
  </div>
</template>

<script setup>
import { Delete, Search, ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import { reactive } from 'vue'
const searchParam = reactive({})
defineProps({
  searchPropList: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['reset', 'search'])
// 是否有清除按钮 (当搜索项有默认值时，清除按钮不显示)
const clearable = (item) => {
  return item.initSearchParam === null || item.initSearchParam === undefined
}
const search = () => {
  emit('search', searchParam)
}
const reset = () => {
  Object.keys(searchParam).forEach(item => {
    searchParam[item] = ''
  })
  emit('reset')
  emit('search', searchParam)
}
</script>

<style lang="scss" scoped>
.baseSearch {
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  .left {
    display: flex;
  }
}
</style>
