<?php
/*
 项目名称:PHP简单的登录与注册
 最后更新时间：2014/04/27
 作者：小z(http://www.zouxiuping.com/)
*/
?>
<?php
	session_start();
	include("conn.php");//连接数据库
	$name = $_POST['name'];//取得用户昵称
	$email = $_POST['email'];//取得用户邮箱
	$mi2 = $_POST['mi2'];//取得用户密码
	$image = strtoupper($_POST['image']);//取得用户输入的图片验证码并转换为大写
	$image2 = $_SESSION['pic'];//取得图片验证码中的四个随机数

	if(isset($_POST['sub']))//当用户点击提交时
	{
		if($image == $image2)//判断验证码是否输入正确
		{
			$sql = "INSERT INTO deng(nicheng,users,pass) VALUES('$name','$email','$mi2')";//SQL语句
			mysql_query($sql);//执行SQL语句，写入用户数据
			echo "<script>alert('注册成功');window.location= 'index.php';</script>";
		}
		else
		{
			echo "<script>alert('验证码错误！');</script>";
		}
	}

?>