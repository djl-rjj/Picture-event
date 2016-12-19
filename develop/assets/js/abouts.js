$(function(){//html加载结束后执行js
$(".position .choice").click(function(a){
        a && a.preventDefault(); //查找元素标签a并且阻止a的默认事件。避免出现提示undefind
        var b = $(this),//定义b为当前点击的a标签
            c = $(".position .choice"),//定义C为position的子类choice
            d = b.index(),//定义d当前点击a标签的位置,从0计算
            e = $(".posbox-container");//定义e为posbox-container类
        if (b.is(".curr")) {//判断当前点击元素中是否有.curr,即是否被选中
            //选中不执行，为空
        }
        else//没有选中的话执行以下语句
        {c.removeClass("curr"), b.addClass("curr"), 
        //移除.position .choice所有的.curr后再给当前选中的标签a增加curr
        e.addClass("ks-hide").filter("[data-id=" + d + "]").removeClass("ks-hide")};
        //增加posbox-container所有的.ks-hide 后再给当前选中的标签a移除.ks-hide。
    }),
$(".postit").click( function() {//找到postit类 ，点击时执行以下函数
        var a = $(this),//定义a就是当前被点击的元素
            b = a.find(".job-name"),//b是在当前被点击元素下找到job-name类
            c = a.parent(),//c是当前被点击元素的父类即 posbox类
            d = c.find(".job-intro"), //在当前点击的父类posbox下找到job-intro
            e = $(".posbox"),//找到所有posbox类
            f = e.find(".job-name"),//找到所有posbox类下的job-name
            g = e.find(".job-intro");//找到所有posbox类下的job-intro
// debugger;
            console.log(a, b, c);
        if (d.is(".curr"))//判断当前点击元素中是否有.curr
            {//存在的话执行以下操作
            g.removeClass("curr"), f.removeClass("redcurr"),// 移除所有posbox类下的job-intro的curr，移除所有posbox类下的job-name的redcurr，
            g.slideUp() //将所有posbox类下的job-intro滑动隐藏
            }
        else{
            (g.slideUp(), void d.slideDown(function() //先滑动隐藏所有的job-intro，展示时执行以下函数
            {
            f.removeClass("redcurr"), b.addClass("redcurr"), g.removeClass("curr"),
         d.addClass("curr")       }))//移除所有的job-namer的edcurr类。单独增加当前选中的元素下的job-namer
        }
          
        })

$(".job-intro .apply-pos") .click(function() {//点击立即申请时弹窗
    alert ("TEL：0571-86703134、86705155、86705780<br>E-mail：hr@btjf.com")    })


})