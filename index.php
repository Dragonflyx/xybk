<?php
	//http://form.jotform.co/jsform/41522084715854
	//apply form: http://www.jotform.me/form/41565026458457
	//referrer form: http://www.jotform.co/form/41522084715854
	$applyForm = "http://www.jotform.me/form/41565026458457";
	$referrerForm = "http://www.jotform.co/form/41522084715854";
	$name = urlencode($_GET["r_name"]);
	$mobile = urlencode($_GET["r_mobile"]);
	$myFormUrl = $applyForm."?referrer_name=".$name."&referrer_mobile=".$mobile;
	
	
	/*根据文件位置更改路径信息*/
	require_once './module/Mobile_Detect.php';
	$detect = new Mobile_Detect;
	if($detect->isMobile()) {
		echo "Your are using mobile.";
	}
	//所有平板设备
	if( $detect->isTablet()) {
		echo "Your are using tablet.";
	}
	//是移动但非平板设备
	if( $detect->isMobile() && !$detect->isTablet()) {
		echo "Your are using mobile and not tablet.";
	}
	//IOS系统
	if( $detect->isiOS()) {
		echo "Your are using ios.";
	}
	//Android系统
	if( $detect->isAndroidOS()) {
		echo "Your are using android.";
	}
	//WindowsPhone系统
	if( $detect->isWindowsPhoneOS()) {
		echo "Your are using WP.";
	}
?>


<?php 

	if (empty($name) || empty($mobile)) 
		include 'home.php'; 
	else
		include 'applyForm.php';
?>