/**
 * Created by Administrator on 2016/8/8 0008.
 */
$(function () {

    //������
    $(window).scroll(function () {
        var scrollTop=$(document).scrollTop();
        var toph=$(".top").height();
        if(scrollTop>=toph){
            //����
            $(".top").css({"opacity":"0.5"});
        }else{
            //������붥�˵ĸ߶�С����top��ĸ߶�Ӧ�û�ԭ
            $(".top").css({"opacity":"1"});
        }
        //��Ӧ��nav����ʽ�Ĳ� position=fixed top=0
    });
});
