export default {
	changeCity (state, city) {
		state.city = city
		//添加localStorage保存城市信息
		localStorage.city = city
		try {
			localStorage.city = city
		} catch(e) {}
	}
}