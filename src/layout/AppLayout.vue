<template>
  <router-view v-if="fullScreenMode" />
  <div class="f-layout" v-else>
    <Siderbar />

    <div class="f-layout-body">
      <div class="f-header">
        <app-header />
      </div>

      <div class="f-layout-content">
        <router-view />
      </div>

      <app-footer />
    </div>
  </div>
</template>

<script lang="ts">
import AppFooter from './Footer.vue';
import AppHeader from './Header.vue';
import Siderbar from './Siderbar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    AppFooter,
    AppHeader,
    Siderbar
  },
  setup() {
    // const fullScreenMode = ref(true);
    // console.log(fullScreenMode);
    // const router = useRouter();
    // console.log(router);
    // watch(router.currentRoute, () => {
    //   fullScreenMode.value = Boolean(router.currentRoute.value.meta?.fullScreen);
    // });

    const fullScreenMode = false;
    return {
      fullScreenMode
    };
  }
});
</script>

<style lang="scss" scoped>
.f-layout {
  display: flex;

  .f-layout-body {
    flex: 1;
    height: 100vh;
    overflow-y: hidden;
  }
  .f-header {
    box-shadow: 0 1px 15px 1px rgba(0, 0, 0, 0.1);
    position: sticky;
    z-index: 99;
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
  .f-layout-content {
    height: calc(100vh - 72px);
    overflow-x: hidden;
    overflow-y: scroll;
    flex: 1;
    background: var(--el-bg-color-page);
    box-sizing: border-box;
    padding: 2px;
  }
}
</style>
