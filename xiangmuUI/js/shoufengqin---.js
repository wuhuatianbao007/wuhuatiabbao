/**
 * Created by Administrator on 2016/8/8 0008.
 */
$(function () {
    $("#uuu>li").mouseover(function () {
        $(this).stop().animate({"width":"460px"},200).siblings().stop().animate({"width":"120px"},200);
        //$(this).children().children(".acc-title").css("display","none");
    });
    $("#uuu>li").mouseout(function(){
        $("#uuu>li").stop().animate({"width":"170px"},200);
        //$(this).children().children(".acc-title").css("display","block");
    });
});