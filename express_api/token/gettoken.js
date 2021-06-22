var http = require('http');
var common = require("../../common/common");

exports.TokenBusiness =  function(accessskey,accesssecret,response, callback){
	
	//var url = "http://localhost:8080/oauth/token?grant_type=client_credentials&client_id="+accessskey+"&client_secret="+accesssecret;
	var url = "http://" + common.bussinesshostname + ":" + common.bussinessport + "/oauth/token?grant_type=client_credentials&client_id="+accessskey+"&client_secret="+accesssecret;
	//console.log("=====",accessKey, accessSecret);
	console.log("=====",url);
	
	var tmpTokenInfo = "";
	
	var opt = {
		host:common.bussinesshostname,
	    port:common.bussinessport,
	    method:'GET',
	    path:url
	}
	
	var req = http.request(opt, function(res) {
	    //console.log("response: " + res.statusCode);
	    res.on('data',function(data){
	    	tmpTokenInfo += data;
	    }).on('end', function(){
	    	console.log("==获取token信息完毕=tmpTokenInfo===",tmpTokenInfo);
	    	callback(tmpTokenInfo,response);
	    });
	}).on('error', function(e) {
	    console.log("error: " + e.message);
	    callback(e.message,response);
	});
	//req.write(tokenInfo);
	req.end();
}
