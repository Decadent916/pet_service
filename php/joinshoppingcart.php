<?php
header("Content-Type:text/html;charset utf-8");
$shoppingCart=json_decode(file_get_contents('php://input'));
$userid=$shoppingCart->userId;
$shangpinid=$shoppingCart->shangpinId;
$shuliang=$shoppingCart->shuliang;
$danjia=$shoppingCart->danjia;
$pdo = new PDO('mysql:host=localhost;dbname=lovepetsite','root','');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec("set names utf8");
$sql = "insert into dingdan (userid,shangpinid,shuliang,danjia)values($userid,$shangpinid,$shuliang,$danjia);";
$stmt = $pdo->exec($sql);
if ($stmt) {
    $pdo = null;
	$data=array('result'=>'true');
    echo json_encode($data);
}
?>