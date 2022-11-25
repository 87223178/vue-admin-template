import { Router } from 'vue-router';

import LocalStorageHandle from '../core/net/local-storage.handle';

const routingGuardInit = (router: Router) => {
  router.beforeEach((to, from, next) => {
    // to 将要访问的路径
    // from 从哪个路径跳转而来
    // next 是一个函数，表示放行， next()直接放行，next(路径) 强制跳转路径

    const account = LocalStorageHandle.getAccount();
    if (!account) {
      // 然后导航到登录页面
      if (to.name !== 'login') {
        // 存储要访问的 URL 到本地
        LocalStorageHandle.setRedirectUrl(to.fullPath);
        next({ name: 'login' });
      }
      next();
      //   return false;
    }

    // if (to.path === '/login') return next();
    // const tokenStr = getItem(TOKEN);
    // if (!tokenStr) return next('/login');
    next();
  });
};

export default routingGuardInit;
