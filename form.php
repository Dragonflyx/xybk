<?php
	//apply form: http://www.jotform.me/form/41565026458457
	//referrer form: http://www.jotform.co/form/41522084715854
	$formUrl = "http://www.jotform.me/form/41565026458457";
	$formId = $_GET["id"];
	if ($formId == "41522084715854") {
		$formUrl = "http://www.jotform.co/form/41522084715854";
	}
	
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
      填写资料
    </title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<link rel="Bookmark" href="favicon.ico">
    <link href="./css/myTheme.css" rel="stylesheet" type="text/css">
	<link href="./css/menu.css" rel="stylesheet" type="text/css">
	<style type="text/css">
	  *{margin:0;padding:0;}
	  html{overflow:hidden;}
	  iframe{height:95%;width:100%;border:none;}
	</style>
	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript">
	$(document).ready(function($){
		$("#float-div").css('display', 'block');
		/* toggle nav */
		$("#menu-icon").on("click", function(){
			$("#main-nav").toggle('normal');
		});
		$('#menu-icon').live('blur',function(){  
			$("#main-nav").toggle('normal');
		}); 
	});
	</script>

  </head>

  <body>
    <div id="page" class="form-all">

	<div id="wufoo">
	  <iframe title="form" name="form" frameborder="0" src="<?php echo $formUrl ?>"></iframe>
	</div>
	
	<div id="float-div">
		<div id="tool-box">
			<div id="menu-icon"></div>
			<nav id="main-nav">
			  <a id="home-page" href="index.php" class="vertical-bar">主页</a>
			  <a id="contact-us" href="<?php echo $formUrl ?>#cid_23" target="form">联系我们</a>
			</nav>		
		</div>
	</div>

	<footer><?php include 'copyRight.php'; ?></footer>
    </div>
  </body>

</html>