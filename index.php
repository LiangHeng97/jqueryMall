
<?php
    header("Content-Type:application/json");
	$name = $_POST['username'];//取得用户昵称
	$password = $_POST['userpwd'];//取得用户密码
	if($password== "123456"){
	        echo json_encode["ok"=>1];
	}
	else{
	    echo json_encode(["ok"=>0 ,"msg"=>"用户名密码不正确！"]);
	}

?>