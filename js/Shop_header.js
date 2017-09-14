$(function(){
	$.get("Shop_header.html",function(data){
		$("#header").append(data);
		if(document.cookie!=""){
//		alert(document.cookie);
		var user=JSON.parse(document.cookie);
		$('#Home_Navigation_two').text(user.username);
		}
		var btn = document.getElementById("Home_top_auto_btn");
		var tet = document.getElementById("Home_top_auto_text");
		btn.onclick=function()
		{
			var a = tet.value;
			var b = encodeURI(a);
			location.href='Home_Seek.html?keyword='+b;
		}
		var str=location.href;
		$(".Home_menu_ul_li a").css({"background-color":"#ff6655"});

		if(str.indexOf("petshow.html")>0)
		{
			
			$.each($(".Home_menu_ul li a"), function(i,n) {
				if($(n).html()=="爱宠秀秀")
				{
					$(this).parent().css({"background-color":"#e35342"});
				}
			});
			
		} 		
		if(str.indexOf("Home.html")>0)
		{
			
			$.each($(".Home_menu_ul li a"), function(i,n) {
				if($(n).html()=="首页")
				{
					$(this).parent().css({"background-color":"#e35342"});
				}
			});
			
		} 
			if(str.indexOf("aichong.html")>0)
				{	
					$.each($(".Home_menu_ul li a"), function(i,n) {
				if($(n).html()=="爱宠服务")
				{
					$(this).parent().css({"background-color":"#e35342"});
				}
			});
			
		} 
		if(str.indexOf("aichong.html")>0)
				{	
					$.each($(".Home_menu_ul li a"), function(i,n) {
				if($(n).html()=="爱宠服务")
				{
					$('#Home_menu_ul_result_imgi').css({'display':'block'});
				}
			});
			
		} 
		
		if(str.indexOf("shop.html")>0)
				{	
					$.each($(".Home_menu_ul li a"), function(i,n) {
				if($(n).html()=="爱宠商城")
				{
					$(this).parent().css({"background-color":"#e35342"});
				}
			});
			
		} 
		if(str.indexOf("shop.html")>0)
				{	
					$.each($(".Home_menu_ul li a"), function(i,n) {
				if($(n).html()=="爱宠商城")
				{
					$('#Home_menu_ul_result_imgoi').css({'display':'block'});
				}
			});
			
		} 
	});	
	$.get("Home_footer.html",function(data){
		$("#footer").append(data);
	});	
})