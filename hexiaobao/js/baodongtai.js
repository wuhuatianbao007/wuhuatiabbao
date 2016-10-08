/**
 * Created by Administrator on 2016/5/15.
 */
$(window).load(function(){
   $(".trends-ul li").mouseenter(function(){
       $(this).find(".dhTop").stop().animate({"top":"0px"},400);
       $(this).find(".dhBot").stop().animate({"height":"130px"},400);
   });
    $(".trends-ul li").mouseleave(function(){
        $(this).find(".dhTop").stop().animate({"top":"-191px"},400);
        $(this).find(".dhBot").stop().animate({"height":"0px"},400);
    });
    $(".demo-2").click(function(){
        $.gDialog.prompt("baosucai", "sc.chinaz.com", {
            title: "Prompt Dialog Box",
            required: true,
            animateIn : "rollIn",
            animateOut: "rollOut"
        });
    });

});