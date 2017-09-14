$(function(){
	getShopByType(11,10,bomeiquanliang);
	getShopByType(12,10,guibinbixiongquanliang);
	getShopByType(13,10,samoquanliang);
	getShopByType(14,10,jinmaoquanliang);
	getShopByType(15,10,quanquanquanliang);
	
	getShopByType(16,10,goutiaosaohuichong);
	getShopByType(17,10,gouleihenkouchou);
	getShopByType(18,10,gouzhenjunmanchong);
	getShopByType(19,10,gouganmaofuxie);
	getShopByType(20,10,gouquegaituomao);
	
	getShopByType(21,10,gouwolongfushi);
	getShopByType(22,10,gouqianyinzhuangbei);
	getShopByType(23,10,gouweishiqiju);
	getShopByType(24,10,goumeirongzaoxing);
	getShopByType(25,10,gouwanjuleyuan);
	
	getShopByType(26,10,goupaibianyongpin);
	getShopByType(27,10,goudiantuijian);
	getShopByType(28,10,gouxiangbo);
	getShopByType(29,10,gouxiaodu);
	
	
	
	
//猫
	getShopByType(30,10,jinkoumaoliang);
	getShopByType(31,10,guochangmaoliang);
	getShopByType(32,10,gongnengxingmaoliang);
	getShopByType(33,10,maoguantou);
	getShopByType(34,10,maomaolingshi);
	
	getShopByType(35,10,maotiaosaohuichong);
	getShopByType(36,10,maoleihenkouchou);
	getShopByType(37,10,maozhenjunmanchong);
	getShopByType(38,10,maoganmaofuxie);
	getShopByType(39,10,maoquegaituomao);
	
	getShopByType(40,10,maodongjiwolong);
	getShopByType(41,10,maoweishiqiju);
	getShopByType(42,10,maomeirongzaoxing);
	getShopByType(43,10,maowanju);
	
	getShopByType(44,10,maosha);
	getShopByType(45,10,maoshapeng);
	getShopByType(46,10,maomuyu);
	getShopByType(47,10,maoxiaodu);
	
});


//狗粮区
function bomeiquanliang(data){
	console.log(data);
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#baomeiquanliang").append(str);
}
function guibinbixiongquanliang(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#guibinbixiongquanliang").append(str);
}
function samoquanliang(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#samoquanliang").append(str);
}
function jinmaoquanliang(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#jinmaoquanliang").append(str);
}
function quanquanquanliang(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#quanquanquanliang").append(str);
}

//狗医疗保健
function goutiaosaohuichong(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#goutiaosaohuichong").append(str);
}
function gouleihenkouchou(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#gouleihenkouchou").append(str);
}
function gouzhenjunmanchong(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#gouzhenjunmanchong").append(str);
}
function gouganmaofuxie(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#gouganmaofuxie").append(str);
}
function gouquegaituomao(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#gouquegaituomao").append(str);
}

//狗生活品质
function gouwolongfushi(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#gouwolongfushi").append(str);
}
function gouqianyinzhuangbei(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#gouqianyinzhuangbei").append(str);
}
function gouweishiqiju(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#gouweishiqiju").append(str);
}
function goumeirongzaoxing(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#goumeirongzaoxing").append(str);
}
function gouwanjuleyuan(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#gouwanjuleyuan").append(str);
}

//狗清洁卫生
function goupaibianyongpin(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#goupaibianyongpin").append(str);
}
function goudiantuijian(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#goudiantuijian").append(str);
}
function gouxiangbo(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#gouxiangbo").append(str);
}
function gouxiaodu(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#gouxiaodu").append(str);
}



//猫粮
function jinkoumaoliang(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#jinkoumaoliang").append(str);
}
function guochangmaoliang(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#guochangmaoliang").append(str);
}
function gongnengxingmaoliang(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#gongnengxingmaoliang").append(str);
}
function maoguantou(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#maoguantou").append(str);
}
function maomaolingshi(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#maomaolingshi").append(str);
}

//猫医疗保健
function maotiaosaohuichong(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#maotiaosaohuichong").append(str);
}
function maoleihenkouchou(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#maoleihenkouchou").append(str);
}
function maozhenjunmanchong(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#maozhenjunmanchong").append(str);
}
function maoganmaofuxie(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#maoganmaofuxie").append(str);
}
function maoquegaituomao(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#maoquegaituomao").append(str);
}

//猫生活品质
function maodongjiwolong(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#maodongjiwolong").append(str);
}
function maoweishiqiju(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#maoweishiqiju").append(str);
}
function maomeirongzaoxing(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#maomeirongzaoxing").append(str);
}
function maowanju(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#maowanju").append(str);
}

//猫清洁卫生
function maosha(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#maosha").append(str);
}
function maoshapeng(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#maoshapeng").append(str);
}
function maomuyu(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#maomuyu").append(str);
}
function maoxiaodu(data){
	var str="";
	$.each(data, function(index,item) {
		str+='<dl><dt><a href="shangpinxiangxi.html?id='+item.id+'"><img src="'+item.img1+'"/></a></dt><dd><a href="shangpinxiangxi.html">'+item.name+'</a></dd><dd><span class="l">￥'+item.price+'</span><span class="r">已售'+item.sale+'</span></dd></dl>';
	});
	$("#maoxiaodu").append(str);
}



//连接后台
function getShopByType(typeid,num,successfun){
	var data={};
	data.typeid=typeid;
	data.num=num;
	var jsonStr=JSON.stringify(data);
	$.ajax({
		type:"post",
		url:"php/shop.php",
		async:true,
		contentType:'application/x-www-form-urlencoded',
		dataType:'json',
		data:jsonStr,
		success:successfun
	});
}
