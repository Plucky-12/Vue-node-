<template>
	<view class="personal">
		<view class="header">
			<!-- 登陆状态 -->
			<template v-if="userInfo.nickName">
				<image class="dImage" :src="userInfo.avatarUrl" mode=""></image>
				<view>{{userInfo.nickName}}</view>
				<button class="exit" plain="true"  @click="exit">退出登录</button>
				
				<!-- footer -->
				<view class="footer">
					<button class="footerItem" v-for="item in info">
						{{item}}	
						<label class="iconfont">></label>
					</button>
					
				</view>
			</template>
			
			<!-- 未登陆状态 -->
			<template v-else>
				<image  class="wImage" src="../../static/images/personal/personal.png" mode=""></image>
				<text @click="toLogin()">去登陆</text>
				<!-- 两个路由方式的区别  一个有返回页面 一个没有 -->
				<!-- <navigator url="/pages/login/login" hover-class="navigator-hover">去登陆</navigator> -->
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{},
				info:['我的订单','待付款','待发货','待评价','退款/售后'],
			};
		},
		mounted() {
			// 本地存储拿取数据-->基本信息
			wx.getStorage({
			  key: 'userInfo',
			  success :res=> {
				console.log(res.data)
				if(res.data)
					this.userInfo = JSON.parse(res.data)
			  }
			}),
			// 调用接口获取登录凭证（code）
			wx.login({
			  success (res) {
			    if (res.code) {
			      //发起网络请求
					console.log('登陆状态:' + res.code)
			  }
			}})
		},
		methods:{
			toLogin(){
				wx.reLaunch({
				  url: '/pages/login/login'
				})
			},
			exit(){
				wx.setStorage({
				  key:"userInfo",
				  data:""
				}),
				// 页面跳转，回到登录；把其他页面都关闭
				wx.reLaunch({
					url:'/pages/personal/personal'
				})
			}
		}
	}
</script>

<style lang="stylus">
	.personal
		.header
			height: 300rpx
			line-height: 200rpx
			background-color: #eed7b5
			display: flex
			.dImage
				height: 100rpx
				width: 100rpx
				margin: 50rpx
				vertical-align: middle
			button
				background-color: #eed7b5
				text-align: center
				margin-top: 60rpx
				border-radius: 1rpx
				height: 100rpx
				font-size: 32rpx	
				border: 1rpx solid #eed7b5 
			.footer
				height: 10rpx
				width: 100%
				display: inline;
				position: absolute;
				margin-top:300rpx 
				.footerItem	
					height: 80rpx
					width: 100%
					margin: 10rpx auto
					color: block
					display: flex
					flex-wrap:wrap
			.wImage
				height: 100rpx
				width: 100rpx
				vertical-align: middle
				margin: 50rpx
			
	
		
</style>
