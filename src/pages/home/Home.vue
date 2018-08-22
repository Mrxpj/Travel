<template>
	<div>
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
	name: 'Home',
	components: {
	HomeHeader,
	HomeSwiper,
	HomeIcons,
	HomeIcons,
	HomeRecommend,
	HomeWeekend
	},
	data () {
		return {
			lastCity: '',
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList: []
		}
	},
	computed: {
		...mapState(['city'])
	},
	methods: {
		getHomeInfo() {
			axios.get('/api/index.json?city=' + this.city) //当访问到api目录时,会由config目录下index.js里
			  .then(this.getHomeInfoSucc) //的proxyTable转到目录statci/mock，
		},								//static目录下的文件只能被外部访问到
		getHomeInfoSucc (res) {
			res = res.data
			if (res.ret && res.data) {
				const data = res.data
				this.swiperList = data.swiperList
				this.iconList = data.iconList
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
			}
		}
	},
	mounted () {
		this.lastCity = this.city
		this.getHomeInfo()
	},
	activated() {//使用keep-alive新增的生命周期函数
		if(this.lastCity !== this.city) {
			this.lastCity = this.city
			this.getHomeInfo()
		}
	}
}
</script>

<style>

</style>