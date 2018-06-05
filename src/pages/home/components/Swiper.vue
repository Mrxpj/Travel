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

<!-- //设置样式wrapper的原因是解决：因为当浏览器调成3G网速时，
//banner图下面的文本在加载时会出现从banner图片的位置抖动下来。
//设置高宽比为37.5%,不可以直接设置height为37.5%，
 //这样子便成了相对于父级元素的高度

//样式穿透 >>>
//.wrapper下所有的子组件只要出现.swiper-pagination-bullet-active
都变成改样式 -->