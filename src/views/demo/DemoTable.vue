<template>
  <el-card class="vt-full-card">
    <template #header>
      <div class="vt-card-header">
        <div>
          <span>普通表格示例</span>
        </div>
        <div>
          <el-button class="button" text>Operation button</el-button>
          <el-button class="button">Operation button</el-button>
        </div>
      </div>
    </template>

    <div v-for="o in 100" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class DemoTableView extends Vue {}
</script>
