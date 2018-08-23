<template>
	<div>
		<div class="banner" @click="handleShowGallary">
			<img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_600x330_cd2e3bf7.jpg">
			<div class="banner-info">
				<div class="banner-title">
					广州长隆旅游度假区(AAAAA景区)
				</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe64a;</span>
					16
				</div>
				<div class="banner-jt">
					<span class="iconfont">&#xe624;</span>
				</div>
			</div>
		</div>
		<common-gallary 
		:imgs="imgs" 
		v-show="showGallary"
		@close="handleGallaryClose"></common-gallary>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
	name: 'Detail',
	data () {
		return {
			imgs: ["http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_r_800x800_41637b9b.jpg","http://img1.qunarzz.com/sight/p0/201403/07/452bd2d46925768793ff15a853899211.jpg_r_800x800_351f3cc7.jpg"],
			showGallary: false
		}
	},
	components: {
		CommonGallary
	},
	methods: {
		handleShowGallary () {
			this.showGallary = true
		},
		handleGallaryClose () {
			this.showGallary = false
		}
	}
}
</script>

<style lang="stylus" scoped>
	.banner
	  position: relative
	  overflow: hidden
	  height: 0
	  padding-bottom: 55%
	  .banner-img
	  	width: 100%
	  .banner-info
	  	display: flex
	  	position: absolute
	  	left: 0
	  	right: 0
	  	bottom: 0
	  	line-height: .6rem
	  	background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
	  	.banner-title
	  	  flex: 1
	  	  line-height: .8rem
	  	  margin: 0 .2rem
	  	  font-size: .4rem
	  	  color: #fff
	  	  text-shadow: 0 1px 2px rgba(0,0,0,0.70);
	  	 .banner-number
	  	 	position: absolute
	  	 	left: .2rem
	  	 	right: 0
	  	 	bottom: .8rem
	  	 	padding: 0 .2rem
	  	 	height: .46rem
	  	 	width: .85rem
	  	 	line-height: .46rem
	  	 	border-radius: .2rem
	  	 	font-size: .36rem
	  	 	background: rgba(0, 0, 0, .5)
	  	 	color: #fff
	  	 .banner-jt
	  	 	position: absolute
	  	 	left: .2rem
	  	 	right: 0
	  	 	top: -3.2rem
	  	 	width: .85rem
	  	 	height: .85rem
	  	 	text-align: center
	  	 	line-height: .85rem
	  	 	border-radius: 50%
	  	 	background: rgba(0, 0, 0, .5)
	  	 	color: #fff
	  	 	
</style>