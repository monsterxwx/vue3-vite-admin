<template>
  <div class="card">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  display: flex;
  margin-right: 1rem;
  margin-bottom: 1rem;
  font-size: 14px;
  border-radius: 2px;
  background-color: #ffffff;
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
