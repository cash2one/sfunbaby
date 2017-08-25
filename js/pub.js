/**
 * Created by GIISO on 2017/8/25.
 */


window.onload=function(){
    //处理公共头部动画效果
    var scrollTop=$(document).scrollTop();
    if(scrollTop>=50){
        $(".header").find('.bottom').addClass('fix');
    }else {
        $(".header").find('.bottom').removeClass('fix');
    }
    $(window).on('scroll',function(){
        var scrollTop=$(document).scrollTop();
        if(scrollTop>=50){
            $(".header").find('.bottom').addClass('fix');
        }else {
            $(".header").find('.bottom').removeClass('fix');
        }
    });

    //轮播图代码
    function bannerChange(speed){
        var bannerObj=$("#banner");
        var pics=bannerObj.find(".pic");
        var m=0;

        var content='';
        for(var i=0;i<pics.length;i++){
            content+="<li></li>";
        }
        bannerObj.find(".bar").html(content).css({'width':22*pics.length+2+'px',"margin-left":-(22*pics.length+2)/2});
        var bars=bannerObj.find(".bar li");
        bars.eq(0).addClass('active');

        function picChange(){
            bars.removeClass('active').eq(m).addClass('active');
            pics.fadeOut().eq(m).fadeIn();
        }
        //点击圆点切换Banner
        bars.on('click',function(){
            m=$(this).index();
            picChange();
        });

        //点击左右切换按钮
        bannerObj.find(".left-btn").on("click",function(){
            m--;
            if(m<0){
                m=pics.length-1;
            }
            picChange();
        });
        bannerObj.find(".right-btn").on("click",function(){
            m++;
            if(m>=pics.length){
                m=0;
            }
            picChange();
        });

        //自动轮播
        var timer;
        function timeChange(){
            clearInterval(timer);
            timer=setInterval(function(){
                m++;
                if(m>=pics.length){
                    m=0;
                }
                picChange();
            },speed);
        }
        timeChange();
        bannerObj.on("mouseover",function(){
            clearInterval(timer);
        });
        bannerObj.on("mouseout",function(){
            timeChange();
        })
    }
    bannerChange(3000);


};