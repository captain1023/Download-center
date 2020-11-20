import axios from "axios";


const BASEURL = "http://10.38.163.158:8081";


//axios interceptor
axios.interceptors.request.use(
  function (config) {
    //do something before request is sent
    config.baseURL = BASEURL;
    return config;
  },
  function (error) {
    //do something with request error
    return Promise.reject(error);
  }
);

//response interceptor
axios.interceptors.response.use(
  function (response) {
    //Any status code that lie WITHIN the range of 2xx cause this function to trigger
    return response;
  },
  function (error) {
    console.log(error);
    //Any status code that falls OUTSIDE the range of 2xx cause this function to trigger
    const { status } = error.response;
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
