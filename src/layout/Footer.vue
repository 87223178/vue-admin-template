<template>
  <div class="vt-layout-footer">信息科技有限公司 | ©Copyright©2019-2021 版权所有</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.vt-layout-footer {
  box-shadow: 0 -1px 15px 1px rgba(0, 0, 0, 0.1);
  position: sticky;
  background-color: white;
  text-align: center;
  line-height: 24px;
  height: 32px;
  padding: 4px;
  font-size: 14px;
}
</style>
