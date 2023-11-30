const express = require('express')
// 创建服务器
const app = express()

const router =require('./router/index')
app.use('/',router)

// 监听端口
app.listen(7788,(req,res)=>{
	console.log(res)
	console.log('服务启动成功')
	console.log('http://localhost:7788');
})