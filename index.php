<?php
	//http://form.jotform.co/jsform/41522084715854
	//apply form: http://www.jotform.me/form/41565026458457
	//referrer form: http://www.jotform.co/form/41522084715854
	$applyForm = "http://www.jotform.me/form/41565026458457";
	$referrerForm = "http://www.jotform.co/form/41522084715854";
	$name = urlencode($_GET["r_name"]);
	$mobile = urlencode($_GET["r_mobile"]);
	$myFormUrl = $applyForm."?referrer_name=".$name."&referrer_mobile=".$mobile;
	
	$isMobile = false;
	
	
	/*mobile detect*/
	require_once './module/Mobile_Detect.php';
	$detect = new Mobile_Detect;
	if( $detect->isMobile() && !$detect->isTablet()) {
		$isMobile = true;
	}
?>

<!doctype html>
<html>
  
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <title>
      小余办卡
    </title>
    <meta content="小余办卡" name="keywords">
    <meta content="小余办卡" name="description">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<link rel="Bookmark" href="favicon.ico">
    <link href="./css/myTheme.css" rel="stylesheet" type="text/css">

  </head>

  <body>
    <div id="page" class="form-all">

<?php 

	if (empty($name) || empty($mobile)) 
		include 'home.php'; 
	else
		include 'applyForm.php';
?>

	<footer><?php include 'copyRight.php'; ?></footer>
    </div>
  </body>

</html>