<?php
//获取前台
$getsever=json_decode(file_get_contents('php://input'));

//把前台的keyword值给到后台
$keyword=$getsever->keyword;
$num=$getsever->num;

$pdo = new PDO('mysql:host=localhost;dbname=lovepetsite','root','');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec('set names utf8');


//模糊查询
$sql="select * from shop where name like'%$keyword%' limit $num";
$stmt = $pdo->prepare($sql);
$isright=$stmt->execute();
$arr=array();
// 判断
if ($isright) {
    // 获得数组
    while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
         array_push($arr, $result);
    }
    // 关闭连接
    $pdo = null;
    echo json_encode($arr);
}
?>