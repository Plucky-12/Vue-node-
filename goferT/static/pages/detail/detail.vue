<template>
	<view class="detail">
		<view class="header">
			{{goodsObj.name}}
		</view>
		
		<!-- 商品详情 -->
		<scroll-view scroll-y="true"  class="detailScroll">
			<image class="detailImage" :src="goodsObj.listPicUrl" mode=""></image>
			<view class="detailTag">{{goodsObj.promTag}}</view>
			<view class="detailPrice">￥{{goodsObj.retailPrice}}</view>
			<view class="list" style="margin-left: 5%;font-size: 28upx;line-height: 50upx;">
				<view class="detailDesc">{{goodsObj.simpleDesc}}</view>	
				<view>1) 100%桑蚕丝填充，丝丝精粹不掺杂</view>
				<view>2) 创新井字拉网工艺，桑蚕丝不易黏连结块</view>
				<view>3) 两种面料可选，贡缎手感细腻，竹棉清爽透气</view>
				<view>4) AB双面设计，多种活性印花不易褪色</view>
			</view>
		</scroll-view>
		
		<!-- 底部	 -->
		<view class="footer">
			<view class="img">
				<image  class="footerImage" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/detail-kefu-d10f0489d2.png?imageView&type=webp" mode=""></image>
			</view>
			<view class="btn">
				立即购买
			</view>
			<view class="btn cart" @click="addCart">
				加入购物车
			</view>
		</view>
		
	</view>
</template>

<script>
	import { mapMutations } from "vuex"
	export default {
		data() {
			return {
				goodsObj:{}    	// 商品详情
			};
		},
		//小程序的生命周期
		onLoad(options){
			console.log('options:',JSON.parse(options.goodsItem));
			this.goodsObj = JSON.parse(options.goodsItem)
		},
		methods:{
			...mapMutations('cart',['addGoodsItemMutaion']),
			//加入购物车
			addCart(){
				this.addGoodsItemMutaion(this.goodsObj)
			}
		}
	}
</script>

<style lang="stylus">
	.detail
		.header
			height: 90rpx
			width: 570rpx
			line-height: 90rpx
			margin: 0 auto
			text-align: center
		.detailScroll
			height: calc(100vh - 190rpx)
			.detailImage
				width: 100%
				height: 750rpx
			.detailTag
				width: 90%
				height: 100rpx
				color: #fff
				text-align: center
				line-height: 100rpx
				font-size: 32rpx
				background-color: #BB2C08
				border-radius: 10rpx
				margin: 20rpx auto
			.detailPrice
				color: #dd1a21
				line-height: 70rpx
				margin-left: 5%
				font-size: 50rpx
			.list
				.detailDesc
					color: #747070
				
		.footer
			display: flex
			position: fixed
			bottom: 0
			left: 0
			right: 0
			height: 100rpx
			line-height: 100rpx
			border-top: 1rpx solid #ccc
			background-color: #fff
			.img
				flex: 1
				line-height: 100rpx
				.footerImage
					display: block
					margin: 20rpx auto
					width: 60rpx
					height: 60rpx
			.btn
				flex: 2
				border-left: 1px solid #eee
				text-align: center
				&.cart
					background-color: #dd1a21
					color: #fff
				
			
				
</style>
