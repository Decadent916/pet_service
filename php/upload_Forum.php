<?php
// 创建一个pdo对象连接数据库
//$pdo = new PDO('mysql:host=localhost;dbname=lovepetsite','root','');
$pdo = new PDO('mysql:host=localhost;dbname=lovepetsite','root','');
// 为一个连接的数据库设置属性值，查看连接数据库是否成功
/*
 * ATTR_ERRMODE:错误报告信息
 * ERRMODE_EXCEPTION:异常信息的抛出
 */
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// 给字符集设置编码
$pdo->exec("set names utf8");
//查询某一条数据
$sql = "SELECT forum_ID,forum_content,forum_time,username FROM forum inner join userinfo on forum.user_ID=userinfo.user_ID";
// 一个查询对象返回
$stmt = $pdo->prepare($sql);
// 获取一个条件
$isright = $stmt->execute();
$arr=array();
// 判断
if ($isright) {
    // 获得数组
    while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
         array_push($arr, $result);
    }
}
    // 关闭连接
    //$pdo = null;
    
    //echo 
    json_encode($arr);
	//echo $arr1;
	//$num = count($arr); 
	$arr3=array();
	for($i=0;$i<count($arr);$i++){
		  
	//echo 
	//json_encode($arr[$i]); 
		//echo "a"."<br/>";
		//$a=$arr[$i];
		//echo 
		$a=json_encode($arr[$i]);		
		$json=json_decode($a);
		//print $json->forum_ID;
		$b=$json->forum_ID;
		//echo $b;
		//echo '<br/>';
$sql1="SELECT username,reply_conyent FROM `forum_reply`INNER JOIN userinfo ON forum_reply.user_ID=userinfo.user_ID where forum_ID=$b";
//$sql1="SELECT`forum_reply`.`forum_ID`,`forum_reply`.`user_ID`,`forum_reply`.`reply_conyent`,`forum_reply`.`reply_time`FROM `lovepetsite`.`forum_reply`";
$stmt1 = $pdo->prepare($sql1);
// 获取一个条件
$isright1=$stmt1->execute();
//echo $isright1;
$arr2=array();
//判断
if($isright1) {
// 获得数组
while ($result1 = $stmt1->fetch(PDO::FETCH_ASSOC)) {
       array_push($arr2, $result1); 
	}
// 关闭连接
 
} 
//echo json_encode($arr2);
//$arr3=array_push($arr,$arr2);
//echo $arr3;
//$data=$arr->add($arr2);
//echo json_encode($data);
$json->reply=$arr2;
array_push($arr3,$json);
 }

 $pdo = null;
 echo json_encode($arr3);
 

?>
