import axios from 'axios';
import {
  MessageBox
} from 'element-ui';
// axios.defaults.timeout = 10

// 添加响应拦截器
axios.interceptors.request.use(function (config) {
  // 对响应数据做点什么
  console.log('req:', config);
  return config;
}, function (error) {
  console.log('error:', error)
  // 对响应错误做点什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('res:', response);
  return response;
}, function (error) {
  const config = error.config;
  if (config) {
    return new Promise((resolve, reject) => {
      MessageBox.confirm('请求超时，是否重试', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return axios(config).then((res) => {
          resolve(res);
        })
      }).catch(() => {
        reject(error);
      })
    })
  }
  console.log('error:', error, error.config)
  // 对响应错误做点什么
  return Promise.reject(error);
});