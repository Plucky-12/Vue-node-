import Vue from "vue"

const state = {
	cartList: [{
			"isSelected": true,
			"count": 1,
			"promId": 0,
			"showPoints": false,
			"itemTagList": [{
				"itemId": 1535004,
				"tagId": 128111157,
				"freshmanExclusive": false,
				"name": "暖冬特惠",
				"subType": 204,
				"forbidJump": false,
				"type": 2
			}],
			"rank": 1,
			"id": 1535004,
			"sellVolume": 4001,
			"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/f79906f1b1fe86420ea40473de66ec0e.png",
			"soldOut": false,
			"sortFlag": 0,
			"commentCount": 0,
			"onSaleTime": 1538101761748,
			"picMode": 1,
			"commentWithPicCount": 0,
			"underShelf": false,
			"status": 2,
			"couponConflict": true,
			"forbiddenBuy": false,
			"promotionDesc": "暖冬特惠",
			"limitedFlag": 204,
			"pieceNum": 0,
			"itemSizeTableDetailFlag": false,
			"forbidExclusiveCal": false,
			"rewardShareFlag": false,
			"updateTime": 1575893634989,
			"showCommentEntrance": true,
			"pieceUnitDesc": "件",
			"specialPromTag": "",
			"counterPrice": 299,
			"categoryL2Id": 0,
			"retailPrice": 209,
			"primarySkuPreSellPrice": 0,
			"preLimitFlag": 0,
			"itemPromValid": true,
			"promTag": "暖冬特惠",
			"source": 0,
			"points": 0,
			"primarySkuPreSellStatus": 0,
			"extraServiceFlag": 0,
			"flashPageLink": "",
			"autoOnsaleTimeLeft": 0,
			"innerData": {},
			"saleCenterSkuId": 0,
			"pointsStatus": 0,
			"extraPrice": "",
			"colorNum": 0,
			"showTime": 0,
			"autoOnsaleTime": 0,
			"preemptionStatus": 1,
			"isPreemption": 0,
			"zcSearchFlag": false,
			"name": "男式色拉姆内衣套装2.0",
			"appExclusiveFlag": false,
			"itemType": 1,
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/c2eeb1b872af1b8efc179a7515aacdaa.png",
			"pointsPrice": 0,
			"simpleDesc": "色拉姆发热面料，加厚升级",
			"seoTitle": "",
			"newItemFlag": false,
			"buttonType": 0,
			"primarySkuId": 1636062,
			"displaySkuId": 1636056,
			"productPlace": "",
			"itemSizeTableFlag": false
		},
		{
			"isSelected": false,
			"count": 2,
			"promId": 0,
			"showPoints": false,
			"itemTagList": [{
				"itemId": 1536001,
				"tagId": 128111157,
				"freshmanExclusive": false,
				"name": "暖冬特惠",
				"subType": 204,
				"forbidJump": false,
				"type": 2
			}],
			"rank": 1,
			"id": 1536001,
			"sellVolume": 3634,
			"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/32b8b2d07b1c4327593a4a70993eeac2.png",
			"soldOut": false,
			"sortFlag": 0,
			"commentCount": 0,
			"onSaleTime": 1538101896296,
			"picMode": 1,
			"commentWithPicCount": 0,
			"underShelf": false,
			"status": 2,
			"couponConflict": true,
			"forbiddenBuy": false,
			"promotionDesc": "暖冬特惠",
			"limitedFlag": 204,
			"pieceNum": 0,
			"itemSizeTableDetailFlag": false,
			"forbidExclusiveCal": false,
			"rewardShareFlag": false,
			"updateTime": 1575894115275,
			"showCommentEntrance": true,
			"pieceUnitDesc": "件",
			"specialPromTag": "",
			"counterPrice": 299,
			"categoryL2Id": 0,
			"retailPrice": 209,
			"primarySkuPreSellPrice": 0,
			"preLimitFlag": 0,
			"itemPromValid": true,
			"promTag": "暖冬特惠",
			"source": 0,
			"points": 0,
			"primarySkuPreSellStatus": 0,
			"extraServiceFlag": 0,
			"flashPageLink": "",
			"autoOnsaleTimeLeft": 0,
			"innerData": {},
			"saleCenterSkuId": 0,
			"pointsStatus": 0,
			"extraPrice": "",
			"colorNum": 0,
			"showTime": 0,
			"autoOnsaleTime": 0,
			"preemptionStatus": 1,
			"isPreemption": 0,
			"zcSearchFlag": false,
			"name": "女式色拉姆内衣套装2.0",
			"appExclusiveFlag": false,
			"itemType": 1,
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/02b61fb5700aed6761b7524d98ed0837.png",
			"pointsPrice": 0,
			"simpleDesc": "色拉姆发热面料，加厚升级",
			"seoTitle": "",
			"newItemFlag": false,
			"buttonType": 0,
			"primarySkuId": 1634105,
			"displaySkuId": 1634104,
			"productPlace": "",
			"itemSizeTableFlag": false
		}

	]
}


