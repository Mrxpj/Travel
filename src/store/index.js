import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
//上面导入的三个js文件分别对应vuex里的state(公共数据存放)，
//mutations(同步的数据改变)，actions(异步方法)
//打包三个文件的目的是为了以后更好的优化及维护

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	actions,
	mutations
})