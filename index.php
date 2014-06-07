<?php
	//http://form.jotform.co/jsform/41522084715854
	//apply form: http://www.jotform.me/form/41565026458457
	//referrer form: http://www.jotform.co/form/41522084715854
	$formUrl = "http://www.jotform.me/form/41565026458457"; // This is the form URL
	$name = "?referrer_name=".urlencode($_GET["name"]);
	$mobile = "&referrer_mobile=".urlencode($_GET["mobile"]);
	$myFormUrl = $formUrl.$name.$mobile;
?>


<!DOCTYPE html>
<html>
<head>
	
<title>小余办卡</title>

<!-- Meta Tags -->
<meta charset="utf-8">
<meta name="generator" content="Wufoo">
<meta name="robots" content="index, follow">

<style>

  *{margin:0;padding:0;}
  html{overflow:hidden;}
  #wufoo{position:absolute;width:100%;height:100%;}
  body{background:url(./images/style4_2_bg.gif) #363535 top repeat-x;}
  iframe{height:100%;width:100%;border:none;}

</style>

</head>

<body>
	
<div id="wufoo">
<!-- <script type="text/javascript" src="<?php echo $myFormUrl ?>"></script> -->
<iframe title="推荐办卡" frameborder="0" src="<?php echo $myFormUrl ?>">
<a href="<?php echo $myFormUrl ?>" title="HTML Form">推荐办卡</a>
</div>

</body>
</html>