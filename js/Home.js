$(function(){
	$.get("Home_header_two.html",function(data){		
		$("#header").append(data);
		header();
		
		
		if(document.cookie!="")
		{
			var user=JSON.parse(document.cookie);
			$('#Home_Navigation_two').text(user.username);
		};
		
		
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
		footer();
	});	
		
	//轮播	
			var i = 0;
			var time;
			time = setInterval(function(){
				i++;
				if(i>5){
				i=1;
			}
			move(i);
		},4000);
	//让图片滚动，同时让     Home_list-li>li  跟随图片改变颜色
		function move(n){
			var a = ['white','#ffe58e','#f7dbac','white','#dfdafa'];
			var b = n-1;
			$('.Home_bag').css({'background-color':a[b]});
			$('.Home_list-li>li').css({'background-color':'white','color':'black'});
			$('.Home_list-li>li').eq(b).css({'background-color':'#ff6655','color':'white'});		
			$('.Home_box').stop().animate({'margin-left':-n*1190+'px'},400,function(){
				if(n==5){							
					$('.Home_box').css({'margin-left':0+'px'})
				}
			})					
		}
		$('.Home_list-li>li').mouseover(function(){
			clearInterval(time);
//			time = null;
			i = Number($(this).text());		//鼠标移入哪个下标 下一个图片根据下标下一个动
			move($(this).text())			//鼠标移入哪个哪个动	
			
		});
			$('.Home_list-li>li').mouseout(function(){
				time = setInterval(function(){
				i++;
				if(i>5){
					i=1;
				}
				move(i);
			},2000);
		});

	
	//轮播右边部分
	$(".Home_select_one").mouseover(function(){			
		$(".Home_select_one2").css({'color':'#ff667a'})														
	})	
				
	$(".Home_select_one").mouseout(function(){			
		$(".Home_select_one2").css({'color':'black'})														
	})
	$(".Home_select_two").mouseover(function(){			
		$(".Home_select_two2").css({'color':'#ff667a'})														
	})	
				
	$(".Home_select_two").mouseout(function(){			
		$(".Home_select_two2").css({'color':'black'})														
	})
	$(".Home_select_three").mouseover(function(){			
		$(".Home_select_three2").css({'color':'#ff667a'})														
	})	
				
	$(".Home_select_three").mouseout(function(){			
		$(".Home_select_three2").css({'color':'black'})														
	})
	
	$(".Home_select_four").mouseover(function(){			
		$(".Home_select_four2").css({'color':'#ff667a'})														
	})	
				
	$(".Home_select_four").mouseout(function(){			
		$(".Home_select_four2").css({'color':'black'})														
	})
	
	//轮播下面过渡部分
	
	$(".Home_transit_one").mouseover(function()
	{			
		$(".Home_transit_one1").css({'color':'#ff667a'})														
	})	
				
	$(".Home_transit_one").mouseout(function()
	{			
		$(".Home_transit_one1").css({'color':'#999999'})														
	})
	
	$(".Home_transit_two").mouseover(function()
	{			
		$(".Home_transit_two1").css({'color':'#ff667a'})														
	})	
				
	$(".Home_transit_two").mouseout(function()
	{			
		$(".Home_transit_two1").css({'color':'#999999'})														
	})
	
	$(".Home_transit_three").mouseover(function()
	{			
		$(".Home_transit_three1").css({'color':'#ff667a'})														
	})	
				
	$(".Home_transit_three").mouseout(function()
	{			
		$(".Home_transit_three1").css({'color':'#999999'})	
	})
	
		$(".Home_transit_four").mouseover(function()
	{			
		$(".Home_transit_four1").css({'color':'#ff667a'})														
	})	
				
	$(".Home_transit_four").mouseout(function()
	{			
		$(".Home_transit_four1").css({'color':'#999999'})														
	})
	
		$(".Home_transit_woker2").mouseover(function()
	{			
		$(".Home_transit_woker2").css({'color':'#ff667a'})														
	})	
				
	$(".Home_transit_woker2").mouseout(function()
	{			
		$(".Home_transit_woker2").css({'color':'black'})														
	})
		$(".Home_transit_woker3").mouseover(function()
	{			
		$(".Home_transit_woker3").css({'color':'#ff667a'})														
	})	
				
	$(".Home_transit_woker3").mouseout(function()
	{			
		$(".Home_transit_woker3").css({'color':'black'})														
	})
	
	
});	
	
			
			//第一大块主推商城轮播
			$(function(){
				var i = 0;
				var time;
				time = setInterval(function(){
					i++;
					if(i>3){
						i=1;
					}
					move(i);
				},3800);
				//让图片滚动，同时让      list-li>li  跟随图片改变颜色
				function move(n){
					var b = n-1;
					$('.Home_Shop_Lump_left_top_list_li>li').css({'background-color':'#606060'});
					$('.Home_Shop_Lump_left_top_list_li>li').eq(b).css({'background-color':'#f86657'});
					$('.Home_Shop_Lump_left_top_box').stop().animate({'margin-left':-n*360+'px'},400,function(){
						if(n==3){							
							$('.Home_Shop_Lump_left_top_box').css({'margin-left':0+'px'})
						}
					})					
				}
				$('.Home_Shop_Lump_left_top_list_li>li').mouseover(function(){
					clearInterval(time);
//					time = null;
					i = Number($(this).text());		//鼠标移入哪个下标 下一个图片根据下标下一个动
					move($(this).text())			//鼠标移入哪个哪个动
//					$('#box').stop(true,true);		//让轮播动画马上停止，直接执行鼠标移入动画			
				});
				$('.Home_Shop_Lump_left_top_list_li>li').mouseout(function(){
					time = setInterval(function(){
					i++;
					if(i>3){
						i=1;
					}
					move(i);
				},2000);
			})
});
		
		
		//第一大块主推商城的jq代码
