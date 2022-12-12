<template>
  <div>登录</div>
  <div>
    <!-- <el-form :model="data" size="small">
      <el-form-item label="用户">
        <el-input v-model="data.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="data.password"></el-input>
      </el-form-item>
    </el-form> -->
    <el-button @click="login" type="primary" size="small">登 录</el-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import router from '@/router';
import LocalStorageHandle, { AccountModel } from '@/core/net/local-storage.handle';
import accountService from '@/core/services/account-service';

@Options({})
export default class LoginView extends Vue {
  mounted() {
    console.log('mounted');
  }

  login() {
    this.setAccountInfo('1', '2');
  }

  setAccountInfo(access_token: string, identityKey: string) {
    const account: AccountModel = new AccountModel();
    account.accessToken = access_token;
    account.identityKey = identityKey;
    LocalStorageHandle.setAccount(account);

    this.postLogin(identityKey);
  }

  async postLogin(identityKey: string): Promise<void> {
    try {
      await accountService.getAccountInfo(identityKey);
      const url = LocalStorageHandle.getRedirectUrl();
      router.push(url);
    } catch (error: any) {
      alert('账号状态错误: ' + (error && error.message) || error || '');
    }
  }
}
</script>
