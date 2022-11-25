<template>
  <el-card class="f-full-card">
    <template #header>
      <div class="f-card-header">
        <div>
          <span>分页列表Demo</span>
        </div>
        <div>
          <el-button type="primary" icon="Plus">增加</el-button>
          <el-button type="danger" icon="DeleteFilled">删除</el-button>
          <el-button type="success" icon="Finished">保存</el-button>
          <el-button type="info" icon="Operation">设置</el-button>
          <el-button type="info" icon="Printer">打印</el-button>
          <el-button type="warning" icon="Edit">批量修改</el-button>
          <el-button icon="Refresh">刷新页面</el-button>
        </div>
      </div>
    </template>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </el-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class DemoListPageView extends Vue {
  tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }
  ];
}
</script>
