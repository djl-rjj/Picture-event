$(function(){
	   var index=0;//设当前图片序号为0
	     var imgWidth=$('.big-pic ul li').width(); //定义li的宽度
       var smallWidth=$('.pic-list-car ul li').width();//定义缩略小图的宽度
       var size = $('.big-pic ul li').size();//定义.big-pic ul下li的个数
       var left =$('.pic-list-car ul').css('left');

  
   //点击大图左按钮调用函数
     $('.pic-box .left').click(function(){
        Toleft();
      })

   //点击大图右按钮调用函数
     $('.pic-box .right').click(function(){
        Toright();
      })
  
     $('.pic-list .pic-list-btn').click(function(){
        Tobotton();
      })





    //右键函数
    function Toright(){
  	    index++;//右移时，图片序号加1
  	if (index==size) {
        index=0; //到最后一张时，滑动回第一张

  	}
  	 //$('.big-pic ul').animate({left:-index*imgWidth},1000);为了和原型一致，去了动画效果。
        $('.big-pic ul').css("left",(-index*imgWidth));//整体左移动index个图片宽度
        $('.pic-list-car li').eq(index).addClass('curr').siblings('li').removeClass('curr');//获取第index个缩略图加curr
  }


    //左键函数
    function Toleft(){
        index--;
        if (index<0) {
            index= size+index   //在第一张时，左滑动至第四张    
        }
     //$('.big-pic ul').animate({left:-index*imgWidth},1000);
        $('.big-pic ul').css("left",(-index*imgWidth));

        $('.pic-list-car li').eq(index).addClass('curr').siblings('li').removeClass('curr');  			
	   }


   $('.pic-list-car li').mouseover(function(){  //缩略图鼠标经过事件
      $(this).addClass('curr').siblings('li').removeClass('curr');//当前经过的添加选中状态，其余的移除选中状态
      $('.big-pic ul').css("left",(-($(this).index())*imgWidth));//根据当前元素的位置，变更大图的位置
   })

   
   function Tobotton(){
    if (left+smallWidth*5>=size*smallWidth) {
      $('.pic-list-car ul').css('left',(-5*smallWidth));
    }
    else{
    $('.pic-list-car ul').css({'left':0});    
    }
   }


})
