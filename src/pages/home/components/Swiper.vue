<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide v-for="item of swiperList" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl" alt=""/>
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
	   </swiper>
   </div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	data: function(){
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true
			},
			swiperList: [{
				id: '0001',
				imgUrl: 'http://img.zcool.cn/community/0128395843a9c9a8012060c80171a9.jpg'
			}, {
				id: '0002',
				imgUrl: 'http://pic.qiantucdn.com/58pic/19/62/85/82458PICSYB_1024.jpg'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
  	background: #fff !important
  .wrapper
  	overflow: hidden
  	width: 100%
  	height: 0
  	padding-bottom: 40.5%
  	background: #eee
	.swiper-img
	  width: 100%
	  height: 136px
</style>