var http = require('http');
var https = require('https');
var common = require("../../common/common");

exports.getIndexUrl = function(wxcode, response, redirectFunction){
	var getUrl = "http://" + common.bussinesshostname + ":" + common.bussinessport + common.bussinesscontext + "/netCar/netCarCC_Index_Get/wxcode=" + wxcode;
	//console.log("getUrl:" + getUrl);
	
	http.get(getUrl, (res)=>{
		res.setEncoding('utf8');
		var data = "";
		res.on("data", (chunk)=>{
			data += chunk;
		});
		res.on("end", ()=>{
			try{
				//console.log("===data===" + data);
				var jsonData = JSON.parse(data);
				redirectFunction(jsonData.data, response);
			} catch (e){
				console.log("==获取token异常：" + e.message);
			}
		});
	}).on("error", (e)=>{
		console.log(`出现错误：${e.message}`);
	});
};
