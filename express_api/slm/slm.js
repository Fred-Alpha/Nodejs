var http = require('http');
var common = require("../../common/common");

//获取店铺信息
exports.storeInfoGet =  function(data,response, callback){
	
	//var url = "http://localhost:8080/hrm/staffGet";
	var url = "http://" + common.bussinesshostname + ":" + common.bussinessport + "/slm/storeInfoGet";
	//console.log("=====",accessKey, accessSecret);
	console.log("=====",url);
	
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
	    //console.log("response: " + res.statusCode);
	    res.on('data',function(data){
	    	tmpTokenInfo += data;
	    }).on('end', function(){
	    	//console.log("==获取token信息完毕=tmpTokenInfo===",tmpTokenInfo);
	    	callback(tmpTokenInfo,response);
	    });
	}).on('error', function(e) {
	    console.log("error: " + e.message);
	    callback(e.message,response);
	});
	req.write(JSON.stringify(data));
	req.end();
}
