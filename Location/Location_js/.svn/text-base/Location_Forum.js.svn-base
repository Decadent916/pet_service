
	$.get("../../Home_header_one.html",function(data){
		$("#header").append(data);
		
		if(document.cookie!=""){
		 var user=JSON.parse(document.cookie);
		$('#Home_Navigation_two').text(user.username);
		$('.LocForum_Right_userName>p').text(user.username);
		}else{
			$('#Home_Navigation_two').text('你好，请登录');
		}
	});	
    $.get("../../Home_footer.html",function(data){
		$("#footer").append(data);
	});
////////////////////搜索出来的东西/////////////////////////////////////////////////////
$('.LocForum_Left_seek>button').click(function(){
	$(".LocForum_Left_seek_two").animate({
		left: '0px'
	})
	showSeek();
	$(".table_one>tr").remove();
	var data={};	
	data.keyValue=$('.LocForum_Left_seek>input').val();
	var jsonstr = JSON.stringify(data);
	$.ajax({
		type:"post",
		url:"../../php/Location_forum_seek.php",
		contentType:"application/json",
		data:jsonstr,
		dataType:"json",
		success:function(data){
		console.log(data);
		//var arr=JSON.parse(data);
		var str="";
	    $.each(data,function(index,item){
				
			str+='<tr><td>'+item.forum_content+'</td></tr>';
		});	
		 $(".table_one").prepend(str);
		},
		error:function(error){
			console.log(error.responseText);
		},
	});
})

function showSeek(){
setTimeout(function(){
	$(".LocForum_Left_seek_two").animate({
		left: '-350px'
	})
},5000);
}



  //////////////////右侧点击发送时按钮的变化///////////////////////////////////////////////// 
