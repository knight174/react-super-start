import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLoadingStore } from '../stores/useLoadingStore';

// 创建一个 axios 实例
export const ajax = axios.create({
  // 设置 baseURL
  baseURL: isDev ? 'http://localhost:3000' : 'http://localhost:3000',
  // 设置请求头
  headers: {
    'Content-Type': 'application/json',
  },
  // 设置超时时间
  timeout: 10000,
});

// 添加请求拦截器，在请求发送前添加 token 到请求头中
ajax.interceptors.request.use((config) => {
  const jwt = localStorage.getItem('jwt') || '';
  config.headers = config.headers || {};
  if (jwt) {
    config.headers.Authorization = `Bearer ${jwt}`;
  }
  return config;
});

// 定义 useAjax hook
type Options = {
  showLoading?: boolean; // 用于设置是否需要 loading
  handleError?: boolean; // 用于设置错误处理回调
};
export const useAjax = (options?: Options) => {
  // 定义错误处理函数
  const table: Record<string, undefined | (() => void)> = {
    401: () => {
      nav('/sign_in');
    },
    402: () => {
      window.alert('请付费后观看');
    },
    403: () => {
      window.alert('没有权限');
    },
  };
  // 获取 showLoading 和 handleError 参数
  const showLoading = options?.showLoading || false;
  const handleError = options?.handleError ?? true;
  // 获取 useLoadingStore 中的 setVisible 方法和 useNavigate 方法
  const { setVisible } = useLoadingStore();
  const nav = useNavigate();
  // 定义错误处理函数
  const onError = (error: AxiosError) => {
    if (error.response) {
      if (handleError) {
        const { status } = error.response;
        const fn = table[status];
        fn?.();
      }
    }
    throw error;
  };
  // 返回 get、post、patch 和 destroy 四个方法
  return {
    // 定义 get 方法
    get: <T,>(path: string, config?: AxiosRequestConfig<unknown>) => {
      if (showLoading) {
        setVisible(true);
      }
      return ajax
        .get<T>(path, config)
        .catch(onError)
        .finally(() => {
          if (showLoading) {
            setVisible(false);
          }
        });
    },
    // 定义 post 方法
    post: <T,>(path: string, data: JSONValue) => {
      if (showLoading) {
        setVisible(true);
      }
      return ajax
        .post<T>(path, data)
        .catch(onError)
        .finally(() => {
          if (showLoading) {
            setVisible(false);
          }
        });
    },
    // 定义 patch 方法
    patch: <T,>(path: string, data: JSONValue) => {
      if (showLoading) {
        setVisible(true);
      }
      return ajax
        .patch<T>(path, data)
        .catch(onError)
        .finally(() => {
          if (showLoading) {
            setVisible(false);
          }
        });
    },
    // 定义 destroy 方法
    destroy: <T,>(path: string) => {
      if (showLoading) {
        setVisible(true);
      }
      return ajax
        .delete<T>(path)
        .catch(onError)
        .finally(() => {
          if (showLoading) {
            setVisible(false);
          }
        });
    },
  };
};
