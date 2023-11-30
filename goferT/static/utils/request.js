import base from "./base.js"
export default(url,data={},method='get') =>{
	return new Promise((resolve,reject)=>{
		uni.request({
		    url:base.host+url, //仅为小程序的接口。
			// url, //h5
		    data,
			method,
		    success: (res) => {
		        resolve(res.data);
		    },
			fail: (err)=>{
				reject(err)
			}
		});
		
		
		
		
		
		
		
		
		
		   
	})
}