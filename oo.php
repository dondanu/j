<?php  


class student
{
	public $stuName;
	public $stuReg;
	function set_name($name)
	{
		$this->stuName = "$name";
	}
	function get_name()
	{
		return $this->stuName;
	}



	function set_reg($reg)
	{
		$this->stuReg = "$reg";
	}
	function get_reg()
	{
		return $this->stuReg;
	}

}
$stu1 = new student();
$stu1->set_name("Danu");
echo "Name is ".$stu1->get_name();

$stu1->set_reg("001");
echo " & Rego No is ".$stu1->get_reg()."<br>";