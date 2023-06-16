
export const useRequest = (api, params = {}, options = {}) => {
  const { defaultValue = [] } = options
  const data = defaultValue
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api(params) || defaultValue
      resolve(result)
    } catch (err) {
      ElMessage({
        type: 'error',
        message: err?.data?.msg || err?.message || 'Error',
        grouping: true
      })
      resolve(data)
    }
  })
}

export const useGetData = (api, params = {}, options = {}) => {
  const { defaultValue = [] } = options
  const data = ref([])
  api(params)
    .then(result => {
      data.value = result || defaultValue
    }).catch(err => {
      ElMessage({
        type: 'error',
        message: err?.data?.msg || err?.message || 'Error',
        grouping: true
      })
      data.value = defaultValue
    })
  return {
    data
  }
}

export default useRequest
