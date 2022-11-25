import { http } from '../net/request-base';
import LocalStorageHandle, { AccountUserModel } from '../net/local-storage.handle';

// const baseUrl = '/api/';

class AccountService {
  getAccountInfo(identityKey: string) {
    // const url = baseUrl + 'account/' + identityKey;

    return new Promise<AccountUserModel>(resolve => {
      const accountUser: AccountUserModel = { Id: identityKey, name: '测试', phone: '1311111111' };
      LocalStorageHandle.setAccountUser(accountUser);
      resolve(accountUser);
    });
  }

  getMenu() {
    return http.get<Array<Menu>>('/json/menu.json');
  }
}

export default new AccountService();

export interface InfoInput {
  experienceMonth: number;
  bankName: string;
  bankOpenName: string;
  bankAccount: string;
}

export class Menu {
  name: string;
  permission: string;
  href: string;
  icon: string;
  badge: string;
  isBadgeSuccess: boolean;
  isSeparator: boolean;
  children: Array<Menu>;
  isOpen: boolean;
  isBackMenu: boolean;

  constructor(name: string, permission: string, href: string, icon: string, isBackMenu = false) {
    this.name = name;
    this.permission = permission;
    this.href = href;
    this.icon = icon;
    this.children = new Array<Menu>();
    this.isOpen = false;
    this.isBackMenu = isBackMenu;
  }

  setBadge(badge: string, isBadgeSuccess: boolean) {
    this.badge = badge;
    this.isBadgeSuccess = isBadgeSuccess;
    return this;
  }

  setSeparator() {
    this.isSeparator = true;
    return this;
  }
}
