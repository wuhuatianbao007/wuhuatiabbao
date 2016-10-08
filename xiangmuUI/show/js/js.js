
; (function ($) {
	$.extend({
		beginmove:function(sp,njieduan){
		//获取对象
		var nli=$(".wrapul li");
		var ospeed=document.getElementById("shudukuai");//移动模块
		var npowidth=$(".shudu").width()-$("#shudukuai").width();
		var ntxtval=$(".txt");//获取第几页的数字
		var osure=$(".sure");//确定按钮
		var obg1=$(".bg1");//开始键
		var obg0=$(".bg0");//向左键
		var obg2=$(".bg2");//向右键
		var obg7=$(".bg7");//重来
		var oyema=$(".yema");//第几页
		var speedtxt=$(".shudupx");
		//定义对象
		var nliwidth=nli.width();//li的宽度
		var nulwidth=nli.length*nliwidth;//ul的宽度
		var ndivwrap=$(".wrap").width();
		var speed=sp,speeda=sp;//速度
		var bbg1=false,bbg0=true,bbg2=true;//判断是否是运动状态
		var nulleft=nli.parent("ul").position().left;
		var timer;//时间
		var nwidth=-nulleft+(ndivwrap-nliwidth);//宽度
		nli.parent("ul").css("width",nulwidth);


		timeset();
		speedbool(1);
		obg1.click(function(){
			if(bbg1){//点击开始 
				bbg1=false;
				obg1.addClass("bg3");
				timeset();
			}else{//暂停
				obg1.removeClass("bg3");
				bbg1=true;
				clearInterval(timer);
			}
		})

		obg0.click(function(){//向左滚
			if(bbg0){
				speed=-speeda;
				timeset();
				obg0.addClass("bg4");
				obg1.addClass("bg3");
				obg2.removeClass("bg6");
				bbg0=false;
				bbg1=false;
				bbg2=true;

				speedbool($(ospeed).position().left);
			}
		})

		obg2.click(function(){//向右滚
			if(bbg2){
				speed=speeda;
				timeset();
				obg1.addClass("bg3");
				obg0.removeClass("bg4");
				obg2.addClass("bg6");
				bbg0=true;
				bbg1=false;
				bbg2=false;

				speedbool($(ospeed).position().left);
			}
		})

		obg7.click(function(){//从来
			nulleft=0;
			speed=speeda;
			obg0.removeClass("bg4");
			obg1.addClass("bg3");
			obg2.addClass("bg6");
			timeset();
			bbg1=false;
			bbg0=true;
			speedbool($(ospeed).position().left);
		})

		function move(){//移动功能
			nulleft +=speed
			if (nulleft>0) {
				nulleft=0;
				obg1.removeClass("bg3");
			};
			if(nulleft<-(nulwidth-ndivwrap)){
				nulleft=-(nulwidth-ndivwrap);
				obg1.removeClass("bg3");
			}
			$(".wrapul").css("left",nulleft);
			var num=parseInt((-nulleft+nwidth)/nliwidth)+1;
			oyema.html(num);
		}

		function timeset(){
			clearInterval(timer);
			timer=setInterval(move,15);
		}

		osure.click(function(){
			if(ntxtval.val()==''||ntxtval.val()==undefined){
				return;
			}
			nulleft=-nliwidth*(ntxtval.val()-1);
			if(ntxtval.val()<=0){
				nulleft=0;
				ntxtval.val()=0;
			}
			if(ntxtval.val()>nli.length){
				nulleft=-(nulwidth-ndivwrap);
				ntxtval.val()=nli.length;
			}
			$(".wrapul").css("left",nulleft);
			oyema.html(ntxtval.val());
			obg1.removeClass("bg3");
			bbg1=true;
			clearInterval(timer);
			ntxtval.val()="";
		});

		var x=0,speedsre;
		ospeed.onmousedown=function (ev){
			var oEvent=ev||event;
			var disX=oEvent.clientX-ospeed.offsetLeft;
			window.onmousemove=function(ev){
				var oEvent=ev || event;
				x=oEvent.clientX-disX;
				if(x<0){
					x=0;
				}
				if(x>npowidth){
					x=npowidth;
				}
				speedbool(x);
				document.title=x;
				$(ospeed).css("left",x);
				speedtxt.css("left",x);
				return false;
			}
			window.onmouseup=function(){
				
				if ($(ospeed).position().left<=24) {
					$(ospeed).animate({"left":"0"},100);
					speedtxt.animate({"left":"0"},100);
				};
				
				if(24<$(ospeed).position().left&&$(ospeed).position().left<=72){
					$(ospeed).animate({"left":"48"},100);
					speedtxt.animate({"left":"48"},100);
				}
				if(72<$(ospeed).position().left&&$(ospeed).position().left<=120){
					$(ospeed).animate({"left":"96"},100);
					speedtxt.animate({"left":"96"},100);
				}
				if(120<$(ospeed).position().left&&$(ospeed).position().left<=168){
					$(ospeed).animate({"left":"144"},100);
					speedtxt.animate({"left":"144"},100);
				}
				if ($(ospeed).position().left>168) {
					$(ospeed).animate({"left":npowidth},100);
					speedtxt.animate({"left":npowidth},100);
				};
				//$(ospeed).animate({"left":npowidth/5*(speedsre-1)},100);
				speedbool($(ospeed).position().left);
				window.onmousemove=null;
				ospeed.onmouseup=null;
			}
			return false;
		}	
		function speedbool(x){
			speedsre=Math.round(x/(npowidth/njieduan));
			speedsre+=1
			if(speed>0){
				speed=speedsre;
			}else{
				speed=-speedsre;
			}
			speedtxt.html(speedsre);
		}
	}
	});
})(jQuery);