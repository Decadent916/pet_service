window.onload = function(){
	var str = location.search;
	str = str.substr(str.indexOf("?id=")+4);
	console.log(str);
	getSet(str);
}

function getSet(keyword)
{
	var data={};
	data.keyword=keyword;
	var jsonStr=JSON.stringify(data);
	$.ajax({
		type:"post",
		url:"php/market.php",
		async:true,
		contentType:'application/x-www-form-urlencoded',
		dataType:'json',
		data:jsonStr,
		success:function(data){
			console.log(data);
			$.tmpl(copy,data).appendTo("#content");
		},
		error:function(error){
			//console.log(1);
			console.log(error);
		}
	});
}
