function header_one(){
		//导航栏
	$(".Home_Navigation_result").mouseover(function()
	{			
		$(this).css({'color':'#ff667a','text-decoration': 'underline'})														
	});
				
	$(".Home_Navigation_result").mouseout(function()
	{			
		$(this).css({'color':'black','text-decoration': 'none'})		
	});
}

function header(){

	//搜索栏
	$(".Home_top_auto_result").mouseover(function()
	{			
		$(this).css({'color':'#ff667a'})														
	})	
				
	$(".Home_top_auto_result").mouseout(function()
	{			
		$(this).css({'color':'black'})														
	});
	
	

	
	//菜单栏
	$(".Home_menu_ul_result").click(function()
	{			
		$(this).css({'background-color': '#e35342'})														
	});	
				
	$(".Home_menu_ul_result").click(function()
	{			
		$(this).css({'background-color':'#ff6655'})	
	});
	$("#Home_menu_ul_li").click(function()
	{			
		$(this).css({'background-color': '#e35342'})														
	});
				
	$("#Home_menu_ul_li").click(function()
	{			
		$(this).css({'background-color':'#ff6655'})	
	});
	//坑爹的四张图片
	$("#Home_menu_ul_result_id").click(function()
	{			
		$('#Home_menu_ul_result_imgi').css({'display':'block'})														
	});
	$("#Home_menu_ul_result_id").click(function()
	{			
		$('#Home_menu_ul_result_imgi').css({'display':'none'})														
	});				
	$("#Home_menu_ul_result_id_id").click(function()
	{			
		$('#Home_menu_ul_result_imgoi').css({'display':'block'})														
	});
	$("#Home_menu_ul_result_id_id").click(function()
	{			
		$('#Home_menu_ul_result_imgoi').css({'display':'none'})														
	});
	

	
	//搜索文本框获取焦点文字消失
	$("#Home_top_auto_text").click(function(){
		
		if($(this).val()=="请输入关键字")
		{
			$(this).val(""); 
		}  
	$("#Home_top_auto_text").blur(function(){ 
		if($(this).val()=="") 
			{ 
		$(this).val("请输入关键字"); 
			} 
		}) 
	});
	header_one();
	header_search();
	
}
function header_search(){
	//导航栏根据鼠标滚轮移动
			
				var a = $('.Home_menu');
				var b = a.offset();
				$(document).scroll(function(){
					var c = $(document).scrollTop();
					if(b.top<=c){
						a.css({'position':'fixed','top':'0'})
					}else{
						a.css({'position':'relative','top':'0'})
					}
				});
}

//让首页输入关键字，传输到查询页面
//window.onload = function()
//{
//	var btn = document.getElementById("Home_top_auto_btn");
//	var tet = document.getElementById("Home_top_auto_text");
//	btn.onclick=function()
//	{
//		var a = tet.value;
//		var b = encodeURI(a);
//		location.href='Home_Seek.html?keyword='+b;
//	}
//}

