import request from './request';
// 获取banner/今日歌单/今日单曲/电台
export function getRequest(url, params){
	return request.get(url, params);
}