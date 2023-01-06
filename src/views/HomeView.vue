<template>
  <el-card>
    <el-row :gutter="64" style="padding: 24px">
      <el-col :span="12">
        <vtStatistic vtTitle="用户数" vtValue="1,949,101"></vtStatistic>
      </el-col>
      <el-col :span="12">
        <vtStatistic vtTitle="客户数" vtValue="201911"></vtStatistic>
      </el-col>
    </el-row>

    <el-row :gutter="64" style="padding: 24px">
      <el-col :span="12">
        <vtStatistic vtTitle="待审核" vtValue="101" vtSuffix="%"></vtStatistic>
      </el-col>
      <el-col :span="12">
        <vtStatistic vtTitle="商品数量" vtValue="2,019" :vtValueStyle="{ color: '#CF1322' }"></vtStatistic>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class HomeView extends Vue {}
</script>
