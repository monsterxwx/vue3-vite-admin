const searchConfig = {
  searchPropList: [
    {
      label: '名称',
      type: 'text',
      prop: 'test1'
    },
    {
      label: '名称1',
      type: 'text',
      prop: 'test11'
    },
    {
      label: '名称2',
      type: 'text',
      prop: 'test111'
    },
    {
      label: '名3',
      type: 'text',
      prop: 'test1111'
    },
    {
      label: '名344',
      type: 'select',
      placeholder: '请选择你的值',
      prop: 'test2',
      enum: [
        {
          value: '1',
          label: '1'
        },
        {
          value: '2',
          label: '2'
        }
      ]
    }
  ]
}
export default searchConfig
