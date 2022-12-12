<template>
  <div class="home">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>

      <el-date-picker type="date" placeholder="Pick a day" />

      <el-button type="primary" @click="showMessage">showMessage</el-button>

      <el-button text @click="open">Click to open the Message Box</el-button>
    </el-card>

    <img alt="Vue logo" src="../assets/logo.png" />

    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

import { ElMessage, ElMessageBox } from 'element-plus';
import type { Action } from 'element-plus';

@Options({
  components: {
    HelloWorld
  }
})
export default class HomeView extends Vue {
  showMessage() {
    console.log('hello word!');
    ElMessage('你好');
  }

  open = () => {
    ElMessageBox.alert('This is a message', 'Title', {
      // if you want to disable its autofocus
      // autofocus: false,
      confirmButtonText: 'OK',
      callback: (action: Action) => {
        ElMessage({
          type: 'info',
          message: `action: ${action}`
        });
      }
    });
  };
}
</script>
