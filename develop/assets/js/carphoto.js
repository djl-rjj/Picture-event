/*
 1、大图的右箭头：图片序号增加。逐一减少left的值。
    根据具体的分页和图片数量，在整数倍，或者最后一张。调用缩略图的右键函数
 2、大图的左箭头：图片序号减少。注意从第一张到最后一张的变化，其余的逐一增加left的值。
    根据具体的分页和图片数量，在整数倍，或者第一张。调用缩略图的左键函数
 3、经过缩略图的时候，根据当前元素的位置，变更大图的位置，并增加curr类
 4、缩略图右键头：判断 总共的个数是否 > 单页的个数*几个页.如果小于，left 变为0
 5、缩略图左键头：判断总的个数是否大于单页的个数。如果不是，left 变为0
  关于4和5有两断注释的代码是初始版本，因为缩略图的个数被写死，于是重新写了新的。
  */


$(function(){
	   var index=0;//设当前图片序号为0
	   var imgWidth=$('.big-pic ul li').width(); //定义li的宽度
       var smallWidth=$('.pic-list-car ul li').outerWidth();//定义缩略小图的宽度
       var size = $('.big-pic ul li').size();//定义.big-pic ul下li的个数
       var imgmargin =(parseInt($('.pic-list-car li').css('marginRight')))//定义缩略图的margin值
       var itemsPage=5//每页展示5个图片
       var currentPage=0;//当前选中的页面,从0开始



  
   //点击大图左按钮调用函数
     $('.pic-box .left').click(function(){
        Toleft();
      })

   //点击大图右按钮调用函数
     $('.pic-box .right').click(function(){
        Toright();
      })
  

      //点击小图左按钮调用函数
     $('.pic-list .left').click(function(){
        SmallToleft();
      })

    //点击小图右按钮调用函数
     $('.pic-list .right').click(function(){
        SmallToright();
      })




    //1 、大图右键函数
    function Toright(){
    	//（当前图片的序号+1）为 每页数量 的整数倍时，调用函数，加一个(index+1)!=size为了防止总共张数为 每页数量 的倍数，会调用两次
        if ((index+1)%itemsPage ==0&&(index+1)!=size){
           SmallToright()
        }
  	    index++;//右移时，图片序号加1 
  	   if (index==size){
          SmallToright();
          index=0; //到最后一张时，滑动回第一张  
  	    }
        $('.big-pic ul').css("left",(-index*imgWidth));//整体左移动index个图片宽度
        $('.pic-list-car li').eq(index).addClass('curr').siblings('li').removeClass('curr');//获取第index个缩略图加curr
  }


    //2、大图左键函数
    function Toleft(){
    	//第一张图，或者当前的图片是 每页数量 的倍数。这里的index不减1.因为第六张左滑动，此时index为5.
        if (index==0||index%itemsPage==0) {
         	SmallToleft();
        }  
        index--;
        if (index<0) {
            index= size+index   //在第一张时，左滑动至第四张    
        }
        $('.big-pic ul').css("left",(-index*imgWidth));
        $('.pic-list-car li').eq(index).addClass('curr').siblings('li').removeClass('curr');
	   }




    //3、小图鼠标经过事件
    $('.pic-list-car li').mouseover(function(){  
        $(this).addClass('curr').siblings('li').removeClass('curr');//当前经过的添加选中状态，其余的移除选中状态
        $('.big-pic ul').css("left",(-($(this).index())*imgWidth));//根据当前元素的位置，变更大图的位置
    })


    //小图右键函数
    /*function SmallToright(){
        var currentLeft =$('.pic-list-car ul').position().left;//定位当前左移动的值
        //当前左滑动的值+需要移动的值<小图片总共的宽度.这里加了li的margin值。小于的话继续左移，否则left变成0
        if ((Math.abs(currentLeft)+5*smallWidth+4*imgmargin)<(size*smallWidth+(size-1)*imgmargin)){
            $('.pic-list-car ul').animate({left:(currentLeft-(5*smallWidth+4*imgmargin))},500)
         }
        else{
            $('.pic-list-car ul').animate({left:0},500)
        } 
     }*/


     //小图右键函数   
     // 4、判断 总共的个数是否 > 单页的个数*几个页.如果小于，left 变为0
     function SmallToright(){
            currentPage ++;//当前为0 ，每次点击加1
            if (currentPage*itemsPage<size) {
                  $('.pic-list-car ul').animate({
                  	left:-(currentPage*(itemsPage*smallWidth+(itemsPage-1)*imgmargin))},500); //当前页数*每页宽度        
            }
            	else{
                 	$('.pic-list-car ul').animate({left:0},500)          
            			currentPage=0;
           		}
     }



   //小图左键函数
  /* function SmallToleft(){
          var currentLeft =$('.pic-list-car ul').position().left;
          var number=parseInt(size/5)
          if (5<size){
              if (currentLeft==0){
                $('.pic-list-car ul').animate({left:-number*(5*smallWidth+4*imgmargin)},500)
              }
                  else {
                  $('.pic-list-car ul').animate({left:(currentLeft+5*smallWidth+4*imgmargin)},500)
                  }
          }
            else{
                $('.pic-list-car ul').animate({left:0},500);}

            }*/


     //小图左键函数
     //5、判断总的个数是否大于单页的个数。如果不是，left 变为0
       function SmallToleft(){
       		currentPage --;//当前为0 ，每次点击减1
       		var number= Math.ceil(size/itemsPage); //当前分页的总数
       		if (itemsPage<size) {
					if (currentPage<0) {         
           				currentPage=number+currentPage; //小于0即是第一张跳到最后一张。currentPage值变化
       					$('.pic-list-car ul').animate({
                  			left:-currentPage*(itemsPage*smallWidth+(itemsPage-1)*imgmargin)},500);
          			}
          				else if (currentPage=0){//到第一张时候，left为0.
 							$('.pic-list-car ul').animate({left:0},500);
            					currentPage =0;        				
          				}
            				else{//其余情况，当前页数*每页宽度 
  								$('.pic-list-car ul').animate({
                					left:-currentPage*(itemsPage*smallWidth+(itemsPage-1)*imgmargin)},500);
            				}
            }           		
            else{
            	$('.pic-list-car ul').animate({left:0},500);
            		currentPage =0;
            }
        }
       		
        


})
