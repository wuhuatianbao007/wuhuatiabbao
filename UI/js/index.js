$(document).ready(function(){
  $('.float-menu dt').click(function(){
    $(this).addClass('float-dt').removeClass('dian').siblings().removeClass('float-dt')
	$(this).parent().addClass('w300')
	var a = $(this).index()
	if($('.float-info').eq(a).find('.float-line').length >= 4){
	  $('.float-info').eq(a).find('.float-move').css('display','block')
	}else if($('.float-info').eq(a).find('.float-line').length == 0){
	  $('.float-info').eq(a).find('.float-no').css('display','block')
	}
	$('.float-info').eq(a).addClass('h-auto').siblings('.float-info').removeClass('h-auto')
	$('.float-text').removeClass('float-text-b')
	if($('.dian').length == 0){
	  $('.float-a').removeClass('t-d')
	}
  })
  $("html").bind("click",function(evt){ 
    if($(evt.target).parents(".float-menu li").length==0){ 
      $('.float-menu dl').removeClass('w300')
	  $('.float-info').removeClass('h-auto')
	  $('.float-menu dt').removeClass('float-dt')
	  $('.float-text').removeClass('float-text-b')
    }
  })
  $('.float-hf').click(function(){
    $('.float-text').addClass('float-text-b')
	var a = $(this).parent().find('a').eq(0).html()
	$('.float-text input').attr('placeholder','@'+a)
  })
  $('.top-search-left li').click(function(){
    $('.top-search-left span').html($(this).html())
	$('.top-search-right input').attr('placeholder','请输入想要搜索的'+$('.top-search-left span').html())
  })
  $(".go-top").click(function(){
    $("html, body").animate({scrollTop:0},"show");
  });
  $('.design-bt i').click(function(){
    $(this).addClass('design-bt-i').siblings().removeClass('design-bt-i')
	if($('.design-bt i').eq(1).is('.design-bt-i')){
	  $('.design-box ul').eq(0).addClass('design-box-top')
	}else if($(this).eq(0).is('.design-bt-i')){
	  $('.design-box ul').eq(0).removeClass('design-box-top')
	}
  })
});
$(function(){
  var a = $('.main-gg span').length
  setInterval(function(){
    var b = $('.o1').index()+1
	if(a == b){
	  $('.o1').addClass('o0').removeClass('o1')
	  $('.main-gg span').eq(0).addClass('o1').removeClass('o0')
	}
	$('.main-gg span').eq(b).addClass('o1').removeClass('o0').prev().addClass('o0').removeClass('o1')
  },6000)
})