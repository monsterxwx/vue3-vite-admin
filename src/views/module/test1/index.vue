<template>
  <div class="base">
    <BaseCard>
      <template #title>
        优惠券
      </template>
      <template #content>
        <div
          style="width: 100%;gap: 1rem;font-size: 14px;"
          class="flex"
        >
          <CouponCard />
          <!-- <BaseUpload /> -->
        </div>
      </template>
    </BaseCard>

    <div
      style="width: 100%;gap: 1rem;font-size: 14px;"
      class="flex-between"
    >
      <BaseCard
        v-waves
        v-for="item in 3"
        :key="item"
      >
        <template #title>
          <div>访问数</div>
          <div

            class="btn"
          >
            月
          </div>
        </template>
        <template #content>
          <div>ee</div>
        </template>
      </BaseCard>
      <BaseCard>
        <template #title>
          <div>使用svg图标</div>
        </template>
        <template #content>
          <SvgIcon
            size="20"
            name="vip"
          />
          <SvgIcon
            size="20"
            name="say"
          />
          <SvgIcon
            size="20"
            name="money"
          />
          <SvgIcon
            size="20"
            name="safe"
            color="green"
          />
          <SvgIcon
            size="20"
            name="test"
            color="red"
          />
        </template>
      </BaseCard>
    </div>
    <BaseCard>
      <template #content>
        1
      </template>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from '@/components/BaseCard'
import CouponCard from '@/components/CouponCard'
import SvgIcon from '@/components/SvgIcon.vue'

</script>

<style lang="scss" scoped>
.btn {
  padding: 2px 7px;
  border: 1px solid #b7eb8f;
  border-radius: 2px;
  white-space: nowrap;
  color: #389e0d;
  background-color: #f6ffed;
}

</style>
