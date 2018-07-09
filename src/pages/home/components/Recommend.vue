<template>
	<div>
		<div class="title">
		<img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
		<span class="title-desc">猜你喜欢</span>
		</div>
		<ul>
			<li class="item border-bottom" 
			v-for="(item, index) of list" 
			:key="item.index"
			>
				<img class="item-img" :src="item.imgUrl">
				<div class="item-info">
					<p class="item-title">{{ item.title }}</p>
					<p class="item-desc">{{ item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
	 position: rlative
	 height: .6rem
	 margin: .5rem 0
	 .title-img
	  position: absolute
	  width: .3rem
	  height: .3rem
	  margin-left: .1rem
	 .title-desc
	  position: absolute
	  display: inline-block
	  margin-left: .5rem
	  height: .44rem
	  font-size: .4rem
	  line-height: .44rem
	.item
	 overflow: hidden
	 display: flex
	 height: 1.9rem
	 padding-bottom: .15rem
	 .item-img
	  width: 1.7rem
	  height: 1.7rem
	  padding: .1rem
	 .item-info
	   flex: 1
	   padding: .1rem
	   min-width: 0
	   .item-title
	   	line-height: .54rem
	   	font-size: .32rem
	   	ellipsis()
	   .item-desc
	   	line-height: .4rem
	   	font-size: .26rem
	   	color: #616161
	   	ellipsis()
	   .item-button
	   	line-height: .44rem
	   	margin-top: .16rem
	   	background: #ff9300
	   	padding: 0 .2rem
	   	border-radius: .06rem
	   	font-size: .26rem
	   	color: #fff
	   	
	 
</style>