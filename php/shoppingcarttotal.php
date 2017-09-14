<?php
header("Content-Type:text/html;charset utf-8");
$shoppingCart=json_decode(file_get_contents('php://input'));
$userId=$shoppingCart->userId;
$pdo = new PDO("mysql:host=localhost;dbname=lovepetsite", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec("set names utf8");
$sql = "select SUM(shuliang) as total from dingdan where userid=$userId;";
$stmt = $pdo->prepare($sql);
$isright = $stmt->execute();
$arr=array();
if ($isright) {
    while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
       array_push($arr, $result);
    }
    $pdo = null;
    echo json_encode($arr);
}
?>