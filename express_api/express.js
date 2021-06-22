/**
 * http://usejsdoc.org/
 */

//引入express模块
var Express = require('express');
var common = require("../common/common");

//实例化express
var expressapp = new Express();
//跨域处理
var cors = require('cors');

//express模块允许跨域访问
expressapp.use(cors());

var testBusiness = require("./test/express_test");
var tokenBusiness = require("./token/express_token");
var hrmBusiness = require("./hrm/express_hrm");
var slmBusiness = require("./slm/express_slm");

//var port = 8100;
var port = common.expressport;

expressapp.use("/oauth", tokenBusiness);	//获取token路由
expressapp.use("/api/test", testBusiness);	//测试方法路由
expressapp.use("/api/hrm", hrmBusiness);	//获取hrm路由
expressapp.use("/api/slm", slmBusiness);	//获取slm路由

//express 启动监听服务
var expressServer = expressapp.listen(port,function() {
	var host = expressServer.address().address;
	var port = expressServer.address().port;
	
	console.log("应用实例，访问地址为 http://%s:%s",host,port);
});


