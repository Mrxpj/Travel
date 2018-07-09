<template>
	<div>
		<div class="title">
		<img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
		<span class="title-desc">周末去哪儿</span>
		</div>
		<ul>
			<li class="item border-bottom" 
			v-for="(item, index) of list" 
			:key="item.index"
			>
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl">
				</div>
				<div class="item-info">
					<p class="item-title">{{ item.title }}</p>
					<p class="item-desc">{{ item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeWeekend',
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
	.item-img-wrapper
	 overflow: hidden
	 height: 0
	 padding-bottom: 37.09%
	.item-img
	 width: 100%
	.item-info
	 padding: .2rem
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