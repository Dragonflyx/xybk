<?php 
//require('./bitly.php');

function bitly_v3_shorten_mine($longUrl, $domain = '', $x_login = '', $x_apiKey = '') {
  $result = array();
  $url = "https://api-ssl.bit.ly/v3/shorten?access_token=ea546bfb03149075aed462593c8efe95c413b78f" . "&longUrl=" . urlencode($longUrl);
  if ($domain != '') {
    $url .= "&domain=" . $domain;
  }
  if ($x_login != '' && $x_apiKey != '') {
    $url .= "&x_login=" . $x_login . "&x_apiKey=" . $x_apiKey;
  }
  $response = file_get_contents($url);
  
  $output = json_decode($response);
  if (isset($output->{'data'}->{'hash'})) {
    $result['url'] = $output->{'data'}->{'url'};
    $result['hash'] = $output->{'data'}->{'hash'};
    $result['global_hash'] = $output->{'data'}->{'global_hash'};
    $result['long_url'] = $output->{'data'}->{'long_url'};
    $result['new_hash'] = $output->{'data'}->{'new_hash'};
  }
  $result['status_code'] = $output->status_code;
  return $result['url'];
}

function bd_dwz($longUrl) {
	$ch=curl_init();
	curl_setopt($ch,CURLOPT_URL,"http://dwz.cn/create.php");
	curl_setopt($ch,CURLOPT_POST,true);
	curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
	$data=array('url'=>$longUrl);
	curl_setopt($ch,CURLOPT_POSTFIELDS,$data);
	$strRes=curl_exec($ch);
	curl_close($ch);
	$arrResponse=json_decode($strRes,true);
	if($arrResponse['status']==0)
	{
	/**错误处理*/
	echo iconv('UTF-8','GBK',$arrResponse['err_msg'])."\n";
	}
	/** tinyurl */
	//echo $arrResponse['tinyurl']."\n";

	return $arrResponse['tinyurl'];
}

?>

<?php 
 $answers = $_POST;
 $formUrl = "http://www.jotform.co/form/41522084715854"; // This is the form URL
 $homePage = "http://xybk.net84.net";
 $name = "?r_name=".urlencode($answers[name]);
 $mobile = "&r_mobile=".urlencode($answers[mobile]);
 
 $myFormUrl = $homePage.$name.$mobile;
 
 $myShortFormUrl = bitly_v3_shorten_mine($myFormUrl);
 //print_r($myShortFormUrl);
 //header("location:$url2");
?>




<!doctype html>
<html>
  
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <title>
      Thank you page
    </title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link href="./css/myTheme.css" rel="stylesheet" type="text/css">
    <script src="http://libs.baidu.com/swfobject/2.2/swfobject.js" type="text/javascript">
    </script>
    <script type="text/javascript">
      var copyCon = "<?php echo $myShortFormUrl?>";
      var flashvars = {
        content: encodeURIComponent(copyCon),
        uri: './images/flash_copy_btn.png'
      };
      var params = {
        wmode: "transparent",
        allowScriptAccess: "always"
      };
      swfobject.embedSWF("./js/clipboard.swf", "forLoadSwf", "52", "25", "9.0.0", null, flashvars, params);

      function copySuccess() {
        //flash callback
        alert("复制成功！");
      }
    </script>
	
  </head>
  
  <body>
	
    <div id="page" class="form-all">
      <p>
        &nbsp;
      </p>
      <div style="text-align: center;">
        <h1>
          <span style="color: #ffffff;">
            感谢您的提交！
          </span>
        </h1>
      </div>
      <p style="text-align: center;">
        <span style="font-size: small; color: #ffffff;">
          继续推荐小伙伴，赢取更多话费吧--&gt;
        </span>
      </p>
      <div style="text-align: center;">
        <a href="<?php echo $myShortFormUrl?>">
          <span id="shortUrl" style="color: #ffffff;">
            <?php echo $myShortFormUrl?>
          </span>
        </a>
        &nbsp;
        <span id="forLoadSwf">
        </span>
      </div>
      <div class="shareButtons">
        <br/>
        <div class="bdsharebuttonbox" data-tag="share_1">
          <a title="一键分享" class="bds_mshare" data-cmd="mshare">
          </a>
          <a title="分享到新浪微博" href="#" class="bds_tsina" data-cmd="tsina">
          </a>
          <a title="分享到微信" href="#" class="bds_weixin" data-cmd="weixin">
          </a>
          <a title="分享到QQ空间" href="#" class="bds_qzone" data-cmd="qzone">
          </a>
          <a title="分享到腾讯微博" href="#" class="bds_tqq" data-cmd="tqq">
          </a>
          <a title="分享到百度" href="#" class="bds_baidu" data-cmd="baidu">
          </a>
          <a title="分享到人人网" href="#" class="bds_renren" data-cmd="renren">
          </a>
          <a class="bds_more" data-cmd="more">
            更多
          </a>
        </div>
        <script>
          window._bd_share_config = {
            common: {
              bdText: '快来登记申请交行信用卡吧，有手机话费充值可以拿哟~ ',
              bdDesc: '申请交行信用卡，赠手机话费',
              bdUrl: '<?php echo $myShortFormUrl?>'
            },
            share: [{
              "bdSize": 16
            }],
            slide: [{
              bdImg: 0,
              bdPos: "right",
              bdTop: 100
            }]
          }
          with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~ ( - new Date() / 36e5)];
        </script>
      </div>
      <footer><?php include 'copyRight.php'; ?></footer>
    </div>
  </body>

</html>


