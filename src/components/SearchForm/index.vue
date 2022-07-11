<template>
  <div class="baseSearch">
    <div class="left">
      <template
        v-for="item in getSearchList"
        :key="item.prop"
      >
        <div class="itemSearch">
          <div class="label">
            {{ item.label+ ' :' }}
          </div>
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
              placeholder="请选择"
              v-bind="item"
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
              :multiple="item.type == 'multipleTreeSelect'"
              :data="item.enum"
              v-bind="item"
            />
          </template>
          <!-- 日期选择 -->
          <template v-if="item.type == 'date'">
            <el-date-picker
              v-model="searchParam[item.prop]"
              value-format="YYYY-MM-DD"
              type="date"
              placeholder="请选择日期"
              v-bind="item"
              :clearable="clearable(item)"
            />
          </template>
          <!-- 时间范围选择 -->
          <template v-if="item.type == 'timerange'">
            <el-time-picker
              v-model="searchParam[item.prop]"
              is-range
              value-format="HH:mm:ss"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              v-bind="item"
              :clearable="clearable(item)"
            />
          </template>
          <!-- 日期范围选择 -->
          <template v-if="item.type == 'daterange'">
            <el-date-picker
              v-model="searchParam[item.prop]"
              type="daterange"
              value-format="YYYY-MM-DD"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              v-bind="item"
              :clearable="clearable(item)"
            />
          </template>
          <!-- 日期时间范围选择 -->
          <template v-if="item.type == 'datetimerange'">
            <el-date-picker
              v-model="searchParam[item.prop]"
              type="datetimerange"
              value-format="YYYY-MM-DD HH:mm:ss"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              v-bind="item"
              :clearable="clearable(item)"
            />
          </template>
        </div>
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

      <el-button
        type="primary"
        link
        class="search-isOpen"
        @click="searchShow = !searchShow"
        v-if="searchPropList.length > maxLength"
      >
        {{ searchShow ? "合并" : "展开" }}
        <el-icon class="el-icon--right">
          <component :is="searchShow ? ArrowUp : ArrowDown" />
        </el-icon>
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { Delete, Search, ArrowUp, ArrowDown } from '@element-plus/icons-vue'
import { reactive, ref, computed } from 'vue'

const searchParam = reactive({})
const props = defineProps({
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

// 一行最大的搜索数量
const maxLength = ref(4)
// 是否展开搜索项
const searchShow = ref(false)
// 根据是否展开配置搜索项长度
const getSearchList = computed(() => {
  if (searchShow.value) return props.searchPropList
  return props.searchPropList.slice(0, maxLength.value)
})
</script>

<style lang="scss" scoped>
.baseSearch {
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  .left {
    display: flex;
    .itemSearch {
      display: flex;
      align-items: center;
      .label {
        margin-right: 10px;
        font-size: 14px;
        white-space: nowrap;
        color: #606244;
      }

      // .el-input,
      // .el-select,
      // .el-date-editor--timerange {
      //   width: 210px;
      // }

      // 去除时间选择器上下 padding
      .el-range-editor.el-input__wrapper {
        padding: 0 10px;
      }

      // el-select 为多选时不换行显示
      .el-select__tags {
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
  .right {
    flex: 1;
    margin-left: 15px;
    white-space: nowrap;
    .search-isOpen {
      margin-left: 20px;
    }
  }
}
</style>
