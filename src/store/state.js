
let defaultCity = '广州'
//防止用户关闭localStorage等类似情况浏览器抛出异常
try {
	if (localStorage.city){
		defaultCity = localStorage.city
	}
} catch(e) {}

export default {
		city: defaultCity
}