<template>
  <el-table-column
    v-if="!col.children"
    :label="col.label"
    :prop="col.prop || ''"
    v-bind="col"
  >
    <!-- 自定义 header -->
    <template
      #header
      v-if="col.header"
    >
      <component
        :is="col.header"
        :row="col"
      />
    </template>
    <template #default="scope">
      <component
        v-if="col.render"
        :is="col.render"
        :row="scope.row"
      />
      <slot
        v-else
        :name="col.slotName"
        :row="scope.row"
      >
        <!-- 图片(自带预览),只支持单张图片，多张使用插槽自定义 -->
        <el-image
          v-if="col.image"
          :src="scope.row[col.prop]"
          :preview-src-list="[scope.row[col.prop]]"
          fit="cover"
          class="table-image"
          preview-teleported
        />
        <span v-else>
          {{ scope.row[col.prop] }}
        </span>
      </slot>
    </template>
  </el-table-column>

  <el-table-column
    v-else
    :label="col.label"
  >
    <TableColumn
      v-for="t in col.children"
      :key="t.prop || t.label"
      :col="t"
    >
      <template
        v-for="slot in Object.keys(customSlots)"
        #[slot]="scope"
      >
        <slot
          :name="slot"
          v-bind="scope"
        />
      </template>
    </TableColumn>
  </el-table-column>
</template>

<script setup>
import { getCurrentInstance, reactive } from 'vue'
defineProps({
  col: {
    type: Object,
    default: () => {}
  }
})
const { proxy } = getCurrentInstance()
const customSlots = reactive({
  ...proxy.$slots
})
</script>
<script>
export default {
  name: 'TableColumn'
}
</script>

<style lang="scss" scoped>

</style>
