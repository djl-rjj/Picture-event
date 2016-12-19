$(function(){
    var a=$(".detail-body .header"); 
        b=a.offset().top; //.header到顶部的距离
        c=a.height();//   .header的高度     
        $(window).scroll(function (){//对窗口监听滚动事件
            d=$(this).scrollTop()//当前点击内容距离顶部的距离
        //设置固定在顶部
        if ( d>=b+c ) {//判断当前点击的距离是否大于 .header到顶部的距离加上.header的高度 
            a.addClass("fixed") .find(".car-apply").removeClass("ks-hide")
        }
        else{
            a.removeClass("fixed").find(".car-apply").addClass("ks-hide")
        }
        //设置选中当前的样式
        //判断当前滚动的距离是否大于配置亮点距离顶部的距离，大于则将配置亮点设为选中当前状态，并将其他同胞的移除当前选中样式
        if ( d > $(".car-plan-bd").offset().top - c) {
            $(".car-plan-btn").addClass("curr").siblings().removeClass("curr");
        }
        //判断当前滚动的距离是否大于车辆描述距离顶部的距离，大于则将配置亮点设为选中当前状态，并将其他同胞的移除当前选中样式
        if ( d > $(".car-picture-bd").offset().top - c) {
            $(".car-picture-btn").addClass("curr").siblings().removeClass("curr");
        }
        //3、判断当前滚动的距离是否大于配置参数距离顶部的距离，大于则将配置亮点设为选中当前状态，并将其他同胞的移除当前选中样式
        if (d > $(".car-configure-bd").offset().top - c) {
            $(".car-configure-btn").addClass("curr").siblings().removeClass("curr");
        }

})
})