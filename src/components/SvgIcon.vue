<template>
  <svg
    class="svg-icon"
    :style="{width:size+'px',height:size+'px'}"
    aria-hidden="true"
  >
    <use
      :href="symbolId"
      :fill="color"
    />
  </svg>
</template>

<script setup>
import { computed, toRefs } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: '16'
  },
  color: { // 颜色不生效删除svg中的fill属性即可
    type: String
  }
})

const { prefix, name } = toRefs(props)

const symbolId = computed(() => `#${prefix.value}-${name.value}`)
</script>

<style lang="scss" scoped>
  .svg-icon {
    vertical-align: middle;
    fill: currentcolor;
    object-fit: contain;
  }
</style>
