//xl stat
var xl_gsid='GSID_001_001_001_022';
var __xltj_domain="vip.xunlei.com";  
var __xltj_ingoreParameter="cachetime";
function __xltj_getCustomerParameter(){
	var sessionid = Browser.getCookie("sessionid");
	if(sessionid != null && sessionid != "")
		return "loginFlag=1";
	else
		return "loginFlag=0";
}
var xlJsHost = "http://res.stat.xunlei.com/pv.js";
document.write(unescape("%3Cscript src='" + xlJsHost + "' type='text/javascript' charset='utf-8' %3E%3C/script%3E"));
//google stat
//var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
//document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E")); 
//try {
//	var pageTracker = _gat._getTracker("UA-1116375-4"); 
//	pageTracker._trackPageview();
//}catch(err) {}