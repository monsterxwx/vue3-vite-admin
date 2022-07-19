<template>
  <div class="base-form">
    <el-form
      :model="FormData"
      :rules="rules"
      ref="formRef"
      v-bind="$attrs"
    >
      <el-form-item
        v-for="item in propList"
        :label="item.label"
        :key="item.prop"
        :prop="item.prop"
        v-bind="item"
      >
        <!-- 输入框 -->
        <el-input
          v-if="item.type === 'input'"
          v-model="FormData[item.prop]"
          v-bind="item.input"
        />
        <!-- 滑块 -->
        <el-slider
          v-if="item.type === 'slider'"
          v-model="FormData[item.prop]"
          v-bind="item.slider"
        />
        <!-- 单选 -->
        <el-radio-group
          v-if="item.type === 'radio'"
          v-model="FormData[item.prop]"
          v-bind="item.group"
        >
          <template
            v-for="ra in item.radioList"
            :key="ra.value"
          >
            <el-radio-button
              v-if="item.radioType==='radio-button'"
              :label="ra.value"
              v-bind="item.radio"
            >
              {{ ra.label }}
            </el-radio-button>
            <el-radio
              v-else
              :label="ra.value"
              v-bind="item.radio"
            >
              {{ ra.label }}
            </el-radio>
          </template>
        </el-radio-group>
        <!-- 复选框 -->
        <el-checkbox-group
          v-if="item.type === 'checkbox'"
          v-model="FormData[item.prop]"
          v-bind="item.group"
        >
          <el-checkbox
            v-for="ch in item.checkboxList"
            :label="ch.value"
            :key="ch.value"
            v-bind="item.checkbox"
          >
            {{ ch.label }}
          </el-checkbox>
        </el-checkbox-group>
        <!-- 日期  日期时间 起止时间 -->
        <el-date-picker
          v-if="item.type === 'date'"
          :type="item.dateType || 'date'"
          v-model="FormData[item.prop]"
          value-format="yyyy-MM-dd"
          @change="change($event,FormData[item.prop])"
          v-bind="item.date"
        />
        <!-- 时间 -->
        <el-time-select
          v-if="item.type === 'time'"
          v-model="FormData[item.prop]"
          v-bind="item.time"
        />
        <!-- 开关 -->
        <el-switch
          v-if="item.type === 'switch'"
          v-model="FormData[item.prop]"
          v-bind="item.switch"
        />
        <!-- 下拉框 -->
        <el-select
          v-if="item.type === 'select'"
          v-model="FormData[item.prop]"
          @change="change(FormData[item.prop])"
          v-bind="item.select"
        >
          <el-option
            v-for="op in item.selectList"
            :label="op.label"
            :value="op.value"
            :key="op.value"
          >
            {{ op.label }}
          </el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item class="search_input_button" v-if="isHandle">
        <el-button
          v-for="item in searchHandle"
          :key="item.label"
          :type="item.type"
          @click="item.handle()"
        >
          <span>{{ item.label }}</span>
        </el-button>
      </el-form-item> -->
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
const prop = defineProps({
  propList: {
    type: Array,
    default: () => ([])
  },
  formData: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['validate', 'reset'])
// 拷贝formdata对象
let FormData = reactive(null)
watch(prop.formData, (newValue) => {
  FormData = newValue
})
const rules = computed(() => {
  const rules = prop.formData.reduce((map, i) => {
    if (i.rules) {
      map[i.prop] = i.rules
    }
    return map
  }, {})
  return rules
})
// 子项改变
const change = (e, prop) => {
  console.log(e, prop)
}
const formRef = ref(null)
// 验证表单
// eslint-disable-next-line no-unused-vars
const formValidate = () => {
  formRef.value.validate(valid => {
    if (valid) {
      emit('validate', valid)
    } else {
      return false
    }
  })
}
// 重置表单
// eslint-disable-next-line no-unused-vars
const reset = () => {
  formRef.value.resetFields()
  emit('reset')
}

</script>

<style lang="scss" scoped>

</style>
