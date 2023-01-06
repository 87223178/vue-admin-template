<template>
  <el-card class="vt-full-card">
    <template #header>
      <div class="vt-card-header">
        <div>
          <span>颜色 DemoColor</span>
          <span class="describe">并没有全部列出，仅展示颜色递进示例。</span>
        </div>
      </div>
    </template>

    <h2 style="color: var(--el-color-primary)">primary 主题色已被修改</h2>

    <div class="demo-color">
      <div class="color-row">
        <div style="background-color: var(--el-color-white); color: var(--el-color-black)">
          <span>--el-color-white</span>
        </div>
        <div style="background-color: var(--el-color-black); color: var(--el-color-white)">
          <span>--el-color-white</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-color-black)">
          <span>--el-color-black</span>
        </div>
        <div style="color: var(--el-color-black)">
          <span>--el-color-black</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-text-color-primary)">
          <span>--el-text-color-primary #303133</span>
        </div>
        <div style="color: var(--el-text-color-primary)">
          <span>--el-text-color-primary #303133</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-text-color-regular)">
          <span>--el-text-color-regular #606266</span>
        </div>
        <div style="color: var(--el-text-color-regular)">
          <span>--el-text-color-regular #606266</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-text-color-secondary)">
          <span>--el-text-color-secondary #909399</span>
        </div>
        <div style="color: var(--el-text-color-secondary)">
          <span>--el-text-color-secondary #909399</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-text-color-placeholder)">
          <span>--el-text-color-placeholder #a8abb2</span>
        </div>
        <div style="color: var(--el-text-color-placeholder)">
          <span>--el-text-color-placeholder #a8abb2</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-color-primary)">
          <span>--el-color-primary #409eff</span>
        </div>
        <div style="color: var(--el-color-primary)">
          <span>--el-color-primary #409eff</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-color-primary-light-3)">
          <span>--el-color-primary-light-3 #79bbff</span>
        </div>
        <div style="color: var(--el-color-primary-light-3)">
          <span>--el-color-primary-light-3 #79bbff</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-color-primary-light-5)">
          <span>--el-color-primary-light-5 #a0cfff</span>
        </div>
        <div style="color: var(--el-color-primary-light-5)">
          <span>--el-color-primary-light-5 #a0cfff</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-color-primary-light-7); color: var(--el-color-black)">
          <span>--el-color-primary-light-7 #c6e2ff</span>
        </div>
        <div style="color: var(--el-color-primary-light-7)">
          <span>--el-color-primary-light-7 #c6e2ff</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-color-primary-light-8); color: var(--el-color-black)">
          <span>--el-color-primary-light-8 #d9ecff</span>
        </div>
        <div style="color: var(--el-color-primary-light-8)">
          <span>--el-color-primary-light-8 #d9ecff</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-color-primary-light-9); color: var(--el-color-black)">
          <span>--el-color-primary-light-9 #ecf5ff</span>
        </div>
        <div style="color: var(--el-color-primary-light-9)">
          <span>--el-color-primary-light-9 #ecf5ff</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-color-primary-dark-2)">
          <span>--el-color-primary-dark-2 #337ecc</span>
        </div>
        <div style="color: var(--el-color-primary-dark-2)">
          <span>--el-color-primary-dark-2 #337ecc</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-color-success)">
          <span>--el-color-success #67c23a</span>
        </div>
        <div style="color: var(--el-color-success)">
          <span>--el-color-success #67c23a</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-color-success-light-3)">
          <span>--el-color-success-light-3 #95d475</span>
        </div>
        <div style="color: var(--el-color-success-light-3)">
          <span>--el-color-success-light-3 #95d475</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-color-success-light-5)">
          <span>--el-color-success-light-5 #b3e19d</span>
        </div>
        <div style="color: var(--el-color-success-light-5)">
          <span>--el-color-success-light-5 #b3e19d</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-color-success-light-7); color: var(--el-color-black)">
          <span>--el-color-success-light-7 #d1edc4</span>
        </div>
        <div style="color: var(--el-color-success-light-7)">
          <span>--el-color-success-light-7 #d1edc4</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-color-success-light-8); color: var(--el-color-black)">
          <span>--el-color-success-light-8 #e1f3d8</span>
        </div>
        <div style="color: var(--el-color-success-light-8)">
          <span>--el-color-success-light-8 #e1f3d8</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-color-success-light-9); color: var(--el-color-black)">
          <span>--el-color-success-light-9 #f0f9eb</span>
        </div>
        <div style="color: var(--el-color-success-light-9)">
          <span>--el-color-success-light-9 #f0f9eb</span>
        </div>
      </div>

      <div class="color-row">
        <div style="background-color: var(--el-color-success-dark-2)">
          <span>--el-color-success-dark-2 #529b2e</span>
        </div>
        <div style="color: var(--el-color-success-dark-2)">
          <span>--el-color-success-dark-2 #529b2e</span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class DemoColorView extends Vue {}
</script>

<style lang="scss" scoped>
.demo-color {
  background-color: gray;
}

.color-row {
  display: flex;
  color: var(--el-color-white);
  background-color: var(--el-color-white);

  div {
    padding: 4px;
    flex: 1;
  }
}
</style>
