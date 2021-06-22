<<<<<<< HEAD
# FredRepository
=======
# 通过Nodejs--express框架搭建WEB服务器
	1.使用Nodejs前端分离控制；
	2.通过Nodejs做路由跳转，包含view路由控制、数据请求。


## 1.路由使用
	//引入express模块
	var Express = require('express');
	//实例化express
	var expressapp = new Express();
	
	//引入路由文件
	var hrmBusiness = require("./hrm/express_hrm");
	expressapp.use("/api/hrm", hrmBusiness);	//获取hrm路由

## 2.暴露路由文件（示例：express_hrm.js）
	//引入express模块
	var Express = require('express');
	var router = Express.Router();
	//解析URL模块，基于GET方式请求的解析
	var url = require('url');
	//Get  测试访问
	router.get("/hrmTest",function(req, res){
		// 解析 url 参数
	    var params = url.parse(req.url, true).query;
		res.send(params.name + "===========" + params.workcode);
	});
	//调用token接口--post接收参数，参数格式JSON
	router.post("/staffGet", function(req, res) {
		var param = "";
		//拼接post请求体，结果是字符串
		req.on("data", function(chunk) {
			param += chunk;
		});
		req.on("end", function() {
			var tparam = JSON.parse(param);
			res.send(tparam);
		});
	});
	module.exports = router;//暴露router模块

## 3.请求后台数据
	////////////////	POST 方式请求	/////////////////////////////////
	var http = require('http');
	var common = require("../../common/common");
	exports.staffGet =  function(data,response, callback){
		var url = "http://localhost:8080/hrm/staffGet";		
		var tmpTokenInfo = "";
		var bearer = "bearer " + data.accessToken;
		var opt = {
			host:common.bussinesshostname,
			port:common.bussinessport,
		    method:'POST',
		    path:url,
		    headers:{
		    	"Content-Type":"application/json;charset=utf-8",
		    	"Authorization": bearer
		    }
		}
		var req = http.request(opt, function(res) {
		    res.on('data',function(data){
		    	tmpTokenInfo += data;
		    }).on('end', function(){
		    	callback(tmpTokenInfo,response);
		    });
		}).on('error', function(e) {
		    console.log("error: " + e.message);
		    callback(e.message,response);
		});
		req.write(JSON.stringify(data));
		req.end();
	}

	////////////////	GET 方式请求	/////////////////////////////////
	var http = require('http');
	var common = require("../../common/common");
	exports.TokenBusiness =  function(accessskey,accesssecret,response, callback){
		var url = "http://localhost:8080/oauth/token?grant_type=client_credentials&client_id="+accessskey+"&client_secret="+accesssecret;
		var tmpTokenInfo = "";
		var opt = {
			host:common.bussinesshostname,
		    port:common.bussinessport,
		    method:'GET',
		    path:url
		}
		var req = http.request(opt, function(res) {
		    res.on('data',function(data){
		    	tmpTokenInfo += data;
		    }).on('end', function(){
		    	callback(tmpTokenInfo,response);
		    });
		}).on('error', function(e) {
		    console.log("error: " + e.message);
		    callback(e.message,response);
		});
		//req.write(tokenInfo);
		req.end();
	}


### Tools

	Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
	 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   
	
	Nodeclipse is free open-source project that grows with your contributions.
>>>>>>> 948d92f (20210525Commit)
