//判断是否登录
function isLogin() {
	var users = JSON.parse(document.cookie);
	return users;
}




//获取购物车数量
function getCartTotal(uid) {
	var data = {};
	data.userId = uid;
	var jsonStr = JSON.stringify(data);
	//获取购物车信息
	$.ajax({
		type: "post",
		url: "php/shoppingcarttotal.php",
		async: true,
		contentType: 'application/json',
		dataType: 'json',
		data: jsonStr,
		success: function(data) {
		$("#shop-rightli2-2").html(data[0].total);
		}
	});
}

function shoppingCartDetail(uid) {
	var data = {};
	data.userId = uid.user_ID;
	var jsonStr = JSON.stringify(data);
	$.ajax({
		type: "post",
		url: "php/getshoppingcart.php",
		async: true,
		contentType: 'application/json',
		dataType: 'json',
		data: jsonStr,
		success: function(datas) {
			if(datas.length > 0) {
				$("#shopcart-empty").css('display', 'none');
				$("#shopcart-full").css('display', 'none');
				$("#shopcart-full").css('display', 'block');
				var str = "";
				var zongjia=0.00;
				var zongshuliang=0;
				var zongzhongliang=0.00;
				$.each(datas, function(index, item) {
					str += '<li id="shopcart-full-shangpinlist"><div id="shopcart-full-shangpinlist1"><a href=""><img src="' + item.img1 + '"/></a></div><div id="shopcart-full-shangpinlist2"><a href="">' + item.name + '</a></div><div id="shopcart-full-shangpinlist3"><span>' + item.zhongliang + '</span></div><div id="shopcart-full-shangpinlist4"><span>' + item.danjia + '</span></div><div id="shopcart-full-shangpinlist5"><span> </span></div><div id="shopcart-full-shangpinlist6"><div><span>' + item.shuliang + '</span></div></div><div id="shopcart-full-shangpinlist7"><strong>' + item.danjia*item.shuliang + '</strong></div><div id="shopcart-full-shangpinlist8"><a onclick="deleteshop('+item.dingdanid+')">删除</a></div></li>';
					zongjia=zongjia+item.shuliang*item.danjia;
					zongshuliang=parseInt(zongshuliang)+parseInt(item.shuliang);
					zongzhongliang=zongzhongliang+item.shuliang*parseFloat(item.zhongliang);
				});
				$("#shopzongshuliang").html(zongshuliang);
				$("#shopjiesuanzongjia").html(zongjia);
				$("#shopzongzhongliang").html(zongzhongliang);
				$("#shopcart-full-shangpin").append(str);
			} else {
				$("#shopcart-empty").css('display', 'none');
				$("#shopcart-full").css('display', 'none');
				$("#shopcart-empty").css('display', 'block');
			}

		}
	});
}

function deleteshop(dingdanid){
	var users=JSON.parse(document.cookie);
	var data = {};
	data.dingdanid=dingdanid;
	var jsonStr = JSON.stringify(data);
	$.ajax({
		type: "post",
		url: "php/deleteshop.php",
		async: true,
		contentType: 'application/json',
		dataType: 'json',
		data: jsonStr,
		success: function(data) {
			alert("删除订单成功");
		}
	});
}
