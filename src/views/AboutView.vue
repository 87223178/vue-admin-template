<template>
  <div class="about">
    <h1>This is an about page</h1>

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

    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <el-row>
      <el-button icon="Search" circle />
      <el-button type="primary" icon="Edit" circle />
      <el-button type="success" icon="Check" circle />
      <el-button type="info" icon="Message" circle />
      <el-button type="warning" icon="Star" circle />
      <el-button type="warning" :icon="'Star'" circle />
      <el-button type="warning" icon="Menu" circle />
      <el-button type="danger" icon="Delete" circle />
      <el-icon><document /></el-icon>
    </el-row>

    <section>
      <h1>WWF</h1>
      <p>The World Wide Fund for Nature (WWF) is....</p>
    </section>

    <el-date-picker type="date" placeholder="Pick a day" />

    <el-button :plain="true" @click="open">Show message</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
  </div>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import type { Action } from 'element-plus';

const showMessage = () => {
  console.log('hello word!');
  ElMessage('你好');
};

const open = () => {
  ElMessage('this is a message.');

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

const openVn = () => {
  ElMessage({
    message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'VNode')])
  });
};
</script>
