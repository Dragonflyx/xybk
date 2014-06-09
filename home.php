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

<div id="header"> <br>
</div>
<div id="title" align="center">
  <hr class="line">
  <p> <span style="font-size: x-large;"> 办卡送话费 </span> </p>
  <hr class="line">
</div>
<div id="desc" align="center">
  <div> <br>
  </div>
  <div id="instruction">
    <h3>一点说明</h3>
    <table align="center" width="360" border="0">
      <tr>
        <td><div id="bulletpoint">
            <li>凡经本人成功申办交通银行信用卡即送<strong>3</strong>元话费</li>
            <li>凡推荐亲友成功办卡可再获赠<strong>1</strong>元话费</li>
            <li>推荐的亲友若是大专或以上学历可获赠<span style="font-size: 36px; color:red"><em><strong>5</strong></em></span>元话费</li>
            <div>
              <p><span class="red floatLeft">*</span><span class="floatRight">成功申办是指经过本人(小余@<strong>13428865961</strong>)成功提交并审核通过和发卡。<br/>
                人艰不拆，一点小优惠，还请各位多多帮忙^-^</span></p>
            </div>
          </div></td>
      </tr>
    </table>
  </div>
  <div> <br>
    <br>
    <br>
  </div>
</div>
<div id="entrypoint" align="center">
  <hr class="line2">
  <p> <span style="font-size: 15px;">
    <?php if ($isMobile) { ?>
    <a href="javascript:void( window.open('http://form.jotform.me/form/41565026458457', 'blank','scrollbars=yes,toolbar=no,width=700,height=500'))">
    <?php } else { ?>
    <a href="#" class="lightbox-41565026458457">
    <?php }?>
    申请办卡 </a> 　｜　
    <?php if ($isMobile) { ?>
    <a href="javascript:void( window.open('http://form.jotform.co/form/41522084715854', 'blank','scrollbars=yes,toolbar=no,width=700,height=500'))">
    <?php } else { ?>
    <a href="#" class="lightbox-41522084715854">
    <?php }?>
    推荐办卡 </a> </span> </p>
  <hr class="line2">
  <br/>
</div>
