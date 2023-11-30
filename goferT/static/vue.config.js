module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7788',
        ws: true,
        changeOrigin: true,//允许跨域
		pathRewrite:{  
			'^/api':''
		}
      }
    }
  }
}