
    var backDiv=null,popDiv = null;
    var Msgbox = {};
    /**
     * 普通提示层
     * var opts = {btn_title:'确定',btn_href:'http://www.baidu.com/',btn_target:'_blank'};
     * msgbox.commonMsg('recard_box',opts);
     */
    // Msgbox.commonMsg = Msgbox.showmsg = function(msg,opts){
    //     Msgbox.exit();
    //     $('#act_msgbox_common').length ? popDiv = $('#act_msgbox_common'):popDiv = createpopDiv();
    //     var btn_title =  (opts && opts.btn_title) || '确定';
    //     var btn_class =  (opts && opts.btn_class) || '';
    //     var btn_href =  (opts && opts.btn_href) || 'javascript:msgExit()';
    //     var btn_target =  (opts && opts.btn_target == 1)? '_blank':'';
    //     if(opts && opts['boxTitle']){
    //         opts['boxTitle'] ? opts['boxTitle'] = opts['boxTitle']: opts['boxTitle']='温馨提示';
    //         popDiv.find('[name=boxTitle]').html(opts['boxTitle']);
    //     } else {
    //         popDiv.find('[name=boxTitle]').html('温馨提示');
    //     }
    //     popDiv.find("[name=msgbox_info]").html(msg);
    //     var btn = popDiv.find('[name=box_btn]');
    //     btn.replaceWith('<a class="act-pop-btn act-pop-btn-hot '+btn_class+'" href="'+btn_href+'" name="box_btn" title="'+btn_title+'" target="'+btn_target+'">'+btn_title+'</a>');;
    //     createBackground(opts);
    //     popDiv.show();
    //     if(backDiv){backDiv.show();}
    //     refreshBind();
    // };
    /**
     * 显示指定id的div
     * 调用方式：showDiv('showdiv',{opacity:0});
     */
    Msgbox.showDiv = Msgbox.show = function(id,opts){
        Msgbox.exit();
        popDiv = $('#'+id);
        popDiv.show();
        popDiv
        createBackground(opts);
        if(backDiv){backDiv.show();}
        refreshBind();
    };

    Msgbox.showErrorMsg = function(MSGID,opts){
        // console.log(active_cfg)
        if(active_cfg && active_cfg['msg']){
            var MSG = active_cfg['msg'][MSGID];
        }
        // var uid = getCookie('userid');
        // if(MSG['btn_class'].indexOf('add_uid') != -1 ){
        //     MSG['btn_link'] = MSG['btn_link'] + "?uid="+uid;
        // }
        var opts = opts;
        if(MSG){
            opts = {btn_title:MSG['btn_text'],btn_href:MSG['btn_link'],btn_target:MSG['btn_action'],boxTitle:MSG['title'],btn_class:MSG['btn_class']};
            Msgbox.commonMsg(MSG['content'],opts);
        } else {
            Msgbox.commonMsg(MSGID,opts);
        }
    }

    Msgbox.exit = function(){
        if(popDiv) popDiv.hide();
        if(backDiv) backDiv.remove();
    };



    /**
     * 创建通用弹出层
     * 默认style为common，这里留一个style的选项方便以后扩展
     */
    function createpopDiv(opts){
        var style = (opts && opts.style) || 'common';

        switch(style){
            case 'common':
                popDiv = $(msgbox_tpl);
                popDiv.appendTo('body');
                break;
            default:
                break;
        }
        return popDiv;
    }

    /**
     * 创建背景层
     * 如果有指定背景层的id则直接显示该层
     */
    function createBackground(opts){
        var opacity = (opts && opts.opacity) == undefined ? 40 : opts.opacity;
        if(opacity > 0){
            backDiv = $('<div></div>');
            backDiv.css({backgroundColor:"Black",minWidth:'960px',filter:"alpha(opacity="+opacity+")",opacity:opacity/100,position:'absolute',left:0,top:0,zIndex:100,width:'100%'});
            backDiv.appendTo('body');
        }
    }


    //绑定事件
    function refreshBind(){
        $(window).resize(function(){
            refreshBackground();
            refreshPop();
        });
        refreshBackground();
        refreshPop();
    }


    //使弹出层居中
    function refreshPop(){
        var divHeight = parseInt(popDiv.height());
        var divWidth = parseInt(popDiv.width());
        var divLeft = parseInt((document.documentElement.clientWidth-divWidth)/2);

        var top=0;
        top=document.body.scrollTop||document.documentElement.scrollTop+50;
        var client_top=(document.documentElement.clientHeight-divHeight)/2;
        var divTop = parseInt((top)+((document.documentElement.clientHeight-divHeight)/2));
        if(isIE6()){
            popDiv.css({position:'absolute',top:divTop,left:divLeft,zIndex:1002,marginLeft:0,marginTop:0});
        }else{
            popDiv.css({position:'fixed',top:client_top,left:divLeft,zIndex:1002,marginLeft:0,marginTop:0});
        }
    }

    //刷新背景层的大小
    function refreshBackground(){
        if(backDiv){
            var height = Math.max(document.body.scrollHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight);
            if(isIE6()){
                backDiv.width(document.body.clientWidth);
            }else{
                backDiv.width(Math.min(document.body.scrollWidth, document.documentElement.scrollWidth));
            }
            backDiv.height(height);
        }
    }

    function isIE6(){
        var isIE=!!window.ActiveXObject;
        var isIE6=isIE&&!window.XMLHttpRequest;
        return isIE6;
    }


    //
		function GALLERY(content,nav,time,startIndex,selectClass,callback){
				this.content=content;
				this.nav=nav;
				this.time=time;
				this.index=0;
				this.len=nav.length;
				this.end=false;
				this.inverval='';
				this.startIndex=startIndex;
				this.startFlag=true;
				this.selectClass=selectClass;
				this.callbackAdd=callback;
				this.init();
			}
		GALLERY.prototype={
			constructor:GALLERY,
			init:function(){
				var context=this;
				var con=context.content;
				var nav=context.nav;
				context.lastIndex = 0;
				if(con.length<=1) return;
				for(var i=0,len=con.length;i<len;i++){
					$(con[i]).attr('index',i).hover(function(){
						//console.log('stop')
						context.stop();
					},function(){
						//console.log('start')
						context.start();
					});
					$(nav[i]).attr('index',i);
				}
				context.invoke(context.startIndex,1);
				context.start();
				context.navHover();
				//context.navClick();
			},
			prev:function(){
				var index=this.index;
				var context=this;
				var len=this.len;
				index<0?index=len-2:index--;
				context.invoke(index);
				context.stop();
				context.start();
			},
			invoke:function(index,flag){
				// alert('in')
				var context=this;
				context.callback.call(null,context,index,flag);
			},
			next:function(context){
				var context=this;
			    var index=context.index;
				var len=context.len;
				index>(len-2)?index=0:index++;
				context.invoke(index);
				context.stop();
				context.start();
			},
			start:function(){
				var context=this;
				context.inverval=function(){
					context.next();
				}
				if(context.startFlag){
					context.stop();
					context.myinterval=setInterval(context.inverval,context.time);
				}else{
					if(context.myinterval){
						context.stop();
					}
				}
			},
			stop:function(){
				var context=this;
				clearInterval(context.myinterval);
			},
			reset:function(){
				var context=this;
				context.stop();
				context.invoke(0);
			},
			confirmEnd:function(index){
				var context=this;
				if(index==context.len-1){
					context.end=true;
				}else{
					context.end=false;
				}
			},
			navHover:function(){
				var context=this;
				context.nav.hover(function(){
					context.stop();
					var index=$(this).attr('index');
					context.invoke(index);

				},function(){
					context.start();
				})
			},
			navClick:function(){
				var context=this;
				context.nav.click(function(){
					context.stop();
					var index=$(this).attr('index');
					context.invoke(index);
					//context.start();
				})
			},
			callback:function(context,index,flag){
                    var con=context.content;
                    con.stop(true,true).eq(context.lastIndex).fadeOut(200).end().eq(index).fadeIn(400);
                    var nav=context.nav;
                    var $cla=context.selectClass;
                    nav.removeClass($cla).eq(index).addClass($cla);
                    context.lastIndex = index;
                    context.index=index;
                    // console.log(context.callbackAdd)
                    context.callbackAdd && context.callbackAdd(context,index,flag);
       			}
			};
