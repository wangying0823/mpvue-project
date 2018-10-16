import { getRequest } from '@/utils/api'
import { ADD_PLAY_ITEM,CHANG_SONG_LIST, CHANGE_CURR_MUSIC } from '@/store/mutations-type';
import { setStorage } from '@/utils/wechat';

const state = {
	playList: [],
  currMusic: { // 当前音乐
    url: null, // 文件地址
    picUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MzU5NTQ5NTE5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxNTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDEwMjRjLTE0LjMzNiAwLTI1LjYtMTEuMjY0LTI1LjYtMjUuNnYtOTcyLjhjMC0xNC4zMzYgMTEuMjY0LTI1LjYgMjUuNi0yNS42czI1LjYgMTEuMjY0IDI1LjYgMjUuNnY5NzIuOGMwIDE0LjMzNi0xMS4yNjQgMjUuNi0yNS42IDI1LjZ6TTI2OC44IDc4MC44Yy0xNC4zMzYgMC0yNS42LTExLjI2NC0yNS42LTI1LjZ2LTQ4Ni40YzAtMTQuMzM2IDExLjI2NC0yNS42IDI1LjYtMjUuNnMyNS42IDExLjI2NCAyNS42IDI1LjZ2NDg2LjRjMCAxNC4zMzYtMTEuMjY0IDI1LjYtMjUuNiAyNS42ek0yNS42IDY1OS45NjhjLTE0LjMzNiAwLTI1LjYtMTEuMjY0LTI1LjYtMjUuNnYtMjQxLjE1MmMwLTE0LjMzNiAxMS4yNjQtMjUuNiAyNS42LTI1LjZzMjUuNiAxMS4yNjQgMjUuNiAyNS42djI0MS4xNTJjMCAxNC4zMzYtMTEuMjY0IDI1LjYtMjUuNiAyNS42ek03NTUuMiA3ODAuOGMtMTQuMzM2IDAtMjUuNi0xMS4yNjQtMjUuNi0yNS42di00ODYuNGMwLTE0LjMzNiAxMS4yNjQtMjUuNiAyNS42LTI1LjZzMjUuNiAxMS4yNjQgMjUuNiAyNS42djQ4Ni40YzAgMTQuMzM2LTExLjI2NCAyNS42LTI1LjYgMjUuNnpNOTk4LjQgNjU5Ljk2OGMtMTQuMzM2IDAtMjUuNi0xMS4yNjQtMjUuNi0yNS42di0yNDEuMTUyYzAtMTQuMzM2IDExLjI2NC0yNS42IDI1LjYtMjUuNnMyNS42IDExLjI2NCAyNS42IDI1LjZ2MjQxLjE1MmMwIDE0LjMzNi0xMS4yNjQgMjUuNi0yNS42IDI1LjZ6IiBwLWlkPSIyMTUzIiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+',
    title: null,
    singer: null,
    isPlay: true, // 是否播放
    commit: []
  },
};
const mutations = {
	[ADD_PLAY_ITEM](state,params){
		// 添加
    state.playList.unshift(params.item);
    let pl = JSON.stringify(state.playList);
    setStorage('playList',pl);
	},
  [CHANG_SONG_LIST](state,params){
    state.playList = params.list;
    setStorage('playList', params.list);
  },
  [CHANGE_CURR_MUSIC](state,params){
    //改变当前音乐
    const music = {
      title: params.title || state.title,
      picUrl: params.picUrl || state.picUrl,
      url: params.url || state.url,
      singer: params.singer || state.singer,
      isPlay: params.isPlay || true,
      commit: params.comment || state.comment,
    };
    // 储存当前音乐
    setStorage('currMusic',JSON.stringify(music))
    // 是否播放
    const isPlay = params.isPlay === false ? false : params.isPlay || state.isPlay;
    music.isPlay = isPlay;
    state.currMusic = music;
  }
}
const actions = {
	async addPlayItem({state,commit,dispatch}, item){
		const pl = state.playList;
    const currIndex = pl.map(i => i.id).indexOf(item.id);
    const sid = item.mainTrackId || item.id;
    if (currIndex === -1) {
      commit(ADD_PLAY_ITEM,{item});
      dispatch(asyncChangeCurrMusic(sid, true));
    } else {
      dispatch(asyncChangeCurrMusic(sid, true));
    }
	},
  async asyncChangeCurrMusic({state, commit}, {id, isPlay}){
    var musicUrl = "/music/url?id=" + id;
    var musicDetails = "/song/detail?ids=" + id;
    var musicComment ="/comment/music?id=" + id + "&limit=100";
    let musicUrlData = await getRequest(musicUrl,{});
    let musicDetailsData = await getRequest(musicDetails, {});
    let comment = await getRequest(musicComment, {});
    let musicDetailsTitle = musicDetailsData.songs[0].al.name;
    let musicDetailsImg = musicDetailsData.songs[0].al.picUrl;
    let musicDetailsName = musicDetailsData.songs[0].ar;
    commit(CHANGE_CURR_MUSIC, {url: musicUrlData.data[0].url, title: musicDetailsTitle, picUrl: musicDetailsImg, singer: musicDetailsName, comment: comment})
  }
}
export default {
	state,
	mutations,
	actions
}