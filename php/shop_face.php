<?php
//echo json_encode($getsever);
$getsever=json_decode(file_get_contents('php://input'));
$keyword=$getsever->keyword;
$pdo = new PDO('mysql:host=localhost;dbname=lovepetsite','root','');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec('set names utf8');


//模糊查询
$sql="select * from market";
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