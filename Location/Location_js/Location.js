					
	$.get("../../Home_header_one.html",function(data){		
		$("#header").append(data);

		if(document.cookie!=""){
		 var user=JSON.parse(document.cookie);

		if(document.cookie!=""){
		//alert(document.cookie);
		var user=JSON.parse(document.cookie);

		$('#Home_Navigation_two').text(user.username);
		$('.LocForum_Right_userName>p').text(user.username);
		}else{
			$('#Home_Navigation_two').text('你好，请登录');
		}
	}
	});
    $.get("../../Home_footer.html",function(data){
		$("#footer").append(data);
	});


/////////////////////////////地图///////////////////////////////////////

/*var map = new BMap.Map("container");   // 创建地图实例
					var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
					map.centerAndZoom(point, 15);    // 初始化地图，设置中心点坐标和地图级别 */
    var map = new BMap.Map("container");
    var point = new BMap.Point(116.210087, 40.233122);
    map.centerAndZoom(point, 12);
    var marker = new BMap.Marker(point); // 创建标注    
    map.addOverlay(marker);
    
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r) {
        if (!this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            //alert('您的位置：'+r.point.lng+','+r.point.lat);
        }
    }, {
        enableHighAccuracy: true
    });
/////////////////////////////输入框获取焦点/////////////////////////////////////
var Loc_id = document.getElementsByClassName('Location_ID')[0].getElementsByTagName('input')[0];
					Loc_id.onfocus = function(){
						this.value=null;
					}
					Loc_id.onblur = function(){
						if(Loc_id.value==''){						
							this.value="请输入5位ID号码...";
						}
					}
					
//////////////////////////ID输入验证//////////////////////////////////////////////
var Loc_hint = document.getElementsByClassName('Location_hint')[0].getElementsByTagName('p')[0];
var Loc_btn = document.getElementsByClassName('Location_btn')[0].getElementsByTagName('button')[0];
var ID_info;
Loc_id.onchange=function(){
	if(Loc_id.value.length>5){
		Loc_hint.innerHTML='*您输入的格式有误';
	}else if(isNaN(Loc_id.value)){
		Loc_hint.innerHTML='*请输入5位数字';
	}else if(Loc_id.value.length==5){
		Loc_hint.innerHTML='';
		ID_info = Loc_id.value;
		//alert(ID_info);
	}else if(Loc_id.value.length<5){
		Loc_hint.innerHTML='*您输入的格式有误';
	}
}
//////////////////////////ID输入正确时显示相应的地图坐标////////////////////////////////////////////////
Loc_btn.onclick = function(){
	if(Loc_id.value.length==5){
		var point = new BMap.Point(116.210087, 40.2+''+ID_info);
	    map.panTo(point);
	    var marker = new BMap.Marker(point); // 创建标注    
	    map.addOverlay(marker);		
	}else{
		var point = new BMap.Point(116.210087, 40.233122);
	}   
}
 //////////////////页面中部小div框右上侧点击效果///////////////////////////////////////////////// 
var Loc_cShop = document.getElementsByClassName('Location_charShop')[0];
				Loc_cShop.onmousedown = function(){
					this.style.boxShadow='3px 2px rgb(140,136,135)inset';
					Loc_cShop.style.width=317+'px';
					Loc_cShop.style.height=197+'px';											
					this.lastElementChild.style.width=317+'px';
					this.lastElementChild.style.height=197+'px';
					
				}
				Loc_cShop.onmouseup = function(){
					this.style.boxShadow='0px 0px';
					Loc_cShop.style.width=320+'px';
					Loc_cShop.style.height=200+'px';
					this.lastElementChild.style.width=320+'px';
					this.lastElementChild.style.height=200+'px';
				}
 //////////////////页面中部小div框右下侧点击效果///////////////////////////////////////////////// 
var Loc_forum = document.getElementsByClassName('Location_forum')[0];
				Loc_forum.onmousedown = function(){
					this.style.boxShadow='3px 2px rgb(140,136,135)inset';
					Loc_forum.style.width=347+'px';
					Loc_forum.style.height=107+'px';											
					this.lastElementChild.style.width=347+'px';
					this.lastElementChild.style.height=107+'px';
					
				}
				Loc_forum.onmouseup = function(){
					this.style.boxShadow='0px 0px';
					Loc_forum.style.width=350+'px';
					Loc_forum.style.height=110+'px';
					this.lastElementChild.style.width=350+'px';
					this.lastElementChild.style.height=110+'px';
				}				
 //////////////////定时器效果/////////////////////////////////////////////////  
