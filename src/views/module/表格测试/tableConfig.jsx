import { ElButton, ElTableColumn } from 'element-plus'
const contentTableConfig = {
  title: '用户列表',
  propList: [
    {
      prop: 'name',
      label: '用户名'
      // minWidth: '100'
    },
    {
      prop: 'realname',
      label: '真实姓名',
      // minWidth: '100',
      render: (scope) => {
        return (
          <ElButton
            type="primary"
            onClick={() => {
              console.log(scope)
              ElMessage.success('我是自定义内容')
            }}
          >
            {scope.row.realname}
          </ElButton>
        )
      }
    },
    {
      prop: 'cellphone',
      label: '手机号码'
      // minWidth: '100'
    },
    {
      prop: 'enable',
      label: '状态',
      // minWidth: '100',
      slotName: 'status'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      // minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'createAt1',
      label: '创建时间',
      // minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'createAt2',
      label: '创建时间',
      // minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'more',
      // minWidth: '150',
      renderHeader: (scope) => {
        return (
          <ElButton>自定义表头</ElButton>
        )
      }
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      slotName: 'updateAt',
      showTip: true
    },
    {
      mulHeaderRender: (scope) => {
        return (
        <ElTableColumn label="多级表头">
            <ElTableColumn prop="test1" label="State" width="120" />
            <ElTableColumn prop="test2" label="City" width="120" />
            <ElTableColumn prop="test3" label="City2" width="120" />
        </ElTableColumn>
        )
      }
    },
    {
      label: '操作',
      slotName: 'handler',
      fixed: 'right'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}

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
export {
  contentTableConfig,
  searchConfig
}
