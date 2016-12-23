
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
        index++;//右移时，图片序号加1 
        if (index==size){
           index=0; //到最后一张时，滑动回第一张  
        }
         //判断index 与当前页不符合。这个时候调用小图右移的函数
        if(!(index>=itemsPage*currentPage&&index<=((currentPage+1)*itemsPage-1))){
            currentPage=parseInt(index/itemsPage);
            SmallRightMoveByPage();
          }	   
        $('.big-pic ul').css("left",(-index*imgWidth));//整体左移动index个图片宽度
        $('.pic-list-car li').eq(index).addClass('curr').siblings('li').removeClass('curr');//获取第index个缩略图加curr
  }


    //2、大图左键函数 
    function Toleft(){
       index--;
       if (index<0) {
            index= size+index   //在第一张时，左滑动至第四张    
        }
       if(!(index>=itemsPage*currentPage&&index<=((currentPage+1)*itemsPage-1))){
            currentPage=parseInt(index/itemsPage);
            SmallMoveToLeft();
          }

        $('.big-pic ul').css("left",(-index*imgWidth));
        $('.pic-list-car li').eq(index).addClass('curr').siblings('li').removeClass('curr');
	   }



    //3、小图鼠标经过事件
    $('.pic-list-car li').mouseover(function(){  
        $(this).addClass('curr').siblings('li').removeClass('curr');//当前经过的添加选中状态，其余的移除选中状态
        $('.big-pic ul').css("left",(-($(this).index())*imgWidth));//根据当前元素的位置，变更大图的位置
        index=$(this).index();//更新index的值
    })


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
     function SmallRightMoveByPage(){
      //根据页面去移动小图位置
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

        function SmallMoveToLeft(){
            $('.pic-list-car ul').animate({
            left:-currentPage*(itemsPage*smallWidth+(itemsPage-1)*imgmargin)},500);
      }
        
       		
        


})




