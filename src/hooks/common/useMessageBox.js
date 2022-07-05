
import { ElMessageBox } from 'element-plus'

export default function useDialog (
  msg,
  successCallback = () => {},
  errCallback = () => {}
) {
  ElMessageBox.confirm(msg, undefined, {
    customStyle: {
      width: '300px'
    }
  })
    .then(() => {
      successCallback()
    })
    .catch((err) => {
      errCallback(err)
    })
}
