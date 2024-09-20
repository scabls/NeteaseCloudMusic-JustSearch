// 导入axios
import axios from 'axios'

// 创建自定义配置的axios实例
const instance = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 5000,
})

// 设置响应拦截器
instance.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)

// 默认导出实例
export default instance
