const formConfig = {
  propList: [
    {
      type: 'input',
      prop: 'test1',
      label: '测试1',
      rules: [
        {
          required: true,
          message: 'Please select Activity count',
          trigger: 'blur'
        }
      ]
    },
    {
      type: 'slider',
      prop: 'test2',
      label: '测试2'
    },
    {
      type: 'radio',
      radioList: [
        {
          value: '1',
          label: '11'
        },
        {
          value: '2',
          label: '22'
        }
      ],
      prop: 'test3',
      label: '测试3'
    },
    {
      type: 'checkbox',
      checkboxList: [
        {
          value: '1',
          label: '11'
        },
        {
          value: '2',
          label: '22'
        }
      ],
      prop: 'test4',
      label: '测试4'
    },
    {
      type: 'date',
      prop: 'test5',
      label: '测试5',
      date: {
        placeholder: '请选择日期'
      }
    },
    {
      type: 'time',
      prop: 'test6',
      label: '测试6'
    },
    {
      type: 'switch',
      prop: 'test7',
      label: '测试7'
    },
    {
      type: 'select',
      prop: 'test8',
      label: '测试8',
      selectList: [
        {
          value: '1',
          label: '11'
        },
        {
          value: '2',
          label: '22'
        }
      ]
    }
  ]

}
export default formConfig
