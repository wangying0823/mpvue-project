import Vue from 'vue';
import Vuex from 'vuex';
import songList from './modules/songList';
Vue.use(Vuex);
const store = new Vuex.Store({
	modules: {
		songList: {
			namespaced: true,
			...songList
		}
	}
})
export default store;