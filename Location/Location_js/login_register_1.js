$.get("../../Home_header_one.html",function(data){
	$("#header").append(data);
});	
$.get("../../Home_footer.html",function(data){
	$("#footer").append(data);
	footer();
});

var anchor_top = document.getElementsByClassName('LocRegBox_anchor_top');
var anchor_down = document.getElementsByClassName('LocRegBox_anchor_down');
var spray_ul =document.getElementsByClassName('LocRegBox_spray')[0].getElementsByTagName('ul')[0];

var timer_anchor1;
var timer_anchor2;
var timer_anchor3;
var timer_anchor4;

b();
c();
spray();
function b(){
timer_anchor1=setInterval(function(){
	for (var i=0;i<anchor_top.length;i++){
		anchor_top[i].style.top=anchor_top[i].offsetTop+1+"px";
		if(anchor_top[i].offsetTop>25){
			clearInterval(timer_anchor1);
			a();
			break;
		}
	}
},40);
}

function a(){
timer_anchor2=setInterval(function(){
	for (var i=0;i<anchor_top.length;i++) {
		anchor_top[i].style.top=anchor_top[i].offsetTop-1+"px";
		if(anchor_top[i].offsetTop<-40){
			clearInterval(timer_anchor2);
			b();
			break;
		}
	}
},30);
}

function c(){
	timer_anchor3=setInterval(function(){
	for (var i=0;i<anchor_down.length;i++) {
		anchor_down[i].style.top=anchor_down[i].offsetTop-1+"px";
		if(anchor_down[i].offsetTop<-50){
			clearInterval(timer_anchor3);
			d();
			break;
		}
	}
},50);
}
function d(){
timer_anchor4=setInterval(function(){
	for (var i=0;i<anchor_down.length;i++){
		anchor_down[i].style.top=anchor_down[i].offsetTop+1+"px";
		if(anchor_down[i].offsetTop>25){
			clearInterval(timer_anchor4);
			c();
			break;
		}
	}
},50);
}
function spray(){
	setInterval(function(){
		if(spray_ul.offsetLeft<-1200)
		{
			spray_ul.style.left=0;
		}
		else
		{
			spray_ul.style.left=spray_ul.offsetLeft-2+"px";
		}	
},30);
}

$('.LocRegBox_register_input').focus(function(){
	if($(this).val()=='Username' || $(this).val()=='Password' || $(this).val()=='Confirm Password'){
		$(this).val('');
	}if($(this).attr('id')=='registerInput_ID2' && $(this).val('')){
		$('#registerInput_ID2').css("display"," none");
		$('#registerInput_ID2_2').css("display","block");
	}if($(this).attr('id')=='registerInput_ID3' && $(this).val('')){
		$('#registerInput_ID3').css("display"," none");
		$('#registerInput_ID3_3').css("display","block");
	}
});


//用户名可以由字母、数字、下划线和中文组成，以中文或字母开头，长度为6-16位
var re_userName =/^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9_\u4E00-\u9FA5]{5,15}$/;
//  由8-16位数字或这字母组成
var re_passWord =/[0-9A-Za-z]{8,16}/;

$('.LocRegBox_register_input').focusout (function(){
	var str=$(this).val();
	if($(this).attr('id') == 'registerInput_ID1') {			
		if($(this).val()==''){
			$(this).val('Username');
			$("#registerInput_ID1_font1").html("");
		}else if(re_userName.test(str)){
			$("#registerInput_ID1_font1").html("昵称合格");
		}else{
			$("#registerInput_ID1_font1").html("昵称格式必须以6-16位字符，以中文或字母开头由字母、数字、下划线和中文组成");
		}
	}
	
	else if($(this).attr('id') == 'registerInput_ID2_2'){
		if($(this).val()==''){
			$('#registerInput_ID2').css("display","block");
			$('#registerInput_ID2_2').css("display","none");
			$('#registerInput_ID2').val('Password');
			$("#registerInput_ID2_font2").html("");
			
		}else if(re_passWord.test(str)){
			$("#registerInput_ID2_font2").html("密码合格");
		}else{
			$("#registerInput_ID2_font2").html("密码格式必须由8-16位数字或这字母组成");
		}
		
	}	
	
	else if($(this).attr('id') == 'registerInput_ID3_3'){
		if($(this).val()==''){
			$('#registerInput_ID3').css("display","block");
			$('#registerInput_ID3_3').css("display","none");
			$('#registerInput_ID3').val('Confirm Password');
			$("#registerInput_ID3_font3").html("");
		}else if($('#registerInput_ID2_2').val()!=$('#registerInput_ID3_3').val()){
			$("#registerInput_ID3_font3").html("两次密码输入不一致");
		}else{
			$("#registerInput_ID3_font3").html("密码合格");
		}
		
	}	 	 
});

$('.LocRegBox_register_btn').click(function(){
	if($("#registerInput_ID1_font1").html()=="昵称合格" && $("#registerInput_ID2_font2").html()=="密码合格" && $("#registerInput_ID3_font3").html()=="密码合格"){
		var data={};
		data.username=$('#registerInput_ID1').val();
		data.password=$('#registerInput_ID3_3').val();
		
		var jsonstr = JSON.stringify(data);
		$.ajax({
			type:"post",
			url:"../../php/login_register_1.php",
			contentType:"application/json",
			data:jsonstr,
			dataType:"json",
			success:function(data){
				console.log(data);
			},
			error:function(error){
				//console.log(error.responseText);
				if(error.responseText.trim()=='a'){
					location.href="login_1.html";				
				}
			},
		});
		
		
	}
	
})





