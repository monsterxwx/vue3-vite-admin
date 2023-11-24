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
      <BaseCard v-waves>
        <template #title>
          <div>访问数</div>
        </template>
        <template #content>
          111
        </template>
      </BaseCard>
      <BaseCard>
        <template #title>
          <div>使用svg图标</div>
        </template>
        <template #content>
          <div class="flex gap-10px items-center">
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
            <SvgIcon
              icon="solar:accumulator-bold"
            />
          </div>
        </template>
      </BaseCard>
    </div>
    <BaseCard>
      <template #title>
        弹窗
      </template>
      <template #content>
        <el-button
          @click="openDialog"
          plain
          size="small"
        >
          打开弹窗
        </el-button>
      </template>
    </BaseCard>

    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
    >
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button
            type="primary"
            @click="dialogVisible = false"
          >
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import BaseCard from '@/components/BaseCard'
import CouponCard from '@/components/CouponCard'
import SvgIcon from '@/components/SvgIcon.vue'
import { ref } from 'vue'

const dialogVisible = ref(false)

const openDialog = () => {
  dialogVisible.value = true
}

</script>

<style lang="scss" scoped>

</style>
