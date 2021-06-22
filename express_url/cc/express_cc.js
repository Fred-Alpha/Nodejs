/**
 *	路由前缀：	/api/hrm
 */

//引入express模块
var Express = require('express');
var router = Express.Router();
//解析URL模块，基于GET方式请求的解析
var url = require('url');

var ccBusiness = require("./cc");
var common = require("../../common/common");

//Get  测试访问
router.get("/index",function(req, res){
	//console.log(3333);
	// 解析 url 参数
    var params = url.parse(req.url, true).query;
	console.log("======cc=====" + params.code);
	
	ccBusiness.getIndexUrl(params.code, res, common.redirectFunction);
});
module.exports = router;//暴露router模块