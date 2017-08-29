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

};