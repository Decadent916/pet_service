<?php
header("Content-Type:text/html;charset utf-8");
$getsever=json_decode(file_get_contents('php://input'));
$id=$getsever->id;
$pdo = new PDO('mysql:host=localhost;dbname=lovepetsite','root','');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec('set names utf8');
$sql="select * from shop where id=$id";
$stmt = $pdo->prepare($sql);
$arr=array();
$isright=$stmt->execute();
if($isright){
	while($result=$stmt->fetch(PDO::FETCH_ASSOC)){
		array_push($arr, $result);
	}
	$pdo=null;
	echo json_encode($arr);
}
?>