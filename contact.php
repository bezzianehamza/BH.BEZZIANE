<?php

if (isset($_POST['submit'])) {

$name=$_POST['name'];
$mailFrom=$_POST['mail'];
$subject=$_POST['subject'];
$message=$_POST['message'];

$mailTo =" bezziane19@gmail.com ";
$header = "From :".$mailFrom ;
$text = "You have received en email from ".$name.".\n\n".$message;
mail($mailTo,$subject,$text,$headers);
header("location: index.html?mailsend");
}
?>
