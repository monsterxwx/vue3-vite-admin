import { ElButton, ElTableColumn } from 'element-plus'
const tableConfig = {
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
      prop: 'more',
      // minWidth: '150',
      header: (scope) => {
        return (
          <ElButton>自定义表头</ElButton>
        )
      }
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      slotName: 'updateAt',
      'show-overflow-tooltip': true
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
  ]
}

export default tableConfig
