<?php
header("Content-Type:text/html;charset utf-8");
$info=json_decode(file_get_contents('php://input'));
//echo json_encode($info);
/* $str='123'; 
 $str=iconv('gbk','utf-8',$str); */
/* $username=iconv('gbk','utf-8',$info->username); */
$username=$info->username;
$password=$info->password;

// ����һ��pdo�����������ݿ�
$pdo = new PDO('mysql:host=localhost;dbname=lovepetsite','root','');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//���������������
$pdo->exec('set names utf8');

$sql="select user_ID,username,password from `lovepetsite`.`userinfo` where username='$username' and password='$password'";

// һ����ѯ���󷵻�
$stmt = $pdo->prepare($sql);

$condition = $stmt->execute();

// �ж�
$arr=array();
if($condition){
     while($result = $stmt->fetchAll(PDO::FETCH_ASSOC)){
          array_push($arr,$result);
      }
      if($arr==null){  
         /*  
          $wrong="�û���Ϣ����ȷ";
          array_push($arr,$wrong);
          echo json_encode($arr); */
          echo "a";
      }else{
          echo json_encode($arr);
          }
         
}
/* if(!$condition){
    echo "��������ȷ�û���Ϣ";
} */
// �ر�����
$pdo=null;

?>
 
