<template>
  <div class="headerNav">
    <!-- 左箭头 -->
    <div
      class="arrow"
      @click="leftClick"
    >
      <el-icon color="#8c8c8c">
        <ArrowLeftBold />
      </el-icon>
    </div>
    <!-- 内容区域 -->
    <div
      class="navContent"
      ref="navContentRef"
    >
      <div
        class="centerNav"
        ref="centerNavRef"
        :style="{ left: currentLeft + 'px' }"
      >
        <div
          class="navItem"
          :class="item.path === navStore.currentRouterPath ? 'activeItem' : ''"
          v-for="(item, index) in navStore.navList"
          :key="item.name"
          @click="goRouterPath(item)"
          @contextmenu.prevent="mouseRightClick($event, index)"
        >
          {{ item.name }}
          <el-icon
            style="margin-left: 5px;"
            @click.stop="deleteItem(index)"
          >
            <Close />
          </el-icon>
        </div>
      </div>
    </div>
    <!-- 右箭头 -->
    <div
      class="arrow"
      @click="rightClick"
    >
      <el-icon color="#8c8c8c">
        <ArrowRightBold />
      </el-icon>
    </div>
    <!-- 右键点击显示菜单 -->
    <right-mouse-menu
      v-model="showRightMenu"
      :left="menuLeft"
      :top="menuTop"
      :index="currentMenuItemIndex"
    />
  </div>
</template>

<script setup>
import useNavStore from '@/store/nav'
import { ref } from 'vue'
import rightMouseMenu from '@/components/rightMouseMenu'

const goRouterPath = (item) => {
  navStore.goNavItem(item)
}
const navStore = useNavStore()
const deleteItem = (index) => {
  navStore.deleteNavItem(index)
}

// 左边箭头点击
const leftClick = () => {
  if (currentLeft.value < 0) {
    currentLeft.value += 100
    if (currentLeft.value > 0) {
      currentLeft.value = 0
    }
  }
}
// 右边箭头点击
const currentLeft = ref(0)
const navContentRef = ref(null)
const centerNavRef = ref(null)
const rightClick = () => {
  const navWidth = navContentRef.value.clientWidth // 容器固定宽度
  const centerWidth = centerNavRef.value.clientWidth // 全部宽度
  const caleWidth = -(currentLeft.value - navWidth)
  if (caleWidth < centerWidth) {
    currentLeft.value -= 100
    if (-(currentLeft.value - navWidth) > centerWidth) {
      currentLeft.value = -(centerWidth - navWidth)
    }
  }
}
// 右键点击的逻辑
const menuLeft = ref(0)
const menuTop = ref(0)
const currentMenuItemIndex = ref(null)
const showRightMenu = ref(false)
const mouseRightClick = (event, index) => {
  currentMenuItemIndex.value = index
  menuLeft.value = event.clientX
  menuTop.value = event.clientY
  showRightMenu.value = true
}

</script>

<style lang="scss" scoped>
.headerNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 40px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #dfe1e4;
  background-color: #ffffff;
  .arrow {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 6px;
    border: 1px solid #f3f3f3;
    border-radius: 4px;
    background-color: #ffffff;
    cursor: pointer;
  }
  .navContent {
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 0 5px;
    height: 100%;
    flex: 1;
    .centerNav {
      position: relative;
      display: flex;
      align-items: center;
      white-space: nowrap;
      flex: 1;
      .navItem {
        position: relative;
        display: flex;
        align-items: center;
        margin-right: 5px;
        padding: 6px 8px;
        font-size: 14px;
        border: 1px solid #f3f3f3;
        border-radius: 4px;
        color: #666666;
        cursor: pointer;
        transition: all 0.3s;
        .el-icon {
          padding: 2px;
          transition: all 0.3s;
          &:hover {
            border-radius: 50%;
            color: #f56c6c;
            background-color: #eeeeee;
            transform: scale(1.2);
          }
        }
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #409eff;
          transition: all 0.5s;
        }
        &:hover {
          &::after {
            width: 100%;
          }
        }
      }
      .activeItem {
        color: #68b2ff;
        background-color: #ecf5ff;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #409eff;
        }
      }
    }
  }
}
</style>
