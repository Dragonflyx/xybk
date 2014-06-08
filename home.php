<script src="http://max.jotfor.ms/static/feedback2.js?3.2.2130" type="text/javascript">
  new JotformFeedback({
    formId: '41522084715854',
    base: 'http://jotform.co/',
    windowTitle: '推荐办卡登记',
    background: '#FFA500',
    fontColor: '#FFFFFF',
    type: false,
    height: 500,
    width: 700
  });
  new JotformFeedback({
    formId: '41565026458457',
    base: 'http://jotform.me/',
    iframeParameters: {
      'referrer_name': '<?php echo urldecode($name) ?>',
      'referrer_mobile': '<?php echo urldecode($mobile) ?>'
    },
    windowTitle: '申请办卡登记',
    background: '#FFA500',
    fontColor: '#FFFFFF',
    type: false,
    height: 500,
    width: 700
  });
</script>
<div id="header">
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
</div>
<div id="title" align="center">
  <hr class="line">
  <p>
    <span style="font-size: x-large;">
      办卡登记
    </span>
  </p>
  <hr class="line">
</div>
<div id="desc" align="center">
  <div>
    <br/>
  </div>
  <p>
    办交行信用卡，赠手机话费！
  </p>
  <div>
    <br/>
    <br/>
    <br/>
  </div>
</div>
<div id="entrypoint" align="center">
  <hr class="line2">
  <p>
    <span style="font-size: 15px;">
<?php if ($isMobile) { ?>
	  <a href="javascript:void( window.open('http://form.jotform.me/form/41565026458457', 'blank','scrollbars=yes,toolbar=no,width=700,height=500'))">
<?php } else { ?>	
      <a href="#" class="lightbox-41565026458457">
<?php }?>	  
        申请办卡
      </a>
      　｜　
<?php if ($isMobile) { ?>
	  <a href="javascript:void( window.open('http://form.jotform.co/form/41522084715854', 'blank','scrollbars=yes,toolbar=no,width=700,height=500'))">
<?php } else { ?>
	  <a href="#" class="lightbox-41522084715854">
<?php }?>
        推荐办卡
      </a>
    </span>
  </p>
  <hr class="line2">
</div>