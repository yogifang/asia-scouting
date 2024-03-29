import _axios from 'axios';

const axios = (baseURL) => {
  //建立一個自定義的axios
  const instance = _axios.create({
    //baseURL: baseURL || 'http://localhost:3001', //JSON-Server端口位置
    baseURL: baseURL || 'http://114.32.4.106:3001', //JSON-Server端口位置
    timeout: 1000,
  });

  return instance;
};

export { axios };
export default axios();
