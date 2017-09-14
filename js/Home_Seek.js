$(function() {

	$(".Home_Seek_GPS_info").mouseover(function() {
		$(".Home_Seek_GPS_info").css({
			'color': '#ff667a'
		})
	});

	$(".Home_Seek_GPS_info").mouseout(function() {
		$(".Home_Seek_GPS_info").css({
			'color': 'black'
		})
	});

	$(".Home_Seek_left_commodity_lump1").mouseover(function() {
		$(this).css({
			'border-color': '#ff667a'
		});
	});

	$(".Home_Seek_left_commodity_lump1").mouseout(function() {
		$(this).css({
			'border-color': '#dddddd'
		});
	});

});

//让首页输入关键字，传输到查询页面
window.onload = function() {
	var str = location.search;
	//抽取字符串 不要？name=
	str = str.substr(str.indexOf("?keyword=") + 9);
	str = decodeURI(str);
	var txt = document.getElementsByClassName("Home_Seek_GPS_foot");
	var txt1 = document.getElementsByClassName("Home_Seek_GPS_Result_foot");
	txt1[0].innerHTML = "爱宠" + str;
	txt[0].innerHTML = str;
	//运行ajax方法（第一个传的值是字符串，第二个值是num的数量，第三个值是回调函数）

	getSet(str,12,getSetSever);


}

//回调函数，拼接字符串
function getSetSever(data) {
	console.log(data);
	var str = "";
	var pno=0;
	$.each(data, function(index, item) {
		str += '<div class="Home_Seek_left_commodity_lump1"><a href="shangpinxiangxi.html?id=' + item.id + '"><dl class="Home_Seek_left_commodity_lump1_dl"><dt><img src="' + item.img1 + '"/></dt><dd class="Home_Seek_left_commodity_lump1_dd1">' + item.name + '</dd><dd class="Home_Seek_left_commodity_lump1_dd2">¥' + item.zhidaojia + '</dd></dl><div class="Home_Seek_left_commodity_lump1_bottom"><span class="Home_Seek_left_commodity_lump1_left">' + item.price + '条评价</span><span class="Home_Seek_left_commodity_lump1_right">已售' + item.sale + '件</span></div></a></div>';
		pno=pno+1;
	});
	console.log(pno);
	$("#Home_getServer").append(str);
}

//连接后台的AJAX
function getSet(keyword, num, successfun) {
	var data = {};
	data.num = num;
	data.keyword = keyword;
	var jsonStr = JSON.stringify(data);
	$.ajax({
		type: "post",
		url: "php/Home_Seek.php",
		async: true,
		contentType: 'application/x-www-form-urlencoded',
		dataType: 'json',
		data: jsonStr,
		success: successfun,
		error: function(error) {
			console.log(error);
		}
	});
}

//分页测试
