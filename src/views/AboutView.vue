<template>
  <div class="about">
    <h1>This is an about page</h1>

    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <el-row>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="warning" icon="Star" circle />
      <el-button type="warning" :icon="'Star'" circle />
      <el-button type="warning" icon="Menu" circle />
      <el-button type="danger" :icon="Delete" circle />
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
import { ElMessage } from 'element-plus';
import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue';

const open = () => {
  ElMessage('this is a message.');
};

const openVn = () => {
  ElMessage({
    message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'VNode')])
  });
};
</script>
