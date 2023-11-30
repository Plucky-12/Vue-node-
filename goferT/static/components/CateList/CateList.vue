<template>
	<view class="cateList">
		<!-- 1.轮播图  -->
		<swiper 
		class="swiper" 
			:indicator-dots="true" 
			:autoplay="true" 
			:interval="3000" 
			:duration="1000"
			v-if="cateObj.category"
			>
			<swiper-item class="cateItem" 
				v-for="(item,index) in cateObj.category.bannerUrlList" 
				:key="index"
			>
				<view class="swiper-item">
					<image class="cateImage" :src="item" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		
		<!-- 2.标题 -->
		<view class="frontitle">
			{{cateObj.category.frontName}}
		</view>
		
		<!-- 3.简介-->
		<view class="frontDesc">
			{{cateObj.category.frontDesc}}
		</view>
		
		<!-- 4.商品列表 -->
		<view class="goodsList">
			<view class="goodsItem" 
				v-for="item in cateObj.itemList"
				:key="item.id"
				@click="toDetail(item)"
			>
				<image  class="goodsImage" :src="item.listPicUrl" mode=""></image>
				<view class="goodsDesc">
					{{item.name}}
				</view>
				<view class="goodsPrice">
					￥{{item.retailPrice}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from "../../utils/request.js"
	export default {
		name: "CateList",
		props: ['L1Id'], //父组件像子组件传值
		data() {
			return {
				CateList: []
			};
		},
		mounted() {
			this.getIndexData();
		},
		methods: {
			async getIndexData() {
				const res = await request('/getindexCateList');
				console.log('组件：CateList:',res);
				this.CateList = res.indexCateList;
			},
			// 跳转到详情页
			toDetail(goodsItem){
				wx.navigateTo({
				  url: '/pages/detail/detail?goodsItem='+JSON.stringify(goodsItem)
				})
			}
			
		},
		computed: {
			// 当前页面的分类对象所对应的ID
			cateObj() {
				return this.CateList.find(item => item.category.parentId === this.L1Id)
			}
		}
	}
</script>

<style lang="stylus">
	.cateList 
		.swiper 
			height: 360rpx 
			.cateItem
				.swiper-item
					.cateImage
						width:100%
						height: 360rpx
		.frontitle
			text-align: center
			font-size: 38rpx
			line-height: 80rpx
			color: #333
			font: bold
		.frontDesc
			line-height:40rpx
			text-align: center
			font-size: 26rpx
			color: #666
			margin-bottom: 5rpx
		.goodsList
			display: flex
			flex-wrap: wrap
			justify-content: space-around
			&::after
				width: 344rpx
				content: ""
			.goodsItem
				width: 344rpx
				height: 480rpx
				.goodsImage
					width: 344rpx
					height: 344rpx
				.goodsDesc
					font-size: 24rpx
					color: #333
				.goodsPrice
					font-size: 26rpx
					color: red
			
		
</style>