(function(){

    var ajax = function (url,callback,error){
    var deffered = $.ajax({
                url : url,
                dataType : 'jsonp',
                type : 'GET'
              ,statusCode: {
            404: function() {
              error();
            }
        }
      }).done(function(data){
                    callback && callback(data);
                }).fail(function(err){
                    error && error(err);
                });
             return deffered;
  };
   $(document).on('click', 'a.resource,a.source', function(){
            var re_type = $(this).attr('re_type');
           // console.log('in')
            post_data(re_type)
        });
   function getCookie(name){
        var val = getRealCookie(name);
        if($.trim(val) == ''){
            var vipcookie = getRealCookie('vipcookie');
            if($.trim(vipcookie)==''){
                return '';
            }
            var cookies = vipcookie.split('&');
            for(var i=0;i<cookies.length;i++){
                ary = cookies[i].split('=');
                if(ary.length>1 && ary[0] == name){
                    return decodeURIComponent(ary[1]);
                }
            }
            return undefined;
        }else{
            return $.trim(val);//如果cookie中有该值，优先使用该值
        }
    }
       function setCookie(name,value,hours,isBaseDomain){
        // console.log(value)
        value = value + '';
        if(isBaseDomain != undefined && isBaseDomain == 1){
            setRealCookie(name,value,hours,1);
        }else{
            var vipcookie = getRealCookie('vipcookie');
            if($.trim(value)==''){//删除cookie
                if(vipcookie!=''){
                    var check = getCookie(name);
                    if(check!=''){
                        var cookies = vipcookie.split('&');
                        var newcookie = new Array;
                        for(var i=0;i<cookies.length;i++){
                            ary = cookies[i].split('=');
                            if(ary.length>1 && ary[0] != name){
                                newcookie.push(cookies[i]);
                            }
                        }
                        vipcookie = newcookie.join('&');
                    }
                }
            }else{//添加cookie
                //删除原生cookie中的此值
                setRealCookie(name,'',0);
                if(vipcookie==''){
                    vipcookie = $.trim(name)+'='+encodeURIComponent(value);
                }else{
                    //check if has the same item , if so , replace it , otherwise add it.
                    var check = getCookie(name);
                    if(check!=''){
                        var cookies = vipcookie.split('&');
                        for(var i=0;i<cookies.length;i++){
                            ary = cookies[i].split('=');
                            if(ary.length>1 && ary[0] == name){
                                cookies[i] = name+'='+encodeURIComponent(value);
                                break;
                            }
                        }
                        vipcookie = cookies.join('&');
                    }else{
                        vipcookie = vipcookie+'&'+$.trim(name)+'='+encodeURIComponent(value);
                    }
                }
            }
            if(hours != undefined){
                setRealCookie('vipcookie',vipcookie,hours);
            }else{
                setRealCookie('vipcookie',vipcookie);
            }
        }
    }


    function setRealCookie(name,value,hours,isBaseDomain){
        //console.log(config['domain'])
        if(window.location.href.indexOf('jsq.xunlei.com')!=-1){
            domain = "xunlei.com";
        } else {
            domain = "xunlei.com";
        }
        if(arguments.length>2){
            var expireDate=new Date(new Date().getTime()+hours*3600000);
            if(isBaseDomain != undefined && isBaseDomain == 1){
                document.cookie = name + "=" + encodeURIComponent(value) + "; path=/; domain=xunlei.com; expires=" + expireDate.toGMTString() ;
            }else{
                document.cookie = name + "=" + encodeURIComponent(value) + "; path=/; domain=xunlei.com; expires=" + expireDate.toGMTString() ;
            }
        }else{
             document.cookie = name + "=" + encodeURIComponent(value) + "; path=/; domain="+domain;
        }

    }
  function S4()
    {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    function NewGuid()
    {
       return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }




  function getRealCookie(name){
        return (document.cookie.match(new RegExp("(^"+name+"| "+name+")=([^;]*)"))==null)?undefined:decodeURIComponent(RegExp.$2);
    }
  function post_data(type){
         var userid = getCookie('userid');
         if(!userid){
           var userid = getCookie('ssid');
           if(!userid){
              var random = NewGuid();
              setCookie('ssid',random);
              userid = random;
           }
         }
         ajax('http://dypay.vip.xunlei.com/user/vipstat/?source='+type+'&ext='+userid+'&ext2=',function(){

         })
      }
   }
)()
