<template>
  <div class="vt-statistic">
    <div class="vt-statistic-title">{{ vtTitle }}</div>
    <div class="vt-statistic-content" :style="vtValueStyle">
      <span :v-if="vtPrefix">{{ vtPrefix }}</span>
      {{ vtValue }}
      <span :v-if="vtSuffix">{{ vtSuffix }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    vtTitle: String,
    vtValue: String,
    vtValueStyle: Object,
    vtPrefix: String,
    vtSuffix: String
  }
})
export default class vtStatistic extends Vue {
  vtTitle: string;
  vtValue: string;
  vtValueStyle: any;
  vtPrefix: string;
  vtSuffix: string;
}
</script>

<style scoped lang="scss">
.vt-statistic-title {
  margin-bottom: 4px;
  color: var(--el-text-color-placeholder);
  font-size: 14px;
}

.vt-statistic-content {
  font-size: 24px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol, 'Noto Color Emoji';
}
</style>
