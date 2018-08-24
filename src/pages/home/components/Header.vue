<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
		输入城市/景点/游玩主题</div>
		<router-link to='/city'>
			<div class="header-right">{{ this.city }}
				<span class="iconfont  arrow-icon">&#xe6aa;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
import { mapState} from 'vuex' //vuex,api
export default {
	name: 'HomeHeader',
	computed: {
		//把city映射到名为city的计算属性中
		//"..."展开运算符
		...mapState(['city'])
	}
}
</script>

<style lang="stylus" scoped> 
@import '~styles/variables.styl'
	.header
	  display: flex
	  line-height: $headerHeight
	  background: $bgColor
	  color: #fff
	  .header-left
	    width: .64rem
	    float: left
	    .back-icon
	    	text-align: center
	    	font-size: .3rem
	  .header-input
	    flex: 1
	    height: .6rem
	    line-height: .6rem
	    margin-top: .1rem
	    margin-left: .2rem
	    padding-left: .2rem
	    background: #fff
	    border-radius: .1rem
	    color: #ccc
	  .header-right
	    min-width: 1.0rem
	    padding: 0 .1rem
	    float: right
	    text-align: center
	    color: #fff
	    .arrow-icon
	    	margin-left: -.05rem
</style>