<template>
	<view class="indexContainer">
		<!-- 头部 -->
		<view class="header">
			<image src="/static/images/logo.png" class="logo" mode=""></image>
			<view class="search">
				<text class="iconfont icon-sousuotianchong"></text>
				<input type="text" placeholder="搜索..." placeholde-class='placeholder'>
			</view>
			<button >学无止境</button>
		</view>
		
		<!-- 滑块 -->
		<scroll-view scroll-x="true" class="navscroll" enable-flex v-if="indexData.kingKongModule">
				<view class="navItem " :class="{active:navIndex===-1}" @click="changeIndex(-1,-1)">推荐</view>
				<view class="navItem" 
				v-for="(item,index) in indexData.kingKongModule.kingKongList" 
				:key="item.L1Id"
				:class="{active:navIndex===index}"
				@click="changeIndex(index,item.L1Id)"
				>
				{{item.text}}	
				</view>
		</scroll-view>
		
		
		
		<!-- 内容区 -->
		<scroll-view scroll-y="true">
			<!-- 轮播图 推荐模块 用V-if来互斥-->
			<Recommend v-if="navIndex===-1"></Recommend>
			<!-- 内容页面 -->
			<CateList v-else :L1Id="L1Id"></CateList>
		</scroll-view>
		
	</view>
</template>

<script>
	import request from "../../utils/request.js"
	import {mapActions,mapState} from "vuex"
	import Recommend from '../../components/Recommend/Recommend.vue'
	import CateList from "../../components/CateList/CateList.vue"
	export default {
		components:{
			Recommend,
			CateList
		},
		data() {
			return {
				navIndex:-1, //导航标记
				L1Id:-1    
			}
		},
		created() {
			// this.getIndexData()
			
		},
		mounted(){
			// 获取仓库测试数据
			console.log(this.$store.state.home.test);
			// 第一种方式.触发action  this.$store.dispatch('模块名/方法名')
			// this.$store.dispatch('home/getIndexDataActions')
			
			// 第二种方式.触发action
			this.getIndexDataActions()
		},
		computed:{
			...mapState('home',['indexData']),
		},
		methods: {
			...mapActions('home',['getIndexDataActions']),
			// 获取首页的数据
			async getIndexData(){
				const res = await request('/getIndexData')  //小程序请求
				// const res = await request('/api/getIndexData')  //h5请求
				console.log('----------------')
				console.log(res);
				this.indexData = res.indexData
			},
			// 改变小标选中的状态
			changeIndex(index,L1Id){
				this.navIndex = index
				console.log(index);
				this.L1Id = L1Id
			}
			
		}
	}
</script>

<style lang="stylus">
	//小程序不处理跨域
	/* 	 font-size = 20px	//定义变量
	.tittle 
		color: red
		font: font-size '黑体' */
		
.indexContainer
	.header
		display: flex
		padding: 10rpx 5rpx
		.logo
			width: 140rpx
			height: 40rpx
			margin: 10rpx
		.search
			// width 420rpx
			flex: 1
			height: 60rpx
			background: #f5f5f5
			position: relative
			input
				width: 360rpx
				height: 60rpx
				margin-left: 60rpx
				// 重新placeholder 样式
				.placeholder
					font-size: 26rpx
					color: #333
			.iconfont
				position: absolute
				font-size: 40rpx
				left: 10rpx
				top: 10rpx
		button
			width: 144rpx
			height: 60rpx
			line-height: 60rpx
			text-align: center
			font-size: 26rpx
			padding: 0 4rpx
			margin-left: 10rpx
	 
	.navscroll 
		height: 70rpx
		display: flex
		// 不换行
		white-space: nowrap
		// 里面的的标签变成行内标签  横向显示
		.navItem
			display: inline-block
			height: 40rpx
			padding: 10rpx
			font-size: 26rpx
			&.active
				color: red
				border-bottom: 3rpx solid #BB2C08
				
		
		
		
	.test
		color: green
</style>
	 
	  