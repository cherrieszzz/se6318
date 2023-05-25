import axios from "axios";

// 创建一个axios实例
const api = axios.create({
  baseURL: "/", // 设置API的基本URL
});

// 添加请求拦截器
api.interceptors.request.use(
  (config) => {
    // 获取并设置Authorization头信息
    const sessionToken = sessionStorage.getItem("Authorization");
    if (sessionToken) {
      config.headers.Authorization = `Bearer ${sessionToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
