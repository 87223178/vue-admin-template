<template>
  <div>
    <div class="f-layout-sider-placeholder" :class="{ collapsed: isCollapse }"></div>
    <div class="f-layout-sider">
      <div class="sider-logo">
        <div>
          <a>
            <img alt="Vue logo" src="../assets/logo.png" />
          </a>
        </div>
        <div class="f-trigger">
          <el-button link type="primary" @click="isCollapse = !isCollapse">
            <el-icon size="24" v-if="isCollapse"><Expand /></el-icon>
            <el-icon size="24" v-if="!isCollapse"><Fold /></el-icon>
          </el-button>
        </div>
      </div>

      <div class="f-layout-sider-content">
        <el-menu class="f-menu-vertical" :collapse="isCollapse" default-active="0" :router="true">
          <template v-for="(item, index) in menu" :key="index">
            <template v-if="item.children && item.children.length > 0">
              <el-sub-menu v-bind="{ index: index.toString() }">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>{{ item.name }}</span>
                </template>

                <template v-for="(item1, index1) in item.children" :key="index1">
                  <el-menu-item v-bind="{ index: index.toString() + '-' + index1.toString() }" :route="item1.href">
                    <span>{{ item1.name }}</span>
                  </el-menu-item>
                </template>
              </el-sub-menu>
            </template>

            <template v-else>
              <el-menu-item v-bind="{ index: index.toString() }" :route="item.href">
                <el-icon><HomeFilled /></el-icon>
                <span>{{ item.name }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import accountService, { Menu } from '@/core/services/account-service';

@Options({})
export default class Siderbar extends Vue {
  isCollapse = false;
  menu: Array<Menu> = [];

  mounted() {
    accountService.getMenu().then(x => (this.menu = x));
  }
}
</script>

<style lang="scss" scoped>
.f-layout-sider-placeholder {
  width: 245px;

  &.collapsed {
    width: 64px;
  }
}

.f-layout-sider {
  background: var(--custom-bg-dark);
  position: fixed;
  height: 100vh;
  z-index: 98;
  left: 0;
  top: 0;

  .sider-logo {
    border-bottom: 1px solid var(--el-border-color);
    background: var(--custom-bg-dark);
    width: calc(100% - 5px);
    position: absolute;
    text-align: center;
    padding: 8px 16px;
    z-index: 99;

    img {
      margin: auto;
      height: 40px;
    }
    .f-trigger {
      text-align: right;
      padding-right: 16px;
      margin-bottom: 16px;
    }
  }

  .f-layout-sider-content {
    padding: 108px 0 24px;
    overflow-y: scroll;
    height: 100vh;
  }
  .f-layout-sider-content::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 4px;
    height: 1px;
  }
  .f-layout-sider-content::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 2px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background-color: var(--el-color-primary);
  }
  .f-layout-sider-content::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    border-radius: 2px;
    background-color: white;
  }

  .f-menu-vertical:not(.el-menu--collapse) {
    width: 240px;
  }
}
</style>
