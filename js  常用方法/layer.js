

//判断是否以https访问，如果不是则输出提示页面

var url = window.location.href;

if (url.indexOf("https") < 0) {

	url = url.replace("http:", "https:");

	window.location.replace(url);

}



//判断浏览器模拟手机，自动跳转手机站
try {
	var urlhash = window.location.hash;
	if (!urlhash.match("fromapp")) {
		if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
			window.location = "/wap/";
		}
	}
} catch (err) {
	console.log(err)
}


//http://httpbin.org/ip   获取IP
  // 根据ip获取地区信息
  function httpbin() {
      let ip='202.190.185.252'
      $.ajax({
          url: "http://ip.taobao.com/service/getIpInfo.php?ip="+ip,
          type: "GET",
          data: {},
          dataType: "json",
          success: function (r) {
              console.log(r)
          },
          error: function (msg) {

          }
      })
  }
  
  
  //数组去重
  Array.prototype.myUnique=function myUnique(){
    var obj={};
	for (var i=0;i<this.length;i++){
		var item = this[i];
		if(typeof obj[item] !=='undefined'){
			this[i]=this[this.length-1];
			this.length--;
			i--;
			continue;
		}
		obj[item]=item;
	}
	obj = null;
	return this;
  }
  