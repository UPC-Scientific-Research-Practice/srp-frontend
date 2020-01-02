import axios from 'axios';

const baseUrl = "http://localhost:3000"

let ajax = axios.create({
    baseURL: baseUrl,
    headers: {
      'content-type': 'application/json'
    }
});

ajax.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么，例如加入token
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

ajax.interceptors.response.use(function (response) {
    // 在接收响应做些什么，例如跳转到登录页
    return response;
    }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// const ajax = (url, method, params) => {
//   if(method.toLowerCase() === "get"){
//     console.log("excute key method");
//      async function get(url, params){
//       let res = await axios({
//         method: method,
//         url: BASE + url,
//         data: params,
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//       });
//       res = res.data;
//       console.log("res" + res);
//       return new Promise((resolve)=>{ 
//         resolve(res); //返回值
//       });
//     }
//   }
// };

export default ajax;