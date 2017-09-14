<?php
// 创建一个pdo对象连接数据库
//$pdo = new PDO('mysql:host=localhost;dbname=lovepetsite','root','');
$pdo = new PDO('mysql:host=localhost;dbname=lovepetsite','root','');
// 为一个连接的数据库设置属性值，查看连接数据库是否成功
/*
 * ATTR_ERRMODE:错误报告信息
 * ERRMODE_EXCEPTION:异常信息的抛出
 */
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// 给字符集设置编码
$pdo->exec("set names utf8");
//查询某一条数据
$sql = "select * from an";
// 一个查询对象返回
$stmt = $pdo->prepare($sql);
// 获取一个条件
$isright = $stmt->execute();
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
