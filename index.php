<?php
	//http://form.jotform.co/jsform/41522084715854
	//apply form: http://www.jotform.me/form/41565026458457
	//referrer form: http://www.jotform.co/form/41522084715854
	$applyForm = "http://www.jotform.me/form/41565026458457";
	$referrerForm = "http://www.jotform.co/form/41522084715854";
	$name = urlencode($_GET["r_name"]);
	$mobile = urlencode($_GET["r_mobile"]);
	$myFormUrl = $applyForm."?referrer_name=".$name."&referrer_mobile=".$mobile;
?>


<?php include 'home.php'; ?>