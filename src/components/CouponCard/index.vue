<template>
  <div class="coupon-card shadow-lg mb">
    <div class="coupon ">
      <div class="title">
        <slot name="title">
          test
        </slot>
      </div>
      <div class="date">
        <slot name="date">
          2022-10-1 23:59:59到期
        </slot>
      </div>
      <div class="circle-box">
        <div
          class="circle"
          v-for="item in 20"
          :key="item"
        />
      </div>
    </div>
    <div class="centent">
      <div class="text">
        <slot name="text">
          内容
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.coupon-card {
  width: 200px;
  .coupon {
    position: relative;
    width: 200px;
    height: 120px;
    background-image: radial-gradient(circle at 100px -8px, transparent 20px, #73d2d3 21px);
    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 20px;
      color: #fcfdfc;
      transform: translate(-50%, -50%);
    }
    .date {
      position: absolute;
      bottom: 10px;
      left: 50%;
      font-size: 13px;
      white-space: nowrap;
      color: #035457;
      transform: translateX(-50%);
    }
    .circle-box {
      position: absolute;
      bottom: -2.5px;
      left: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      .circle {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #f7f7f7;
      }
    }
  }
  .centent {
    width: 200px;
    height: 160px;
    background-color: #f7f7f7;
    .text {
      padding: 10px;
    }
  }
}
</style>
