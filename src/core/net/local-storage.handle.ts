const app = 'vue-admin-template';
const accountKey = app + '-account-token';
const accountUserKey = app + '-account-user';
const redirectUrlKey = app + '-redirect-url';
const login401Key = app + '-login-401';
let accountModel: AccountModel;

export class AccountModel {
  accessToken: string;
  identityKey: string;
  refreshToken?: string;
  expiresIn?: number;

  loginTime?: Date;
}

export class AccountUserModel {
  Id: string;
  name: string;
  phone: string;
}

const setAccount = (model?: AccountModel) => {
  if (!model) {
    localStorage.removeItem(accountKey);
    accountModel = undefined;
    return;
  }
  accountModel = model;

  model.loginTime = new Date();
  localStorage.setItem(accountKey, JSON.stringify(model));
  localStorage.removeItem(login401Key);
};

const getAccount = (): AccountModel => {
  if (accountModel) {
    return accountModel;
  }
  const json = localStorage.getItem(accountKey);
  accountModel = json === null ? undefined : JSON.parse(json);
  return accountModel;
};

const setAccountUser = (model: AccountUserModel) => {
  if (!model) {
    localStorage.removeItem(accountUserKey);
    return;
  }
  localStorage.setItem(accountUserKey, JSON.stringify(model));
};

const getAccountUser = (): AccountUserModel => {
  const json = localStorage.getItem(accountUserKey);
  return json === null ? undefined : Object.assign(new AccountUserModel(), JSON.parse(json));
};

const setRedirectUrl = (url?: string): void => {
  if (!url) {
    sessionStorage.removeItem(redirectUrlKey);
    return;
  }
  sessionStorage.setItem(redirectUrlKey, url);
};

const getRedirectUrl = (): string => {
  const json = sessionStorage.getItem(redirectUrlKey);
  return json === null ? '/' : json;
};

const LocalStorageHandle = {
  setAccount,
  getAccount,
  setAccountUser,
  getAccountUser,
  setRedirectUrl,
  getRedirectUrl
};

export default LocalStorageHandle;
