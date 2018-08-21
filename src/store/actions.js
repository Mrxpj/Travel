//actions调用mutations要执行commit方法
export default {
	//ctx指上下文
	changeCity (ctx, city) {
	//借助ctx拿到vuex里的commit方法
		ctx.commit('changeCity', city)
	}
}