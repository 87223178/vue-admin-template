import { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosStatic } from 'axios';
import router from '@/router';
import LocalStorageHandle from '../net/local-storage.handle';

const setToken = (request: AxiosRequestConfig) => {
  const accountModel = LocalStorageHandle.getAccount();
  const headers = request.headers;
  if (headers) {
    headers.Authorization = `Bearer ${accountModel.accessToken}`;
  }
};

const axiosInit = (axios: AxiosStatic) => {
  axios.interceptors.request.use(async (request: AxiosRequestConfig) => {
    let url: string = request.url as string;
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      if (url.indexOf('.json') === -1) {
        url = process.env.VUE_APP_SERVER_URL + url;
      }
    }
    request.url = url;
    setToken(request);

    return request;
  });

  axios.interceptors.response.use(
    async (response: AxiosResponse) => {
      if (response.status === 200) {
        const body = response.data as { success: boolean; result: any };

        if (Object.prototype.hasOwnProperty.call(response.data, 'success')) {
          if (body.success) {
            response.data = body.result;
            return Promise.resolve(response.data);
          } else {
            return Promise.reject(new Error('异常'));
          }
        }

        return Promise.resolve(response.data);
      } else {
        return Promise.reject(new Error('异常'));
      }
    },
    (error: AxiosError) => {
      if (error?.response?.status === 401) {
        router.push('/login');
        return Promise.reject(new Error('401'));
      }
      return Promise.reject(new Error('未知异常'));
    }
  );
};

export default axiosInit;
