
$(function(){

	/*var str;*/
	var str = location.search;
	getSet(str);
})

function getSet(keyword)
{	
	var data={};
	data.keyword=keyword;
	var jsonStr=JSON.stringify(data);
	$.ajax({
		type:"post",
		url:"php/shop_face.php",
		async:true,
		contentType:'application/x-www-form-urlencoded',
		dataType:'json',
		data:jsonStr,
		success:function(data){
			//console.log(data);
			/*.each(data,function(index,item){
				
			})*/
			$.tmpl(copy_1,data).appendTo("#face_mian");
		},
		
		error:function(error){
			//console.log(1);
			console.log(error);
		}
	});
}
