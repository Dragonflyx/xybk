function openImageChooserDialog(A){window._imageChooserDefered=new $.Deferred();A=$.extend({},A);var E=A.title||translate("fileManager.selectImage");var B=A.width||850;var C=A.filetype||"pic";var D=A.id||"wp-picmanage_panel";var F=A.zIndex||1003;var H=A.multi||0;var G=A.overlay;if(typeof G==="undefined"){G=true}wp_floatpanel(parseToURL("wp_widgets","common_pic_chooser",{filetype:C,multi:H}),{title:E,id:D,width:B,overlay:G,isCenter:true,swfFix:true,zIndex:F});if(!A.cancelNotCloseDialog){window._imageChooserDefered.fail(function(){$.modal.close()})}return window._imageChooserDefered.promise()}function openMyDocChooserDialog(F){window._myDocChooserDefered=new $.Deferred();F=$.extend({},F);var B=F.title||translate("fileManager.myFile"),G=F.width||850,C=F.isCenter||true,E=F.id||"wp-file_explore",A=F.zIndex||1003,D=F.overlay;if(typeof D==="undefined"){D=true}wp_floatpanel(parseToURL("wp_fileexplore","file_explore",{"geturl":"1"}),{swfFix:true,title:B,width:G,isCenter:C,id:E,zIndex:A,overlay:D});return window._myDocChooserDefered.promise()}function transferToPageSetDialog(H,I,A){window._pagesetDefered=new $.Deferred();A=$.extend({},A);var B=window;if(A.iframe){B=parent}var F=A.title||translate("page.add");var D=A.mode||"create";var C="";if(D=="edit"){var G=A.pageid;C=parseToURL("wp_page","editpage",{id:G})}else{var E=A.createparam||{};C=parseToURL("wp_page","addpage",E)}$.get(C,function(J){$(H).html(J).show();$(I).hide();wp_update_floatpanel($("#wp-manage_menu"),F,376,function(K){K.find(".wp-panel_button").hide();K.find("#page_set_prop_div .wp-panel_button").show()})}).error(function(L,J,K){wp_alert((K||J)+"(edit/add a page).<br/>"+translate("Request failed!"))});return window._pagesetDefered.promise()}function transferToPageSetDialogcur(J,L,A){window._pagesetDefered=new $.Deferred();A=$.extend({},A);var B=window;if(A.iframe){B=parent}var F=A.title||translate("page.add");var D=A.mode||"create";var C="";var I=A.pageid;var H=A.modact||"navigation";var G=A.page_id;var K=A.blockid;if(D=="edit"){C=parseToURL(H,"editpage",{id:I,page_id:G,blockid:K})}else{var E=A.createparam||{};C=parseToURL(H,"addpage",{page_id:G,blockid:K,parentid:I})}$.post(C,{menudata:$("#"+K).data("menudata")},function(M){$(J).html(M).show();$(L).hide()}).error(function(O,M,N){wp_alert((N||M)+"(edit/add a navigation page).<br/>"+translate("Request failed!"))});return window._pagesetDefered.promise()}function openPageSetDialog(F){window._pagesetDefered=new $.Deferred();F=$.extend({},F);var C=F.title||translate("page.add");var D=F.width||400;var G=F.mode||"create";var E="";if(G=="edit"){var B=F.pageid;E=parseToURL("wp_page","editpage",{id:B})}else{D=400;var A={};if(F.mtype){A._mtype=F.mtype}if(F.parentid){A.parentid=F.parentid}E=parseToURL("wp_page","addpage",A)}wp_floatpanel(E,{title:C,contentClass:"wp-site-set_panel_c",id:"wp-add_page",overlay:true,isCenter:true,width:D,zIndex:1002,cache:false,open:function(H){if(F.callback&&$.isFunction(F.callback)){$(H).bind("addPageLink",function(J,I){F.callback(I)})}}});if(!F.cancelDefaultOp){window._pagesetDefered.done(function(H){if(H.refresh){$.saveLayout.save(true);window.location.reload();$("#wp-add_page").triggerHandler("wpdialogclose")}else{setTimeout(function(){$.saveLayout.save(true);window.location.href=H.forward},100)}});window._pagesetDefered.fail(function(){$("#wp-add_page").triggerHandler("wpdialogclose")})}return window._pagesetDefered.promise()}function setModuleLink(A,B){openPageSetDialog({"mtype":A,"callback":B})}function initFrame(J,G,F){var L=J,M=L.contentWindow.document.body.scrollHeight,K=L.contentWindow.document.documentElement.scrollHeight,H=Math.max;var E=$(L).closest(".wp-floatpanel_dialog"),B=0,I=H(M,K);I+=1;if($.browser.msie){I=I+25}E.find("."+G).siblings().each(function(P,O){B+=$(O).outerHeight(true)});var N=function(O){var P=parseFloat(O);if(isNaN(P)){return 0}return P};var A=N(F),D=A?A:$(document).height(),C=D-B-10;if(C<I){I=C}J.height=H(I,200);$(L).closest(".wp-floatpanel_dialog").triggerHandler("wpdialogsetpos")}(function(B){var C={};B.multi_exec_once=function(D,G,E){var F=C[D];if(F!=null){clearTimeout(F);delete C[D]}F=setTimeout(G,E);C[D]=F};var A={};B.beforeLoaded={add:function(D,F,E){if(B.isFunction(E)){if(!A[D]){A[D]={}}A[D][F]=E}},run:function(E,G,F){var D=A[E];if(typeof D=="undefined"){return false}D=D[G];if(B.isFunction(D)){return D(F)}return false}}})(jQuery);function wp_update_floatpanel(J,E,B,K){var H=J.find(".wp-title > h2"),A=H.html();J.width(B);if(E){H.data("origin_title",A)}else{E=A}H.html(E);if(K&&$.isFunction(K)){K(J)}var I=window,C=$(I).width(),F=$(I).height(),D=Math.floor,G=J.outerHeight(true);J.css({"left":D((C-B)/2),"top":D((F-G)/2)})}(function(B,C){var A=".wpcstselect";B.widget("wp.cstselect",{options:{selectclass:"wp-diy-selected"},_create:function(){var E=this;var D=E.options.selectclass;if(D.length==0){D="wp-diy-selected"}if(E.element.prop("multiple")){return}E._doinit(E).done(function(J,G){var F=J,H=F.next("."+D+"-outside").find("."+D+"");setTimeout(function(){var L=H.children("."+D+"-left"),M=L.siblings("."+D+"-button").outerWidth()+2,K=E._int(L.css("paddingLeft"))+E._int(L.css("paddingRight")),N=H.width()-M-K;if(N<=0){N=Math.max(65,F.width())-K-16}L.width(N).attr("val",F.val()).html(F.find("option:selected").html());L=M=N=null},50);H.bind("click"+A,function(N){if(E.options.disabled||!G.length){return}var M=B(G).appendTo("body"),K=M.outerHeight(true);E._selected(M,F.val());if(M.is(":hidden")){var L=B(this);M.find("li").bind("mouseenter"+A,function(O){B(this).addClass("local").siblings().removeClass("local")}).bind("mouseleave"+A,function(O){B(this).removeClass("local")}).bind("click"+A,function(P){var O=B(this),Q=O.attr("val");L.children("."+D+"-left").html(O.html()).attr("val",Q);F.val(Q).trigger("change")}).end().slideDown("slow",function(){var P=B(this);var Q=P[0],O=Q.clientHeight,S=P.find("li.local");if(S.size()>0){var R=B._parseFloat(P.css("top")),T=R+S[0].offsetTop-Q.offsetTop+S.height();if(O<T){Q.scrollTop=T-O}}B(document).one("click"+A,function(U){P.slideUp().remove();return false})});I(L,M,K);B(window).resize(function(){I(L,M,K)})}});function I(M,O,K){var L=M,N=L.offset();O.css({"top":function(S,U){var R=window.innerHeight||E.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,Q=E._int(N.top),T=L.outerHeight(true),P=0;if(R<Q+K+T){P=Math.max(0,Q-K-1);B(this).css({"border-bottom":"none","border-top":"1px solid #B5B5B5"})}else{P=Q+T+1}R=Q=T=null;return P+"px"},"left":function(P,Q){return E._int(N.left)+"px"}})}})},value:function(D){var H=this;var E=H.options.selectclass;if(E.length==0){E="wp-diy-selected"}var G=H.element,F=G.next("."+E+"-outside");G.val(D);F.find("."+E+"-left").attr("val",D).html(G.children("option:selected").html())},_doinit:function(E){var F=B.Deferred(),K=E,D=K.element;var L=K.options.selectclass,J=function(M){return(M+"").replace(/\\(.?)/g,function(N,O){switch(O){case"\\":return"\\";case"0":return"\u0000";case"":return"";default:return O}})};if(L.length==0){L="wp-diy-selected"}D.hide();var G="",H=Math.max(D.width(),65);var I='<div class="'+L+'-outside overz" style="float:left;width:'+H+'px;"><div class="'+L+'">';D.children("option").each(function(O,N){var M=N;G+='<li val="'+M.value+'">'+J(M.innerHTML)+"</li>"});I+='<div class="'+L+'-left" val="0">&nbsp;</div><div class="'+L+'-button"><a href="###" onclick="return false;"></a></div></div></div>';D.after(I);F.resolve(D,'<div class="'+L+'-content overz" style="width:'+(H-2)+'px;"><ul>'+G+"</ul></div>");return F.promise()},_int:function(E){var D=parseInt(E);if(isNaN(D)){return 0}return D},_selected:function(E,D){E.find("li").each(function(H,G){var F=B(G),I="";I=(F.attr("val")==D)?"addClass":"removeClass";F[I]("local")});return true},enable:function(){var F=this;var D=F.options.selectclass;if(D.length==0){D="wp-diy-selected"}var E=F.element.next("."+D+"-outside");E.find("."+D+"-left").css("color","#5A5A5A");E.find("."+D+"-button > a").removeClass("disabled");B.Widget.prototype.enable.call(F)},disable:function(){var H=this;var E=H.options.selectclass;if(E.length==0){E="wp-diy-selected"}var G=H.element,F=G.next("."+E+"-outside");var D=G.find("option")[0];G[0].selectedIndex=0;F.find("."+E+"-left").css("color","#7C7C7C").attr("val",D.value).html(D.innerHTML);F.find("."+E+"-button > a").addClass("disabled");B.Widget.prototype.disable.call(H)},destroy:function(){var E=this;var D=E.options.selectclass;if(D.length==0){D="wp-diy-selected"}B(document).unbind(A);E.element.next("."+D+"-outside").unbind(A).remove();B.Widget.prototype.destroy.call(E)}})})(jQuery);(function(B,D){var A=true,C=".wpcstinput";B.widget("wp.cstinput",{options:{value:"",regexp:/^\d+(\.\d+)?$/,range:[0],maxlength:4,unit:"px",step:1,style:"",nmnode_style:"",btnnode_style:"",upbtn_style:"",downbtn_style:"",complete:function(){}},_create:function(){var Q=this,F=Q.element,E=Q.options;var K=(E.hasOwnProperty("style")&&E.style.length)?' style="'+E.style+'"':"",O=(E.hasOwnProperty("nmnode_style")&&E.nmnode_style.length)?' style="'+E.nmnode_style+'"':"",I=(E.hasOwnProperty("btnnode_style")&&E.btnnode_style.length)?' style="'+E.btnnode_style+'"':"",L=(E.hasOwnProperty("upbtn_style")&&E.upbtn_style.length)?' style="'+E.upbtn_style+'"':"",J=(E.hasOwnProperty("downbtn_style")&&E.downbtn_style.length)?' style="'+E.downbtn_style+'"':"";F.wrap('<div class="wp_cstinput_helper"'+K+' unselectable="on"><div class="nminput_helper"'+O+' unselectable="on"></div><div class="minplus_helper"'+I+' unselectable="on"><span class="up"'+L+' unselectable="on"></span><span class="down"'+J+' unselectable="on"></span></div></div>');if(E.hasOwnProperty("value")&&E.regexp.test(E.value)){F.focus().val(E.value)}if(E.hasOwnProperty("maxlength")&&/^[1-9]{1}\d*$/.test(E.maxlength)){F.attr("maxlength",E.maxlength)}if(E.hasOwnProperty("unit")&&E.unit.length){F.closest(".wp_cstinput_helper").after('<div class="wp_cstunit_helper" unselectable="on">'+E.unit+"</div>")}B.each(["keydown","keyup","change","focus","blur"],function(S,R){F.bind(R+C,function(T){if(!A&&(R=="blur")){return false}Q._trigger("on"+R,T,null)})});var G,H,P;G=Q.buttons=F.closest(".wp_cstinput_helper").find(".minplus_helper > span");H=G[0];P=G[1];G.mousedown(M).mouseup(N).mouseout(N);function M(){if(E.disabled){return}var R=(this===H)?E.step:-E.step;F.focus();F.select();A=false;Q._doCount(R);return false}function N(){if(!A){A=true}return false}},_doCount:function(G){var F,E=this.options.range,J=this.element[0].value;if(!J.length){J=this.element[0].value=0}F=this._parseValue(J)+G;if(B.isArray(E)&&(E.length>0)){var H,I;if(typeof E[0]!="undefined"){H=E[0]}if(typeof E[1]!="undefined"){I=E[1]}if((G<0)&&(typeof H==="number")&&(F<H)){F=H}if((G>0)&&(typeof I==="number")&&(F>I)){F=I}}this.element[0].value=F;if(B.isFunction(this.options.complete)){this.options.complete(this.element,F)}},_parseValue:function(E){var F=parseFloat(E);if(isNaN(F)){return 0}return F},enable:function(){this.buttons.removeClass("cstinput_disabled");B.Widget.prototype.enable.call(this)},disable:function(){this.buttons.addClass("cstinput_disabled");B.Widget.prototype.disable.call(this)},destroy:function(){var F=this.element,E=F.closest(".wp_cstinput_helper");F.removeAttr("maxlength").unbind(C);E.before(F[0]);E.siblings(".wp_cstunit_helper").remove().end().remove();B.Widget.prototype.destroy.call(this)}})})(jQuery);(function(C,D){var A="simroll",B=function(){var F,G,E=document.createElement("DIV");E.style.cssText="position:absolute;top:-1000px;width:100px;height:100px;overflow:hidden;";F=document.body.appendChild(E).clientWidth;E.style.overflowY="scroll";G=E.clientWidth;document.body.removeChild(E);return F-G};C.widget("wp.mscroll",{options:{difleft:0,maskleft:0,barleft:0,height:0,maskbg:"#fff",maskcname:"wp-mobile-device-mask",barcname:"wp-mobile-scrollbar"},_create:function(){var G=this,H="-"+G._getRandomStr(),F=(G.options.maskbg||"").length?"background:"+G.options.maskbg:"",E='<div id="'+A+H+'-mask" class="'+G.options.maskcname+'" style="'+F+'"></div>';E+='<div id="'+A+H+'-bar" class="'+G.options.barcname+'"><span class="pane"></span></div>';G.options.creatid=H;G.element.before(E);G._setScrollPos(H);G._bindScroll(H)},_setScrollPos:function(K){var F=A+K,H=0,J=this,I=J.element,E=I.prevAll("#"+F+"-mask"),G=I.prevAll("#"+F+"-bar");E.add(G).css({"left":function(){var M=C(this).attr("id").replace(F+"-","");if(J.options[M+"left"]){H=J.options[M+"left"]}else{var L=B()||16;H=J._parseFloat(I.css("left"))+I.width()-L}return H+"px"},"height":(I.height()+1)+"px","visibility":"visible"});G.css("left",function(){return(H+J._parseFloat(J.options.difleft||0))+"px"})},_bindScroll:function(E){var L=this,I=L.element,K=I.prevAll("#"+A+E+"-bar"),G=0,J=K.children("span.pane"),H=I.height(),F=0;I.bind("scroll."+A,function(O){var P=this.scrollHeight;K.height(L.options.height||H);if(H<P){G=L._parseFloat(H*H/P)}J.height(G);var M=H-G,N=L._parseFloat(this.scrollTop*H/P);J.css("top",Math.min(N,M)+"px")}).triggerHandler("scroll."+A);(function(){var N,M;J.bind("mousedown."+A,function(O){O.preventDefault();M=O.pageY;N=L._parseFloat(J.css("top"));J.addClass("scrolling");C(document).bind("mousemove."+A,function(U){if(!J.hasClass("scrolling")){return}var P=N+U.pageY-M,R=Math.max(0,P),S=I.get(0),V=S.scrollHeight;var T=L._parseFloat(R*V/H),Q=H-J.height();if(R>=Q){T=V-S.clientHeight}I.scrollTop(T);return false}).bind("mouseup."+A,function(P){P.preventDefault();C(document).unbind("."+A);C(parent.document).unbind(".rmscroll");if(!J.hasClass("scrolling")){return}J.removeClass("scrolling")});C(parent.document).bind("mouseup.rmscroll",function(){C(document).unbind("."+A)})}).bind("mouseup."+A,function(O){C(document).unbind("."+A);C(parent.document).unbind(".rmscroll");return false})})()},_getRandomStr:function(E){E=E||16;var I="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",F=I.length,G="";for(var H=0;H<E;H++){G+=I.charAt(Math.floor(Math.random()*F))}return G},_parseFloat:function(F){var E=parseFloat(F);if(isNaN(E)){return 0}return E},destroy:function(){var F=this,E="#"+A+F.options.creatid;C(document).add(F.element).unbind("."+A);F.element.prevAll(E+"-mask,"+E+"-bar").remove();C.Widget.prototype.destroy.call(F)}})})(jQuery);function fGuid(A){var B=C();if(A){return B}return(B+"").replace(/\{|\}|-/g,"");function C(){var D="";for(var F=1;F<=32;F++){var E=0;E=parseInt(Math.random()*16);D+=E.toString(16);if(F==8||F==12||F==16||F==20){D+="-"}}return"{"+D.toUpperCase()+"}"}}(function(B){var A={};function C(a,S){var J=$.extend({},{title:"Title",titlebg:true,contentClass:"wp-panel_outpadding",id:"wp-float_panel",width:286,height:"auto",left:5,top:60,isCenter:false,overlay:false,isIframe:false,contain:$("body"),zIndex:1000,showBottom:false,cache:true,postbody:false,swfFix:false,open:function(){},close:function(){}},S||{});var I,f,H,X=J.id,W=X?$("#"+X):$(".wp-floatpanel_dialog"),P=J.contain;var V=/^\d+$/i,c=J.width,E=J.height,Z=J.left,Q=J.top,R=J.contentClass,e=J.isCenter,D=J.overlay,O=J.zIndex,Y=J.showBottom,d=J.isIframe;if(!W.size()){var F="";if(D){var K=$("#wp-floatpanel_overlay");if(K.size()>0){K.remove()}F='<div id="wp-floatpanel_overlay" style="z-index:'+O+';"></div>';O+=1}var L="";if(Y){L+='<div class="wp-show_allpage"><input type="checkbox" name="show_allpage" value="" /><span>'+translate("property.showInBottom")+'</span></div><div class="wp-coordinate"><span>x:<input type="text" name="xpos" value="0" id="xpos" /></span><span>y:<input type="text" name="ypos" value="0" id="ypos" /></span><span class="wp-coordinate-w">w:<input type="text" name="xwidth" value="0" id="xwidth" /></span><span>h:<input type="text" name="xheight" value="0" id="xheight"/></span><span class="wp-coordinate-lock overz"><img src="'+relativeToAbsoluteURL("template/default/images/un-lock.png")+'" width="16" height="15" /></span></div>'}var M=$(B),N=$("#wp-floatpanel_loading"),U='<div id="wp-floatpanel_loading" style="z-index:'+(O-1)+';"><img src="'+relativeToAbsoluteURL("template/default/images/loading.gif")+'" width="32" height="32" /></div>';if(N.size()>0){N.remove()}var T=$.options?$.options.superid:0;var G=$('<div id="'+X+'" class="wp-floatpanel_dialog wp-manage_panel overz" style="display:none;position:absolute;z-index:'+O+';" belong="'+(T||null)+'"><div class="wp-title overz'+(J.titlebg?" wp-title_black":"")+'"><h2>'+J.title+'</h2><div class="wp-icon" style="width:19px;"><a href="javascript:;" class="close"></a></div></div><div class="'+R+' overz"></div>'+L+"</div>"+F+U).appendTo(P);I=G[0];f=$(I);var g=M.width(),b=f.width();$("#wp-floatpanel_loading").width(g).height(M.height());f.draggable({handle:".wp-title",cancel:".wp-icon",cursor:"move",scroll:false,iframeFix:true,start:function(m,k){var i=$(this),j=i.find(".wp-title").outerHeight();$(".wp-diy-selected-content").slideUp().remove();if(J.swfFix){var h=i.find("object");if(h.length>0){h.parent().data("wpswfsize",{"width":h.width(),"height":h.height()});h.css({"height":"0","width":"0","visibility":"hidden"})}h=null}if(i.find("iframe").length>0){var l=i.find(".ui-resizable-innerIframeFix");(l.length>0)&&l.remove();$('<div class="ui-resizable-innerIframeFix" style="background-color:#FFF;"></div>').css({left:0,top:j+"px",position:"absolute",opacity:"0.001",zIndex:1000,width:i.width()+"px",height:(i.height()-j)+"px"}).appendTo(i)}},drag:function(j,h){var i=h.position;if(i.top<0){i.top=0}if(i.left<0){i.left=0}if(g<b+i.left){i.left=g-b}},stop:function(){var k=$(".ui-resizable-innerIframeFix",this);(k.length>0)&&k.remove();if(J.swfFix){var i=$(this).find("object");if(i.length>0){var h=i.parent(),j=h.data("wpswfsize");i.css({"height":(j.height||24)+"px","width":(j.width||82)+"px","visibility":"visible"});h.removeData("wpswfsize");h=j=null}i=null}}}).bind("wpdialogclose",function(i){f={};clearTimeout(H);var h=$(i.target);if(D){h=h.add("#wp-floatpanel_overlay")}if($.isFunction(J.close)){J.close(h[0])}$(document).trigger("click");return h.add("#wp-floatpanel_loading").remove()})}else{f=W;I=W[0]}$.Deferred(function(h){if(d==false){if(J.cache&&A[a]){var l=A[a];h.resolve(l)}else{var j={};if(J.postbody){j={data:J.postbody}}$.ajax($.extend({type:"POST",url:a,beforeSend:function(){},success:function(m){if(m.length>0){if(m=="Session expired"){B.location.href=getSessionExpiredUrl()}h.resolve(m);if(J.cache){A[a]=m}}else{h.reject()}},error:function(o,m,n){wp_alert((n||m)+"("+J.title+").<br/>"+translate("Request failed!"));f.triggerHandler("wpdialogclose");return false}},j))}}else{var k=c-26,i='<div class="wp-iframe_beforloaded"><img src="'+relativeToAbsoluteURL("template/default/images/loading.gif")+'" width="32" height="32" /></div><iframe id="'+X+'_frame" name="'+X+'_frame" allowtransparency="true" frameborder="0" src="'+a+'" scrolling="auto" width="'+k+"\" onload=\"this.height=200;$('.wp-iframe_beforloaded','#"+X+"').remove();initFrame(this,'"+R+"','"+E+"');\"></iframe>";h.resolve(i)}return h.promise()}).done(function(i){$("#wp-floatpanel_loading").remove();var h={};$("."+R,I).html(i);if(V.test(c)){h["width"]=c+"px"}if(V.test(E)){h["height"]=E+"px"}if(e||D){f.show().css(h);H=setTimeout(function(){f.triggerHandler("wpdialogsetpos")},30);$(B).resize(function(){panel_position(f,c,E,D,"wp-floatpanel_overlay")});f.bind("wpdialogsetpos",function(j){panel_position(f,c,E,D,"wp-floatpanel_overlay")})}else{if(V.test(Z)){h["left"]=Z+"px"}if(V.test(Q)){h["top"]=Q+"px"}f.css(h).show()}J.open(I)}).fail(function(){wp_alert(J.title+"(deferred fail).<br/>"+translate("Request failed!"));f.triggerHandler("wpdialogclose");return false});$(".wp-title a.close",I).bind("click",function(h){f.triggerHandler("wpdialogclose");h.preventDefault()});return null}B.wp_floatpanel=C})(window);function panel_position(M,B,H,D,N){if(M instanceof jQuery==false){return}var I=M,L=I.outerWidth(true),J=I.outerHeight(true),F=Math.floor,G=/^\d+$/i,K={};var A=$(document).scrollTop();if(G.test(H)){J=H}L=Math.max(L,B);var C=window.innerWidth||self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,E=window.innerHeight||self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;pltp=F((E-J)/2);pllt=F((C-L)/2);if(D){$("#"+N).width(C).height(E)}K["left"]=pllt+"px";K["top"]=((pltp>0?pltp:0)+A)+"px";I.css(K)}$._parseFloat=function(A){var B=parseFloat(A);if(isNaN(B)){return 0}return B};function fix_img_url_path(A){var G=/\/([^\/]+)$/;var D=A.match(G);var B="";if(D){var E=D[1];var F=encodeURIComponent(E);var C=new RegExp(E+"$");B=A.replace(C,F)}else{B=encodeURIComponent(A)}return B}function set_pic(A){var C=new Image();C.src=$(A).attr("src");var B=C.width;var E=C.height;if(B==0){B=107}if(E==0){E=107}var F=107;var G=107;var D=107;var J=107;var I=0;if(B>E){J=(E*G)/B;I=(F-J)/2;$(A).attr("style","width: "+D+"px;height:"+J+"px;");$(A).parent().css("top",I)}else{D=(B*G)/E;I=(F-D)/2;$(A).attr("style","width: "+D+"px;height:"+J+"px;left:"+I+"px;");$(A).parent().css({"top":0,"left":I})}};