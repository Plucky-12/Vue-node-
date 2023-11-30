const express = require('express')

const router = express.Router()

router.get('/test',(req,res)=>{
	res.send('路由配置成功');
})


// 配置滑块  请求后端的值
const indexData = require('../datas/index.json')
router.get("/getIndexData",(req,res)=>{
	res.send({
		status: 200,
		indexData
	})
})


// 加载首页分类列表 请求后端的值
const indexCateList = require('../datas/indexCateList.json')
router.get("/getIndexCateList",(req,res)=>{
	res.send({
		status: 200,
		indexCateList
	})
})


// tabBar 分类
const categoryDatas = require('../datas/categoryDatas.json')
router.get("/getcategoryDatas",(req,res)=>{
	res.send({
		status: 200,
		categoryDatas
	})
})





module.exports = router