$(function(){
	
	
	$('.LocForum_Right_refer').on('mousedown',function(event){
		$(event.target).animate({
			//width:"118px",
			height:"28px",
			boxShow:"2px 2px"
		});		
var LocRefer_btn = document.getElementsByClassName('LocForum_Right_refer')[0].getElementsByTagName('button')[0];
	LocRefer_btn.style.boxShadow="1px 1px";
		$('.LocForum_LeftRight').slideDown();
	});
	$('.LocForum_Right_refer').on('mouseup',function(event){
		$(event.target).animate({
			//width:"120px",
			height:"30px"
		});
		var LocRefer_btn = document.getElementsByClassName('LocForum_Right_refer')[0].getElementsByTagName('button')[0];

		LocRefer_btn.style.boxShadow="0px 0px";
	});
	//点击no取消
	$('.LocForum_LeftRight_font2').on('mousedown',function(event){
		$(event.target).parent().slideUp();
	
	});
	
	//点击yes消息添加到历史记录
	$('.LocForum_LeftRight_font1').on('mousedown',function(event){
		if($('.LocForum_Right_publish>textarea').val()==''){
			$('.LocForum_Right_publish>textarea').val("请输入内容...");
			//$('.LocForum_LeftRight').css('display','none');
			$('.LocForum_Right_publish>textarea').focus(function(){	
					$('.LocForum_Right_publish>textarea').val('');
				});
		}
//////////登录时用的
		/*else if($('.LocForum_Right_userName>p').text()=='Compellation'){
			$('.LocForum_Right_userName>p').text("请先登录...");			
		}*/
		
		else{			
		horizon();		
		$('.LocForum_Right_hisInfo>ul').prepend(showTime());
   		line();
   		words();
		$(event.target).parent().slideUp();
		new_forumContent();
		Info_Left();
		}
		
	});
	 //////////////////将新发布的内容添加到论坛数据库///////////////////////////////////////////////// 
	
 function new_forumContent(){

	var data={};	
	data.user_ID=JSON.parse(document.cookie).user_ID;
	data.forum_content=$('.LocForum_Right_publish>textarea').val();	
	data.forum_time=showTime();
	var jsonstr = JSON.stringify(data);
	$.ajax({
		type:"post",
		url:"../../php/Forum_Forum.php",
		contentType:"application/json",
		data:jsonstr,
		dataType:"json",
		success:function(data){
			//console.log(data);
		},
		error:function(error){
			//console.log(error.responseText);
		},
	});
	
}
	function showTime(){		  
		  var mydate = new Date();
		  var str = "" +(mydate.getMonth()+1) + "/";
		  str += mydate.getDate() + "/";
		  str += mydate.getHours() + ":";
		  str += mydate.getMinutes() + "";		  
		  return ""+str;
		}	
	function line(){
		$('.LocForum_Right_hisInfo>ul').prepend($('<br />'));
	}
	function horizon(){			
		$('.LocForum_Right_hisInfo>ul').prepend($("<hr />"));
	}		
	function words(){
		$infoNews = $('.LocForum_Right_publish textarea').val();
		$('.LocForum_Right_hisInfo>ul').prepend($infoNews);
		
	}
	

//////////////////右侧点击完YES后将要发布的内容添加到左侧消息////////////////////////////////////////
	function Info_Left(){		
	
		line(); //加一个换行
		$('.mesQueue_ul').prepend($('<li>')); //加大信息li 
		$userName=$('.LocForum_Right_userName>p').text();
		$userIssue=$('.LocForum_Right_publish>textarea').val();
		li_ul_FourLi($userName,$userIssue,showTime());  //li里面加ul 同时在ul里再加4个li
	}	

		
//////////////////点击黄色箭头进行翻页////////////////////////////////////////	
var Loc_leftArrows = document.getElementsByClassName("LocForum_Left_leftArrows")[0];
var Loc_rightArrows = document.getElementsByClassName("LocForum_Left_rightArrows")[0];
var mesQueue_ul=document.getElementsByClassName('mesQueue_ul')[0];
	
	Loc_leftArrows.onclick=function(){
		//alert("s");
		mesQueue_ul.style.top=mesQueue_ul.offsetTop+650+"px";
		
	}
	Loc_rightArrows.onclick=function(){
		//alert("a");
		mesQueue_ul.style.top=mesQueue_ul.offsetTop-650+"px";
		
	}
//////////////////进入页面的箭头导向图////////////////////////////////////////	
var LocDirection_img = document.getElementsByClassName('LocForum_box_direction')[0].getElementsByTagName('img')[0];
var LocDirection_img_time;
var LocDirection_img_time1;
var LocDirection_img_time2;

LocDirection_img_time=setInterval(function(){
	LocDirection_img.style.left=LocDirection_img.offsetLeft+1+"px";
	if(LocDirection_img.offsetLeft==760){
		clearInterval(LocDirection_img_time);
		means_One();
	}
},8);


function means_One(){
	LocDirection_img_time1=setInterval(function(){
	LocDirection_img.style.left=LocDirection_img.offsetLeft-1+"px";
	if(LocDirection_img.offsetLeft==660){
		clearInterval(LocDirection_img_time1);
		means_Two();
	}
},8);
}

function means_Two(){
	LocDirection_img_time2=setInterval(function(){
	LocDirection_img.style.left=LocDirection_img.offsetLeft+1+"px";
	if(LocDirection_img.offsetLeft==760){
		clearInterval(LocDirection_img_time2);		
		$('.LocForum_box_direction>img').fadeOut();	
		
	}
},8);
}

 //////////////////加载页面时后台调用PHP历史评论数据///////////////////////////////////////////////// 
$.get("../../php/Location_Forum.php",{user_name:JSON.parse(document.cookie).username},function(data){
	var arr=JSON.parse(data);
	//var str="";
	$.each(arr,function(index,item){
		
		$('.LocForum_Right_hisInfo>ul').prepend($("<hr />"));
		$('.LocForum_Right_hisInfo>ul').prepend(item.forum_time);
		$('.LocForum_Right_hisInfo>ul').prepend($('<br />'));
		$('.LocForum_Right_hisInfo>ul').prepend(item.forum_content);
		$('.LocForum_Right_hisInfo>ul').prepend($('<br />'));
	});
    
})
 
 /////////////////////论坛所有信息///////////////////////////////////////////////////////////////
 $.get('../../php/upload_Forum.php',function(data){

	var arr=JSON.parse(data);
	$.each(arr,function(index,item){
		$('.mesQueue_ul').prepend($('<li value="'+item.forum_ID+'">'));
		var str="";
		$.each(item.reply,function(index,item1){
			
			str+='<li value="'+item.forum_ID+'">'+item1.username+": "+item1.reply_conyent+"</li>";
		})
		li_ul_FourLi(item.username,item.forum_content,item.forum_time,str);
		
		});		
	});

////////////////////////////往里添加数据的方法////////////////////////
function li_ul_FourLi(a,b,c,d){//a:用户名      b:发布信息的内容  c:时间 d:评论内容
		
		$li=$('.mesQueue_ul>li');
				
			$li.each(function(){//循环遍历一共有多少个Li
				$(this).addClass("mesQueue_ul_addLi");
				$(this).fadeTo(2000,1);
		   		if($(this).children().length==0){//判断一个循环到的li里面有没有元素，如果没有
				$(this).append($('<ul>'));//加一个ul标签
					for($i=1;$i<=5;$i++){//并且循环添加4个li标签												
						$(this).children().append($('<li>'));												
					}
										
					//$userName=$('.LocForum_Right_userName>p').text();
					$(this).children().children().first().text(a);
					$(this).children().children().first().addClass("Loc_userNmae");
					
					//$userIssue=$('.LocForum_Right_publish>textarea').val();
					$(this).children().children().slice(1,2).text(b);
					$(this).children().children().slice(1,2).animate({
						fontSize:'18px'
					},10);
					$(this).children().children().slice(1,2).css("background-color","rgba(0,0,0,0.3)"); 
					
					$replyBtn=$('<button>').text("回复");
					$replyBtn.addClass("Loc_replyBtn");
					
					$(this).children().children().slice(2,3).append(c);
					$(this).children().children().slice(2,3).addClass('temporary_d');
					$(this).children().children().slice(3,4).append($replyBtn);
					
					$(this).children().children().slice(4,5).append(d);
					
					
					$textarea="<textarea class='reply'/>";//定义一个回复的输入框
					$btn="<input type='button' class='bTn' value='UP'/>";
					
					$(this).find($('button[class="Loc_replyBtn"]')).click(function(){
			
						if($('.mesQueue_ul textarea').length>0){//判断一下里面有没有打开的回复框
							
								$(".reply").remove();
								$('.bTn').remove();
							
						}else{
							$(this).parent().next().prepend($btn);
							$(this).parent().next().prepend($textarea);
							
								$('.bTn').click(function(){
								
									if($(".reply").val()==""){
										//alert("a");
									}else{
										$textVal=$(".reply").val();
										$str=$('.LocForum_Right_userName>p').text()+":"+$textVal;
										$(this).parent().prepend("<li>");
										$(this).parent().children().slice(0,1).html($str);
										
										
									//////////将回复的内容添加到数据库////////////////////
									//$a=$(this).parent().parent().parent().val();
										//alert($a);
									var data={};
									//alert($(this).parent().parent().parent().val());
									data.forum_ID=$(this).parent().parent().parent().val();
									var user=JSON.parse(document.cookie);
									data.user_ID=user.user_ID;
									data.reply_conyent=$textVal;
										
									var jsonstr = JSON.stringify(data);
									$.ajax({
										type:"post",
										url:"../../php/Location_Forum_reply.php",
										contentType:"application/json",
										data:jsonstr,
										dataType:"json",
										success:function(data){
												console.log(data);
										},
										error:function(error){
											console.log(error.responseText);			
									
										},
									});
	

									//////////////////////////////////////////////	
									$(".reply").remove();
										$('.bTn').remove();	
										
									//}		
										
									}				
							});
						}
												
				});
				
			
				
				
				
					
				}
		   		else{
					
				}
  			});
			
	}
});




