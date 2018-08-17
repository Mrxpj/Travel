<template>
	<ul class="list">
		<li 
		class="item" 
		v-for="item of letters" 
		:key="item"
		:ref="item"
		@touchstart="handleTouchStart"
		@touchmove="handleTouchMove"
		@touchend="handleTouchEnd"
		@click="handleLetterClick"
		>{{item}}</li>
	</ul>
</template>

<script>
export default {
	name: 'CityAlphabet',
	props: {
		cities: Object
	},
	computed: {
		letters() {
			const letters = []
			for (let i in this.cities) {
				letters.push(i)
			}
			return letters
		}
	},
	data () {
		return {
			touchStatus: false,
			startY: 0,
			timer: null
		}
	},
	updated () {
		//得到字母A距离搜索框底部的距离
		this.startY = this.$refs['A'][0].offsetTop
	},
	methods: {
		handleLetterClick (e) {//接收一个对象
			// console.log(e.target.innerText)//打印出字母
			this.$emit('change', e.target.innerText)//向外触发事件，由父组件监听
		},
		handleTouchStart () {
			this.touchStatus = true
		},
		handleTouchMove (e) {
			//添加一个节流函数，timer已经存在，就去除timer
			//否则就创建一个timer，时间间隔16毫秒
			//在这期间重新滚动，会清除上一个timer，重新创建tiemr
			//达到列表性能优化，防止滚动频率过高
			if (this.touchStatus) {
				if(this.timer) {
					clearTimeout(this.timer)
				}
				this.timer = setTimeout( () => {
					//手指距离搜索框底部的距离
					//e.touches得到的是一个touch事件数组
					const touchY = e.touches[0].clientY -79
					// console.log(e.touches)
					const index = Math.floor((touchY - this.startY) / 18)
					if (index >= 0 && index < this.letters.length) {
						this.$emit('change', this.letters[index])
					}
				},16)
				
			}
		},
		handleTouchEnd () {
			this.touchStatus = false
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	.list
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		top: 2.58rem
		right: .05rem
		bottom: 0
		width: .35rem
		.item
			line-height: .35rem
			text-align: center
			color: $bgColor
			cursor: pointer
</style>