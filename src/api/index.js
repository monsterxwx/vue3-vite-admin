const files = import.meta.globEager('./modules/*.js')
const modules = {}
for (const key in files) {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    modules[key.replace(/(\.\/modules\/|\.js)/g, '')] = files[key].default
  }
}

// 全部api接口
export default {
  ...modules
}
