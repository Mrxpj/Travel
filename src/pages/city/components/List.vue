<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.currentCity }}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div
						class="button-wrapper"
						v-for="item of hot" 
						:key="item.id"
						@click="handleCityClick(item.name)"
				 	>
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div 
				class="area" 
				v-for="(item,key) of cities" 
				:key="key"
				:ref="key"
			>
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div 
						class="item border-bottom"
						v-for="innerItem of item"
						:key="innerItem.id"
						@click="handleCityClick(innerItem.name)"
					>
						{{innerItem.name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
//mapState, mapMutations是vuex的api
import {mapState, mapMutations} from 'vuex'
export default {
	name: 'CityList',
	computed: {
		//将city映射到名为currentCity的计算属性上
		...mapState({
			currentCity: 'city'
		})
	},
	props: {
		hot: Array,
		cities: Object,
		letter: String
	},
	watch: {
		letter() {
			if (this.letter) {
				//未加[0]之前得到一个循环area里数组，
				//加了之后得到是一个类选择器.
				const element = this.$refs[this.letter][0]
				//element须为dom元素或者选择器
				this.scroll.scrollToElement(element)
			}
		}
	},
	methods: {
		handleCityClick (city) {
			//dispatch是vuex的方法，指触发一个事件及派发函数
			// this.$store.dispatch('changeCity', city)
			this.changeCity(city)
			//push()编程式导航，就是跳转到指定页面
			this.$router.push('/')
		},
		...mapMutations(['changeCity'])
	},
	mounted () {
		this.scroll = new Bscroll(this.$refs.wrapper)
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	.border-topbottom
	  &:before
	    border-color: #eee
	  &:after
	    border-color: #eee
	.border-bottom
	  &:before
	    border-color: #eee
	.list
	  overflow: hidden
	  position: absolute
	  top: 1.58rem
	  left: 0
	  right: 0
	  bottom: 0
	  .title
	    line-height: .54rem
	    background: #eee
	    padding-left: .2rem
	    color: #666
	    font-size: .26rem
	  .button-list
	    overflow: hidden
	    padding: .1rem .6rem .1rem .1rem
	   .button-wrapper
	     float: left
	     width: 33.33%
	     .button
	       margin: .1rem
	       padding .1rem 0
	       text-align: center
	       border: .02rem solid $bgColor
	       border-radius: .06rem
	  .item-list
	    .item
	      line-height: .76rem
	      padding-left: .2rem
</style>