<template>
	<view class="recommend">
		<!-- 1.轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/3297667a12ee6b8f6203ff81754dd1cd.jpg?type=webp&imageView&&thumbnail=1090x310&quality=95" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/9ed62a99ff7cc6e66225183c84ac4213.jpg?type=webp&imageView&&thumbnail=1090x310&quality=96" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/27038ec46af2f4554e370e612aa47431.jpg?type=webp&imageView&&thumbnail=1090x310&quality=95" mode=""></image>
				</view>
			</swiper-item>
			
		</swiper>
		
		<!-- 2.小图标 -->
		<view class="policycList">
			<view class="policycItem" 
			v-for="item in indexData.policyDescList"
			:key="item.desc"
			>
				<image class="policycImage" :src="item.icon" mode=""></image>
				<text class="policycText">{{item.desc}}</text>
			</view>
		</view>
		
		<!-- 3.导航图标 -->
		<view class="kingKongList" v-if="indexData.kingKongModule">
			<view class="kingKongItem" 
			v-for="item in indexData.kingKongModule.kingKongList"
			:key="item.L1Id"
			>
				<image class="kingKongImage" :src="item.picUrl" mode=""></image><br />
				<text class="kingKongText">{{item.text}}</text>
			</view>
		</view>
		
		
		<!-- 4.分类数据 categoryModule-->
		<view class="categoryList">
			<view class="categoryItem" 
			v-for="item in indexData.categoryModule"
			:key="item.titlePicUrl"
			>
			<!-- 大图 -->
				<image class="categoryImage" :src="item.titlePicUrl" mode=""></image>
			<!-- 滑块 -->
				<scroll-view class="categoryScroll" scroll-x="true" enable-flex>
					<view  class="goodsItem"
					v-for="goods in item.itemList"
					:key="goods.id"
					>
						<image class="goodsImage" :src="goods.listPicUrl" mode=""></image>
					
						<view class="goodsText">{{goods.name}}</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import { mapState } from "vuex"
	export default {
		name:'Recommend',
		data() {
			return {
				
			};
		},
		computed:{
			// 第三种方式拿state的值 函数方式:好处是可以重新命名  indexData(这个名字可以修改):state=>state.home.indexData
			...mapState({
				indexData:state=>state.home.indexData
			})
		},

	}
</script>

<style lang="stylus">
		.recommend
			.swiper
				height: 350rpx
				image
					height: 350rpx
					width: 100%
			.policycList
				display: flex
				text-align: center
				margin-top: 8rpx
				.policycItem
					flex: 1
					.policycImage
						width: 40rpx
						height: 40rpx
						vertical-align: middle
					.policycText
						font-size: 26rpx
			.kingKongList
				display: flex
				flex-wrap: wrap
				.kingKongItem
					width: 20%
					text-align: center
					margin: 10rpx 0
					.kingKongImage
						width: 100rpx
						height: 100rpx
					.kingKongText
						font-size:26rpx
						
			.categoryList
				.categoryItem
					margin: 10rpx 0
					.categoryImage
						height: 370rpx
						width: 100%
					.categoryScroll
					// 滑块要设置高度,否则占满全屏幕
						height: 300rpx
						display: flex
						white-space: nowrap //不换行
						.goodsItem
							height: 300rpx
							margin: 0 5rpx
							.goodsImage
								background-color: #f5f5f5
								width: 200rpx
								height: 200rpx
							.goodsText
								// 文字有两行
								white-space: pre-wrap //换行
								overflow: hidden //超出部分隐藏
								text-overflow: ellipsis
								font-size: 26rpx
								display: -webkit-box
								-webkit-box-orient: vertical //竖直对齐
								-webkit-line-clamp: 2 //超出部分两行...显示
						
					
				
</style>
