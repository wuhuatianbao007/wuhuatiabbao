    /**
     * Created by Administrator on 2016/8/6.
     */
    $(function () {
        //ռλ������Ч��
        //��ȡ��Ļȥ���������ĸ߶�
        //var screenH = window.screen.availHeight;
        //console.log(screenH);
        //��bgBOx�ĸ߶ȸ�ֵ
     /*   $('.bgBox').css({'height':screenH});*/
        //ͨ��������bgBox�ĸ߶Ƚ�Ϊ0
        $('.bgBox').animate({'height':'0'},2000);


        ////��Ƶ�ʵ��
        //var $lis = $('.top-nav-m>ul>li');
        //var lefDis = 0;
        //$lis.each(function (i,value) {
        //    //�������
        //    $(this).mouseenter(function () {
        //        $('.cloud').animate({'left':i*80 + 'px'},1).css({'box-shadow':'10px 10px 10px #ccc'});
        //        $(this).children('a').css({'color':'#459bdc'});
        //    }).mouseleave(function () {   //����뿪
        //        $('.cloud').animate({'left':lefDis+'px'},10);
        //        $(this).children('a').css({'color':'#333'});
        //    }).click(function () { //�����
        //        lefDis = i*80;
        //    })
        //});
    })
    $(function () {
        ////����������
        //$('.mo1').mouseenter(function () {
        //    $('.s-u1').stop().slideDown(300);
        //}).mouseleave(function () {
        //    $('.s-u1').stop().slideUp(600);
        //});
        //$('.slider-ul>li').mouseenter(function () {
        //    $(this).children('i').stop().animate({'left':'0px'},50);
        //}).mouseleave(function () {
        //    $(this).children('i').stop().animate({'left':'-80px'},100);
        //})
        $('.mo2').mouseenter(function () {
            $('.s-u2').stop().slideDown(300);
        }).mouseleave(function () {
            $('.s-u2').stop().slideUp(600);
        });
        $('.mo3').mouseenter(function () {
            $('.s-u3').stop().slideDown(300);
        }).mouseleave(function () {
            $('.s-u3').stop().slideUp(600);
        });
        $('.top-nav-login').mouseenter(function () {
           $('.top-nav-login>ul').stop().show(500);
        }).mouseleave(function () {
           $('.top-nav-login>ul').stop().hide(500);
        })
        //���ö��������򲿷�
        $('.top-nav-search-left>span').mouseenter(function () {
            $('.top-nav-search-left>ul').stop().animate({'height':'240'},100).css({'border-bottom':'1px solid #ccc'});
        });
        $('.top-nav-search-left').mouseleave(function () {
            $('.top-nav-search-left>ul').stop().animate({'height':'0'},100).css({'border-bottom':''})
        })


    });

    $(function () {

        //���ݲ��ֶ�̬��ʾÿһ����Ϣ
        var spLength = $('.main-gg>span').length;
        var index = 0;
        setInterval(function () {
            index ++;
            if(index == spLength-1){
                index =0;
            }
            $('.main-gg>span').eq(index).addClass('sh').siblings('span').removeClass('sh');
        },3000);

      $('.main-middle-box').mouseenter(function () {
          $(this).find('.main-text').stop().animate({'top':'0'},50);
      }).mouseleave(function () {
          $('.main-text').stop().animate({'top':'-231'},50);
      })
    });

