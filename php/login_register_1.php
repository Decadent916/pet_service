<?php
header("Content-Type:text/html;charset utf-8");
$info=json_decode(file_get_contents('php://input'));
$username=iconv('utf-8','gbk',$info->username);
$password=$info->password;

$pdo = new PDO('mysql:host=localhost;dbname=lovepetsite','root','');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$pdo->exec('set names gbk');

$sql="INSERT INTO `lovepetsite`.`userinfo`(`username`,`password`)VALUES('$username','$password');";

$stmt = $pdo->exec($sql);

if($stmt){
    echo "a";   
}
$pdo=null;

?>
 