const mutations = {
	// 修改和添加数据  响应式数据
	addGoodsItemMutaion(state, goodsItem) {
		//判断商品是否在购物车里面存在
		const item = state.cartList.find(item => item.id === goodsItem.id)
		console.log("item:", item);
			wx.showToast({
			  title: '加入成功',
			  icon: 'success',
			  duration: 2000
			});
		
		if (item) {
			item.count += 1;
			console.log("存在，count:", item.count);
		} else {
			// goodsItem.isSelected=true;
			// goodsItem.count=1;
			// set(对象，变量，值)
			Vue.set(goodsItem, 'count', 1)
			Vue.set(goodsItem, "isSelected", true)
			state.cartList.push(goodsItem);
			console.log("不存在");
		}
	},
	// 再Mutaion里面多个参数用花括号
	changeCountMutaion(state, {
		isAdd,
		isIndex
	}) {
		// 增减操作
		if (isAdd) {
			state.cartList[isIndex].count += 1;
		} else {
			if (state.cartList[isIndex].count > 1)
				state.cartList[isIndex].count -= 1;
			else {
				wx.showModal({
					title: '提示',
					content: '你确定要删除此商品嘛？',
					success(res) {
						if (res.confirm) {
							// 删除
							state.cartList.splice(isIndex, 1)
						}
					}
				})
				state.cartList[isIndex].count = 0;
			}


		}
	},
	// 修改商品的选中状态
	changeSelectMutaion(state, {
		isSelected,
		index
	}) {
		state.cartList[index].isSelected = isSelected
	},
	// 修改商品的选中状态
	changeAllSelectedMutaion(state,isAllSelected){
		state.cartList.forEach(item=>item.isSelected=isAllSelected)
	}
	
}

const actions = {

}

const getters = {
	// 是否全选中  属性  isSelected全选则返回true        item.isSelected===true 
	isAllSelected(state){
		return state.cartList.every(item=>item.isSelected===true)
	},
	// 总数量
	totalCount(state){
		/*
		reduce 数组求和 数组求积、数组中元素出现的次数、数组去重
		prev 必需。累计器累计回调的返回值; 表示上一次调用回调时的返回值，或者初始值 init;
		cur 必需。表示当前正在处理的数组元素；
		init 可选。表示初始值为0
		*/ 
		return state.cartList.reduce((prev,cur)=>{
			return prev +=cur.isSelected?cur.count:0
		},0)
	},
	// 总钱
	totalPrice(state){
		return state.cartList.reduce((prev,cur)=>{
			return prev += cur.isSelected ? cur.retailPrice * cur.count:0
		},0)
	}
}

export default {
	namespaced: true, //分模块
	state,
	mutations,
	actions,
	getters
}
