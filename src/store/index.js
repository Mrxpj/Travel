import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		city: '北京'
	},
	//actions调用mutations要执行commit方法
	actions: {
		//ctx指上下文
		changeCity (ctx, city) {
		//借助ctx拿到vuex里的commit方法
			ctx.commit('changeCity', city)
		}
	},
	mutations: {
		changeCity (state, city) {
			state.city = city
		}
	}
})