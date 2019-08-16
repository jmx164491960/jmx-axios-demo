import axios from 'jmx-axios';

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('res:', response);
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});