<template>
	<div class="icons">
		<swiper>
			<swiper-slide v-for="(page, index) of pages" :key="index">
				<div class="icon" 
				v-for="item of page"
				:key="item.id"
				>
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl" alt="" />
					</div>
					<p class="icon-text">{{ item.desc }}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeIcons',
	data () {
		return {
			iconList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				desc: '景点门票'
			}, {
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
				desc: '必游榜单'
			}, {
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
				desc: '动植物园'
			}, {
				id: '0004',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
				desc: '公园'
			}, {
				id: '0005',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
				desc: '游船游艇'
			}, {
				id: '0006',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
				desc: '踏青赏花'
			}, {
				id: '0007',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
				desc: '名胜古迹'
			}, {
				id: '0008',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
				desc: '一日游'
			},{
				id: '0009',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
				desc: '一日游'
			}]
		}
	},
	computed: {
		pages () {
			const pages = []
			this.iconList.forEach((item,index) => {
				const page = Math.floor(index/8)
				if(!pages[page]) {
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	}
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
.icons >>> .swiper-container
	height: 0
	padding-bottom: 50%
.icon
	position: relative
	overflow: hidden
	float: left
	width: 25%
	height: 0
	padding-bottom: 25%
	.icon-img
	  position: absolute
	  top: 0
	  left: 0
	  right: 0
	  bottom: .35rem
	  box-sizing: border-box
	  padding: .05rem
	  .icon-img-content
	  	display: block
	  	height: 100%
	  	margin: 0 auto
	.icon-text
	  position: absolute
	  left: 0
	  right: 0
	  bottom: 0
	  line-height: .35rem
	  text-align: center
	  color: $darkTextColor
	  ellipsis()
</style>

<!-- @import '~styles/variables.styl'//引入使用定义好的全局颜色 -->