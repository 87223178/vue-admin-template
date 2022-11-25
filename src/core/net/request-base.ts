import axios from 'axios';

class httpRequest {
  get(url: string): Promise<any>;
  get(url: string, params: any): Promise<any>;
  get(url: string, params: any, headers: any): Promise<any>;
  get<T>(url: string): Promise<T>;
  get<T>(url: string, params: any): Promise<T>;
  get<T>(url: string, params: any, headers: any): Promise<T>;

  get<T>(url: string, params: any = {}, headers: any = {}): Promise<T> {
    return axios.get(url, { params, headers });
  }

  post(url: string): Promise<any>;
  post(url: string, body: any): Promise<any>;
  post(url: string, body: any, headers: any): Promise<any>;
  post<T>(url: string): Promise<T>;
  post<T>(url: string, body: any): Promise<T>;
  post<T>(url: string, body: any, headers: any): Promise<T>;

  post<T>(url: string, body: any = {}, headers: any = {}): Promise<T> {
    return axios.post<T>(url, { method: `post`, data: body, headers }).then((x: any) => {
      return 'result' in x ? x.result : x;
    });
  }

  // put(url: string): Promise<any>;
  put(url: string, params: any): Promise<any>;
  put(url: string, params: any, headers: any): Promise<any>;
  // put<T>(url: string): Promise<T>;
  put<T>(url: string, params: any): Promise<T>;

  put<T>(url: string, body: any = {}, headers: any = {}): Promise<T> {
    return axios.put<T>(url, { method: `put`, data: body, headers }).then((x: any) => {
      if (x) {
        return 'result' in x ? x.result : x;
      } else {
        return x;
      }
    });
  }

  delete(url: string): Promise<any>;
  delete(url: string, params: any): Promise<any>;
  delete<T>(url: string): Promise<T>;
  delete<T>(url: string, params: any): Promise<T>;

  delete<T>(url: string, body: any = {}): Promise<T> {
    return axios.delete<T>(url, { method: `delete`, data: body }).then((x: any) => {
      return 'result' in x ? x.result : x;
    });
  }

  head(url: string) {
    return axios.head(url, { method: `head` });
  }
}

const http = new httpRequest();

export { http };
