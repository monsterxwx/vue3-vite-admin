<template>
  <div>
    <BaseForm
      ref="formRef"
      v-model="formData"
      v-bind="formConfig"
      @validate="confim"
    />
    <el-button @click="add">
      提交
    </el-button>
    <el-button @click="reset">
      重置
    </el-button>
  </div>
</template>

<script setup>
import BaseForm from '@/components/BaseForm'
import formConfig from './formConfig'
import { ref } from 'vue'
const formRef = ref(null)
const formData = ref({
  test1: '',
  test2: 15,
  test3: '',
  test4: [],
  test5: [],
  test6: '',
  test7: '',
  test8: ''
})

const add = () => {
  formRef.value.formValidate()
}
const reset = () => {
  formRef.value.reset()
}
const confim = () => {
  console.log(formData.value)
}
</script>

<style lang="scss" scoped>

</style>
