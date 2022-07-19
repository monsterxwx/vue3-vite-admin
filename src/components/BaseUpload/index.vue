<template>
  <div class="baseUpload">
    <el-upload
      :disabled="idCardIsUpload"
      class="avatar-uploader"
      list-type="picture"
      :show-file-list="false"
      :http-request="diyRequest"
    >
      <el-image
        v-if="idCardImgUrl"
        :src="idCardImgUrl"
        name="idCardImgUrl"
        class="avatar"
        @error="imgLoadError"
      />
      <el-progress
        style="margin: 5px;"
        :width="70"
        v-else-if="idCardIsUpload"
        type="circle"
        :percentage="idCardUploadPercentage"
      />
      <el-icon
        v-else
        class="avatar-uploader-icon"
      >
        <Plus />
      </el-icon>
    </el-upload>
  </div>
</template>

<script setup>
import axios from '@/api'
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
const data = reactive({
  idCardImgUrl: '',
  idCardIsUpload: false,
  idCardUploadPercentage: 0,
  errorImgUrls: []
})
const prop = defineProps({
  supportType: { // 支持上传文件的格式
    default: () => ['image/jpeg', 'image/jpg', 'image/png'],
    type: Array
  }
})
const emit = defineEmits(['setCardPic'])
/* 父组件执行的方法 */
// eslint-disable-next-line no-unused-vars
const setEditImg = (path) => {
  data.idCardImgUrl = path || ''
}
/* 自定义上传的方法 */
const diyRequest = (param) => {
  /* 对上传图片的大小和格式校验 */
  const isLt10M = param.file.size / 1024 / 1024 < 4
  if (prop.supportType.indexOf(param.file.type) === -1) {
    const supportType = prop.supportType
    let msg = ''
    supportType.forEach(res => {
      msg += res.substring(6) + '/'
    })
    const newMsg = msg.slice(0, (msg.length) - 1)
    ElMessage('error', '请上传正确的图片格式！支持的格式有：' + newMsg)
    return
  }
  if (!isLt10M) {
    ElMessage('error', '上传图片大小不能超过4MB哦!')
    return
  }
  const fileObj = param.file
  const form = new FormData()
  form.append('file', fileObj)
  // eslint-disable-next-line no-unused-vars
  const callback = (progress) => {
    data.idCardIsUpload = true
    data.idCardUploadPercentage = progress
  }
  /* 走后台接口，这里自行换成自己的api */
  axios.common.upload(form, callback).then(res => {
    data.idCardIsUpload = false
    data.idCardUploadPercentage = 0
    data.idCardImgUrl = res.data.basePath + res.data.url
    /* 成功之后将图片路径暴露给父组件去显示图片 */
    emit('setCardPic', res.data.url)
  }).catch(err => {
    ElMessage('error', err)
  })
}
/* 当图片显示失败的时候，我会重复10次赋值图片，成功显示就退出，还是失败就会显示失败 */
const imgLoadError = (error) => {
  let isExist = false
  const src = error.path[0].src.split('?')[0]
  if (data.errorImgUrls.length === 0) {
    data.errorImgUrls.push({ src, number: 1 })
  }
  for (let i = 0; i < data.errorImgUrls.length; i++) {
    if (src === data.errorImgUrls[i].src) {
      isExist = true
      while (data.errorImgUrls[i].number < 10) {
        data.errorImgUrls[i].number++
        const timestamp1 = Date.parse(new Date())
        data[error.path[0].name] = src + '?t=' + timestamp1
      }
    }
  }
  if (!isExist) { // 首次上传（不在错误数组图片中，需要执行循环三次赋值）
    data.errorImgUrls.push({ src, number: 1 })
    data.imgLoadError(error)
  }
}
</script>

<style lang="scss" scoped>
.baseUpload {
  :deep(.el-icon.avatar-uploader-icon) {
    width: 178px;
    height: 178px;
    font-size: 28px;
    text-align: center;
    color: #8c939d;
  }
  :deep(.avatar-uploader .el-upload) {
    position: relative;
    overflow: hidden;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
  }
  :deep(.avatar-uploader .el-upload:hover) {
    border-color: #409eff;
  }
  :deep(.avatar-uploader-icon) {
    width: 120px;
    font-size: 28px;
    text-align: center;
    color: #8c939d;
  }
  :deep(.avatar) {
    display: block;
    width: 120px;
    height: 120px;
  }
}

</style>
