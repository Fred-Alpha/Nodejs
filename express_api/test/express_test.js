/**
 *	路由前缀：	/api/test
 */

//引入express模块
var Express = require('express');
//引入router模块
var router = Express.Router();
//解析URL模块，基于GET方式请求的解析
var url = require('url');

//Get  测试访问
router.get("/get",function(req, res){
	console.log(3333);
	// 解析 url 参数
    var params = url.parse(req.url, true).query;
	res.send(params.name + "===========" + params.workcode);
});

//调用token接口--post接收参数，参数格式JSON
router.post("/post", function(req, res) {
	var param = "";
	//拼接post请求体，结果是字符串
	req.on("data", function(chunk) {
		param += chunk;
	});

	req.on("end", function() {
		var tparam = JSON.parse(param);
		console.log("==tparam===:" , tparam);
		res.send(tparam);
	});
});

module.exports = router;//暴露router模块