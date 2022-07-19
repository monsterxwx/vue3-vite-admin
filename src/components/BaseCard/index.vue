<template>
  <div
    class="card"
    :style="{backgroundColor:bgColor}"
  >
    <div class="title">
      <slot name="title" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  bgColor: {
    type: String,
    default: '#ffffff'
  }
})
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  margin-bottom: 1rem;
  border-radius: 2px;
  flex: 1;
  flex-direction: column;
  .title {
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
    border-bottom: 1px solid #f0f0f0;
  }
  .content {
    padding: 12px;
  }
}
</style>
