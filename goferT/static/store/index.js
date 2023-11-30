import Vue from 'vue'
import Vuex from "vuex"
import home from "./modules/home.js"
import cart from "./modules/cart.js"
// 使用插件
Vue.use(Vuex);



// 创建仓库
const store = new Vuex.Store({
	modules:{
		home,
		cart
	}
})

export default store;