var Loc_balla = document.getElementsByClassName('Location_box_ballDownA')[0];
			var Loc_ballb = document.getElementsByClassName('Location_box_ballDownB')[0];
			var Loc_frame = document.getElementsByClassName('Location_frame')[0];
			var Loc_charShop = document.getElementsByClassName('Location_charShop')[0];
			var Loc_forum = document.getElementsByClassName('Location_forum')[0];
			
			var Loc_balla_timer;
			var Loc_ballb_timer;
			
			Loc_balla_timer=setInterval(function(){				
				Loc_balla.style.top=Loc_balla.offsetTop+10+"px";				
				if(Loc_balla.offsetTop==200){
					clearInterval(Loc_balla_timer,a());
				}				
			},15);			
			Loc_ballb_timer=setInterval(function(){
				Loc_ballb.style.top=Loc_ballb.offsetTop+10+"px";				
				if(Loc_ballb.offsetTop==240){
					clearInterval(Loc_ballb_timer);
				}
			},20);						
			function a(){
				var timer2;
				timer2=setInterval(function(){
					Loc_balla.style.top=Loc_balla.offsetTop-10+"px";
					if(Loc_balla.offsetTop==130){
						clearInterval(timer2,conceal());
					}
				},25);														
			}			
			function conceal(){
				setTimeout(function(){
					$('.Location_box_ballDownA').fadeToggle();
					$('.Location_box_ballDownB').fadeToggle();					
				},2000);
				move();
			}
			
			function move(){
				var timer1;
				var timer3;
				var timer4;
				timer1=setInterval(function(){
					Loc_frame.style.left=Loc_frame.offsetLeft+10+"px";
					
					if(Loc_frame.offsetLeft==170){
						clearInterval(timer1);
					}
					
				},15);
				
				timer3=setInterval(function(){
					Loc_charShop.style.left=Loc_charShop.offsetLeft-10+"px";
					if(Loc_charShop.offsetLeft==700){
						clearInterval(timer3);
					}
				},20);
				
				timer4=setInterval(function(){
					Loc_forum.style.left=Loc_forum.offsetLeft-10+"px";
					if(Loc_forum.offsetLeft==700){
						clearInterval(timer4);
					}
				},20);
			}
 //////////////////鼠标移入移出首页引导栏///////////////////////////////////////////////// 
$(function(){
	$(".Location1 a").mouseover(function(){
		$(this).parent().stop().animate({right: '0px'});
	});
	$(".Location1 a").mouseout(function(){
		$(this).parent().stop().animate({right: '-90px'});
	});
})
////////////////////后端php/////////////////////////////////////////
$.get("../../php/Location_Look.php",function(data){
	var arr=JSON.parse(data);
	var str="";
	$.each(arr,function(index,item){
		str+="<li>"+item.name+": "+item.story+"</li>";
	});
    $(".Location_buyNecklet_ul").append(str);
})

var i=document.getElementsByClassName('Location_buyNecklet_ul')[0].children.length;
var ul=document.getElementsByClassName('Location_buyNecklet_ul')[0];
var ultimer;
ultimer=setInterval(function(){
	
	ul.style.top=ul.offsetTop-10+"px";
	if(ul.offsetTop==420-i*25){
		clearInterval(ultimer);
	}
},5000);

$.get("../../php/Location_Look.php",function(data){
	var arr=JSON.parse(data);
	var str="";
	$.each(arr,function(index,item){
		str+="<li>"+item.name+": "+item.story+"</li>";
	});
    $(".Location_buyNecklet_ul").append(str);	
})


var ul=document.getElementsByClassName('Location_buyNecklet_ul')[0];
var ultimer;
ultimer2();
function ultimer2(){
ultimer=setInterval(function(){
var i=document.getElementsByClassName('Location_buyNecklet_ul')[0].children.length;
	ul.style.top=ul.offsetTop-20+"px";
	if(ul.offsetTop==(0-i*20)){
		clearInterval(ultimer);
		ul.style.top=0+"px";
		ultimer1();
	}
},5000);
}
function ultimer1(){
	ultimer2();
}

