<?php
$host="208.109.186.87";
$db_user="fiberstore_spain";
$db_pass="ingellen3508";
$db_name="fiberstore_spain";
$timezone="Asia/Shanghai";

$link=mysql_connect($host,$db_user,$db_pass);
mysql_select_db($db_name,$link);
mysql_query("SET names UTF8");

header("Content-Type: text/html; charset=utf-8");
?>
