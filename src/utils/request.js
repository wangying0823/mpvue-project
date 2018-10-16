import wx from 'wx';
import Fly from 'flyio';
let request = new Fly();
request.config.timeout = 10 * 1000; // 超时时间
request.config.baseURL = 'http://localhost:3000';
request.interceptors.request.use((request) => { //请求拦截
	wx.showLoading({title: '拼命加载中...'});
	return request;
})
request.interceptors.response.use((response, promise) => {
	wx.hideLoading(); //隐藏loading
	return promise.resolve(response.data.banners||response.data.result || response.data.playlists || response.data.comments || response.data);
},(error, promise) => {
	wx.hideLoading()
  wx.showToast({
    title: error.message,
    icon: 'none'
  })
  return promise.reject()
})
export default request;
