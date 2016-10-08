$(function () {
    //手风琴特效开始

    $("#sm>li").mouseenter(function () {
        $(this).stop(true, false).animate({"width": "398px"}, 200).siblings().stop(true, false).animate({"width": "132px"}, 200);
        $(this).children().children(".mask_b").css("display", "none");
    });
    $("#sm>li").mouseleave(function () {
        $("#sm>li").stop(true, false).animate({"width": "170px"}, 200)
        $(this).children().children(".mask_b").css("display", "block");
    });
    //手风琴特效结束
});