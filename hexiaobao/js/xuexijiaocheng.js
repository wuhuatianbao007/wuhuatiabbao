/**
 * Created by A on 2016/5/16.
 */
$(function () {
    $("#bang").mouseenter(function () {
        step1=3;
        step2=-3;
    });
    $("#bang").mouseleave(function () {
        step1=10;
        step2=-15
    });
    var step1=10;
    var step2=-15;
    //ball是内层球的集合，其中position和innerText没用到
    var ball=[
        {
            "backgroundColor":"#cb76f0",
            "r":80,
            "position":[180,75],
            "innerText":"QC",
            "borderColor":"#EFE4FA"
        },
        {
            "backgroundColor":"#FB828B",
            "r":80,
            "position":[-30,75],
            "innerText":"光圈叶",
            "borderColor":"#FDEBEC"
        },
        {
            "backgroundColor":"#97CDEB",
            "r":80,
            "position":[75,180],
            "innerText":"科幻风",
            "borderColor":"#E8F1F8"
        },
        {
            "backgroundColor":"#B7E7C0",
            "r":80,
            "position":[75,-30],
            "innerText":"Tracking",
            "borderColor":"#E8F2F0"
        }
    ];
    //ball2是外层球的集合，其中position和innerText没用到
    var ball2=[
        {
            "backgroundColor":"#68a9fb",
            "r":100,
            "position":[180,75],
            "innerText":"弥撒影",
            "borderColor":"#D5E3F2"
        },
        {
            "backgroundColor":"#7CB9CD",
            "r":100,
            "position":[-30,75],
            "innerText":"Sketch",
            "borderColor":"#DDEAF9"
        },
        {
            "backgroundColor":"#CF2782",
            "r":100,
            "position":[75,180],
            "innerText":"雪糕画",
            "borderColor":"#EDE0EC"
        },
        {
            "backgroundColor":"#EA6E95",
            "r":100,
            "position":[75,-30],
            "innerText":"muse",
            "borderColor":"#F8E6ED"
        }
    ];
    //调用创建球函数--------提高：动态创建
    createBall(ball,$("#circle1"),true);
    createBall(ball2,$("#circle3"),false);
    createBall(ball2,$("#circle4"),true);
    //创建球函数----参数：球集合，圆圈（用到半径），步子
    function createBall(ball,circle,flag) {
//                var a=document.createElement("div")
        var balls=circle.children();
        console.log(balls);
        for(var i=0;i<ball.length;i++){
            $(balls[i]).css("backgroundColor",ball[i]["backgroundColor"]);
            balls[i].innerText=ball[i]["innerText"];
            balls[i].style.width=ball[i]["r"]+"px";
            balls[i].style.height=ball[i]["r"]+"px";
            balls[i].style.border=10+"px";
            balls[i].style.fontSize=18+"px";
            balls[i].style.fontWeight="bold";
            balls[i].style.borderStyle="solid";
            balls[i].style.cursor="pointer";
            balls[i].style.borderColor=ball[i]["borderColor"];
            balls[i].style.borderRadius=ball[i]["r"]+"px";
            balls[i].style.position="absolute";
            balls[i].style.lineHeight=ball[i]["r"] +"px";
            balls[i].style.textAlign="center";
            balls[i].style.opacity="0.8";
            var r=circle.width()/2;
            var v=i*570;
            var flag=flag;
//                    让球动起来
            moveBall(balls[i],r,flag,v,ball[i]);
        }
    }
//            移动球
    function moveBall(balls,r,flag,v,ball) {
        var v=v;
        balls.timeId= setInterval(function () {
            if(flag){
                var step=step1
            }else{
                var step=step2
            }
            v+=step;
//                    x等于x轴，left值
//                    y等于Y轴，top值
            var x=r-10-ball["r"]/2-Math.cos(v/360)*r;
            var y=r-10-ball["r"]/2-Math.sin(v/360)*r;
            balls.style.top=y+"px";
            balls.style.left=x+"px";
        },20);
    }
});