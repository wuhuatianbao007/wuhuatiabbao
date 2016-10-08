/**
 * Created by Administrator on 2016/8/8 0008.
 */
$(function () {

    //导航栏
    $(window).scroll(function () {
        var scrollTop=$(document).scrollTop();
        var toph=$(".top").height();
        if(scrollTop>=toph){
            //设置
            $(".top").css({"opacity":"0.5"});
        }else{
            //如果距离顶端的高度小于了top层的高度应该还原
            $(".top").css({"opacity":"1"});
        }
        //让应用nav类样式的层 position=fixed top=0
    });
});
