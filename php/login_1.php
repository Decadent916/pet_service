<?php
header("Content-Type:text/html;charset utf-8");
$info=json_decode(file_get_contents('php://input'));
//echo json_encode($info);
/* $str='123'; 
 $str=iconv('gbk','utf-8',$str); */
/* $username=iconv('gbk','utf-8',$info->username); */
$username=$info->username;
$password=$info->password;

// 创建一个pdo对象连接数据库
$pdo = new PDO('mysql:host=localhost;dbname=lovepetsite','root','');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//解决汉字乱码问题
$pdo->exec('set names utf8');

$sql="select user_ID,username,password from `lovepetsite`.`userinfo` where username='$username' and password='$password'";

// 一个查询对象返回
$stmt = $pdo->prepare($sql);

$condition = $stmt->execute();

// 判断
$arr=array();
if($condition){
     while($result = $stmt->fetchAll(PDO::FETCH_ASSOC)){
          array_push($arr,$result);
      }
      if($arr==null){  
         /*  
          $wrong="用户信息不正确";
          array_push($arr,$wrong);
          echo json_encode($arr); */
          echo "a";
      }else{
          echo json_encode($arr);
          }
         
}
/* if(!$condition){
    echo "请输入正确用户信息";
} */
// 关闭连接
$pdo=null;

?>
 
