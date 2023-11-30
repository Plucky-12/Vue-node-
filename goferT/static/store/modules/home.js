import request from "../../utils/request"

const state={
	test:"测试数据",
	indexData:{}, // 首页的数据
}
const mutations = {
	// 修改首页数据
	changeIndexDataMutations(state,indexData){
		state.indexData = indexData
	}
}
const actions ={
	// 发起请求 那首页数据
	async getIndexDataActions({commit}){
		// 1.执行异步任务
		const res =await request('/getIndexData') //小程序
		// const res = await request('/api/getIndexData')  //h5请求
		console.log("首页数据");
		console.log(res);
		//commit触发mutations 
		commit('changeIndexDataMutations',res.indexData)
		
	}
}
const getters={
	
}
export default {
	namespaced:true,//分模块
	state,
	mutations,
	actions,
	getters
}