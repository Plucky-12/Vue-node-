<template>
	<view class="category">
		<view class="header">
		<!-- 1.搜索区域 -->
			<view class="search">
				商品搜索
			</view>
		</view>
		
		<!-- 2.内容区域 -->
		<view class="content">
			<view class="left">
				<scroll-view scroll-y="true" class="navScroll">
					<view 
						v-for="(item,index) in categoryDatas"
						:key="item.id" 
						:class="{active:index===navIndex}"
						class="navItem"
						@click="changeIndex(index)"
						
					>
						{{item.name}}
					</view>
				</scroll-view>
			</view>
			<view class="right">
				<scroll-view scroll-y="true" class="categoryScroll">
					<!-- 大图 -->
					<image class="goodsImage" :src="cateObj.imgUrl" mode=""></image>
					<!-- 图片文字  -->
					<view class="goodsList">
							<view class="goodsItem" 
								v-for="item in cateObj.subCateList"
								:key="item.id"
							>
								<image class="goodsImage" :src="item.wapBannerUrl" mode=""></image>
								<view class="goodsName">{{item.name}}</view>
							</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from "../../utils/request.js";
	export default {
		data() {
			return {
				categoryDatas:[],
				navIndex:0
			};
		},
		mounted() {
			this.getcategory()
		},
		computed:{
			// 计算属性很方便
			cateObj(){
				console.log("每一项对应的值");
				console.log(this.categoryDatas[this.navIndex]);
				return this.categoryDatas[this.navIndex]
			}
		},
		methods:{
			async getcategory(){
				const res = await request('/getcategoryDatas')
				console.log('category:');
				console.log( res);
				this.categoryDatas = res.categoryDatas
			},
			changeIndex(index){
				console.log(index);
				this.navIndex = index
				
			}
		}
	}
</script>

<style lang="stylus">
	.category
		.header
			padding: 20rpx 0
			.search
				width: 90%
				margin: 0 auto
				text-align: center
				background-color: #ddd
				border-radius: 4rpx
				height: 60rpx
				line-height: 60rpx
				font: bold 26rpx
		.content					
			display: flex
			height: calc(100vh -100rpx)    //动态计算高度
			border-top: 2rpx solid #333
			.left
				// background-color: #ccc
				width: 20%
				height: 100%
				// border-right: 2rpx solid #333
				.navScroll
					height: calc(100vh -102rpx)
					.navItem
						// 定位方式  子相父绝
						position: relative
						height: 60rpx
						line-height: 60rpx
						font-size: 26rpx
						text-align: center
						margin-top: 10rpx
						// 父级应用
						&.active::before
							content: ""
							width: 2rpx
							height: 40rpx
							background-color: red
							position: absolute
							top: 10rpx
							left: 10rpx
						&.active
							// color: red
							background-color: #f0f0f0
				
					
			.right
				// background-color: pink
				width: 80%
				height:calc(100vh - 102rpx)
				.categoryScroll
					height:100%
					.goodsImage
						width: 520rpx
						height: 200rpx
						display: block
						margin: 10rpx auto
					.goodsList
						display: flex
						flex-wrap: wrap
						.goodsItem
							width: 33.33%
							height: 200rpx
							.goodsImage
								width:90%
								height: 140rpx
								text-align: center
							.goodsName
								font-size: 24rpx
								color: #321
								text-align: center
							
						
			
				
</style>
