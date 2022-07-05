import { ElMessage } from 'element-plus'

export default function useMessage (type = 'success', message) {
  ElMessage({
    message,
    type, // "success" | "warning" | "info" | "error"
    duration: 2000
  })
}
