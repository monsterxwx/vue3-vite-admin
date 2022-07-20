<template>
  <div class="base-form">
    <el-form
      :model="FormData"
      :rules="rules"
      ref="formRef"
      v-bind="$attrs"
    >
      <div class="grid-form">
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
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
const prop = defineProps({
  propList: {
    type: Array,
    default: () => ([])
  },
  modelValue: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['validate', 'update:modelValue'])
// 拷贝formdata对象
const FormData = ref({})
watch(() => prop.modelValue, (newValue) => {
  FormData.value = newValue
}, { immediate: true })

watch(FormData, (newValue) => {
  emit('update:modelValue', newValue)
})

const rules = computed(() => {
  const rules = prop.propList.reduce((map, i) => {
    if (i.rules) {
      map[i.prop] = i.rules
    }
    return map
  }, {})
  return rules
})

const formRef = ref(null)
// 验证表单

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
const reset = () => {
  formRef.value.resetFields()
}
defineExpose({
  formValidate,
  reset
})
</script>

<style lang="scss" scoped>
.base-form {
  width: 100%;
  .grid-form {
    display: grid;
  }
}
</style>
