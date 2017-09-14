<?php
header("Content-Type:text/html;charset utf-8");
$shoppingCart=json_decode(file_get_contents('php://input'));
$shuliang=$shoppingCart->shuliang;
$dingdanid=$shoppingCart->dingdanId;
$pdo = new PDO("mysql:host=localhost;dbname=lovepetsite", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec("set names utf8");
$sql = "UPDATE dingdan SET `shuliang` = $shuliang WHERE `dingdanid` =$dingdanid;";
$stmt = $pdo->exec($sql);;
if ($stmt) {
   
    $pdo = null;
	$data=array('result'=>'true');
    echo json_encode($data);
}
?>