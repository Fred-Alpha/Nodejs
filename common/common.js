//	访问Nodejs服务器的hostname
exports.expresshostname = "localhost";
//	访问Nodejs服务器的port
exports.expressport = 8100;

//	访问后端服务器的hostname
exports.bussinesshostname = "localhost";
//	访问后端服务器的port
exports.bussinessport = 8080;

//业务后台接口调用回调函数，统一返回JSON对象
exports.tokenCallback = function(_tokenInfo, response){
	//console.log("=====tokenCallback=====:" , _tokenInfo);
	response.set({'content-type' : 'application/json;charset=utf-8'});
	response.send(_tokenInfo);
}