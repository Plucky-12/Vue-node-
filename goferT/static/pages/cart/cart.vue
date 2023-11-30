<template>
	<view class="cart">
		<view class="cartList">
			<view class="cartItem" v-for="(item,index) in cartList" :key="item.id">
				<!-- 选中，不选中 -->
				<text class="iconfont icon-xuanzhong" :class="{selected:item.isSelected}" @click="changeSelect(!item.isSelected,index)"></text>
				<!-- 商品信息 -->
				<view class="goodsItem">
					<image :src="item.listPicUrl" mode=""></image>
					<view class="goodsInfo">
						<view class="name">
							{{item.name}}
						</view>
						<view class="price">	
							￥{{item.retailPrice}}
						</view>
					</view>
				</view>	
				
				
				<!-- 数量控制 -->
				<view class="countCtrl">
					<text class="sub" @click="changeCount(false,index)">-</text>
					<text class="count">{{item.count}}</text>
					<text class="add" @click="changeCount(true,index)">+</text>
				</view>
				
				
				<!-- 底部 -->
				<view class="footer">
					<view class="left">
						<text class="iconfont icon-xuanzhong" :class="{selected:isAllSelected}" @click="changeAllSelected(!isAllSelected)"></text>
						<text>已选 {{totalCount}}</text>
					</view>
					<text class="right">
						<text class="btn">合计:￥{{totalPrice}}</text>
						<text class="btn order">下单</text>
					</text>
				</view>
			</view>	
		</view>	
	</view>	
</template>

<script>
	import { mapState,mapMutations,mapGetters } from "vuex"
	export default {
		data() {
			return {
				
			};
		},
		mounted() {
			
		},
		computed:{
			...mapState({
				cartList:state=>state.cart.cartList
			}),
			...mapGetters('cart',['isAllSelected','totalCount','totalPrice'])
		},
		methods:{
			// ...mapMutations('模块名',['方法'])
			...mapMutations('cart',['changeCountMutaion','changeSelectMutaion','changeAllSelectedMutaion']),
			//修改数量
			changeCount(isAdd,isIndex){
				this.changeCountMutaion({isAdd,isIndex})
			},
			// 修改选中状态
			changeSelect(isSelected,index){
				this.changeSelectMutaion({isSelected,index})
			},
			// 修改全选状态
			changeAllSelected(isAllSelected){
				this.changeAllSelectedMutaion(isAllSelected)
			}
		}
	}
</script>

<style lang="stylus">
	.cart
		background-color: #f4f4f4
		height: 100%
		.cartList
			.cartItem
				position: relative
				height: 172rpx
				width: 100%
				margin-top: 20rpx
				background-color: #fff
				padding: 20rpx
				display: flex
				.iconfont
					font-size 40rpx
					line-height 172rpx
					//选中高亮
					&.selected
						color: #dd1a21
				.goodsItem
					display: flex
					image
						width: 172rpx
						height: 172rpx
						background-color: #ccc
						margin: 0 40rpx
					.goodsInfo
						.name
							font-size: 26rpx
							margin: 10rpx
						.price
							color: red
				.countCtrl
					position: absolute
					right: 60rpx
					bottom: 30rpx
					text
						border: 1px solid #ddd
						padding: 8rpx 28rpx
						&:nth-child(2)
							border: none
							border-top: 1px solid #ddd
							border-bottom: 1px solid #ddd
		.footer
			position: fixed
			bottom: 0
			left :0
			right :0
			height :100rpx
			line-height: 100rpx
			background :#fff
			display: flex
			justify-content :space-between
			border-top: 1rpx solid #ccc
			.iconfont
				margin: 0 20rpx
				&.selected
					color: #dd1a21
			.right
				display: flex
				.btn
					flex: 1
					width: 200rpx
					display: inline-block
					&.order
						background: #dd1a21
						text-align: center
						color: #fff
			.left
				display: flex
				text-align: center
				.iconfont
					flex: 1
					margin-top: -35rpx
</style>
