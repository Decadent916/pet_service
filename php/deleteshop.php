<?php
header("Content-Type:text/html;charset utf-8");
$shoppingCart=json_decode(file_get_contents('php://input'));
$dingdanid=$shoppingCart->dingdanid;
$pdo = new PDO("mysql:host=localhost;dbname=lovepetsite", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec("set names utf8");
$sql = "delete from dingdan where dingdanid=$dingdanid;";
$stmt = $pdo->exec($sql);
if ($stmt) {
   
    $pdo = null;
	$data=array('result'=>'true');
    echo json_encode($data);
}
?>