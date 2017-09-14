<?php
header("Content-Type:text/html;charset utf-8");
$info=json_decode(file_get_contents('php://input'));
$user_ID=$info->user_ID;
$forum_content=$info->forum_content;
$forum_time=$info->forum_time;
// 创建一个pdo对象连接数据库
$pdo = new PDO('mysql:host=localhost;dbname=lovepetsite','root','');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//解决汉字乱码问题
$pdo->exec('set names utf8');

$sql="insert into forum (forum_content,forum_time,user_ID) values ('$forum_content','$forum_time','$user_ID')";
// 一个查询对象返回
$stmt = $pdo->prepare($sql);
//print_r($stmt);
$condition = $stmt->execute();

//$sql1="insert into forum (forum_content,forum_time,user_ID) values ('好像傻','12','$condition')";
//
//$stmt1 = $pdo->prepare($sql1);
//
//$condition1 = $stmt1->execute();
// 判断
//$arr=array();
//print_r($condition);
//if($condition){
// while($result = $stmt->fetchAll(PDO::FETCH_ASSOC)){;
//	   
//	   echo json_encode($result);
//  }
//          
//}
$pdo=null;

?>
 
