<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<div class="container">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
	name: 'Detail',
	components: {
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data () {
		return {
			list: [{
				title: '成人票',
				children: [{
					title: '成人三馆联票',
					children: [{
						title: '成人三馆联票 - 某一连锁店出售'
					}]
				},{
					title: '承认五馆联票'
				}]
			},{
				title: '学生票'
			},{
				title: '儿童票票'
			},{
				title: '特惠票'
			}]
		}
	}
}
</script>
<style lang="stylus" scoped>
	.container
		height: 30rem
</style>