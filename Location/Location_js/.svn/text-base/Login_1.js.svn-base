
$.get("../../Home_header_one.html",function(data){
	$("#header").append(data);
});	
$.get("../../Home_footer.html",function(data){
	$("#footer").append(data);
});


$('.centreBox_middle_input').focus(function(){
	if($(this).val()=='Username' || $(this).val()=='Password'){
		$(this).val('');
	}
	if($(this).attr('id') == 'centInput_ID2' && $(this).val('')){
		$('#centInput_ID2').css("display","none");
		$('#centInput_ID2_2').css("display","block");
	}
});
$('.centreBox_middle_input').focusout (function(){
	if($(this).attr('id') == 'centInput_ID1' && $(this).val()=='') {
		$(this).val('Username');
	}
	else if($(this).attr('id') == 'centInput_ID2_2'){
		if($(this).val()==''){
			$('#centInput_ID2').css("display","block");
		$('#centInput_ID2_2').css("display","none");
		$('#centInput_ID2').val('Password');
		}
		
	}	 
});

/*function denglu(){
var middle_btn =document.getElementsByClassName('centreBox_middle_btn')[0];
//alert("a");
middle_btn.location="../../Home.html";
}*/



function Login(){
	
	var data={};
	data.username=$('#centInput_ID1').val();
	data.password=$('#centInput_ID2_2').val();
	
	var jsonstr = JSON.stringify(data);
	$.ajax({
		type:"post",
		url:"../../php/login_1.php",
		contentType:"application/json",
		data:jsonstr,
		dataType:"json",
		success:function(data){
			if(data[0][0].username==$('#centInput_ID1').val()){
				
				var user={};
				user.username=$('#centInput_ID1').val();
				user.user_ID=data[0][0].user_ID;
				document.cookie=JSON.stringify(user)+";path=/";
				location.href="../../Home.html";				
			}
		},
		error:function(error){
			console.log(error.responseText);			
			if(error.responseText.trim()=="a"){
				alert("用户信息不正确");
			}
		},
	});
	
}