$(function(){
	
	//标题
	$(".Home_Shop_Lump_left_buttom_text>a").mouseover(function()
	{			
		$(".Home_Shop_Lump_left_buttom_text>a").css({'text-decoration': 'underline'})		
	})
	$(".Home_Shop_Lump_left_buttom_text>a").mouseout(function()
	{			
		$(".Home_Shop_Lump_left_buttom_text>a").css({'text-decoration': 'none'})		
	})
	
	
	
	
	$(".Home_Shop_Lump_right_top_text>a").mouseover(function()
	{			
		$(".Home_Shop_Lump_right_top_text>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Shop_Lump_right_top_text>a").mouseout(function()
	{			
		$(".Home_Shop_Lump_right_top_text>a").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	
	$(".Home_Shop_Lump_right_center_text>a").mouseover(function()
	{			
		$(".Home_Shop_Lump_right_center_text>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Shop_Lump_right_center_text>a").mouseout(function()
	{			
		$(".Home_Shop_Lump_right_center_text>a").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Shop_Lump_right_buttom_text>a").mouseover(function()
	{			
		$(".Home_Shop_Lump_right_buttom_text>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Shop_Lump_right_buttom_text>a").mouseout(function()
	{			
		$(".Home_Shop_Lump_right_buttom_text>a").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Shop_Lump_right_buttom_hint").mouseover(function()
	{			
		$(".Home_Shop_Lump_right_buttom_hint").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Shop_Lump_right_buttom_hint").mouseout(function()
	{			
		$(".Home_Shop_Lump_right_buttom_hint").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	
	
	//内容
	$(".Home_Shop_Lump_left_buttom_one1>a").mouseover(function()
	{			
		$(".Home_Shop_Lump_left_buttom_one1>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Shop_Lump_left_buttom_one1>a").mouseout(function()
	{			
		$(".Home_Shop_Lump_left_buttom_one1>a").css({'color':'black','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Shop_Lump_left_buttom_two1>a").mouseover(function()
	{			
		$(".Home_Shop_Lump_left_buttom_two1>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Shop_Lump_left_buttom_two1>a").mouseout(function()
	{			
		$(".Home_Shop_Lump_left_buttom_two1>a").css({'color':'black','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Shop_Lump_right_buttom_dl1>a").mouseover(function()
	{			
		$(".Home_Shop_Lump_right_buttom_dl1>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Shop_Lump_right_buttom_dl1>a").mouseout(function()
	{			
		$(".Home_Shop_Lump_right_buttom_dl1>a").css({'color':'black','text-decoration': 'none'})		
	})
	
	
});





	
			//第二大块主推服务轮播
			$(function(){
				var i = 0;
				var time;
				time = setInterval(function(){
					i++;
					if(i>3){
						i=1;
					}
					move(i);
				},3500);
				//让图片滚动，同时让      list-li>li  跟随图片改变颜色
				function move(n){
					var b = n-1;
					$('.Home_Servel_Lump_left_top_list_li>li').css({'background-color':'#606060'});
					$('.Home_Servel_Lump_left_top_list_li>li').eq(b).css({'background-color':'#f86657'});
					$('.Home_Servel_Lump_left_top_box').stop().animate({'margin-left':-n*360+'px'},400,function(){
						if(n==3){							
							$('.Home_Servel_Lump_left_top_box').css({'margin-left':0+'px'})
						}
					})					
				}
				$('.Home_Servel_Lump_left_top_list_li>li').mouseover(function(){
					clearInterval(time);
//					time = null;
					i = Number($(this).text());		//鼠标移入哪个下标 下一个图片根据下标下一个动
					move($(this).text())			//鼠标移入哪个哪个动
//					$('#box').stop(true,true);		//让轮播动画马上停止，直接执行鼠标移入动画			
				});
				$('.Home_Servel_Lump_left_top_list_li>li').mouseout(function(){
					time = setInterval(function(){
					i++;
					if(i>3){
						i=1;
					}
					move(i);
				},2000);
			})
});


//第二大块主推服务的jq代码
$(function(){
	
	//标题
	$(".Home_Servel_Lump_left_buttom_text>a").mouseover(function()
	{			
		$(".Home_Servel_Lump_left_buttom_text>a").css({'text-decoration': 'underline'})		
	})
	$(".Home_Servel_Lump_left_buttom_text>a").mouseout(function()
	{			
		$(".Home_Servel_Lump_left_buttom_text>a").css({'text-decoration': 'none'})		
	})
	
	
	
	
	$(".Home_Servel_Lump_right_top_text>a").mouseover(function()
	{			
		$(".Home_Servel_Lump_right_top_text>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Servel_Lump_right_top_text>a").mouseout(function()
	{			
		$(".Home_Servel_Lump_right_top_text>a").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	
	$(".Home_Servel_Lump_right_center_text>a").mouseover(function()
	{			
		$(".Home_Servel_Lump_right_center_text>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Servel_Lump_right_center_text>a").mouseout(function()
	{			
		$(".Home_Servel_Lump_right_center_text>a").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Servel_Lump_right_buttom_text>a").mouseover(function()
	{			
		$(".Home_Servel_Lump_right_buttom_text>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Servel_Lump_right_buttom_text>a").mouseout(function()
	{			
		$(".Home_Servel_Lump_right_buttom_text>a").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Servel_Lump_right_buttom_hint").mouseover(function()
	{			
		$(".Home_Servel_Lump_right_buttom_hint").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Servel_Lump_right_buttom_hint").mouseout(function()
	{			
		$(".Home_Servel_Lump_right_buttom_hint").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	
	
	//内容
	$(".Home_Servel_Lump_left_buttom_one1>a").mouseover(function()
	{			
		$(".Home_Servel_Lump_left_buttom_one1>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Servel_Lump_left_buttom_one1>a").mouseout(function()
	{			
		$(".Home_Servel_Lump_left_buttom_one1>a").css({'color':'black','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Servel_Lump_left_buttom_two1>a").mouseover(function()
	{			
		$(".Home_Servel_Lump_left_buttom_two1>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Servel_Lump_left_buttom_two1>a").mouseout(function()
	{			
		$(".Home_Servel_Lump_left_buttom_two1>a").css({'color':'black','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Servel_Lump_right_buttom_dl1>a").mouseover(function()
	{			
		$(".Home_Servel_Lump_right_buttom_dl1>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Servel_Lump_right_buttom_dl1>a").mouseout(function()
	{			
		$(".Home_Servel_Lump_right_buttom_dl1>a").css({'color':'black','text-decoration': 'none'})		
	})
	
	
});




	
			//第三大块主推秀秀轮播
			$(function(){
				var i = 0;
				var time;
				time = setInterval(function(){
					i++;
					if(i>3){
						i=1;
					}
					move(i);
				},3000);
				//让图片滚动，同时让      list-li>li  跟随图片改变颜色
				function move(n){
					var b = n-1;
					$('.Home_Show_Lump_left_top_list_li>li').css({'background-color':'#606060'});
					$('.Home_Show_Lump_left_top_list_li>li').eq(b).css({'background-color':'#f86657'});
					$('.Home_Show_Lump_left_top_box').stop().animate({'margin-left':-n*360+'px'},400,function(){
						if(n==3){							
							$('.Home_Show_Lump_left_top_box').css({'margin-left':0+'px'})
						}
					})					
				}
				$('.Home_Show_Lump_left_top_list_li>li').mouseover(function(){
					clearInterval(time);
//					time = null;
					i = Number($(this).text());		//鼠标移入哪个下标 下一个图片根据下标下一个动
					move($(this).text())			//鼠标移入哪个哪个动
//					$('#box').stop(true,true);		//让轮播动画马上停止，直接执行鼠标移入动画			
				});
				$('.Home_Show_Lump_left_top_list_li>li').mouseout(function(){
					time = setInterval(function(){
					i++;
					if(i>3){
						i=1;
					}
					move(i);
				},2000);
			})
});







//第三大块主推秀秀的jq代码
$(function(){
	
	//标题
	$(".Home_Show_Lump_left_buttom_text>a").mouseover(function()
	{			
		$(".Home_Show_Lump_left_buttom_text>a").css({'text-decoration': 'underline'})		
	})
	$(".Home_Show_Lump_left_buttom_text>a").mouseout(function()
	{			
		$(".Home_Show_Lump_left_buttom_text>a").css({'text-decoration': 'none'})		
	})
	
	
	
	
	$(".Home_Show_Lump_right_top_text>a").mouseover(function()
	{			
		$(".Home_Show_Lump_right_top_text>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Show_Lump_right_top_text>a").mouseout(function()
	{			
		$(".Home_Show_Lump_right_top_text>a").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	
	$(".Home_Show_Lump_right_center_text>a").mouseover(function()
	{			
		$(".Home_Show_Lump_right_center_text>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Show_Lump_right_center_text>a").mouseout(function()
	{			
		$(".Home_Show_Lump_right_center_text>a").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Show_Lump_right_buttom_text>a").mouseover(function()
	{			
		$(".Home_Show_Lump_right_buttom_text>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Show_Lump_right_buttom_text>a").mouseout(function()
	{			
		$(".Home_Show_Lump_right_buttom_text>a").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Show_Lump_right_buttom_hint").mouseover(function()
	{			
		$(".Home_Show_Lump_right_buttom_hint").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Show_Lump_right_buttom_hint").mouseout(function()
	{			
		$(".Home_Show_Lump_right_buttom_hint").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	
	
	//内容
	$(".Home_Show_Lump_left_buttom_one1>a").mouseover(function()
	{			
		$(".Home_Show_Lump_left_buttom_one1>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Show_Lump_left_buttom_one1>a").mouseout(function()
	{			
		$(".Home_Show_Lump_left_buttom_one1>a").css({'color':'black','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Show_Lump_left_buttom_two1>a").mouseover(function()
	{			
		$(".Home_Show_Lump_left_buttom_two1>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Show_Lump_left_buttom_two1>a").mouseout(function()
	{			
		$(".Home_Show_Lump_left_buttom_two1>a").css({'color':'black','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Show_Lump_right_buttom_dl1>a").mouseover(function()
	{			
		$(".Home_Show_Lump_right_buttom_dl1>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Show_Lump_right_buttom_dl1>a").mouseout(function()
	{			
		$(".Home_Show_Lump_right_buttom_dl1>a").css({'color':'black','text-decoration': 'none'})		
	})
	
	
});






	
			//第四大块主推定位轮播
			$(function(){
				var i = 0;
				var time;
				time = setInterval(function(){
					i++;
					if(i>3){
						i=1;
					}
					move(i);
				},3500);
				//让图片滚动，同时让      list-li>li  跟随图片改变颜色
				function move(n){
					var b = n-1;
					$('.Home_Location_Lump_left_top_list_li>li').css({'background-color':'#606060'});
					$('.Home_Location_Lump_left_top_list_li>li').eq(b).css({'background-color':'#f86657'});
					$('.Home_Location_Lump_left_top_box').stop().animate({'margin-left':-n*360+'px'},400,function(){
						if(n==3){							
							$('.Home_Location_Lump_left_top_box').css({'margin-left':0+'px'})
						}
					})					
				}
				$('.Home_Location_Lump_left_top_list_li>li').mouseover(function(){
					clearInterval(time);
//					time = null;
					i = Number($(this).text());		//鼠标移入哪个下标 下一个图片根据下标下一个动
					move($(this).text())			//鼠标移入哪个哪个动
//					$('#box').stop(true,true);		//让轮播动画马上停止，直接执行鼠标移入动画			
				});
				$('.Home_Location_Lump_left_top_list_li>li').mouseout(function(){
					time = setInterval(function(){
					i++;
					if(i>3){
						i=1;
					}
					move(i);
				},2000);
			})
});







//第四大块主推定位的jq代码
$(function(){
	
	//标题
	$(".Home_Location_Lump_left_buttom_text>a").mouseover(function()
	{			
		$(".Home_Location_Lump_left_buttom_text>a").css({'text-decoration': 'underline'})		
	})
	$(".Home_Location_Lump_left_buttom_text>a").mouseout(function()
	{			
		$(".Home_Location_Lump_left_buttom_text>a").css({'text-decoration': 'none'})		
	})
	
	
	
	
	$(".Home_Location_Lump_right_top_text>a").mouseover(function()
	{			
		$(".Home_Location_Lump_right_top_text>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Location_Lump_right_top_text>a").mouseout(function()
	{			
		$(".Home_Location_Lump_right_top_text>a").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	
	$(".Home_Location_Lump_right_center_text>a").mouseover(function()
	{			
		$(".Home_Location_Lump_right_center_text>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Location_Lump_right_center_text>a").mouseout(function()
	{			
		$(".Home_Location_Lump_right_center_text>a").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Location_Lump_right_buttom_text>a").mouseover(function()
	{			
		$(".Home_Location_Lump_right_buttom_text>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Location_Lump_right_buttom_text>a").mouseout(function()
	{			
		$(".Home_Location_Lump_right_buttom_text>a").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Location_Lump_right_buttom_hint").mouseover(function()
	{			
		$(".Home_Location_Lump_right_buttom_hint").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Location_Lump_right_buttom_hint").mouseout(function()
	{			
		$(".Home_Location_Lump_right_buttom_hint").css({'color':'#ff667a','text-decoration': 'none'})		
	})
	
	
	
	
	
	//内容
	$(".Home_Location_Lump_left_buttom_one1>a").mouseover(function()
	{			
		$(".Home_Location_Lump_left_buttom_one1>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Location_Lump_left_buttom_one1>a").mouseout(function()
	{			
		$(".Home_Location_Lump_left_buttom_one1>a").css({'color':'black','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Location_Lump_left_buttom_two1>a").mouseover(function()
	{			
		$(".Home_Location_Lump_left_buttom_two1>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Location_Lump_left_buttom_two1>a").mouseout(function()
	{			
		$(".Home_Location_Lump_left_buttom_two1>a").css({'color':'black','text-decoration': 'none'})		
	})
	
	
	
	$(".Home_Location_Lump_right_buttom_dl1>a").mouseover(function()
	{			
		$(".Home_Location_Lump_right_buttom_dl1>a").css({'color':'#ff667a','text-decoration': 'underline'})														
	})	
				
	$(".Home_Location_Lump_right_buttom_dl1>a").mouseout(function()
	{			
		$(".Home_Location_Lump_right_buttom_dl1>a").css({'color':'black','text-decoration': 'none'})		
	})
	
	//底部
	
	$(".Home_one_ul_li>a").mouseover(function()
	{			
		$(this).css({'text-decoration': 'underline'})														
	})	
				
	$(".Home_one_ul_li>a").mouseout(function()
	{			
		$(this).css({'text-decoration': 'none'})		
	})
	
	$(".Home_Last_bottom_ul_li>a").mouseover(function()
	{			
		$(this).css({'text-decoration': 'underline'})														
	})	
				
	$(".Home_Last_bottom_ul_li>a").mouseout(function()
	{			
		$(this).css({'text-decoration': 'none'})		
	})
	
});

