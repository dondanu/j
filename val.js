pscheck = /^(?=.*/d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-az0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website));


<?php  


$a = $_POST['name'];
$b = $_POST['num'];

$con = mysqli_connect("localhost","root","","a2");

$sql = ("INSERT INTO deatils(name, num) values ('$a','$b')");

$r = mysqli_query($con,$sql);
if ($r) {
	echo "Sucessfully created....!";
}
else
{
	echo "Error...................!";
}

?>  

